const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { onRequest }          = require('firebase-functions/v2/https');
const { logger }             = require('firebase-functions');
const admin                  = require('firebase-admin');
const https                  = require('https');

admin.initializeApp();
const db   = admin.firestore();
const auth = admin.auth();

// ── Firebase Web API Key (from your firebase config) ──
const FIREBASE_API_KEY = 'AIzaSyCFh4Zou7cgrpmOkCeo7Dg75tYd4S0FGq8';

/* ════════════════════════════════════════════════════════
   HELPER — Send password reset email via Firebase REST API
   This is exactly what Firebase Console "Reset password" does
════════════════════════════════════════════════════════ */
function sendFirebasePasswordResetEmail(email) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      requestType: 'PASSWORD_RESET',
      email:       email,
    });

    const options = {
      hostname: 'identitytoolkit.googleapis.com',
      path:     '/v1/accounts:sendOobCode?key=' + FIREBASE_API_KEY,
      method:   'POST',
      headers: {
        'Content-Type':   'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          logger.info('Password reset email sent to:', email);
          resolve();
        } else {
          logger.error('Email API error:', res.statusCode, data);
          reject(new Error('Email API returned ' + res.statusCode + ': ' + data));
        }
      });
    });

    req.on('error', (e) => {
      logger.error('Email request error:', e.message);
      reject(e);
    });

    req.write(body);
    req.end();
  });
}

/* ════════════════════════════════════════════════════════
   1. CREATE CLIENT ACCOUNT
════════════════════════════════════════════════════════ */
exports.createClientAccount = onCall({ region: 'europe-west1' }, async (request) => {
  const { name, email, phone, goal, age, weight, height, notes, gender, bmrData } = request.data;

  if (!request.auth) throw new HttpsError('unauthenticated', 'Must be logged in.');

  const trainerUid  = request.auth.uid;
  const trainerDoc  = await db.collection('users').doc(trainerUid).get();
  if (!trainerDoc.exists)            throw new HttpsError('permission-denied', 'Trainer not found.');
  if (trainerDoc.data().tier === 'client') throw new HttpsError('permission-denied', 'Clients cannot create clients.');
  if (!name || !name.trim())         throw new HttpsError('invalid-argument', 'Name is required.');
  if (!email || !email.trim())       throw new HttpsError('invalid-argument', 'Email is required.');

  const trainerData = trainerDoc.data();
  let clientUid;

  try {
    // 1. Create Firebase Auth account
    const tempPassword = 'Temp' + Math.random().toString(36).slice(2, 10) + '!A1';
    const userRecord   = await auth.createUser({
      displayName: name.trim(),
      email:       email.trim(),
      password:    tempPassword,
    });
    clientUid = userRecord.uid;
    logger.info('Auth user created:', clientUid);

    // 2. Write Firestore docs
    const clientProfile = {
      name: name.trim(), email: email.trim(), phone: phone || '',
      goal: goal || 'maintain', age: age || 0, weight: weight || 0,
      height: height || 0, gender: gender || 'male',
      notes: notes || '', bmrData: bmrData || null,
      linkedTrainer: trainerUid,
      trainerName: trainerData.fullName || trainerData.businessName || 'Your Trainer',
      tier: 'client',
      assignedMenus: [], assignedPrograms: [],
      assignedRoutines: [], assignedRecipes: [],
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection('clientProfiles').doc(clientUid).set(clientProfile);
    await db.collection('users').doc(clientUid).set({
      fullName: name.trim(), email: email.trim(),
      tier: 'client', linkedTrainer: trainerUid,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    logger.info('Firestore docs written for client:', clientUid);

    // 3. Send password reset email via Firebase REST API
    // (same as clicking "Reset password" in Firebase Console)
    await sendFirebasePasswordResetEmail(email.trim());

    return {
      success:  true,
      clientUid,
      message:  'Client created. Password setup email sent to ' + email.trim(),
    };

  } catch (error) {
    logger.error('createClientAccount failed:', error.code, error.message);
    // Clean up Auth user if something went wrong after creation
    if (clientUid) {
      try { await auth.deleteUser(clientUid); } catch(e) {}
    }
    if (error.code === 'auth/email-already-exists') {
      throw new HttpsError('already-exists', 'A user with this email already exists.');
    }
    throw new HttpsError('internal', error.message || 'Failed to create client.');
  }
});

/* ════════════════════════════════════════════════════════
   2. DELETE CLIENT ACCOUNT
════════════════════════════════════════════════════════ */
exports.deleteClientAccount = onCall({ region: 'europe-west1' }, async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Must be logged in.');

  const { clientUid } = request.data;
  if (!clientUid) throw new HttpsError('invalid-argument', 'clientUid required.');

  const trainerUid = request.auth.uid;
  const profileDoc = await db.collection('clientProfiles').doc(clientUid).get();

  if (!profileDoc.exists || profileDoc.data().linkedTrainer !== trainerUid) {
    throw new HttpsError('permission-denied', 'You can only delete your own clients.');
  }

  try {
    await auth.deleteUser(clientUid);
    await db.collection('clientProfiles').doc(clientUid).delete();
    await db.collection('users').doc(clientUid).delete();
    logger.info('Client deleted:', clientUid);
    return { success: true };
  } catch (error) {
    logger.error('deleteClientAccount error:', error);
    throw new HttpsError('internal', error.message);
  }
});

/* ════════════════════════════════════════════════════════
   3. MORNING PAYMENT WEBHOOK
════════════════════════════════════════════════════════ */
exports.morningWebhook = onRequest({ region: 'europe-west1' }, async (req, res) => {
  if (req.method !== 'POST') { res.status(405).send('Method Not Allowed'); return; }

  logger.info('Morning webhook received');
  const body           = req.body;
  const uid            = body.uid || (body.metadata && body.metadata.uid) || req.query.uid;
  const status         = body.status;
  const transactionId  = body.transaction_id || body.id;
  const nextBillingDate = body.next_billing_date;

  if (!uid) { res.status(400).json({ error: 'uid required' }); return; }

  const userRef = db.collection('users').doc(uid);
  try {
    if (status === 'completed' || status === 'paid' || status === 'active') {
      const premiumUntil = nextBillingDate
        ? new Date(nextBillingDate).toISOString()
        : new Date(Date.now() + 31 * 24 * 60 * 60 * 1000).toISOString();
      await userRef.set({
        tier: 'premium', premiumUntil,
        morningPaymentId: transactionId,
        upgradedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });

    } else if (status === 'cancelled' || status === 'canceled') {
      const snap = await userRef.get();
      const currentUntil = snap.exists ? snap.data().premiumUntil : null;
      await userRef.set({
        tier: 'premium_cancelled', premiumUntil: currentUntil,
        cancelledAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });

    } else if (status === 'refunded') {
      await userRef.set({
        tier: 'free_limited',
        refundedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
    }

    res.status(200).json({ received: true });
  } catch (error) {
    logger.error('morningWebhook error:', error);
    res.status(500).json({ error: error.message });
  }
});