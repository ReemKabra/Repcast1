const { onCall, onRequest, HttpsError } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const admin = require('firebase-admin');
const axios  = require('axios');

admin.initializeApp();

// Define secrets — stored in Google Secret Manager, not functions.config()
const MORNING_ID     = defineSecret('MORNING_ID');
const MORNING_SECRET = defineSecret('MORNING_SECRET');

async function getMorningToken(id, secret) {
  const res = await axios.post(
    'https://api.greeninvoice.co.il/api/v1/account/token',
    { id, secret }
  );
  return res.data.token;
}

exports.createPaymentLink = onCall(
  { secrets: [MORNING_ID, MORNING_SECRET] },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Login required.');
    }

    const { fullName, email, phone } = request.data;

    try {
      const token = await getMorningToken(
        MORNING_ID.value(),
        MORNING_SECRET.value()
      );

      const res = await axios.post(
        'https://api.greeninvoice.co.il/api/v1/payments/form',
        {
          description: 'Repcast Premium — Monthly Subscription',
          type:        400,
          currency:    'ILS',
          price:       99,
          client: {
            name:  fullName,
            email: email,
            phone: phone || '',
          },
          income: [{
            catalogNum:  'REPCAST-PRO-1',
            description: 'Repcast Premium Subscription',
            quantity:    1,
            price:       99,
            currency:    'ILS',
            vatType:     0,
          }],
          remarks:    `UID: ${request.auth.uid}`,
          successUrl: 'https://repcast.co.il?payment=success',
          failureUrl: 'https://repcast.co.il?payment=failed',
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return { url: res.data.url, id: res.data.id };

    } catch (e) {
        console.error('Morning error:', (e.response && e.response.data) || e.message);
      throw new HttpsError('internal', 'Payment link creation failed.');
    }
  }
);

exports.morningWebhook = onRequest(async (req, res) => {
  const { type, remarks, id } = req.body;

  if (type !== 'documentApproved') {
    return res.json({ received: true });
  }

  const uid = remarks?.split('UID: ')[1]?.trim();
  if (!uid) return res.status(400).json({ error: 'No UID found' });

  try {
    await admin.firestore().collection('users').doc(uid).update({
      tier:             'premium',
      morningPaymentId: id,
      upgradedAt:       new Date().toISOString(),
    });
    res.json({ success: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB update failed' });
  }
});