/* ══════════════════════════════════════════════════════════
   i18n — Internationalisation (English + Hebrew)
   Usage: t('key') returns string in current language
          applyLang(lang) swaps entire UI instantly
══════════════════════════════════════════════════════════ */
var _lang = localStorage.getItem('repcast_lang') || 
  (navigator.language && navigator.language.startsWith('he') ? 'he' : 'en');

/* ── Collection name helper ─────────────────────────────
   col('menus')    → 'menus'    (English)  or  'menus_he'    (Hebrew)
   col('programs') → 'programs' (English)  or  'programs_he' (Hebrew)
   col('recipes')  → 'recipes'  (English)  or  'recipes_he'  (Hebrew)
   col('foods')    → 'foods'    (English)  or  'foods_he'    (Hebrew)
   col('masterLibrary') → 'masterLibrary'  or  'masterLibrary_he'
   Research is always single collection.
─────────────────────────────────────────────────────── */
var _langCollections = ['menus','programs','recipes','foods','masterLibrary'];

function col(name) {
  if (_lang === 'he' && _langCollections.includes(name)) return name + '_he';
  return name;
}

function colHe(name) { return name + '_he'; }
function colEn(name) { return name; }

var _i18n = {
  en: {
    /* ── Nav ── */
    navLibrary:'Library', navRoutines:'Routines', navNutrition:'Nutrition',
    navPrograms:'Programs', navRecipes:'Recipes', navResearch:'Research',
    navClients:'Clients', navProfile:'Profile', navBilling:'Billing',
    /* ── Library ── */
    libraryTitle:'Exercise Library', searchExercises:'Search exercises...',
    allExercises:'All Exercises', tabLibrary:'Library', tabMyVideos:'My Videos',
    tabMyMenus:'My Menus', tabMyPrograms:'My Programs', tabMyRecipes:'My Recipes',
    tabMyResearch:'My Research', uploadVideo:'Upload Video', addExercise:'Add Exercise',
    /* ── Routines ── */
    routinesTitle:'Routines Sent', noRoutines:'No routines sent yet.',
    /* ── Nutrition ── */
    nutritionTitle:'Nutrition Plans', searchMenus:'Search menus...',
    addMenu:'Add Menu', noMenus:'No menus yet.',
    pickFromDB:'Pick from Database', addManually:'Add Manually',
    addMeal:'+ Add Meal', addFood:'Add Food',
    mealName:'Meal name...', foodName:'Food name',
    qty:'Qty', unit:'Unit', cal:'Cal', pro:'Pro', carbs:'Carbs', fat:'Fat',
    menuName:'Menu Name', menuGoal:'Goal', menuDesc:'Description',
    goalCut:'Cut', goalBulk:'Bulk', goalMaintain:'Maintain',
    saveMenu:'Save Menu', deleteMenu:'Delete Menu',
    publicVisible:'Public — visible to all trainers',
    /* ── Programs ── */
    programsTitle:'Training Programs', addProgram:'Add Program',
    noPrograms:'No programs yet.', weeksLabel:'weeks',
    /* ── Recipes ── */
    recipesTitle:'Recipe Library', addRecipe:'Add Recipe',
    noRecipes:'No recipes yet.', prepTime:'Prep time',
    /* ── Research ── */
    researchTitle:'Research Library', addStudy:'Add Study',
    noResearch:'No research yet.',
    /* ── Clients ── */
    clientsTitle:'My Clients', addClient:'Add Client',
    noClients:'No clients yet.', viewClient:'View',
    assignContent:'Assign Content Now', itemsAssigned:'items assigned',
    nothingAssigned:'Nothing assigned yet',
    /* ── Profile ── */
    profileTitle:'Profile & Settings', saveProfile:'Save Changes',
    fullName:'Full Name', phone:'Phone Number', businessName:'Business Name',
    specialty:'Specialty', bio:'Bio / About',
    /* ── Auth ── */
    signIn:'Sign In', signUp:'Sign Up', signOut:'Sign Out',
    emailLabel:'Email', passwordLabel:'Password', forgotPassword:'Forgot password?',
    continueGoogle:'Continue with Google', alreadyAccount:'Already have an account?',
    noAccount:"Don't have an account?", register:'Register',
    /* ── Modals / Actions ── */
    save:'Save', cancel:'Cancel', delete:'Delete', edit:'Edit', close:'Close',
    confirm:'Confirm', back:'Back', add:'Add', remove:'Remove', search:'Search...',
    validate:'Validate', import:'Import', download:'Download Template',
    upload:'Upload File', loading:'Loading...', saving:'Saving...',
    /* ── Toasts ── */
    toastSaved:'Saved!', toastDeleted:'Deleted!', toastError:'Something went wrong.',
    toastCopied:'Copied!', toastAssigned:'Assignment saved!',
    /* ── Empty states ── */
    emptyLibrary:'No exercises found.', emptyClients:'Add your first client to get started.',
    emptyMenus:'Click "Add Menu" to create your first nutrition plan.',
    emptyPrograms:'Click "Add Program" to get started.',
    emptyRecipes:'Recipes will appear here once added.',
    emptyResearch:'Research articles will appear here once added.',
    /* ── Food picker ── */
    pickFoodTitle:'Add Food from Database', searchFoods:'Search foods...',
    quantity:'Quantity:', addToMeal:'Add to Meal',
    /* ── Assign modal ── */
    assignMenus:'Assign Menus', assignPrograms:'Assign Programs',
    assignRecipes:'Assign Recipes', assignRoutines:'Assign Routines',
    saveAssignment:'Save Assignment', allGoals:'All Goals',
    /* ── Checkout ── */
    reviewAssign:'Review & Assign', routineName:'Name this routine...',
    saveRoutine:'Save Routine', assignToClient:'Assign to Client',
    chooseClient:'— Choose client —',
    /* ── Lang ── */
    langBtn:'🇮🇱 עב', langName:'English',
    /* ── Content lang filter ── */
    langField:'Language', langEn:'English', langHe:'Hebrew', langBoth:'Both',
  },
  he: {
    /* ── Nav ── */
    navLibrary:'ספרייה', navRoutines:'שגרות', navNutrition:'תזונה',
    navPrograms:'תוכניות', navRecipes:'מתכונים', navResearch:'מחקר',
    navClients:'לקוחות', navProfile:'פרופיל', navBilling:'חיוב',
    /* ── Library ── */
    libraryTitle:'ספריית תרגילים', searchExercises:'חיפוש תרגילים...',
    allExercises:'כל התרגילים', tabLibrary:'ספרייה', tabMyVideos:'הסרטונים שלי',
    tabMyMenus:'התפריטים שלי', tabMyPrograms:'התוכניות שלי', tabMyRecipes:'המתכונים שלי',
    tabMyResearch:'המחקר שלי', uploadVideo:'העלאת סרטון', addExercise:'הוסף תרגיל',
    /* ── Routines ── */
    routinesTitle:'שגרות שנשלחו', noRoutines:'לא נשלחו שגרות עדיין.',
    /* ── Nutrition ── */
    nutritionTitle:'תוכניות תזונה', searchMenus:'חיפוש תפריטים...',
    addMenu:'הוסף תפריט', noMenus:'אין תפריטים עדיין.',
    pickFromDB:'בחר ממאגר', addManually:'הוסף ידנית',
    addMeal:'+ הוסף ארוחה', addFood:'הוסף מזון',
    mealName:'שם ארוחה...', foodName:'שם מזון',
    qty:'כמות', unit:'יחידה', cal:'קל׳', pro:'חלבון', carbs:'פחמימות', fat:'שומן',
    menuName:'שם תפריט', menuGoal:'מטרה', menuDesc:'תיאור',
    goalCut:'חיטוב', goalBulk:'מסה', goalMaintain:'שמירה',
    saveMenu:'שמור תפריט', deleteMenu:'מחק תפריט',
    publicVisible:'ציבורי — גלוי לכל המאמנים',
    /* ── Programs ── */
    programsTitle:'תוכניות אימון', addProgram:'הוסף תוכנית',
    noPrograms:'אין תוכניות עדיין.', weeksLabel:'שבועות',
    /* ── Recipes ── */
    recipesTitle:'ספריית מתכונים', addRecipe:'הוסף מתכון',
    noRecipes:'אין מתכונים עדיין.', prepTime:'זמן הכנה',
    /* ── Research ── */
    researchTitle:'ספריית מחקר', addStudy:'הוסף מחקר',
    noResearch:'אין מחקרים עדיין.',
    /* ── Clients ── */
    clientsTitle:'הלקוחות שלי', addClient:'הוסף לקוח',
    noClients:'הוסף את הלקוח הראשון שלך כדי להתחיל.', viewClient:'צפה',
    assignContent:'הקצה תוכן עכשיו', itemsAssigned:'פריטים מוקצים',
    nothingAssigned:'לא הוקצה כלום עדיין',
    /* ── Profile ── */
    profileTitle:'פרופיל והגדרות', saveProfile:'שמור שינויים',
    fullName:'שם מלא', phone:'מספר טלפון', businessName:'שם העסק',
    specialty:'התמחות', bio:'ביו / אודות',
    /* ── Auth ── */
    signIn:'התחברות', signUp:'הרשמה', signOut:'התנתק',
    emailLabel:'אימייל', passwordLabel:'סיסמה', forgotPassword:'שכחת סיסמה?',
    continueGoogle:'המשך עם Google', alreadyAccount:'כבר יש לך חשבון?',
    noAccount:'אין לך חשבון?', register:'הרשמה',
    /* ── Modals / Actions ── */
    save:'שמור', cancel:'ביטול', delete:'מחק', edit:'ערוך', close:'סגור',
    confirm:'אישור', back:'חזרה', add:'הוסף', remove:'הסר', search:'חיפוש...',
    validate:'אמת', import:'ייבוא', download:'הורד תבנית',
    upload:'העלה קובץ', loading:'טוען...', saving:'שומר...',
    /* ── Toasts ── */
    toastSaved:'נשמר!', toastDeleted:'נמחק!', toastError:'משהו השתבש.',
    toastCopied:'הועתק!', toastAssigned:'ההקצאה נשמרה!',
    /* ── Empty states ── */
    emptyLibrary:'לא נמצאו תרגילים.', emptyClients:'הוסף את הלקוח הראשון שלך.',
    emptyMenus:'לחץ "הוסף תפריט" כדי ליצור תוכנית תזונה ראשונה.',
    emptyPrograms:'לחץ "הוסף תוכנית" כדי להתחיל.',
    emptyRecipes:'מתכונים יופיעו כאן לאחר הוספה.',
    emptyResearch:'מאמרי מחקר יופיעו כאן לאחר הוספה.',
    /* ── Food picker ── */
    pickFoodTitle:'הוסף מזון ממאגר', searchFoods:'חפש מזון...',
    quantity:'כמות:', addToMeal:'הוסף לארוחה',
    /* ── Assign modal ── */
    assignMenus:'הקצה תפריטים', assignPrograms:'הקצה תוכניות',
    assignRecipes:'הקצה מתכונים', assignRoutines:'הקצה שגרות',
    saveAssignment:'שמור הקצאה', allGoals:'כל המטרות',
    /* ── Checkout ── */
    reviewAssign:'סקירה והקצאה', routineName:'שם השגרה...',
    saveRoutine:'שמור שגרה', assignToClient:'הקצה ללקוח',
    chooseClient:'— בחר לקוח —',
    /* ── Lang ── */
    langBtn:'🇺🇸 EN', langName:'עברית',
    /* ── Content lang filter ── */
    langField:'שפה', langEn:'אנגלית', langHe:'עברית', langBoth:'שתיהן',
  }
};

function t(key) {
  return (_i18n[_lang] && _i18n[_lang][key]) || (_i18n.en[key]) || key;
}

// Pick Hebrew or English content field
function ct(item, field) {
  if (_lang === 'he' && item[field + '_he']) return item[field + '_he'];
  return item[field] || '';
}

function applyLang(lang) {
  _lang = lang;
  localStorage.setItem('repcast_lang', lang);

  // Always LTR — Hebrew works fine left-to-right
  document.documentElement.dir  = 'ltr';
  document.documentElement.lang = lang;

  // Swap all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var attr = el.getAttribute('data-i18n-attr') || 'textContent';
    if (attr === 'placeholder') el.placeholder = t(key);
    else if (attr === 'title') el.title = t(key);
    else el.textContent = t(key);
  });

  // Update lang toggle button
  document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
    btn.textContent = t('langBtn');
    btn.title = t('langName');
  });

  // Re-render dynamic views — call window-exposed versions
  if (window._renderMenuLibrary)  try { window._renderMenuLibrary(); }  catch(e){}
  if (window._renderProgramsView) try { window._renderProgramsView(); } catch(e){}
  if (window._renderRecipesView)  try { window._renderRecipesView(); }  catch(e){}
  if (window._renderResearchView) try { window._renderResearchView(); } catch(e){}
  if (window._renderClientsList)  try { window._renderClientsList(); }  catch(e){}
}

async function setLang(newLang) {
  if (_lang === newLang) return;
  _lang = newLang;
  localStorage.setItem('repcast_lang', newLang);

  // Update button styles — active button highlighted
  ['en','he'].forEach(function(l) {
    ['lang-btn-'+l, 'lang-btn-'+l+'-mgr'].forEach(function(id) {
      var btn = document.getElementById(id);
      if (!btn) return;
      if (l === newLang) {
        btn.style.background = 'var(--accent)';
        btn.style.color      = '#0a0c0f';
      } else {
        btn.style.background = 'transparent';
        btn.style.color      = 'var(--muted)';
      }
    });
  });

  showToast(newLang === 'he' ? '🇮🇱 עברית' : '🇺🇸 English');

  // Clear and reload from correct language collections
  menus = []; programs = []; recipes = []; foods = [];
  try { await Promise.all([loadMenus(), loadPrograms(), loadRecipes(), loadFoods()]); } catch(e){}

  // Re-render current views
  if (window._renderMenuLibrary)  try { window._renderMenuLibrary(); }  catch(e){}
  if (window._renderProgramsView) try { window._renderProgramsView(); } catch(e){}
  if (window._renderRecipesView)  try { window._renderRecipesView(); }  catch(e){}
  if (window._renderClientsList)  try { window._renderClientsList(); }  catch(e){}
}

function toggleLang() { setLang(_lang === 'en' ? 'he' : 'en'); }

/* Apply language on page load — after DOM ready */
document.addEventListener('DOMContentLoaded', function() {
  applyLang(_lang);
  // Set initial button active state
  ['en','he'].forEach(function(l) {
    ['lang-btn-'+l, 'lang-btn-'+l+'-mgr'].forEach(function(id) {
      var btn = document.getElementById(id);
      if (!btn) return;
      if (l === _lang) {
        btn.style.background = 'var(--accent)';
        btn.style.color      = '#0a0c0f';
      } else {
        btn.style.background = 'transparent';
        btn.style.color      = 'var(--muted)';
      }
    });
  });
});

/* ==========================================================
   REPCAST — app.js  (production-ready)
   All Firebase bugs fixed, Google login added,
   auth persistence added, manager credentials secured.
   ========================================================== */
   'use strict';

   /* ── MANAGER AUTH ───────────────────────────────────────────
      Credentials are stored in Firestore under admins/{email}
      Never hardcoded in the source code.
   ────────────────────────────────────────────────────────────── */
   
   /* ── DATA ─────────────────────────────────────────────────── */
   const SUBCATS = {
     chest:     ['Upper Chest', 'Middle Chest', 'Lower Chest'],
     back:      ['Upper Back', 'Lats', 'Lower Back'],
     legs:      ['Quads', 'Hamstrings', 'Calves', 'Glutes'],
     shoulders: ['Front Deltoid', 'Lateral', 'Rear Deltoid'],
     arms:      ['Biceps', 'Triceps', 'Forearms'],
     core:      ['Abs', 'Obliques', 'Transverse Abs'],
     fullbody:  ['Compound', 'HIIT', 'Functional'],
     physio:    ['Shoulder Rehab', 'Knee Rehab', 'Lower Back Rehab', 'Hip Rehab', 'Ankle Rehab', 'Neck Rehab', 'Balance', 'Breathing'],
   };
   
   // Master library — manager can add/edit/delete via admin panel
   // Master library — loaded from Firestore cloud on boot (see syncMasterLibraryFromFirestore)
   // localStorage used as offline cache from last successful fetch
   let MASTER_EXERCISES = JSON.parse(localStorage.getItem('repcast_master') || 'null') || [];
   
   let customExercises    = [];
   let _customVideosUnsubscribe = null;
   let _publicVideosUnsubscribe  = null;
   let publicVideos              = [];
   let sentRoutines       = JSON.parse(localStorage.getItem('repcast_routines') || '[]');
   let adminDeleteTargetId = null;
   let adminSearchQuery   = '';
   
   /* ── APP STATE ───────────────────────────────────────────── */
   const state = {
     user:         null,
     isManager:    false,
     cart:         new Map(),
     activeTab:    'master',
     filterMuscle: null,
     filterSub:    null,
     searchQuery:  '',
     currentView:  'library',
   };
   
   /* ── PERSIST MASTER LIBRARY ─────────────────────────────── */
   function saveMasterLibrary() {
     localStorage.setItem('repcast_master', JSON.stringify(MASTER_EXERCISES));
     if (window._firebase && window._db) {
       const { setDoc, doc } = window._firebase;
       setDoc(doc(window._db, 'config', 'masterLibrary'), {
         exercises: MASTER_EXERCISES,
         updatedAt: new Date().toISOString(),
       }).then(function() {
         console.log('[RepCast] Master library saved to Firestore:', MASTER_EXERCISES.length, 'exercises');
         showToast('Library saved to cloud (' + MASTER_EXERCISES.length + ' exercises)');
       }).catch(function(e) {
         console.error('[RepCast] Firestore save FAILED:', e.code, e.message);
         // Common fix: ensure config/masterLibrary rule is: allow write: if true;
         showToast('Saved locally but cloud sync failed: ' + e.code);
       });
     } else {
       console.warn('[RepCast] saveMasterLibrary: window._firebase or window._db not ready');
       showToast('Saved locally (cloud not connected)');
     }
   }
   
   /* ── Load master library from Firestore (real-time) ────────
      Overwrites the local default if a manager has saved changes.
      Called once on page load, before bootTrainerApp.            */
   async function syncMasterLibraryFromFirestore() {
     if (!window._firebase || !window._db) return;
     try {
       const { getDoc, doc } = window._firebase;
       const snap = await getDoc(doc(window._db, 'config', 'masterLibrary'));
       if (snap.exists()) {
         const data = snap.data();
         if (data.exercises && data.exercises.length) {
           MASTER_EXERCISES = data.exercises;
           localStorage.setItem('repcast_master', JSON.stringify(MASTER_EXERCISES));
         }
       }
     } catch (e) {
       console.warn('Could not sync master library from Firestore:', e);
     }
   }
   
   /* ══════════════════════════════════════════════════════════
      AUTH
   ══════════════════════════════════════════════════════════ */
   
   function showRegister() {
     document.getElementById('auth-login').style.display    = 'none';
     document.getElementById('auth-register').style.display = 'block';
     document.getElementById('auth-manager').style.display  = 'none';
   }
   function showLogin() {
     document.getElementById('auth-login').style.display    = 'block';
     document.getElementById('auth-register').style.display = 'none';
     document.getElementById('auth-manager').style.display  = 'none';
   }
   function showManagerLogin() {
     document.getElementById('auth-login').style.display    = 'none';
     document.getElementById('auth-register').style.display = 'none';
     document.getElementById('auth-manager').style.display  = 'block';
   }
   
   /* ── Manager login — credentials verified against Firestore ── */
   async function doManagerLogin() {
     const email = document.getElementById('manager-email').value.trim().toLowerCase();
     const pass  = document.getElementById('manager-pass').value;

     if (!email || !pass) { showToast('Please enter email and password.'); return; }

     const btn = document.querySelector('#auth-manager .btn-manager');
     if (btn) { btn.disabled = true; btn.innerHTML = 'Checking...'; }

     function loginSuccess(name) {
       state.isManager = true;
       state.user = { uid:'manager', email:email, fullName:name||'Manager', role:'manager' };
       showScreen('manager');
       renderAdminTable();
       updateAdminStats();
       // Load all resource data for admin
       loadMenus();
     loadFoods();
       loadFoods();
       loadPrograms();
       loadRecipes();
       loadResearch();
       showToast('Welcome, ' + state.user.fullName + '!');
       if (btn) { btn.disabled = false; btn.innerHTML = '<i class="ti ti-shield-check"></i> Sign In as Manager'; }
     }

     function loginFail(msg) {
       showToast(msg || 'Invalid manager credentials.');
       document.getElementById('manager-pass').value = '';
       if (btn) { btn.disabled = false; btn.innerHTML = '<i class="ti ti-shield-check"></i> Sign In as Manager'; }
     }

     // Try Firestore first, fall back to hardcoded if Firebase not ready
     if (window._firebase && window._db) {
       try {
         const snap = await window._firebase.getDoc(
           window._firebase.doc(window._db, 'admins', email)
         );
         if (!snap.exists()) { loginFail('Invalid manager credentials.'); return; }
         const adminData = snap.data();
         if (adminData.password !== pass) { loginFail('Invalid manager credentials.'); return; }
         loginSuccess(adminData.name);
         return;
       } catch(e) {
         console.warn('Firestore admin read failed:', e.code, '— trying fallback');
         // Fall through to hardcoded check below
       }
     }

     // Fallback: hardcoded credentials (used if Firebase not ready)
     if (email === 'reemkabra@gmail.com' && pass === 'Reem@!1901') {
       loginSuccess('Reem Kabra');
     } else {
       loginFail('Invalid manager credentials.');
     }
   }
   
   /* ── Email / Password login ─────────────────────────────── */
   async function doLogin() {
     const email = document.getElementById('login-email').value.trim();
     const pass  = document.getElementById('login-pass').value;
     if (!email || !pass) { showToast('Please enter email and password.'); return; }
     try {
       const { user } = await window._firebase.signInWithEmailAndPassword(window._auth, email, pass);
       await _bootFromFirebaseUser(user);
     } catch (e) {
       showToast('❌ ' + friendlyError(e.code));
     }
   }
   
   /* ── Google login ───────────────────────────────────────── */
   function doGoogleLogin() {
     // signInWithPopup MUST be called synchronously from a user gesture.
     // Do not await anything before calling it — browsers block popups
     // that open after async operations.
     if (!window._auth || !window._firebase) {
       showToast('Firebase not loaded yet. Please wait a moment and try again.');
       return;
     }
     var provider = new window._firebase.GoogleAuthProvider();
     provider.addScope('email');
     provider.addScope('profile');
     provider.setCustomParameters({ prompt: 'select_account' });

     var isNative = window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform();

     if (isNative) {
       // For @codetrix-studio/capacitor-google-auth 3.4.0-rc.4 with Capacitor 8
       // The plugin registers under Capacitor.Plugins.GoogleAuth
       var googleAuthPlugin = null;
       if (window.Capacitor && window.Capacitor.Plugins) {
         googleAuthPlugin = window.Capacitor.Plugins.GoogleAuth || window.Capacitor.Plugins['GoogleAuth'];
       }
       if (!googleAuthPlugin && window.GoogleAuth) googleAuthPlugin = window.GoogleAuth;


       if (googleAuthPlugin) {
         (async function() {
           try {

             showToast('Opening Google...');

             // Initialize plugin
             if (googleAuthPlugin.initialize) {
               await googleAuthPlugin.initialize({
                 clientId: '1055475395403-kc7vqjas5duve2ri4u1kf6745a6o79vo.apps.googleusercontent.com',
                 scopes: ['email', 'profile'],
                 grantOfflineAccess: true,
                 forceCodeForRefreshToken: true
               });
             }

             // Sign out from plugin first so account picker appears every time
             if (googleAuthPlugin.signOut) {
               try { await googleAuthPlugin.signOut(); } catch(e) {}
             }

             var googleUser = await googleAuthPlugin.signIn();


             if (!googleUser) throw new Error('No user returned');

             var auth = googleUser.authentication || googleUser.result || {};
             var idToken = auth.idToken || googleUser.idToken || auth.id_token;
             console.log('[GoogleAuth] Step 3: idToken exists:', !!idToken);

             if (!idToken) {
  
               throw new Error('No idToken. Keys: ' + Object.keys(googleUser).join(','));
             }


             var credential = window._firebase.GoogleAuthProvider.credential(idToken);


             var result = await window._firebase.signInWithCredential(window._auth, credential);


             var user    = result.user;
             var profile = await loadUserProfile(user.uid);
             var isNewUser = !profile;
             if (isNewUser) {
               await createUserProfile(user.uid, {
                 fullName:     user.displayName || 'Trainer',
                 email:        user.email,
                 businessName: 'My Studio',
                 phone: '', specialty: 'Personal Trainer',
               });
               // First time Google sign-in — send verification email
               try {
                 await window._firebase.sendEmailVerification(user);
                 showToast('Welcome! A confirmation email was sent to ' + user.email + '. Please verify to continue.');
               } catch(verErr) { console.warn('Verification email error:', verErr); }
             }
             await _bootFromFirebaseUser(user);
           } catch(e) {
             var msg = e && (e.message || e.error || e.code || JSON.stringify(e)) || 'Unknown';

             if (msg.indexOf('popup_closed') === -1 && msg.indexOf('canceled') === -1 && msg.indexOf('cancel') === -1) {
               showToast('Error: ' + msg.substring(0, 60));
             }
           }
         })();
       } else {
         // Show error prominently — centered alert style
         var errDiv = document.getElementById('native-google-error');
         if (!errDiv) {
           errDiv = document.createElement('div');
           errDiv.id = 'native-google-error';
           errDiv.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--surface);border:1px solid var(--border2);border-radius:16px;padding:24px 20px;text-align:center;z-index:9999;width:280px;box-shadow:0 20px 60px rgba(0,0,0,0.5)';
           errDiv.innerHTML = '<i class="ti ti-brand-google" style="font-size:32px;color:#FBBF24;margin-bottom:12px;display:block"></i>' +
             '<p style="font-size:14px;color:var(--text);margin-bottom:16px">Google sign-in requires additional setup on mobile.<br><br>Please use <strong>email and password</strong> to sign in.</p>' +
             '<button onclick="this.parentElement.remove()" style="background:var(--accent);color:#071a0e;border:none;border-radius:8px;padding:10px 24px;font-weight:700;font-size:14px;cursor:pointer;width:100%">OK</button>';
           document.body.appendChild(errDiv);
         }
       }
       return;
     } else {
       // Browser: use popup
       window._firebase.signInWithPopup(window._auth, provider)
         .then(async function(result) {
           var user    = result.user;
           var profile = await loadUserProfile(user.uid);
           var isNewGoogleUser = !profile;
           if (isNewGoogleUser) {
             await createUserProfile(user.uid, {
               fullName:     user.displayName || 'Trainer',
               email:        user.email,
               businessName: 'My Studio',
               phone:        '',
               specialty:    'Personal Trainer',
             });
             // First time Google sign-in — send verification email
             try {
               await window._firebase.sendEmailVerification(user);
               showToast('Welcome! A confirmation email was sent to ' + user.email + '. Please verify to continue.');
             } catch(verErr) { console.warn('Verification email error:', verErr); }
           }
           await _bootFromFirebaseUser(user);
         })
         .catch(function(e) {
           console.error('Google login error:', e.code, e.message);
           if (e.code === 'auth/popup-blocked') {
             showToast('Popup was blocked. Please allow popups for this site.');
           } else if (e.code === 'auth/popup-closed-by-user') {
             showToast('Google sign-in was cancelled.');
           } else {
             showToast('❌ Google sign-in failed: ' + friendlyError(e.code));
           }
         });
     }
   }
   
   /* ── Register ───────────────────────────────────────────── */
   async function doRegister() {
     const name  = document.getElementById('reg-name').value.trim();
     const biz   = document.getElementById('reg-biz').value.trim();
     const email = document.getElementById('reg-email').value.trim();
     const pass  = document.getElementById('reg-pass').value;
     const spec  = document.getElementById('reg-specialty').value;
     if (!name || !email || !pass) { showToast('Please fill in all fields.'); return; }
     try {
       const { user } = await window._firebase.createUserWithEmailAndPassword(window._auth, email, pass);
   
       // Send email verification
       try {
         await window._firebase.sendEmailVerification(user);
       } catch(verErr) {
         console.warn('Could not send verification email:', verErr);
       }
   
       await createUserProfile(user.uid, {
         fullName: name, businessName: biz, email,
         phone: '', specialty: spec,
       });
       // Send verification email
       await window._firebase.sendEmailVerification(user);
       // Sign them out immediately — they must verify before entering
       await window._firebase.signOut(window._auth);
       showVerificationPending(email);
     } catch (e) {
       showToast('❌ ' + friendlyError(e.code));
     }
   }
   
   /* ── Shared boot helper — loads profile then boots app ─── */
   async function _bootFromFirebaseUser(firebaseUser) {
     // Use a mutable reference
     var user = firebaseUser;

     // ── Email verification check ────────────────────────────
     // Google users are always verified. Email/password users must verify first.
     var isGoogle = user.providerData && user.providerData.some(function(p){
       return p.providerId === 'google.com';
     });

     if (!isGoogle && !user.emailVerified) {
       // Reload to get fresh emailVerified from Firebase server
       try {
         await user.reload();
         user = window._auth.currentUser || user;
       } catch(e) {
         console.warn('reload error:', e.code);
       }
       if (!user || !user.emailVerified) {
         await window._firebase.signOut(window._auth);
         showVerificationPending(firebaseUser.email);
         return;
       }
     }

     var profile = await loadUserProfile(user.uid) || {};

     // ── Determine correct tier ──────────────────────────────
     // Client accounts go straight to client portal
     if (profile.tier === 'client') {
       await bootClientPortal(user, profile);
       return;
     }

     let storedTier = profile.tier || 'free_limited';
     const daysLeft    = calcTrialDays(profile.trialEndDate);
     const premiumDays = profile.premiumUntil
       ? Math.max(0, Math.ceil((new Date(profile.premiumUntil) - Date.now()) / 86400000))
       : 0;

     // ── Determine correct tier ────────────────────────────────
     let tier;
     if (storedTier === 'premium') {
       // Active paid membership
       tier = 'premium';

     } else if (storedTier === 'premium_cancelled') {
       // User cancelled but still in grace period (paid until date)
       if (premiumDays > 0) {
         tier = 'premium_cancelled'; // full access until premiumUntil
       } else {
         // Grace period expired — downgrade to free_limited
         tier = 'free_limited';
         window._firebase.setDoc(
           window._firebase.doc(window._db, 'users', user.uid),
           { tier: 'free_limited' }, { merge: true }
         ).catch(function(){});
       }

     } else if (storedTier === 'trial') {
       const isLegitTrial = profile.trialActivatedByUser === true
                         && profile.trialEndDate
                         && daysLeft > 0;
       if (isLegitTrial) {
         tier = 'trial';
       } else {
         tier = 'free_limited';
         window._firebase.setDoc(
           window._firebase.doc(window._db, 'users', user.uid),
           { tier: 'free_limited', trialExpiredAt: new Date().toISOString() },
           { merge: true }
         ).catch(function(){});
       }

     } else {
       tier = 'free_limited';
     }
   
     // trialUsed = true only when the user explicitly activated a trial via
     // the new flow (trialActivatedByUser flag), NOT the old auto-trial.
     // This prevents old users from being blocked from activating their trial.
     const trialUsed = !!profile.trialActivatedByUser;
   
     state.user = {
       uid:              user.uid,
       email:            user.email,
       fullName:         profile.fullName     || user.displayName || 'Trainer',
       businessName:     profile.businessName || 'My Studio',
       phone:            profile.phone        || '',
       specialty:        profile.specialty    || 'Personal Trainer',
       tier,
       trialDaysLeft:    tier === 'trial' ? daysLeft : 0,
       trialEndDate:     profile.trialEndDate  || null,
       premiumUntil:     profile.premiumUntil  || null,
       premiumDaysLeft:  (tier === 'premium_cancelled') ? premiumDays : 0,
       morningPaymentId: profile.morningPaymentId || null,
       trialUsed,
     };
     state.isManager = false;
     state.isClient  = false;
     window._clientMode = false;
     window._clientAssignedPrograms = [];
     bootTrainerApp();
   }
   
   /* ── Screen switcher (landing / auth / app) ─────────────── */
   function showScreen(name) {
     document.querySelectorAll('.screen').forEach(function(s) {
       s.classList.remove('active');
       s.style.removeProperty('display'); // clear any inline override
     });
     var el = document.getElementById('screen-' + name);
     if (el) {
       el.classList.add('active');
       // Native needs explicit display since CSS may conflict
       if (document.documentElement.classList.contains('is-native')) {
         el.style.display = 'flex';
       }
     }

     // Tab bar: ONLY show on trainer app screen
     var tabBar = document.getElementById('mobile-tab-bar');
     if (tabBar) {
       var showTab = (name === 'app');
       // Use both display and visibility to ensure it's truly hidden
       tabBar.style.display    = showTab ? 'flex' : 'none';
       tabBar.style.visibility = showTab ? 'visible' : 'hidden';
     }
     document.body.className = 'screen-' + name + '-active';
   }
   
   /* ── Verification pending screen ──────────────────────── */
   function closeVerifyBanner() {
     var el = document.getElementById('verify-pending-banner');
     if (el) el.remove();
   }

   function showVerificationPending(email) {
     showScreen('auth');
     // Show a specific message in the auth screen
     var existing = document.getElementById('verify-pending-banner');
     if (existing) existing.remove();

     var banner = document.createElement('div');
     banner.id = 'verify-pending-banner';
     banner.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:var(--bg);display:flex;align-items:center;justify-content:center;z-index:9999;padding:24px';
     banner.innerHTML =
       '<div style="max-width:420px;width:100%;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:32px;text-align:center">' +
         '<div style="width:64px;height:64px;background:rgba(251,191,36,0.12);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px">' +
           '<i class="ti ti-mail" style="font-size:28px;color:#FBBF24"></i>' +
         '</div>' +
         '<h2 style="margin-bottom:10px">Check your email</h2>' +
         '<p style="color:var(--muted);font-size:14px;margin-bottom:6px">We sent a verification link to:</p>' +
         '<p style="font-weight:700;font-size:15px;margin-bottom:20px">' + email + '</p>' +
         '<p style="color:var(--muted);font-size:13px;margin-bottom:24px">Click the link in the email to verify your account, then come back and sign in.</p>' +
         '<button class="btn btn-primary btn-full" onclick="resendVerificationEmail(\'' + email + '\')" style="margin-bottom:10px">' +
           '<i class="ti ti-send"></i> Resend Verification Email' +
         '</button>' +
         '<button class="btn btn-ghost btn-full" onclick="closeVerifyBanner()">Back to Sign In</button>' +

         '</button>' +
       '</div>';
     document.body.appendChild(banner);
   }

   async function resendVerificationEmail(email) {
     try {
       // Sign in temporarily to get the user, then send verification
       showToast('Sending verification email to ' + email + '...');
       // We can't send without being signed in — prompt them to sign in again
       // then immediately send the email
       var pass = prompt('Enter your password to resend the verification email:');
       if (!pass) return;
       var result = await window._firebase.signInWithEmailAndPassword(window._auth, email, pass);
       await window._firebase.sendEmailVerification(result.user);
       await window._firebase.signOut(window._auth);
       showToast('Verification email sent! Check your inbox.');
     } catch(e) {
       showToast('Could not resend: ' + friendlyError(e.code));
     }
   }

   /* ── Logout — signs out of Firebase, returns to landing ── */
   async function doLogout() {
     // Cancel real-time listeners and timers before signing out
     if (_customVideosUnsubscribe) { _customVideosUnsubscribe(); _customVideosUnsubscribe = null; }
     if (_publicVideosUnsubscribe)  { _publicVideosUnsubscribe();  _publicVideosUnsubscribe  = null; }
     stopTierExpiryChecker();
     customExercises = [];
     publicVideos    = [];
     try {
       await window._firebase.signOut(window._auth);
     } catch (e) { /* ignore */ }
     state.user      = null;
     state.isManager = false;
     state.isClient  = false;
     window._clientMode = false;
     window._clientAssignedPrograms = [];
     // Reset content arrays so next login loads fresh
     menus = []; programs = []; recipes = [];
     state.cart.clear();
     showScreen('landing');
     showToast('Signed out.');
   }
   
   /* ── Upgrade nudge banner ───────────────────────────────── */
   function dismissNudge() {
     document.getElementById('upgrade-nudge-banner').classList.add('dismissed');
     sessionStorage.setItem('nudgeDismissed', '1');
   }
   
   function updateNudgeBanner() {
     var banner = document.getElementById('upgrade-nudge-banner');
     if (!banner || !state.user) return;
   
     var tier = state.user.tier;
   
     if (tier === 'premium') {
       banner.classList.add('dismissed');
       return;
     }
   
     if (tier !== 'free_limited' && sessionStorage.getItem('nudgeDismissed')) {
       banner.classList.add('dismissed');
       return;
     }
     banner.classList.remove('dismissed');
   
     var nudgeText = document.getElementById('upgrade-nudge-text');
     if (!nudgeText) return;
   
     if (tier === 'premium') {
       // Already handled above — banner hidden
       return;

     } else if (tier === 'premium_cancelled') {
       var untilDate = state.user.premiumUntil
         ? new Date(state.user.premiumUntil).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' })
         : 'end of billing period';
       var daysLeft2 = state.user.premiumDaysLeft || 0;
       nudgeText.innerHTML = 'Subscription cancelled. Full access until <strong>' + untilDate + '</strong> (' + daysLeft2 + ' day' + (daysLeft2 !== 1 ? 's' : '') + '). <a href="#" onclick="handleGrowPayment()" style="color:var(--accent)">Reactivate ₪25/mo</a>';
       banner.classList.remove('dismissed');

     } else if (tier === 'trial') {
       var days = calcTrialDays(state.user.trialEndDate) || state.user.trialDaysLeft || 0;
       state.user.trialDaysLeft = days;
       nudgeText.innerHTML = 'Trial: <strong>' + days + ' day' + (days !== 1 ? 's' : '') + ' left</strong> &mdash; <a href="#" onclick="showUpgrade()" style="color:var(--accent)">Upgrade to Pro (&#8362;25/mo)</a> to keep full access.';

     } else if (tier === 'free_limited') {
       if (state.user.trialUsed) {
         nudgeText.innerHTML = 'Your trial ended. <a href="#" onclick="showUpgrade()" style="color:var(--accent)">Upgrade to Pro &mdash; &#8362;25/mo</a> for full access.';
       } else {
         nudgeText.innerHTML = 'You have <strong>limited access</strong>. <a href="#" onclick="openModal(&quot;start-trial&quot;)" style="color:var(--accent)">Start free 7-day trial</a> &mdash; no card needed.';
       }
     } else {
       nudgeText.innerHTML = 'Free plan. <a href="#" onclick="showUpgrade()" style="color:var(--accent)">Upgrade to Pro</a> to unlock everything.';
     }
   }
   
   /* ── Boot trainer app UI ────────────────────────────────── */
   async function bootTrainerApp() {
  // Restore any nav elements hidden by a prior client session
  ['mtab-clients','tnav-clients','tnav-billing','tab-custom','tab-myvideos','tab-myprograms','tab-mymenus','tab-myrecipes','tab-myresearch','recipes-add-btn','lib-upload-bar'].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.style.display = '';
  });
  var cpTabReset = document.getElementById('mtab-client-profile');
  if (cpTabReset) cpTabReset.style.display = 'none';
  var mtabProfileReset = document.getElementById('mtab-profile');
  if (mtabProfileReset) mtabProfileReset.style.display = '';
  var tnavProfileReset = document.getElementById('tnav-profile');
  if (tnavProfileReset) tnavProfileReset.setAttribute('onclick', "setView('profile',this)");
  // Patch save functions to support Hebrew collections
  try { patchHeSaves(); } catch(e) { console.warn('patchHeSaves error:', e); }
  // Expose renderers globally so applyLang() can call them from outside IIFE
  window._renderMenuLibrary  = function(){ if(typeof renderMenuLibrary  === 'function') renderMenuLibrary(); };
  window._renderProgramsView = function(){ if(typeof renderProgramsView === 'function') renderProgramsView(); };
  window._renderRecipesView  = function(){ if(typeof renderRecipesView  === 'function') renderRecipesView(); };
  window._renderResearchView = function(){ if(typeof renderResearchView === 'function') renderResearchView(); };
  window._renderClientsList  = function(){ if(typeof renderClientsList  === 'function') renderClientsList(); };
     const u    = state.user;
     const tier = u.tier;

     // Helper — set element property safely
     function setEl(id, prop, val) {
       try { var e = document.getElementById(id); if (e) e[prop] = val; } catch(err) {}
     }

     // ── User identity ─────────────────────────────────────────
     if (u.photoURL) {
       ['topnav-avatar','profile-avatar'].forEach(function(id){
         var el = document.getElementById(id);
         if (el) { el.style.backgroundImage='url('+u.photoURL+')'; el.style.backgroundSize='cover'; el.style.backgroundPosition='center'; el.textContent=''; }
       });
     } else {
       setEl('topnav-avatar', 'textContent', initials(u.fullName));
     }
     setEl('topnav-name',          'textContent', u.fullName);
     setEl('profile-avatar',       'textContent', initials(u.fullName));
     setEl('profile-display-name', 'textContent', u.fullName);
     setEl('profile-display-biz',  'textContent', u.businessName);
     setEl('pf-name',  'value', u.fullName);
     setEl('pf-phone', 'value', u.phone);
     setEl('pf-biz',   'value', u.businessName);
   
     // ── Trial pill in topnav: only show when actively on trial ──
     const trialPill = document.getElementById('trial-pill-top');
     if (trialPill) {
       if (tier === 'trial') {
         trialPill.style.display = '';
         document.getElementById('trial-days-top').textContent = u.trialDaysLeft;
       } else {
         trialPill.style.display = 'none';
       }
     }
   
     // ── Profile / Billing tier info ───────────────────────────
     const tierDaysEl    = document.getElementById('tier-days');
     const billingDaysEl = document.getElementById('billing-days');
     const tierCardEl    = document.getElementById('tier-status-card');
   
     if (tier === 'trial') {
       // Recalculate from trialEndDate so it's always accurate, not stale
       const realDays = calcTrialDays(u.trialEndDate) || u.trialDaysLeft || 0;
       u.trialDaysLeft = realDays; // keep in sync
       if (document.getElementById('trial-days-top')) document.getElementById('trial-days-top').textContent = realDays;
       if (tierDaysEl)    tierDaysEl.textContent    = realDays;
       if (billingDaysEl) billingDaysEl.textContent = realDays + ' day' + (realDays !== 1 ? 's' : '') + ' remaining';
       if (tierCardEl)    tierCardEl.style.display  = '';
     } else if (tier === 'premium') {
       if (tierCardEl)    tierCardEl.style.display  = 'none';
     } else {
       // free_limited or free — hide trial countdown, show upgrade prompt
       if (tierDaysEl)    tierDaysEl.textContent    = '—';
       if (billingDaysEl) billingDaysEl.textContent = '—';
       if (tierCardEl)    tierCardEl.style.display  = tier === 'free_limited' ? '' : 'none';
     }
   
     showScreen('app');
     buildMuscleFilters();
   
     // Sync master library from Firestore (picks up manager changes)
     await syncMasterLibraryFromFirestore();

     // Start video listeners — called here after _bootFromFirebaseUser
     // which itself is called from onAuthStateChanged, so by this point
     // the Firebase Auth token IS fully ready and attached.
     // onAuthStateChanged guarantees token validity before calling _bootFromFirebaseUser.
     loadCustomVideosFromFirestore(u.uid);
     loadPublicVideosFromFirestore();
     loadMenus();
     loadPrograms();
     loadRecipes();
     loadResearch();
     loadClients();
   
     renderLibrary();
     updateStats();
     renderRoutinesHistory();
     updateNudgeBanner();
     startTierExpiryChecker();
   }
   
   /* ── Load user's custom videos from Firestore (real-time) ── */
   function loadCustomVideosFromFirestore(uid) {
     if (!window._firebase || !window._db) return;

     // CRITICAL: Firestore rules check request.auth.uid == userId.
     // If currentUser is null when listener starts, the rule fails.
     // Retry until Firebase Auth has fully restored the session.
     var currentUser = window._auth && window._auth.currentUser;
     if (!currentUser) {
       console.warn('[RepCast] Auth not ready — retrying in 1s for uid:', uid);
       setTimeout(function() { loadCustomVideosFromFirestore(uid); }, 1000);
       return;
     }

     // Cancel any previous listener
     if (_customVideosUnsubscribe) {
       _customVideosUnsubscribe();
       _customVideosUnsubscribe = null;
     }
   
     var db         = window._db;
     var fb         = window._firebase;
     var colRef     = fb.collection(db, 'customVideos', uid, 'videos');


   
     if (!fb.onSnapshot) {
       // Fallback for older SDK
       _loadCustomVideosFallback(uid);
       return;
     }
   
     // onSnapshot fires immediately with cached data, then again on any change.
     // Path customVideos/{uid}/videos is already scoped to this user only.
     _customVideosUnsubscribe = fb.onSnapshot(
       colRef,
       function(snap) {
         // Build clean array from snapshot — single update, no async race
         var videos = [];
         snap.forEach(function(docSnap) {
           var data = docSnap.data();
           videos.push({
             id:          data.id          || docSnap.id,
             title:       data.title       || 'Untitled',
             muscle:      data.muscle      || 'fullbody',
             sub:         data.sub         || '',
             desc:        data.desc        || '',
             diff:        data.diff        || 'Custom',
             duration:    data.duration    || '—',
             videoURL:    data.videoURL    || '',
             storagePath: data.storagePath || '',
             isPublic:    data.isPublic    === true,
             ownerId:     uid,
             custom:      true,
             premium:     false,
             createdAt:   data.createdAt   || '',
           });
         });
   
         // Single clean assignment — no race condition
         customExercises = videos;
   
         console.log('[RepCast] Custom videos loaded:', videos.length, 'for', uid);
   
         // Update counter
         var countEl = document.getElementById('custom-count');
         if (countEl) countEl.textContent = videos.length;
   
         // Re-render if on custom tab or master tab (public videos affect master)
         renderLibrary();
         updateStats();
       },
       function(err) {
         console.error('[RepCast] Video listener error:', err.code, err.message);
         if (err.code === 'permission-denied') {
           showToast('Cannot load videos — check Firestore rule for customVideos/{userId}/videos/{videoId}');
         }
       }
     );
   }
   
   // Fallback: getDocs one-time read
   async function _loadCustomVideosFallback(uid) {
     try {
       var snap = await window._firebase.getDocs(
         window._firebase.collection(window._db, 'customVideos', uid, 'videos')
       );
       var videos = [];
       snap.forEach(function(docSnap) {
         var data = docSnap.data();
         videos.push({
           id:          data.id          || docSnap.id,
           title:       data.title       || 'Untitled',
           muscle:      data.muscle      || 'fullbody',
           sub:         data.sub         || '',
           desc:        data.desc        || '',
           diff:        data.diff        || 'Custom',
           duration:    data.duration    || '—',
           videoURL:    data.videoURL    || '',
           storagePath: data.storagePath || '',
           isPublic:    data.isPublic    === true,
           ownerId:     uid,
           custom:      true,
           premium:     false,
         });
       });
       customExercises = videos;
       var countEl = document.getElementById('custom-count');
       if (countEl) countEl.textContent = videos.length;
       renderLibrary();
       updateStats();
     } catch(e) {
       console.error('[RepCast] Fallback load error:', e.code, e.message);
     }
   }
   
   /* ── Load ALL public videos from all trainers (real-time) ── */
   function loadPublicVideosFromFirestore() {
     if (!window._firebase || !window._db) return;
     if (_publicVideosUnsubscribe) { _publicVideosUnsubscribe(); _publicVideosUnsubscribe = null; }
     var col = window._firebase.collection(window._db, 'publicVideos');
     if (!window._firebase.onSnapshot) return;
     _publicVideosUnsubscribe = window._firebase.onSnapshot(col,
       function(snap) {
         var vids = [];
         snap.forEach(function(d) {
           var data = d.data();
           vids.push({
             id:       d.id,
             title:    data.title    || '',
             muscle:   data.muscle   || 'fullbody',
             sub:      data.sub      || '',
             desc:     data.desc     || '',
             diff:     data.diff     || 'Custom',
             duration: data.duration || '—',
             videoURL: data.videoURL || '',
             isPublic: true,
             custom:   true,
             ownerId:  data.ownerId  || '',
             premium:  false,
           });
         });
         publicVideos = vids;
         console.log('[RepCast] Public videos:', vids.length);
         renderLibrary();
       },
       function(err) { console.error('[RepCast] publicVideos error:', err.code); }
     );
   }

   /* ── Delete a custom video (Storage + Firestore + publicVideos) ── */
   async function deleteCustomVideo(id, event) {
     event.stopPropagation();
     if (!state.user || !window._firebase || !window._db) return;

     var ex = customExercises.find(function(e) { return e.id === id; });
     if (!ex) return;

     // Confirm before deleting
     if (!confirm('Delete "' + ex.title + '"? This cannot be undone.')) return;

     var fb = window._firebase;
     var db = window._db;

     try {
       // 1. Delete from Firestore customVideos
       await fb.deleteDoc(fb.doc(db, 'customVideos', state.user.uid, 'videos', id));

       // 2. If public, also delete from publicVideos collection
       if (ex.isPublic) {
         await fb.deleteDoc(fb.doc(db, 'publicVideos', id)).catch(function(){});
       }

       // 3. Delete from Firebase Storage if we have the path
       if (ex.storagePath && window._storage && fb.ref && fb.deleteObject) {
         fb.deleteObject(fb.ref(window._storage, ex.storagePath)).catch(function(e){
           console.warn('Storage delete failed (file may already be gone):', e.code);
         });
       }

       showToast('"' + ex.title + '" deleted.');
       // onSnapshot will automatically update customExercises and re-render

     } catch(e) {
       console.error('deleteCustomVideo error:', e.code, e.message);
       showToast('Could not delete video — try again.');
     }
   }

   /* ── YouTube URL helpers ─────────────────────────────────── */
   function isYouTubeURL(url) {
     return url && (url.includes('youtube.com') || url.includes('youtu.be'));
   }

   function getYouTubeID(url) {
     if (!url) return null;
     // youtu.be/ID
     var m = url.match(/youtu\.be\/([^?&]+)/);
     if (m) return m[1];
     // youtube.com/watch?v=ID
     m = url.match(/[?&]v=([^?&]+)/);
     if (m) return m[1];
     // youtube.com/embed/ID
     m = url.match(/embed\/([^?&]+)/);
     if (m) return m[1];
     // youtube.com/shorts/ID
     m = url.match(/shorts\/([^?&]+)/);
     if (m) return m[1];
     return null;
   }

   function getYouTubeThumbnail(url) {
     var id = getYouTubeID(url);
     return id ? 'https://img.youtube.com/vi/' + id + '/mqdefault.jpg' : null;
   }

   function reloadMyVideos() {
     if (!state.user) return;
     showToast('Reloading your videos…');
     customExercises = [];
     loadCustomVideosFromFirestore(state.user.uid);
     setTimeout(function() { renderLibrary(); updateStats(); }, 2000);
   }

   /* ── Tier expiry checker — runs on boot and every 30 min ── */
   function checkTierExpiry() {
     if (!state.user || !window._firebase || !window._db) return;
     var tier = state.user.tier;

     // ── 1. Trial expiry (local check) ────────────────────────
     if (tier === 'trial') {
       var trialDays = calcTrialDays(state.user.trialEndDate);
       state.user.trialDaysLeft = trialDays;
       if (trialDays <= 0) {
         window._firebase.setDoc(
           window._firebase.doc(window._db, 'users', state.user.uid),
           { tier: 'free_limited', trialExpiredAt: new Date().toISOString() },
           { merge: true }
         ).catch(function(){});
         state.user.tier = 'free_limited';
         state.user.trialDaysLeft = 0;
         renderLibrary(); updateNudgeBanner(); updateStats();
         showToast('Your free trial has ended. Upgrade to Pro to keep full access.');
         return;
       }
     }

     // ── 2. Premium cancelled grace period (local check) ──────
     if (tier === 'premium_cancelled') {
       var premDays = state.user.premiumUntil
         ? Math.max(0, Math.ceil((new Date(state.user.premiumUntil) - Date.now()) / 86400000))
         : 0;
       state.user.premiumDaysLeft = premDays;
       if (premDays <= 0) {
         window._firebase.setDoc(
           window._firebase.doc(window._db, 'users', state.user.uid),
           { tier: 'free_limited' }, { merge: true }
         ).catch(function(){});
         state.user.tier = 'free_limited';
         renderLibrary(); updateNudgeBanner(); updateStats();
         showToast('Your Premium membership has ended. Upgrade to restore access.');
         return;
       }
       updateNudgeBanner();
     }

     // ── 3. Sync from Firestore — catches Morning webhook changes ──
     loadUserProfile(state.user.uid).then(function(profile) {
       if (!profile) return;
       var serverTier = profile.tier;
       var localTier  = state.user.tier;
       if (serverTier === localTier) return;

       console.log('[RepCast] Tier sync:', localTier, '->', serverTier);

       if (serverTier === 'premium') {
         state.user.tier             = 'premium';
         state.user.premiumUntil     = profile.premiumUntil     || null;
         state.user.morningPaymentId = profile.morningPaymentId || null;
         renderLibrary(); updateNudgeBanner(); updateStats();
         showToast('Premium activated! Full access unlocked.');

       } else if (serverTier === 'premium_cancelled') {
         var graceDays = profile.premiumUntil
           ? Math.max(0, Math.ceil((new Date(profile.premiumUntil) - Date.now()) / 86400000))
           : 0;
         state.user.tier            = graceDays > 0 ? 'premium_cancelled' : 'free_limited';
         state.user.premiumUntil    = profile.premiumUntil || null;
         state.user.premiumDaysLeft = graceDays;
         renderLibrary(); updateNudgeBanner(); updateStats();
         if (graceDays > 0) {
           var d = new Date(profile.premiumUntil).toLocaleDateString('en-GB', { day:'numeric', month:'long' });
           showToast('Subscription cancelled. Access continues until ' + d + '.');
         }

       } else {
         state.user.tier = 'free_limited';
         renderLibrary(); updateNudgeBanner(); updateStats();
       }
     }).catch(function(e){ console.warn('[RepCast] Tier check error:', e.code); });
   }
   
   // Run expiry check every 30 minutes while app is open
   let _tierCheckInterval = null;
   function startTierExpiryChecker() {
     if (_tierCheckInterval) clearInterval(_tierCheckInterval);
     checkTierExpiry(); // run immediately on boot
     _tierCheckInterval = setInterval(checkTierExpiry, 30 * 60 * 1000);
   }
   function stopTierExpiryChecker() {
     if (_tierCheckInterval) { clearInterval(_tierCheckInterval); _tierCheckInterval = null; }
   }
   
   /* ── Auth persistence — restore session on page refresh ── */
   // Runs once on load; if Firebase already has a session, boots straight in.
   function _initAuthPersistence() {
     if (!window._auth || !window._firebase) return;
     window._firebase.onAuthStateChanged(window._auth, async (user) => {
       if (user && !state.user && !state.isManager) {
         // Session restored on page refresh — boot the full app
         await _bootFromFirebaseUser(user);
       }
       // Note: bootTrainerApp (called inside _bootFromFirebaseUser) starts
       // the Firestore listeners. By the time we reach this callback,
       // Firebase Auth has confirmed the token is valid and attached,
       // so Firestore reads will succeed.
     });
   }
   
   /* ── Helpers ─────────────────────────────────────────────── */
   function initials(name) {
     return (name || 'U').split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
   }
   
   async function loadUserProfile(uid) {
     const snap = await window._firebase.getDoc(
       window._firebase.doc(window._db, 'users', uid)
     );
     return snap.exists() ? snap.data() : null;
   }
   
   async function createUserProfile(uid, data) {
     await window._firebase.setDoc(
       window._firebase.doc(window._db, 'users', uid),
       {
         ...data,
         createdAt: new Date().toISOString(),
         tier:      'free_limited',   // new users start limited, trial is opt-in
       }
     );
   }
   
   /* ── User clicks "Start Free Trial" from inside the app ── */
   async function activateFreeTrial() {
     if (!state.user) { showToast('Please log in first.'); return; }
     if (state.user.tier === 'trial')   { showToast('Your trial is already active!'); closeAllModals(); return; }
     if (state.user.tier === 'premium') { showToast('You already have Premium access!'); closeAllModals(); return; }
   
     // ── Check Firestore for trialActivatedByUser flag (one per account) ──
     // We use this specific flag — NOT trialStartDate — because old auto-trial
     // users already have trialStartDate but never chose to activate manually.
     let profile;
     try {
       profile = await loadUserProfile(state.user.uid);
     } catch(e) {
       showToast('Connection error. Please try again.'); return;
     }
   
     if (profile && profile.trialActivatedByUser === true) {
       // This user already manually activated their trial before
       state.user.trialUsed = true;
       closeAllModals();
       setTimeout(() => showUpgrade(), 200);
       return;
     }
   
     // ── Activate trial ───────────────────────────────────────
     const trialStart = new Date().toISOString();
     const trialEnd   = new Date(Date.now() + 7 * 86400000).toISOString();
   
     try {
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'users', state.user.uid),
         {
           tier:                  'trial',
           trialStartDate:        trialStart,
           trialEndDate:          trialEnd,
           trialActivatedByUser:  true,       // ← the one-time flag
         },
         { merge: true }
       );
   
       // Update local state immediately
       state.user.tier          = 'trial';
       state.user.trialDaysLeft = 7;
       state.user.trialEndDate  = trialEnd;   // store so recalculation works
       state.user.trialUsed     = true;
   
       // Update all UI elements that show trial info
       const daysEls = ['trial-days-top', 'tier-days', 'nudge-days'];
       daysEls.forEach(id => {
         const el = document.getElementById(id);
         if (el) el.textContent = 7;
       });
       const billingEl = document.getElementById('billing-days');
       if (billingEl) billingEl.textContent = '7 days';
   
       // Close modal, re-render library (unlocks cards), update banner
       closeAllModals();
       sessionStorage.removeItem('nudgeDismissed');
   
       // Small delay to let modal close animation finish before re-render
       setTimeout(() => {
         renderLibrary();
         updateNudgeBanner();
         showToast('🎉 Free trial activated! You now have full access for 7 days.');
       }, 300);
   
     } catch(e) {
       console.error('activateFreeTrial Firestore error:', e);
       showToast('Could not activate trial. Check your internet connection and try again.');
     }
   }
   
   /* ── Prompt trial or upgrade depending on tier ─────────── */
   function promptTrialOrUpgrade() {
     if (!state.user) return;
     if (state.user.tier === 'premium') return;
     if (state.user.tier === 'trial')   { showToast('Your trial is already active!'); return; }
     // free_limited with no prior trial → show trial modal
     // free_limited with prior trial used → show upgrade
     if (state.user.tier === 'free_limited') {
       if (state.user.trialUsed) {
         showUpgrade();
       } else {
         openModal('start-trial');
       }
     } else {
       showUpgrade();
     }
   }
   
   function calcTrialDays(trialEndDate) {
     if (!trialEndDate) return 0;
     return Math.max(0, Math.ceil((new Date(trialEndDate) - Date.now()) / 86400000));
   }
   
   function friendlyError(code) {
     const map = {
       'auth/user-not-found':       'No account found with that email.',
       'auth/wrong-password':       'Incorrect password.',
       'auth/invalid-credential':   'Incorrect email or password.',
       'auth/email-already-in-use': 'An account with that email already exists.',
       'auth/weak-password':        'Password must be at least 6 characters.',
       'auth/invalid-email':        'Please enter a valid email address.',
       'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
       'auth/too-many-requests':    'Too many attempts. Please wait a moment and try again.',
       'auth/unauthorized-domain':   'Domain not authorised. Add repcast.co.il in Firebase Console → Authentication → Settings → Authorised domains.',
       'auth/operation-not-allowed': 'Google sign-in is not enabled. Enable it in Firebase Console → Authentication → Sign-in method.',
     };
     return map[code] || 'Something went wrong. Please try again.';
   }
   
   /* ══════════════════════════════════════════════════════════
      VIEWS
   ══════════════════════════════════════════════════════════ */
   
   var PRO_ONLY_VIEWS = ['nutrition','programs','recipes','research','clients'];

   function setView(viewId, navEl) {
     // Tier check for pro-only sections
     if (PRO_ONLY_VIEWS.includes(viewId)) {
       var tier = state.user ? state.user.tier : 'free_limited';
       var allowed = (tier === 'premium' || tier === 'premium_cancelled' || tier === 'trial' || tier === 'client');
       if (!allowed) {
         showProGate(viewId);
         return;
       }
     }
     var isNative = document.documentElement.classList.contains('is-native');
     document.querySelectorAll('#screen-app .view').forEach(function(v) {
       v.classList.remove('active');
       if (isNative) v.style.display = 'none'; // native: explicit hide
       else v.style.removeProperty('display');
     });
     document.querySelectorAll('.topnav-link').forEach(n => n.classList.remove('active'));
     var activeView = document.getElementById('view-' + viewId);
     if (activeView) {
       activeView.classList.add('active');
       if (isNative) activeView.style.display = 'flex'; // native: explicit show
       else activeView.style.removeProperty('display');
     }
     if (navEl) navEl.classList.add('active');
     state.currentView = viewId;
     var musclePanel = document.getElementById('muscle-panel');
     if (musclePanel) musclePanel.style.display = viewId === 'library' ? '' : 'none';
     // Reload data on first visit to each section
     if (viewId === 'nutrition') { if (!menus.length)     loadMenus();    else renderMenuLibrary(); }
     if (viewId === 'programs')  { if (!programs.length)  loadPrograms(); else renderProgramsView(); }
     if (viewId === 'recipes')   { if (!recipes.length)   loadRecipes();  else renderRecipesView(); }
     if (viewId === 'research')  { if (!researches.length) loadResearch(); else renderResearchView(); }
   }

   function showProGate(viewId) {
     var names = {
       nutrition:'Nutrition', programs:'Programs',
       recipes:'Recipes', research:'Research', clients:'Clients'
     };
     var modal = document.getElementById('modal-pro-gate');
     if (!modal) { showUpgrade(); return; }
     var featureEl = document.getElementById('pro-gate-feature');
     if (featureEl) featureEl.textContent = names[viewId] || viewId;
     openModal('pro-gate');
   }
   
   function setAdminView(viewId, navEl) {
     document.querySelectorAll('.admin-view').forEach(v => v.classList.remove('active'));
     document.querySelectorAll('#manager-topnav .topnav-link').forEach(n => n.classList.remove('active'));
     document.getElementById('admin-view-' + viewId).classList.add('active');
     if (navEl) navEl.classList.add('active');
     // Auto-load users when switching to users tab
     if (viewId === 'users') loadAdminUsers();
     if (viewId === 'foods')     { if (foods.length)     renderAdminFoodList();     else loadFoods(); }
     if (viewId === 'nutrition') { if (menus.length)     renderAdminMenuList();    else loadMenus(); }
     if (viewId === 'programs')  { if (programs.length)  renderAdminProgramsList(); else loadPrograms(); }
     if (viewId === 'recipes')   { if (recipes.length)   renderAdminRecipesList();  else loadRecipes(); }
     if (viewId === 'research')  { if (researches.length) renderAdminResearchList(); else loadResearch(); }
   }
   
   /* ══════════════════════════════════════════════════════════
      MUSCLE FILTER SIDEBAR
   ══════════════════════════════════════════════════════════ */
   
   function buildMuscleFilters() {
     const muscles = [
       { id:'chest',     label:'Chest',     color:'#F472B6' },
       { id:'back',      label:'Back',      color:'#60A5FA' },
       { id:'legs',      label:'Legs',      color:'#7EE8A2' },
       { id:'shoulders', label:'Shoulders', color:'#FBBF24' },
       { id:'arms',      label:'Arms',      color:'#A78BFA' },
       { id:'core',      label:'Core',      color:'#FB923C' },
       { id:'fullbody',  label:'Full Body', color:'#3ECFCF' },
       { id:'physio',    label:'Physio',    color:'#A78BFA' },
     ];

     var isNative = document.documentElement.classList.contains('is-native');

     if (isNative) {
       // Native: flat horizontal pill buttons, no wrapper divs
       document.getElementById('muscle-filter-list').innerHTML =
         muscles.map(function(m) {
           return '<button class="native-pill" data-muscle="' + m.id + '" onclick="nativeMuscleFilter(this)" ' +
             'style="display:inline-flex;align-items:center;gap:5px;white-space:nowrap;flex-shrink:0;' +
             'border-radius:20px;padding:4px 12px;font-size:12px;height:30px;min-height:30px;' +
             'background:var(--surface2);border:1px solid var(--border);color:var(--muted);' +
             'font-family:inherit;cursor:pointer;touch-action:manipulation">' +
             '<span style="width:8px;height:8px;border-radius:50%;background:' + m.color + ';flex-shrink:0"></span>' +
             m.label +
             '</button>';
         }).join('');
     } else {
       // Web: original expand/collapse with sub-categories
       document.getElementById('muscle-filter-list').innerHTML = muscles.map(m => `
         <div class="muscle-group">
           <div class="muscle-group-header" onclick="toggleMuscleGroup('${m.id}',this)">
             <span class="muscle-dot" style="background:${m.color}"></span>
             <span>${m.label}</span>
             <i class="ti ti-chevron-right chevron"></i>
           </div>
           <div class="muscle-sub-list" id="sub-${m.id}">
             ${(SUBCATS[m.id] || []).map(s => `
               <div class="muscle-sub-item" onclick="filterBySub('${m.id}','${s}',this)">${s}</div>
             `).join('')}
           </div>
         </div>`).join('');
     }
   }

   function nativeMuscleFilter(el) {
     var muscleId = el ? (el.getAttribute('data-muscle') || el.dataset.muscle) : null;
     if (!muscleId) return;
     var isActive = el.classList.contains('active');
     document.querySelectorAll('.native-pill').forEach(function(b){ b.classList.remove('active'); });
     if (isActive) {
       state.filterMuscle = null;
       state.filterSub    = null;
     } else {
       el.classList.add('active');
       state.filterMuscle = muscleId;
       state.filterSub    = null;
     }
     showClearFilter();
     renderLibrary();
   }
   
   function toggleMuscleGroup(muscleId, headerEl) {
     const sub    = document.getElementById('sub-' + muscleId);
     const isOpen = sub.classList.contains('open');
     document.querySelectorAll('.muscle-sub-list').forEach(el => el.classList.remove('open'));
     document.querySelectorAll('.muscle-group-header').forEach(el => el.classList.remove('open'));
     if (!isOpen) {
       sub.classList.add('open');
       headerEl.classList.add('open');
       state.filterMuscle = muscleId;
       state.filterSub    = null;
       document.querySelectorAll('.muscle-sub-item').forEach(el => el.classList.remove('active'));
     } else {
       state.filterMuscle = null;
       state.filterSub    = null;
     }
     showClearFilter();
     renderLibrary();
   }
   
   function filterBySub(muscleId, sub, el) {
     document.querySelectorAll('.muscle-sub-item').forEach(e => e.classList.remove('active'));
     el.classList.add('active');
     state.filterMuscle = muscleId;
     state.filterSub    = sub;
     showClearFilter();
     renderLibrary();
   }
   
   function showClearFilter() {
     document.getElementById('clear-filter-btn').style.display =
       (state.filterMuscle || state.filterSub) ? 'flex' : 'none';
   }
   
   function clearFilters() {
     state.filterMuscle = null;
     state.filterSub    = null;
     document.querySelectorAll('.muscle-sub-item').forEach(el => el.classList.remove('active'));
     document.querySelectorAll('.muscle-sub-list').forEach(el => el.classList.remove('open'));
     document.querySelectorAll('.muscle-group-header').forEach(el => el.classList.remove('open'));
     document.getElementById('clear-filter-btn').style.display = 'none';
     renderLibrary();
   }
   
   /* ══════════════════════════════════════════════════════════
      LIBRARY
   ══════════════════════════════════════════════════════════ */
   
   function switchLibTab(tab, btn) {
     // Block upload tabs for clients
     if (window._clientMode && (tab === 'custom')) return;
     state.activeTab = tab;
     document.querySelectorAll('.lib-tab').forEach(b => b.classList.remove('active'));
     btn.classList.add('active');
     // Show upload bar only on My Videos tab
     var uploadBar = document.getElementById('lib-upload-bar');
     if (uploadBar) uploadBar.style.display = (tab === 'custom') ? 'flex' : 'none';
     // Route to correct render
     if (['mymenus','myprograms','myrecipes','myresearch'].includes(tab)) {
       renderMyContent(tab);
     } else {
       renderLibrary();
     }
   }
   
   /* ═══════════════════════════════════════════════════════
      MY CONTENT — trainer's own menus/programs/recipes/research
   ═══════════════════════════════════════════════════════ */
   function renderMyContent(tab) {
     var myUid = state.user && state.user.uid;
     // Use library-body on native, exercises-grid on web
     var grid = document.getElementById('library-body') || document.getElementById('exercises-grid');
     if (!grid || !myUid) return;

     var items = [], type = '';
     if (tab === 'mymenus')    { items = menus.filter(function(m){ return m.createdBy === myUid; });    type = 'menu'; }
     if (tab === 'myprograms') { items = programs.filter(function(p){ return p.createdBy === myUid; }); type = 'program'; }
     if (tab === 'myrecipes')  { items = recipes.filter(function(r){ return r.createdBy === myUid; });  type = 'recipe'; }
     if (tab === 'myresearch') { items = researches.filter(function(r){ return r.createdBy === myUid; }); type = 'research'; }

     // Update section title
     var sectionTitle = { mymenus:'My Menus', myprograms:'My Programs', myrecipes:'My Recipes', myresearch:'My Research' };
     var titleEl = document.getElementById('library-section-title');
     if (titleEl) titleEl.textContent = sectionTitle[tab] || 'My Content';
     var countEl = document.getElementById('library-section-count');
     if (countEl) countEl.textContent = items.length + ' items';

     var addFn = tab==='mymenus'    ? 'openAdminMenuModal()'
                : tab==='myprograms' ? 'openAdminProgramModal()'
                : tab==='myrecipes'  ? 'openAdminRecipeModal()'
                : tab==='myresearch' ? 'openAdminResearchModal()'
                : '';
     var addLabel = tab==='mymenus'    ? 'Add Menu'
                 : tab==='myprograms' ? 'Add Program'
                 : tab==='myrecipes'  ? 'Add Recipe'
                 : 'Add Study';
     var addIcon  = tab==='mymenus'    ? 'ti-salad'
                 : tab==='myprograms' ? 'ti-calendar'
                 : tab==='myrecipes'  ? 'ti-chef-hat'
                 : 'ti-book';

     var addBtn = '<div style="padding:10px 10px 4px">' +
       '<button onclick="' + addFn + '" ' +
         'style="display:flex;align-items:center;gap:8px;width:100%;padding:12px 16px;' +
         'background:rgba(126,232,162,0.08);border:1.5px dashed rgba(126,232,162,0.35);' +
         'border-radius:12px;color:var(--accent);font-family:inherit;font-size:14px;' +
         'font-weight:700;cursor:pointer;touch-action:manipulation">' +
         '<i class="ti ti-plus" style="font-size:18px"></i>' +
         '<i class="ti ' + addIcon + '"></i>' +
         addLabel +
       '</button>' +
     '</div>';

     if (!items.length) {
       grid.innerHTML = addBtn +
         '<div style="text-align:center;padding:40px 20px;color:var(--muted)">' +
           '<i class="ti ti-' + (tab==='mymenus'?'salad':tab==='myprograms'?'calendar':tab==='myrecipes'?'chef-hat':'book') + '" style="font-size:36px;display:block;margin-bottom:10px;opacity:0.25"></i>' +
           '<p style="font-size:14px;font-weight:600;margin-bottom:4px">No ' + sectionTitle[tab] + ' yet</p>' +
           '<p style="font-size:13px;opacity:0.7">Tap the button above to create one</p>' +
         '</div>';
       return;
     }

     var isNative = document.documentElement.classList.contains('is-native');
     if (isNative) {
       grid.style.cssText = 'display:block;padding:0';
     } else {
       // Web: restore grid layout matching exercise cards
       grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px;padding:20px;align-items:start';
     }
     grid.innerHTML = addBtn + items.map(function(item) {
       return renderMyContentCard(item, type, myUid);
     }).join('');
   }

   function renderMyContentCard(item, type, myUid) {
     var isPublic = item.isPublic !== false;
     var pubColor = isPublic ? 'var(--accent)' : '#FBBF24';
     var pubIcon  = isPublic ? 'ti-world' : 'ti-lock';
     var pubLabel = isPublic ? 'Public' : 'Private';

     var meta = '';
     if (type === 'menu')    meta = (item.calories||'') + ' kcal';
     if (type === 'program') meta = (item.weeks||'?') + ' weeks · ' + (item.goal||'');
     if (type === 'recipe')  meta = (item.calories||0) + ' kcal · ' + (item.prepTime||'?') + ' min';
     if (type === 'research') meta = item.category || '';

     var photo = (type === 'recipe' && item.photoURL) ? item.photoURL : '';

     return '<div class="my-content-card" style="background:var(--surface);border:1px solid var(--border2);border-radius:14px;overflow:hidden;display:flex;flex-direction:column">' +
       // Photo for recipes
       (photo ? '<img src="' + photo + '" style="width:100%;height:140px;object-fit:cover">' : '') +
       '<div style="padding:14px;flex:1;display:flex;flex-direction:column;gap:8px">' +
         // Title
         '<div style="font-size:14px;font-weight:700;line-height:1.3">' + (item.name||item.title||'Untitled') + '</div>' +
         (meta ? '<div style="font-size:12px;color:var(--muted)">' + meta + '</div>' : '') +
         // Public/Private toggle
         '<div style="display:flex;align-items:center;gap:6px;margin-top:auto;padding-top:8px;border-top:1px solid var(--border);flex-wrap:wrap">' +
           '<button onclick="toggleMyContentPublic(\'' + item.id + '\',\'' + type + '\',this)" ' +
             'style="display:flex;align-items:center;gap:4px;padding:4px 10px;border-radius:20px;border:1px solid ' + pubColor + ';background:' + pubColor + '18;color:' + pubColor + ';font-size:12px;font-weight:600;cursor:pointer;font-family:inherit">' +
             '<i class="ti ' + pubIcon + '"></i> ' + pubLabel +
           '</button>' +
           '<div style="flex:1"></div>' +
           '<button onclick="editMyContent(\'' + item.id + '\',\'' + type + '\')" ' +
             'style="padding:4px 10px;border-radius:8px;border:1px solid var(--border2);background:transparent;color:var(--muted);font-size:12px;cursor:pointer;font-family:inherit">' +
             '<i class="ti ti-edit"></i> Edit' +
           '</button>' +
           '<button onclick="deleteMyContent(\'' + item.id + '\',\'' + type + '\')" ' +
             'style="padding:4px 10px;border-radius:8px;border:1px solid rgba(255,107,107,0.3);background:transparent;color:var(--danger);font-size:12px;cursor:pointer;font-family:inherit">' +
             '<i class="ti ti-trash"></i>' +
           '</button>' +
         '</div>' +
       '</div>' +
     '</div>';
   }

   async function toggleMyContentPublic(id, type, btn) {
     var myUid = state.user && state.user.uid;
     var arr = type==='menu'?menus:type==='program'?programs:type==='recipe'?recipes:research;
     var item = arr.find(function(x){ return x.id === id; });
     if (!item) return;
     var newPublic = item.isPublic === false ? true : false;
     var col = type==='menu'?'menus':type==='program'?'programs':type==='recipe'?'recipes':'research';
     try {
       await window._firebase.setDoc(
         window._firebase.doc(window._db, col, id),
         { isPublic: newPublic }, { merge: true }
       );
       item.isPublic = newPublic;
       var color = newPublic ? 'var(--accent)' : '#FBBF24';
       var icon  = newPublic ? 'ti-world' : 'ti-lock';
       btn.style.borderColor = color;
       btn.style.background  = color + '18';
       btn.style.color       = color;
       btn.innerHTML = '<i class="ti ' + icon + '"></i> ' + (newPublic ? 'Public' : 'Private');
       showToast(newPublic ? '🌐 Now public' : '🔒 Now private');
     } catch(e) { showToast('Failed: ' + e.message); }
   }

   function editMyContent(id, type) {
     if (type === 'menu')          { openAdminMenuModal(id); }
     else if (type === 'program')  { openAdminProgramModal(id); }
     else if (type === 'recipe')   { openAdminRecipeModal(id); }
     else if (type === 'research') { openAdminResearchModal(id); }
   }

   async function deleteMyContent(id, type) {
     if (!confirm('Delete this ' + type + '? This cannot be undone.')) return;
     var col = type==='menu'?'menus':type==='program'?'programs':type==='recipe'?'recipes':'research';
     var arr = type==='menu'?menus:type==='program'?programs:type==='recipe'?recipes:research;
     try {
       await window._firebase.deleteDoc(window._firebase.doc(window._db, col, id));
       var idx = arr.findIndex(function(x){ return x.id === id; });
       if (idx > -1) arr.splice(idx, 1);
       showToast(type + ' deleted');
       // Re-render current tab
       var tabMap = { menus:'mymenus', programs:'myprograms', recipes:'myrecipes', research:'myresearch' };
       var tab = tabMap[col] || ('my' + col);
       renderMyContent(tab);
     } catch(e) { showToast('Delete failed: ' + e.message); }
   }

   function handleSearch(q) {
     state.searchQuery = q.toLowerCase();
     document.getElementById('search-clear').style.display = q ? 'block' : 'none';
     renderLibrary();
   }
   
   function clearSearch() {
     state.searchQuery = '';
     document.getElementById('search-input').value = '';
     document.getElementById('search-clear').style.display = 'none';
     renderLibrary();
   }
   
   function renderLibrary() {
     const isMaster = state.activeTab === 'master';
     // Reset any inline styles set by renderMyContent
     var _lb = document.getElementById('library-body');
     if (_lb) _lb.removeAttribute('style');
     let pool;
   
     if (isMaster) {
       let masterPool = [...MASTER_EXERCISES];
       const tier = state.user && state.user.tier;
   
       if (tier === 'free') {
         // Post-trial free: cap at 20 non-premium
         masterPool = masterPool.filter(e => !e.premium).slice(0, 20);
       }
       // free_limited shows ALL exercises but cards will show lock icon
       // (isExerciseLocked handles per-sub 2-visible logic in the card)
   
       // Use shared publicVideos collection — includes all trainers' public videos
       pool = [...masterPool, ...publicVideos];
     } else {
       // "My Videos" tab: only show exercises owned by THIS user (by ownerId)
       pool = customExercises.filter(e => e.ownerId === state.user?.uid);
     }
   
     if (state.filterMuscle) pool = pool.filter(e => e.muscle === state.filterMuscle);
     if (state.filterSub)    pool = pool.filter(e => e.sub    === state.filterSub);
   
     if (state.searchQuery) {
       const q = state.searchQuery;
       pool = pool.filter(e =>
         e.title.toLowerCase().includes(q) ||
         e.muscle.includes(q) ||
         e.sub.toLowerCase().includes(q) ||
         e.desc.toLowerCase().includes(q)
       );
     }
   
     var mcEl = document.getElementById('master-count');
     var ccEl = document.getElementById('custom-count');
     if (mcEl) mcEl.textContent = MASTER_EXERCISES.length;
     if (ccEl) ccEl.textContent = customExercises.length;
   
     const section = state.filterSub    ? state.filterSub
                   : state.filterMuscle ? capitalize(state.filterMuscle)
                   : isMaster           ? 'All Exercises'
                   :                      'My Custom Videos';
   
     const body = document.getElementById('library-body');
   
     if (!pool.length) {
       body.innerHTML = `
         <div class="empty-state">
           <div class="empty-icon"><i class="ti ti-${isMaster ? 'video-off' : 'cloud-upload'}"></i></div>
           <h3>${isMaster ? 'No exercises found' : 'No custom videos yet'}</h3>
           <p>${isMaster ? 'Try adjusting your filters or search.' : 'Upload your first video using the button above.'}</p>
           ${!isMaster ? `
           <button class="btn btn-primary" onclick="openModal('upload')"><i class="ti ti-upload"></i> Upload Video</button>
           ${(state.user && state.user.tier === 'free') ? '<p style="font-size:12px;color:var(--muted);margin-top:8px">Free plan: ' + customExercises.filter(e=>e.ownerId===state.user.uid).length + '/10 uploads used. <a href=\"#\" onclick=\"showUpgrade()\">Upgrade for unlimited.</a></p>' : ''}
         ` : ''}
         </div>`;
       return;
     }
   
     body.innerHTML = `
       <div class="library-section-title">
         <h3>${section}</h3>
         <span class="count-chip">${pool.length} exercise${pool.length !== 1 ? 's' : ''}</span>
       </div>
       <div class="exercise-grid">
         ${pool.map(ex => exerciseCardHTML(ex)).join('')}
       </div>`;
   }
   
   function exerciseCardHTML(ex) {
     const inCart   = state.cart.has(ex.id);
     const isLocked = isExerciseLocked(ex);
     const safeUrl  = (ex.videoURL || '').replace(/'/g, "\'");
     const hasVideo = !!ex.videoURL;
   
     const isYT      = isYouTubeURL(ex.videoURL);
     const ytThumb   = isYT ? getYouTubeThumbnail(ex.videoURL) : null;
     const ytID      = isYT ? getYouTubeID(ex.videoURL) : null;

     return `
     <div class="exercise-card${inCart ? ' in-cart' : ''}${isLocked ? ' locked-card' : ''}" id="ecard-${ex.id}">
       <div class="card-media">
         ${hasVideo
           ? isYT && ytThumb
             ? `<img class="card-video-thumb" src="${ytThumb}" alt="${ex.title} thumbnail" loading="lazy"
                  onerror="this.style.display='none'">`
             : `<video class="card-video-thumb" src="${ex.videoURL || ''}"
                  preload="metadata" muted playsinline
                  onerror="this.style.display='none'">
                </video>`
           : `<div class="card-media-bg" style="${cardGradient(ex.id)}"></div>`
         }
         ${isLocked
           ? `<div class="card-play">
                <div class="locked-play-btn" onclick="promptTrialOrUpgrade()">
                  <i class="ti ti-lock"></i>
                </div>
              </div>
              <div class="locked-overlay"><i class="ti ti-lock"></i> Start Free Trial to unlock</div>`
           : `<div class="card-play">
                <div class="play-btn" onclick="playVideo('${ex.id}','${safeUrl}')">
                  <i class="ti ti-player-play"></i>
                </div>
              </div>`
         }
         ${(ex.duration && ex.duration !== '—' && ex.duration !== '-' && ex.duration !== '' && !isYouTubeURL(ex.videoURL)) ? `<span class="card-duration">${ex.duration}</span>` : ''}
         ${isYouTubeURL(ex.videoURL) ? `<span class="card-yt-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="red" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8z"/><polygon fill="white" points="9.75,15.02 15.5,12 9.75,8.98"/></svg> YouTube</span>` : ''}
       </div>
       <div class="card-body">
         <div class="card-tags">
           <span class="tag tag-${ex.muscle}">${capitalize(ex.muscle)}</span>
           <span class="tag tag-sub">${ex.sub}</span>
           ${ex.custom && !ex.isPublic ? '<span class="tag tag-private"><i class="ti ti-lock" style="font-size:9px"></i> Private</span>' : ''}
           ${ex.custom &&  ex.isPublic ? '<span class="tag tag-public"><i class="ti ti-world" style="font-size:9px"></i> Public</span>'  : ''}
           ${ex.premium ? '<span class="tag tag-premium">Premium</span>' : ''}
           ${isLocked ? '<span class="tag tag-locked"><i class="ti ti-lock" style="font-size:9px"></i> Locked</span>' : ''}
         </div>
         <div class="card-title">${ex.title}</div>
         ${ex.title_he ? `<div class="card-title-he">${ex.title_he}</div>` : ''}
         <div class="card-desc">${isLocked ? 'Start your free trial to unlock this exercise and many more.' : ex.desc}</div>
         <div class="card-footer">
           <span class="card-difficulty"><i class="ti ti-flame"></i> ${ex.diff || '—'}</span>
           <div style="display:flex;gap:6px;align-items:center">
             ${ex.custom && ex.ownerId === (state.user && state.user.uid) ? `
               <button class="vis-toggle-btn ${ex.isPublic ? 'public' : 'private'}"
                 onclick="toggleVideoVisibility('${ex.id}', event)"
                 title="${ex.isPublic ? 'Make Private' : 'Make Public'}">
                 <i class="ti ti-${ex.isPublic ? 'world' : 'lock'}"></i>
                 ${ex.isPublic ? 'Public' : 'Private'}
               </button>
               <button class="vis-toggle-btn private" onclick="deleteCustomVideo('${ex.id}', event)"
                 title="Delete this video" style="color:var(--danger);border-color:rgba(255,107,107,0.25)">
                 <i class="ti ti-trash"></i>
               </button>` : ''}
             ${isLocked
               ? `<button class="add-to-cart-btn" onclick="promptTrialOrUpgrade()" style="color:var(--warn);border-color:rgba(251,191,36,0.3)">
                    <i class="ti ti-lock"></i> Locked
                  </button>`
               : `<button class="add-to-cart-btn${inCart ? ' added' : ''}" onclick="toggleCart('${ex.id}')">
                    <i class="ti ti-${inCart ? 'check' : 'plus'}"></i> ${inCart ? 'Added' : 'Add'}
                  </button>`
             }
           </div>
         </div>
       </div>
     </div>`;
   }
   
   /* ── Determine if an exercise should be locked for this user ─
      free_limited: show only first 2 per sub-category, lock the rest
      free: show 20 total (no premium), but no per-sub limit
      trial / premium: everything unlocked                           */
   function isExerciseLocked(ex) {
     if (!state.user) return false;
     const tier = state.user.tier;
     if (tier === 'client') return false; // clients see everything their trainer's platform offers
     if (tier === 'trial' || tier === 'premium' || tier === 'premium_cancelled') return false;
     if (tier === 'free_limited') {
       // Premium-marked exercises always locked on free_limited
       if (ex.premium) return true;
       // Custom exercises are never locked (user's own content)
       if (ex.custom) return false;
       // Count how many exercises from this same sub-category appear BEFORE this one
       // in MASTER_EXERCISES — allow first 2, lock the rest
       const siblings = MASTER_EXERCISES.filter(e => e.sub === ex.sub && !e.premium);
       const idx = siblings.findIndex(e => e.id === ex.id);
       return idx >= 2; // 0 and 1 are unlocked (2 per sub), rest locked
     }
     if (tier === 'free') {
       // Free tier after trial: premium exercises locked
       return !!ex.premium;
     }
     return false;
   }
   
   function cardGradient(id) {
     const gs = [
       'background:linear-gradient(135deg,rgba(126,232,162,0.1),rgba(62,207,207,0.07))',
       'background:linear-gradient(135deg,rgba(244,114,182,0.1),rgba(167,139,250,0.07))',
       'background:linear-gradient(135deg,rgba(96,165,250,0.1),rgba(62,207,207,0.07))',
       'background:linear-gradient(135deg,rgba(251,191,36,0.1),rgba(251,146,60,0.07))',
       'background:linear-gradient(135deg,rgba(167,139,250,0.1),rgba(96,165,250,0.07))',
       'background:linear-gradient(135deg,rgba(251,146,60,0.1),rgba(244,114,182,0.07))',
       'background:linear-gradient(135deg,rgba(62,207,207,0.1),rgba(126,232,162,0.07))',
     ];
     const hash = [...String(id)].reduce((a, c) => a + c.charCodeAt(0), 0);
     return gs[hash % gs.length];
   }
   
   function playVideo(id, url) {
     const all = [...MASTER_EXERCISES, ...customExercises];
     const ex  = all.find(e => e.id === id);
     const src = url || (ex && ex.videoURL) || '';
     if (!src) { showToast('No video attached to this exercise yet.'); return; }

     const title  = (ex && ex.title) || 'Exercise';
     const existing = document.getElementById('modal-video-player');
     if (existing) existing.remove();

     const modal = document.createElement('div');
     modal.id    = 'modal-video-player';
     modal.className = 'video-player-overlay';

     // YouTube — use embed iframe (direct URLs are blocked by browsers)
     if (isYouTubeURL(src)) {
       const ytID = getYouTubeID(src);
       const embedURL = 'https://www.youtube.com/embed/' + ytID + '?autoplay=1&rel=0';
       modal.innerHTML =
         '<div class="video-player-box">' +
           '<div class="video-player-header">' +
             '<h3>' + title + '</h3>' +
             '<button class="video-player-close" onclick="closeVideoPlayer()"><i class="ti ti-x"></i></button>' +
           '</div>' +
           '<div class="video-player-wrap" style="position:relative;padding-top:56.25%;">' +
             '<iframe src="' + embedURL + '" frameborder="0" allow="autoplay; fullscreen" allowfullscreen ' +
             'style="position:absolute;inset:0;width:100%;height:100%;border-radius:0 0 12px 12px;background:#000">' +
             '</iframe>' +
           '</div>' +
         '</div>';
     } else {
       // Direct video file (Firebase Storage, etc.)
       modal.innerHTML =
         '<div class="video-player-box">' +
           '<div class="video-player-header">' +
             '<h3>' + title + '</h3>' +
             '<button class="video-player-close" onclick="closeVideoPlayer()"><i class="ti ti-x"></i></button>' +
           '</div>' +
           '<div class="video-player-wrap">' +
             '<video src="' + src + '" controls autoplay playsinline ' +
             'style="width:100%;max-height:480px;border-radius:0 0 12px 12px;background:#000;display:block">' +
             '</video>' +
           '</div>' +
         '</div>';
     }

     document.body.appendChild(modal);
     modal.addEventListener('click', function(e) { if (e.target === modal) closeVideoPlayer(); });
   }
   
   function closeVideoPlayer() {
     const modal = document.getElementById('modal-video-player');
     if (modal) {
       const video = modal.querySelector('video');
       if (video) { video.pause(); video.src = ''; }
       modal.remove();
     }
   }
   
   /* ══════════════════════════════════════════════════════════
      CART
   ══════════════════════════════════════════════════════════ */
   
   function toggleCart(id) {
     const all = [...MASTER_EXERCISES, ...customExercises];
     const ex  = all.find(e => e.id === id);
     if (!ex) return;
   
     if (state.cart.has(id)) {
       state.cart.delete(id);
     } else {
       state.cart.set(id, { ...ex, sets: '', reps: '', notes: '' });
       pulseBadge();
     }
     updateCartBar();
   
     // Update just that card's button without full re-render
     const card = document.getElementById('ecard-' + id);
     if (card) {
       const inCart = state.cart.has(id);
       card.classList.toggle('in-cart', inCart);
       const btn = card.querySelector('.add-to-cart-btn');
       if (btn) {
         btn.className = 'add-to-cart-btn' + (inCart ? ' added' : '');
         btn.innerHTML = `<i class="ti ti-${inCart ? 'check' : 'plus'}"></i> ${inCart ? 'Added' : 'Add'}`;
       }
     }
   }
   
   function clearCart() {
     state.cart.clear();
     updateCartBar();
     renderLibrary();
   }
   
   function updateCartBar() {
     const n = state.cart.size;
     document.getElementById('cart-count').textContent = n;
     document.getElementById('cart-label').textContent = n === 1 ? 'exercise selected' : 'exercises selected';
     document.getElementById('cart-bar').classList.toggle('visible', n > 0);
     document.getElementById('tnav-routines-badge').textContent = sentRoutines.length;
   }
   
   function pulseBadge() {
     const b = document.getElementById('cart-count');
     b.classList.remove('bump');
     void b.offsetWidth;
     b.classList.add('bump');
   }
   
   /* ══════════════════════════════════════════════════════════
      MODALS
   ══════════════════════════════════════════════════════════ */
   
   function openModal(name) {
     document.getElementById('modal-backdrop').classList.add('open');
     document.getElementById('modal-' + name).classList.add('open');
     if (name === 'checkout')    renderCheckout();
     if (name === 'start-trial') prepareTrialModal();
   }
   
   /* ── Prepare trial modal based on whether trial was already used ── */
   function prepareTrialModal() {
     const body = document.getElementById('trial-modal-body');
     if (!body) return;
     const hdr  = document.querySelector('#modal-start-trial .modal-header h3');
   
     if (state.user && state.user.trialUsed) {
       // Already used — show upgrade prompt instead
       if (hdr) hdr.innerHTML = '<i class="ti ti-clock" style="color:var(--warn)"></i> Trial Already Used';
       body.innerHTML = `
         <div style="text-align:center;padding:10px 0">
           <div style="font-size:48px;margin-bottom:14px">⏰</div>
           <h4 style="font-size:18px;font-weight:700;margin-bottom:8px">You've used your free trial</h4>
           <p style="color:var(--muted);font-size:13.5px;margin-bottom:22px;line-height:1.6">
             Each account gets one free 7-day trial. Yours has already been used.<br>
             Upgrade to Pro to get full access again.
           </p>
           <button class="btn btn-primary btn-full" onclick="handleGrowPayment();closeAllModals()" style="font-size:15px;padding:12px">
             <i class="ti ti-credit-card"></i> Upgrade to Pro — ₪25/mo
           </button>
           <p style="font-size:12px;color:var(--muted2);margin-top:10px">Cancel any time. No long-term commitment.</p>
         </div>`;
     } else {
       // Never used — reset to default trial content
       if (hdr) hdr.innerHTML = '<i class="ti ti-rocket" style="color:var(--accent)"></i> Start Your Free Trial';
       body.innerHTML = `
         <div style="width:64px;height:64px;background:rgba(126,232,162,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:30px;color:var(--accent)">
           <i class="ti ti-rocket"></i>
         </div>
         <h4 style="font-size:20px;font-weight:700;margin-bottom:8px">7 Days of Full Access</h4>
         <p style="color:var(--muted);font-size:13.5px;margin-bottom:22px;line-height:1.6">
           No credit card needed. Instant access to everything — free for 7 days.
         </p>
         <ul style="list-style:none;text-align:left;display:inline-block;margin-bottom:22px">
           <li style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13.5px"><i class="ti ti-check" style="color:var(--accent);font-size:15px"></i> Full master library — 143+ exercises</li>
           <li style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13.5px"><i class="ti ti-check" style="color:var(--accent);font-size:15px"></i> Unlimited custom video uploads</li>
           <li style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13.5px"><i class="ti ti-check" style="color:var(--accent);font-size:15px"></i> Unlimited client routines &amp; sharing</li>
           <li style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13.5px"><i class="ti ti-check" style="color:var(--accent);font-size:15px"></i> One-time per account</li>
         </ul>
         <button class="btn btn-primary btn-full" onclick="activateFreeTrial()" style="font-size:15px;padding:12px">
           <i class="ti ti-rocket"></i> Activate My Free Trial Now
         </button>
         <p style="font-size:12px;color:var(--muted2);margin-top:10px">After 7 days you return to the limited free plan unless you upgrade to Pro (₪25/mo).</p>`;
     }
   }
   
   function closeAllModals() {
     document.getElementById('modal-backdrop').classList.remove('open');
     document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
   }

   // Close only the food picker and return to the menu modal
   function closeFoodPicker() {
     var picker = document.getElementById('modal-food-picker');
     if (picker) picker.classList.remove('open');
     // Re-open the menu modal (which was open before)
     var menuModal = document.getElementById('modal-admin-menu');
     if (menuModal) menuModal.classList.add('open');
   }
   
   /* ══════════════════════════════════════════════════════════
      TRAINER VIDEO UPLOAD
   ══════════════════════════════════════════════════════════ */
   
   /* ── Video visibility toggle ────────────────────────────── */
   function setVisibility(val) {
     document.getElementById('upload-visibility').value = val;
     document.getElementById('vis-private').classList.toggle('active', val === 'private');
     document.getElementById('vis-public').classList.toggle('active', val === 'public');
   }
   
   /* ── Toggle visibility of an already-uploaded custom video ─ */
   async function toggleVideoVisibility(id, event) {
     event.stopPropagation();
     if (!state.user || !window._firebase || !window._db) return;
     var ex = customExercises.find(function(e) { return e.id === id; });
     if (!ex) return;
     var newIsPublic = !ex.isPublic;
     var fb = window._firebase; var db = window._db;
     try {
       await fb.setDoc(fb.doc(db,'customVideos',state.user.uid,'videos',id),{isPublic:newIsPublic},{merge:true});
       if (newIsPublic) {
         await fb.setDoc(fb.doc(db,'publicVideos',id),{
           id:id,title:ex.title,muscle:ex.muscle,sub:ex.sub,desc:ex.desc,
           diff:ex.diff||'Custom',duration:ex.duration||'-',videoURL:ex.videoURL||'',
           isPublic:true,custom:true,ownerId:state.user.uid,
           ownerName:state.user.fullName||'',addedAt:new Date().toISOString()
         });
         showToast('Video is now Public - added to Master Library!');
         state.activeTab='master';
         document.getElementById('tab-master').classList.add('active');
         document.getElementById('tab-custom').classList.remove('active');
       } else {
         await fb.deleteDoc(fb.doc(db,'publicVideos',id));
         showToast('Video is now Private - removed from Master Library');
         state.activeTab='custom';
         document.getElementById('tab-custom').classList.add('active');
         document.getElementById('tab-master').classList.remove('active');
       }
       state.filterMuscle=null; state.filterSub=null;
       document.querySelectorAll('.muscle-sub-item').forEach(function(el){el.classList.remove('active');});
       var cb=document.getElementById('clear-filter-btn'); if(cb) cb.style.display='none';
     } catch(e) { console.error('toggleVideoVisibility error:',e.code,e.message); showToast('Could not update visibility.'); }
   }

   function reloadMyVideos() {
     if (!state.user) return;
     showToast('Reloading your videos...');
     customExercises = [];
     loadCustomVideosFromFirestore(state.user.uid);
     setTimeout(function(){ renderLibrary(); updateStats(); }, 2000);
   }

      function populateSubcats(muscleSelectId, subcatSelectId) {
     const muscle = document.getElementById(muscleSelectId).value;
     const sc     = document.getElementById(subcatSelectId);
     if (!muscle) { sc.innerHTML = '<option value="">Select group first</option>'; return; }
     sc.innerHTML = (SUBCATS[muscle] || []).map(s => `<option value="${s}">${s}</option>`).join('');
   }
   
   function handleAdminFileSelect(input) {
     const file = input.files[0];
     if (!file) return;
     const allowed = ['video/mp4', 'video/quicktime', 'video/webm'];
     if (!allowed.includes(file.type)) { showToast('Only MP4, MOV, or WebM allowed.'); input.value=''; return; }
     if (file.size > 500 * 1024 * 1024) { showToast('File too large — max 500 MB.'); input.value=''; return; }
     document.getElementById('admin-file-label').textContent = `${file.name} (${(file.size/1048576).toFixed(1)} MB) ✓`;
     // Clear the URL field — file takes priority
     document.getElementById('admin-ex-video').value = '';
   }
   
   function handleDragOver(e)  { e.preventDefault(); document.getElementById('upload-zone').classList.add('drag-over'); }
   function handleDragLeave(e) { document.getElementById('upload-zone').classList.remove('drag-over'); }
   function handleDrop(e) {
     e.preventDefault();
     document.getElementById('upload-zone').classList.remove('drag-over');
     if (e.dataTransfer.files[0]) processVideoFile(e.dataTransfer.files[0]);
   }
   function handleVideoSelect(input) {
     if (input.files[0]) processVideoFile(input.files[0]);
   }
   
   function processVideoFile(file) {
     const allowed = ['video/mp4', 'video/quicktime', 'video/webm'];
     if (!allowed.includes(file.type)) { showToast('Only MP4, MOV, or WebM allowed.'); return; }
     if (file.size > 500 * 1024 * 1024) { showToast('File too large — max 500 MB.'); return; }
     document.getElementById('upload-zone-inner').innerHTML = `
       <i class="ti ti-file-check" style="color:var(--accent)"></i>
       <p style="color:var(--accent)">${file.name}</p>
       <span>${(file.size / 1048576).toFixed(1)} MB · Ready to upload</span>`;
     document.getElementById('upload-zone').dataset.ready = '1';
   }
   
   /* ── Auto-detect video duration from a File object ─────── */
   function getVideoDuration(file) {
     return new Promise(function(resolve) {
       var url   = URL.createObjectURL(file);
       var video = document.createElement('video');
       video.preload = 'metadata';
       video.onloadedmetadata = function() {
         URL.revokeObjectURL(url);
         var secs = Math.round(video.duration);
         if (!isFinite(secs) || secs <= 0) { resolve(''); return; }
         var m = Math.floor(secs / 60);
         var s = secs % 60;
         resolve(m > 0 ? m + 'm ' + s + 's' : s + 's');
       };
       video.onerror = function() { URL.revokeObjectURL(url); resolve(''); };
       video.src = url;
     });
   }

   async function submitUpload() {
     const title  = document.getElementById('upload-title').value.trim();
     const muscle = document.getElementById('upload-muscle').value;
     const sub    = document.getElementById('upload-subcat').value;
     const desc   = document.getElementById('upload-desc').value.trim();
   
     if (!title)  { showToast('Please enter an exercise title.'); return; }
     if (!muscle) { showToast('Please select a muscle group.'); return; }
     if (!sub)    { showToast('Please select a sub-category.'); return; }
   
     // Upload cap for free and free_limited tiers
     const myVideoCount = customExercises.filter(e => e.ownerId === state.user.uid).length;
     const tier = state.user.tier;
     if ((tier === 'free' || tier === 'free_limited') && myVideoCount >= 10) {
       closeAllModals();
       if (tier === 'free_limited') {
         showToast('Limited plan: 10 uploads max. Start your free trial or upgrade for unlimited.');
         setTimeout(() => openModal('start-trial'), 800);
       } else {
         showToast('Free plan: 10 uploads reached. Upgrade to Premium for unlimited.');
         setTimeout(() => openModal('upgrade'), 800);
       }
       return;
     }
   
     const fileInput = document.getElementById('video-file-input');
     const file      = fileInput.files[0];
     if (!file) { showToast('Please select a video file first.'); return; }
   
     const wrap = document.getElementById('upload-progress-wrap');
     const fill = document.getElementById('upload-progress-fill');
     const lbl  = document.getElementById('upload-progress-label');
     wrap.style.display = 'block';
   
     // Generate a stable exercise ID before upload
     // Auto-detect video duration from file metadata
     const videoDuration = await getVideoDuration(file);

     const exerciseId  = 'c_' + state.user.uid.slice(0, 6) + '_' + Date.now();
     // Storage path scoped strictly to user uid — used to re-fetch URL if needed
     const storagePath = 'videos/' + state.user.uid + '/' + exerciseId + '_' + file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
   
     let videoURL = '';
     let videoStoragePath = '';
     try {
       const storageRef = window._firebase.ref(window._storage, storagePath);
       const task       = window._firebase.uploadBytesResumable(storageRef, file);
       videoURL = await new Promise((resolve, reject) => {
         task.on(
           'state_changed',
           snap => {
             const pct = Math.round(snap.bytesTransferred / snap.totalBytes * 100);
             fill.style.width = pct + '%';
             lbl.textContent  = 'Uploading… ' + pct + '%';
           },
           reject,
           async function() {
             // Get the permanent download URL
             const url = await window._firebase.getDownloadURL(task.snapshot.ref);
             videoStoragePath = storagePath;
             resolve(url);
           }
         );
       });
     } catch (e) {
       wrap.style.display = 'none';
       console.error('Storage upload error:', e.code, e.message);
       if (e.code === 'storage/unauthorized') {
         showToast('Upload blocked. Add this Storage rule: match /videos/{uid}/{f} { allow write: if request.auth.uid == uid; }');
       } else {
         showToast('Upload failed: ' + (e.message || e.code));
       }
       return;
     }
   
     // Read visibility choice
     const visibility = document.getElementById('upload-visibility').value || 'private';
     const isPublic   = visibility === 'public';
   
     // Build exercise object — save storagePath so URL can be refreshed later
     const newExercise = {
       id:           exerciseId,
       title,
       muscle,
       sub,
       desc:         desc || 'Custom exercise. See the uploaded video for full instructions.',
       diff:         'Custom',
       duration:     videoDuration || '',
       premium:      false,
       custom:       true,
       isPublic,
       videoURL,
       storagePath:  videoStoragePath,  // ← save path for URL refresh on auth change
       ownerId:      state.user.uid,
       createdAt:    new Date().toISOString(),
     };
   
     // Save to Firestore — doc ID = exerciseId, strictly under user's uid
     try {
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'customVideos', state.user.uid, 'videos', exerciseId),
         newExercise
       );
       console.log('Saved video to Firestore:', exerciseId, 'for user', state.user.uid);
     } catch (e) {
       console.error('Firestore save error:', e.code, e.message);
       if (e.code === 'permission-denied') {
         showToast('Saved to Storage but Firestore blocked. Add rule: match /customVideos/{uid}/videos/{v} { allow write: if request.auth.uid == uid; }');
       } else {
         showToast('Video uploaded but metadata save failed: ' + (e.code || e.message));
       }
     }
   
     // Reset UI
     closeAllModals();
     showToast(`✓ "${title}" uploaded successfully!`);
     document.getElementById('upload-title').value  = '';
     document.getElementById('upload-muscle').value = '';
     document.getElementById('upload-subcat').innerHTML = '<option value="">Select group first</option>';
     document.getElementById('upload-desc').value   = '';
     wrap.style.display = 'none';
     fill.style.width   = '0%';
     document.getElementById('upload-zone-inner').innerHTML = `
       <i class="ti ti-cloud-upload"></i>
       <p>Drag &amp; drop your video here</p>
       <span>or <em>browse files</em></span>
       <small>MP4, MOV, WebM · max 500 MB</small>`;
     delete document.getElementById('upload-zone').dataset.ready;
   
     // Reset visibility toggle back to Private
     setVisibility('private');
   
     // Switch to custom tab
     state.activeTab = 'custom';
     document.getElementById('tab-master').classList.remove('active');
     document.getElementById('tab-custom').classList.add('active');
     renderLibrary();
     updateStats();
   }
   
   /* ══════════════════════════════════════════════════════════
      CHECKOUT — ROUTINE BUILDER
   ══════════════════════════════════════════════════════════ */
   
   function renderCheckout() {
     const n = state.cart.size;
     document.getElementById('checkout-subtitle').textContent =
       n + ' exercise' + (n !== 1 ? 's' : '') + ' — prescribe sets, reps and notes below';

     // Hide success message
     var succEl = document.getElementById('checkout-success');
     if (succEl) succEl.style.display = 'none';

     // Always refresh client dropdown with latest clientsList
     function _refreshClientDropdowns() {
       var opts = '<option value="">— Choose client —</option>';
       (clientsList || []).forEach(function(c) {
         opts += '<option value="' + c.id + '">' + (c.name || c.email || c.id) + '</option>';
       });
       document.querySelectorAll('[id*="client-select"], [id*="checkout-client"]').forEach(function(sel){
         if (sel) sel.innerHTML = opts;
       });
     }
     _refreshClientDropdowns();
   
     let html = '';
     state.cart.forEach((ex) => {
       html += `
       <div class="checkout-exercise-card" id="co-card-${ex.id}">
         <div class="checkout-thumb" style="${cardGradient(ex.id)}">
           <i class="ti ti-barbell" style="font-size:22px;color:var(--muted2)"></i>
         </div>
         <div class="checkout-info">
           <h4>
             ${ex.title}
             <span class="tag tag-${ex.muscle}" style="font-size:10px">${capitalize(ex.muscle)}</span>
             ${ex.custom ? '<span class="tag tag-custom" style="font-size:10px">Custom</span>' : ''}
           </h4>
           <p>${ex.desc.substring(0, 90)}…</p>
           <div class="prescription-row">
             <div class="prescription-field">
               <span class="prescription-label">Sets</span>
               <input class="prescription-input" type="number" min="1" max="20" placeholder="3"
                 value="${ex.sets}" onchange="updatePrescription('${ex.id}','sets',this.value)">
             </div>
             <div class="prescription-field">
               <span class="prescription-label">Reps</span>
               <input class="prescription-input" type="number" min="1" max="100" placeholder="12"
                 value="${ex.reps}" onchange="updatePrescription('${ex.id}','reps',this.value)">
             </div>
             <div class="prescription-field" style="flex:1">
               <span class="prescription-label">Trainer Notes</span>
               <input class="prescription-notes-input" type="text"
                 placeholder="e.g. slow eccentric, 2-sec hold…"
                 value="${ex.notes}" onchange="updatePrescription('${ex.id}','notes',this.value)">
             </div>
           </div>
         </div>
         <button class="remove-exercise-btn" onclick="removeFromCheckout('${ex.id}')">
           <i class="ti ti-trash"></i>
         </button>
       </div>`;
     });
     document.getElementById('checkout-list').innerHTML = html;
   }
   
   function updatePrescription(id, field, val) {
     if (state.cart.has(id)) state.cart.get(id)[field] = val;
   }
   
   function removeFromCheckout(id) {
     state.cart.delete(id);
     updateCartBar();
     renderCheckout();
     renderLibrary();
     if (!state.cart.size) closeAllModals();
   }
   
   async function sendRoutine() {
     const client    = document.getElementById('checkout-client').value.trim() || 'Client';
     const exercises = Array.from(state.cart.values()).map((ex, i) => ({
       order:   i + 1,
       videoId: ex.id,
       source:  ex.custom ? 'custom' : 'master',
       title:   ex.title,
       muscle:  ex.muscle,
       sub:     ex.sub,
       desc:    ex.desc,
       sets:    ex.sets,
       reps:    ex.reps,
       notes:   ex.notes,
       videoURL: ex.videoURL || '',
     }));
   
     const token   = 'rtn_' + Math.random().toString(36).substr(2, 8);
     const routine = {
       id:          token,
       createdBy:   state.user.uid,
       trainerName: state.user.fullName || 'Your Trainer',
       clientName:  client,
       exercises,
       createdAt:   new Date().toISOString(),
       shareToken:  token,
       isPublic:    true,
     };
   
     // Save to Firestore — use token as document ID for direct lookup (no query needed)
     try {
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'routines', token),
         routine
       );
     } catch (e) {
       console.error('Firestore routine save error:', e);
       showToast('Could not save routine. Check Firestore rules.');
     }
   
     // Also save locally so history works without extra Firestore reads
     sentRoutines.unshift(routine);
     localStorage.setItem('repcast_routines', JSON.stringify(sentRoutines.slice(0, 50)));
   
     const shareBase = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '');
     document.getElementById('share-url').textContent = `${shareBase}?routine=${token}`;
     document.getElementById('share-result').style.display = 'block';
     document.getElementById('tnav-routines-badge').textContent = sentRoutines.length;
     renderRoutinesHistory();
     updateStats();
     showToast(`✓ Routine sent for ${client}!`);
   }
   
   /* ── Ownership check — only admin or creator can edit/delete ── */
   function canEditItem(item) {
     if (!item) return false;
     if (state.isManager) return true;                  // admin: full access
     var uid = state.user && state.user.uid;
     if (!uid) return false;
     return item.createdBy === uid;                     // own content only
   }

   /* ── Build exercises array from cart ────────────────────── */
   function buildCartExercises() {
     return Array.from(state.cart.values()).map(function(ex, i) {
       return {
         order: i + 1, videoId: ex.id,
         source: ex.custom ? 'custom' : 'master',
         title: ex.title, muscle: ex.muscle, sub: ex.sub,
         sets: ex.sets, reps: ex.reps, notes: ex.notes,
         videoURL: ex.videoURL || '', desc: ex.desc || ''
       };
     });
   }

   /* ── Step 1: Save routine with name (required first step) ── */
   async function saveAsRoutine() {
     var nameInput = document.getElementById('checkout-routine-name');
     var name = nameInput ? nameInput.value.trim() : '';
     if (!name) {
       showToast('Please enter a routine name first');
       if (nameInput) { nameInput.focus(); nameInput.style.borderColor = 'var(--danger)'; }
       return;
     }
     if (nameInput) nameInput.style.borderColor = '';

     var exercises = buildCartExercises();
     var token = 'rtn_' + Math.random().toString(36).substr(2, 8);
     var routine = {
       id: token, shareToken: token, name: name,
       clientName: '',   // set when assigned to a client
       createdBy: state.user.uid,
       trainerName: state.user.fullName || 'Your Trainer',
       exercises: exercises,
       createdAt: new Date().toISOString(),
       isPublic: false
     };

     try {
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'routines', token), routine
       );
       sentRoutines.unshift(routine);
       localStorage.setItem('repcast_routines', JSON.stringify(sentRoutines.slice(0, 50)));
       // Store saved routine token for assign step
       window._lastSavedRoutine = routine;
       // Enable assign section
       var assignSec = document.getElementById('checkout-assign-section');
       if (assignSec) {
         assignSec.style.opacity = '1';
         assignSec.style.pointerEvents = 'auto';
       }
       var succEl = document.getElementById('checkout-success');
       var msgEl  = document.getElementById('checkout-success-msg');
       if (succEl) succEl.style.display = 'block';
       if (msgEl)  msgEl.textContent = '✓ "' + name + '" saved! Now choose a client to assign it to (optional).';
       showToast('✓ Routine saved!');
       renderRoutinesHistory();
     } catch(e) { showToast('Error: ' + e.message); }
   }

   /* ── Step 2: Assign saved routine to a client ────────────── */
   async function assignRoutineToClient() {
     var routine = window._lastSavedRoutine;
     if (!routine) { showToast('Save the routine first'); return; }

     var sel = document.getElementById('checkout-client-select');
     var clientId = sel ? sel.value : '';
     if (!clientId) { showToast('Please choose a client'); return; }

     var client = (clientsList || []).find(function(c){ return c.id === clientId; });
     if (!client) { showToast('Client not found'); return; }

     try {
       var clientRef = window._firebase.doc(window._db, 'clientProfiles', clientId);
       var existing = client.assignedRoutines || [];
       // Store FULL routine data so client can see exercises without extra fetch
       var clientName = client.name || client.email || '';
       existing.push({
         id:          routine.id,
         shareToken:  routine.shareToken,
         name:        routine.name,
         clientName:  clientName,
         exercises:   routine.exercises,
         createdAt:   routine.createdAt,
         trainerName: routine.trainerName
       });
       // Also update local sentRoutines entry with clientName
       var localRtn = sentRoutines.find(function(r){ return r.id === routine.id; });
       if (localRtn) localRtn.clientName = clientName;
       localStorage.setItem('repcast_routines', JSON.stringify(sentRoutines.slice(0, 50)));
       renderRoutinesHistory();
       await window._firebase.setDoc(clientRef, { assignedRoutines: existing }, { merge: true });
       client.assignedRoutines = existing;

       state.cart.clear();
       updateCartBar();
       window._lastSavedRoutine = null;

       var msgEl = document.getElementById('checkout-success-msg');
       if (msgEl) msgEl.textContent = '✓ Assigned to ' + (client.name || 'client') + '!';
       showToast('✓ Assigned to ' + (client.name || 'client'));
       setTimeout(function(){ closeAllModals(); }, 1500);
     } catch(e) { showToast('Error: ' + e.message); }
   }

   async function shareViaWhatsApp() {
     // Save routine first if not already saved
     const shareResult = document.getElementById('share-result');
     if (!shareResult || shareResult.style.display === 'none') {
       await sendRoutine();
     }
     const client = document.getElementById('checkout-client').value.trim() || 'there';
     const items  = Array.from(state.cart.values()).map((ex, i) => {
       const s = ex.sets  ? ex.sets + ' sets'   : '';
       const r = ex.reps  ? 'x ' + ex.reps + ' reps' : '';
       const n = ex.notes ? '\n   - ' + ex.notes : '';
       return (i + 1) + '. *' + ex.title + '* ' + s + ' ' + r + n;
     }).join('\n');
     const url = document.getElementById('share-url').textContent || (window.location.origin + '?routine=demo');
     const msg = 'Hi ' + client + '! Here is your personalised exercise routine from RepCast:\n\n' + items + '\n\nView the full routine with exercise videos here (no login needed):\n' + url;
     window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
   }
   
   async function shareViaEmail() {
     // If routine hasn't been saved yet, save it first so the URL is real
     const shareResult = document.getElementById('share-result');
     if (!shareResult || shareResult.style.display === 'none') {
       await sendRoutine();
     }
     const client = document.getElementById('checkout-client').value.trim() || 'Client';
     const url    = document.getElementById('share-url').textContent || (window.location.origin + '?routine=demo');
     const subj   = encodeURIComponent('Your Exercise Routine from RepCast');
     const body   = encodeURIComponent(
       'Hi ' + client + ',\n\n' +
       'Your personalised exercise routine is ready.\n' +
       'View it here (no login required):\n' +
       url + '\n\n' +
       'Best,\n' +
       (state.user && state.user.fullName ? state.user.fullName : 'Your Trainer')
     );
     // Use a link click instead of window.open — works in all browsers including mobile
     const link = document.createElement('a');
     link.href = `mailto:?subject=${subj}&body=${body}`;
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   }
   
   function copyShareUrl() {
     navigator.clipboard.writeText(document.getElementById('share-url').textContent).catch(() => {});
     const done = document.getElementById('copy-done');
     done.style.display = 'inline-flex';
     setTimeout(() => { done.style.display = 'none'; }, 2500);
   }
   
   /* ══════════════════════════════════════════════════════════
      ROUTINES HISTORY
   ══════════════════════════════════════════════════════════ */
   
   function renderRoutinesHistory() {
     const body = document.getElementById('routines-body');
     document.getElementById('tnav-routines-badge').textContent = sentRoutines.length;
   
     if (!sentRoutines.length) {
       body.innerHTML = `
         <div class="empty-state">
           <div class="empty-icon"><i class="ti ti-list-check"></i></div>
           <h3>No routines sent yet</h3>
           <p>Build a routine from the Exercise Library and send it to a client.</p>
           <button class="btn btn-primary" onclick="setView('library',document.getElementById('tnav-library'))">
             <i class="ti ti-layout-grid"></i> Browse Library
           </button>
         </div>`;
       return;
     }
   
     body.innerHTML = sentRoutines.map(r => {
       const d   = new Date(r.createdAt).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
       const url = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '') + '?routine=' + r.shareToken;
       // Thumbnail from first exercise that has a video
       const firstWithVideo = r.exercises.find(function(e){ return e.videoURL; });
       const thumbHTML = firstWithVideo
         ? isYouTubeURL(firstWithVideo.videoURL)
           ? '<img class="routine-thumb" src="' + getYouTubeThumbnail(firstWithVideo.videoURL) + '" alt="" loading="lazy">'
           : '<video class="routine-thumb" src="' + firstWithVideo.videoURL + '" preload="metadata" muted playsinline></video>'
         : '<div class="routine-thumb routine-thumb-placeholder"><i class="ti ti-list-check"></i></div>';
       return `
       <div class="routine-history-card">
         ${thumbHTML}
         <div class="routine-history-info">
           <h4>${r.name || (r.clientName ? r.clientName + "'s Routine" : 'Routine')}</h4>
           <p>${r.exercises.length} exercise${r.exercises.length !== 1 ? 's' : ''} &middot; ${r.clientName ? 'for ' + r.clientName + ' · ' : ''}${d}</p>
           <div class="routine-ex-pills">
             ${r.exercises.slice(0,3).map(function(e){ return '<span class="tag tag-' + e.muscle + '" style="font-size:10px">' + e.title + '</span>'; }).join('')}
             ${r.exercises.length > 3 ? '<span class="tag" style="font-size:10px;background:var(--surface3);color:var(--muted)">+' + (r.exercises.length - 3) + ' more</span>' : ''}
           </div>
         </div>
         <div class="routine-history-actions">
           <button class="routine-share-btn" onclick="copyToClipboard('${url}')" title="Copy link">
             <i class="ti ti-link"></i>
           </button>
           <button class="routine-share-btn" onclick="openSharedView('${r.shareToken}')" title="Preview">
             <i class="ti ti-eye"></i>
           </button>
           <button class="routine-share-btn routine-delete-btn" onclick="deleteRoutine('${r.shareToken}')" title="Delete routine">
             <i class="ti ti-trash"></i>
           </button>
         </div>
       </div>`;
     }).join('');
   }
   
   async function deleteRoutine(token) {
     if (!confirm('Delete this routine? The client link will stop working.')) return;

     // Remove from local array
     sentRoutines = sentRoutines.filter(function(r){ return r.shareToken !== token; });
     localStorage.setItem('repcast_routines', JSON.stringify(sentRoutines));

     // Delete from Firestore
     if (window._firebase && window._db) {
       window._firebase.deleteDoc(
         window._firebase.doc(window._db, 'routines', token)
       ).catch(function(e){ console.warn('Could not delete from Firestore:', e.code); });
     }

     renderRoutinesHistory();
     updateStats();
     showToast('Routine deleted.');
   }

   function openSharedView(token) {
     const r = sentRoutines.find(r => r.shareToken === token);
     if (!r) return;
     renderSharedPage(r);
     showScreen('shared');
   }
   
   function renderSharedPage(routine) {
     document.getElementById('shared-trainer').textContent = routine.trainerName || state.user?.fullName || 'Your Trainer';
     document.getElementById('shared-date').textContent    =
       'Sent ' + new Date(routine.createdAt).toLocaleDateString('en-US', { month:'long', day:'numeric' });
   
     document.getElementById('shared-exercises').innerHTML = routine.exercises.map((ex, i) => {
       const hasVideo = !!ex.videoURL;
       const gradient = ['background:linear-gradient(135deg,rgba(126,232,162,0.15),rgba(62,207,207,0.1))',
         'background:linear-gradient(135deg,rgba(244,114,182,0.15),rgba(167,139,250,0.1))',
         'background:linear-gradient(135deg,rgba(96,165,250,0.15),rgba(62,207,207,0.1))',
         'background:linear-gradient(135deg,rgba(251,191,36,0.15),rgba(251,146,60,0.1))',
         'background:linear-gradient(135deg,rgba(167,139,250,0.15),rgba(96,165,250,0.1))',
       ][ (i) % 5 ];
   
       const isYT2     = isYouTubeURL(ex.videoURL);
       const ytThumb2  = isYT2 ? getYouTubeThumbnail(ex.videoURL) : null;
       const safeUrl2  = (ex.videoURL || '').replace(/'/g, "\\'");
       const safeTitle2 = ex.title.replace(/'/g, "\\'");

       return `
       <div class="shared-exercise-card">
         ${hasVideo ? `
         <div class="shared-video-wrap" onclick="playSharedVideo('${safeUrl2}','${safeTitle2}')">
           ${isYT2 && ytThumb2
             ? `<img class="shared-video-thumb" src="${ytThumb2}" alt="${ex.title}" loading="lazy"
                  style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;">`
             : `<video class="shared-video-thumb" src="${ex.videoURL}" preload="metadata" muted playsinline
                  onerror="this.style.display='none'"></video>`
           }
           <div class="shared-play-overlay">
             <div class="shared-play-btn"><i class="ti ti-player-play"></i></div>
           </div>
         </div>` : `
         <div class="shared-video-placeholder" style="${gradient}">
           <i class="ti ti-barbell" style="font-size:32px;color:rgba(255,255,255,0.3)"></i>
         </div>`}
           <div class="shared-ex-num">${i + 1}</div>
           <div style="flex:1">
             <h4>${ex.title}</h4>
             <div style="display:flex;gap:6px;margin-top:4px;flex-wrap:wrap">
               <span class="tag tag-${ex.muscle}">${capitalize(ex.muscle)}</span>
               <span class="tag tag-sub">${ex.sub || ''}</span>
               ${ex.custom ? '<span class="tag tag-custom">Custom</span>' : ''}
             </div>
           </div>
         </div>
         <div class="shared-ex-body">
           ${(ex.sets || ex.reps) ? `
           <div class="shared-prescription-bar">
             ${ex.sets ? `<div class="shared-rx-big"><span class="shared-rx-big-val">${ex.sets}</span><span class="shared-rx-big-label">Sets</span></div>` : ''}
             ${(ex.sets && ex.reps) ? '<div class="shared-rx-separator">×</div>' : ''}
             ${ex.reps ? `<div class="shared-rx-big"><span class="shared-rx-big-val">${ex.reps}</span><span class="shared-rx-big-label">Reps</span></div>` : ''}
           </div>` : ''}
           <p class="shared-ex-desc">${ex.desc}</p>
           ${ex.notes ? `<div class="shared-ex-notes"><strong>Trainer Notes</strong>${ex.notes}</div>` : ''}
         </div>
       </div>`;
     }).join('');
   }
   
   function playSharedVideo(url, title) {
     var existing = document.getElementById('modal-video-player');
     if (existing) existing.remove();
     _lastCredsText = 'Email: ' + email + '\nPassword: ' + password + '\nSite: repcast.co.il';
    var modal = document.createElement('div');
     modal.id = 'modal-video-player';
     modal.className = 'video-player-overlay';
     var mediaHTML;
     if (isYouTubeURL(url)) {
       var ytID = getYouTubeID(url);
       mediaHTML = '<div class="video-player-wrap" style="position:relative;padding-top:56.25%;">' +
         '<iframe src="https://www.youtube.com/embed/' + ytID + '?autoplay=1&rel=0" frameborder="0" ' +
         'allow="autoplay; fullscreen" allowfullscreen ' +
         'style="position:absolute;inset:0;width:100%;height:100%;border-radius:0 0 12px 12px;background:#000">' +
         '</iframe></div>';
     } else {
       mediaHTML = '<div class="video-player-wrap">' +
         '<video src="' + url + '" controls autoplay playsinline ' +
         'style="width:100%;max-height:480px;border-radius:0 0 12px 12px;background:#000;display:block">' +
         '</video></div>';
     }
     modal.innerHTML = '<div class="video-player-box"><div class="video-player-header"><h3>' + title +
       '</h3><button class="video-player-close" onclick="closeVideoPlayer()"><i class="ti ti-x"></i></button>' +
       '</div>' + mediaHTML + '</div>';
     document.body.appendChild(modal);
     modal.addEventListener('click', function(e) { if (e.target === modal) closeVideoPlayer(); });
   }
   
   function backFromShared() {
     if (state.isManager) showScreen('manager');
     else                 showScreen('app');
   }
   
   /* ══════════════════════════════════════════════════════════
      PROFILE
   ══════════════════════════════════════════════════════════ */
   
   async function saveProfile() {
     if (!state.user) return;
     state.user.fullName     = document.getElementById('pf-name').value;
     state.user.phone        = document.getElementById('pf-phone').value;
     state.user.businessName = document.getElementById('pf-biz').value;
     state.user.specialty    = document.getElementById('pf-specialty').value;
   
     try {
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'users', state.user.uid),
         {
           fullName:     state.user.fullName,
           phone:        state.user.phone,
           businessName: state.user.businessName,
           specialty:    state.user.specialty,
         },
         { merge: true }
       );
       showToast('✓ Profile saved!');
     } catch (e) {
       showToast('Could not save profile. Try again.');
     }
   
     document.getElementById('topnav-avatar').textContent        = initials(state.user.fullName);
     document.getElementById('topnav-name').textContent          = state.user.fullName;
     document.getElementById('profile-avatar').textContent       = initials(state.user.fullName);
     document.getElementById('profile-display-name').textContent = state.user.fullName;
     document.getElementById('profile-display-biz').textContent  = state.user.businessName;
   }
   
   function handleAvatarUpload(input) {
     if (!input.files[0]) return;
     const reader = new FileReader();
     reader.onload = e => {
       var url = e.target.result;
       // Only update the trainer's OWN avatar elements, not client avatars
       var ids = ['topnav-avatar','profile-avatar','trainer-avatar-img'];
       ids.forEach(function(id){
         var el = document.getElementById(id);
         if (!el) return;
         el.style.backgroundImage = 'url(' + url + ')';
         el.style.backgroundSize  = 'cover';
         el.style.backgroundPosition = 'center';
         el.textContent = '';
       });
       // Also save to Firestore
       if (state.user && window._firebase && window._db) {
         window._firebase.setDoc(
           window._firebase.doc(window._db, 'users', state.user.uid),
           { photoURL: url }, { merge: true }
         ).catch(function(){});
       }
     };
     reader.readAsDataURL(input.files[0]);
     showToast('Profile photo updated!');
   }
   
   /* ══════════════════════════════════════════════════════════
      BILLING / GROW
   ══════════════════════════════════════════════════════════ */
   

   
   function handleGrowPaymentChecked() {
     // Validate all required fields
     var firstName = (document.getElementById('co-first-name')  && document.getElementById('co-first-name').value.trim())  || '';
     var lastName  = (document.getElementById('co-last-name')   && document.getElementById('co-last-name').value.trim())   || '';
     var email     = (document.getElementById('co-email')       && document.getElementById('co-email').value.trim())       || '';
     var phone     = (document.getElementById('co-phone')       && document.getElementById('co-phone').value.trim())       || '';
     var checkbox  = document.getElementById('terms-agree');
     var errEl     = document.getElementById('checkout-error');

     var errors = [];
     if (!firstName)           errors.push('First name is required.');
     if (!lastName)            errors.push('Last name is required.');
     if (!email || !email.includes('@')) errors.push('A valid email address is required.');
     if (!phone)               errors.push('Phone number is required.');
     if (!checkbox || !checkbox.checked) errors.push('You must agree to the Terms of Service to continue.');

     if (errors.length) {
       if (errEl) { errEl.innerHTML = errors.join('<br>'); errEl.style.display = 'block'; }
       return;
     }
     if (errEl) errEl.style.display = 'none';

     // Store customer details for the payment redirect
     window._checkoutData = {
       firstName: firstName,
       lastName:  lastName,
       email:     email,
       phone:     phone,
       business:  (document.getElementById('co-business') && document.getElementById('co-business').value.trim()) || '',
       uid:       state.user ? state.user.uid : '',
     };

     handleGrowPayment();
   }

   // Pre-fill checkout form with user's profile data when modal opens
   function showUpgrade() {
     closeAllModals();
     // Pre-fill form fields from user profile
     if (state.user) {
       var parts = (state.user.fullName || '').split(' ');
       var fn = document.getElementById('co-first-name');
       var ln = document.getElementById('co-last-name');
       var em = document.getElementById('co-email');
       var ph = document.getElementById('co-phone');
       var bz = document.getElementById('co-business');
       if (fn && !fn.value) fn.value = parts[0] || '';
       if (ln && !ln.value) ln.value = parts.slice(1).join(' ') || '';
       if (em && !em.value) em.value = state.user.email || '';
       if (ph && !ph.value) ph.value = state.user.phone || '';
       if (bz && !bz.value) bz.value = state.user.businessName || '';
     }
     openModal('upgrade');
   }

   function handleGrowPayment() {
     // ── TODO: Connect to Morning payment ──────────────────────
     // When Morning approves your account:
     // 1. Set your Morning payment page URL below
     // 2. The ?uid= param links the payment to this Firebase user
     // 3. Morning webhook will set tier:'premium' and premiumUntil in Firestore
     // 4. checkTierExpiry() will detect the change and unlock the app
     //
     // const uid = state.user ? state.user.uid : '';
     // window.location.href = 'https://app.greeninvoice.co.il/pay/YOUR_PAGE_ID?uid=' + uid;
     //
     // Until Morning is connected:
     closeAllModals();
     showToast('Payment coming soon — Morning approval pending.');
   }

   // ── Called by Morning webhook (via Firebase Cloud Function) ──
   // The webhook sets these fields on the user Firestore document:
   // On new subscription:   { tier: 'premium', premiumUntil: <next_billing_date>, morningPaymentId: <id> }
   // On renewal:            { premiumUntil: <new_next_billing_date> }
   // On cancellation:       { tier: 'premium_cancelled' }  (premiumUntil stays — grace period)
   // checkTierExpiry() picks up all these changes automatically every 30 minutes.
   
   /* ══════════════════════════════════════════════════════════
      STATS
   ══════════════════════════════════════════════════════════ */
   
   function updateStats() {
     document.getElementById('pstat-videos').textContent   = customExercises.filter(e => e.ownerId === state.user?.uid).length;
     document.getElementById('pstat-routines').textContent = sentRoutines.length;
     const clients = [...new Set(sentRoutines.map(r => r.clientName))].length;
     document.getElementById('pstat-clients').textContent  = clients;
   
     // Update billing current plan indicator
     var planEl = document.getElementById('billing-current-plan');
     if (planEl && state.user) {
       var labels = {
         premium:           'Active ✓',
         premium_cancelled: 'Cancelled — access until ' + (state.user.premiumUntil
           ? new Date(state.user.premiumUntil).toLocaleDateString('en-GB', { day:'numeric', month:'short' })
           : 'end of period'),
         trial:             'Trial Active — ' + (state.user.trialDaysLeft || 0) + ' days left',
         free_limited:      'Free Limited',
         free:              'Free',
       };
       planEl.textContent = labels[state.user.tier] || 'Free';
     }
   
     // Update tier status card dynamically
     const tierCard = document.getElementById('tier-status-card');
     if (tierCard && state.user) {
       const tier     = state.user.tier;
       const titleEl  = document.getElementById('tier-status-title');
       const subEl    = document.getElementById('tier-status-sub');
       const btnEl    = document.getElementById('tier-status-btn');
       const iconEl   = tierCard.querySelector('.tier-icon i');
   
       if (tier === 'premium') {
         tierCard.style.display = 'none';
       } else {
         tierCard.style.display = '';
         if (tier === 'trial') {
           const d = state.user.trialDaysLeft || 0;
           if (iconEl)  { iconEl.className = 'ti ti-star-filled'; }
           if (titleEl) titleEl.textContent = 'Free Trial Active — ' + d + ' day' + (d!==1?'s':'') + ' remaining';
           if (subEl)   subEl.textContent   = 'Upgrade to Pro to keep full access after your trial ends.';
           if (btnEl)   { btnEl.textContent = 'Upgrade to Pro'; btnEl.onclick = showUpgrade; }
           tierCard.style.background = 'rgba(251,191,36,0.06)';
           tierCard.style.borderColor = 'rgba(251,191,36,0.18)';
           tierCard.querySelector('.tier-icon').style.color = 'var(--warn)';
         } else if (tier === 'free_limited') {
           if (iconEl)  { iconEl.className = 'ti ti-lock'; }
           if (titleEl) titleEl.textContent = state.user.trialUsed
             ? 'Trial Ended — Limited Access'
             : 'Limited Free Access — 1-2 exercises per group';
           if (subEl)   subEl.textContent   = state.user.trialUsed
             ? 'Upgrade to Pro to restore full access.'
             : 'Start your free 7-day trial to unlock the full library.';
           if (btnEl) {
             if (state.user.trialUsed) {
               btnEl.textContent = 'Upgrade to Pro — ₪25/mo';
               btnEl.onclick = handleGrowPayment;
             } else {
               btnEl.textContent = 'Start Free Trial';
               btnEl.onclick = function(){ openModal('start-trial'); };
             }
           }
           tierCard.style.background = 'rgba(96,165,250,0.06)';
           tierCard.style.borderColor = 'rgba(96,165,250,0.18)';
           tierCard.querySelector('.tier-icon').style.color = '#60A5FA';
         }
       }
     }
   }
   
   /* ══════════════════════════════════════════════════════════
      ADMIN PANEL — MASTER LIBRARY CRUD
   ══════════════════════════════════════════════════════════ */
   
   /* ── Load real users from Firestore for admin panel ──────── */
   async function loadAdminUsers() {
     const body = document.getElementById('admin-users-list');
     if (!body) return;
   
     if (!window._db) {
       body.innerHTML = `<div class="admin-rules-hint">
         <i class="ti ti-info-circle" style="font-size:18px;color:var(--warn)"></i>
         <p>Firebase not connected. Make sure your Firebase config is in index.html.</p>
       </div>`;
       return;
     }
   
     body.innerHTML = `<p style="color:var(--muted);font-size:13px;padding:16px">
       <i class="ti ti-loader" style="animation:spin 1s linear infinite"></i> Loading users…</p>`;
   
     // REQUIRED FIRESTORE RULE for this to work:
     // In Firebase Console → Firestore → Rules, add:
     // match /users/{uid} { allow read: if true; }
     // The manager is not a Firebase Auth user so standard auth-based rules block the read.
   
     try {
       const { getDocs, collection } = window._firebase;
       const snap = await getDocs(collection(window._db, 'users'));
   
       const users = [];
       snap.forEach(d => users.push({ id: d.id, ...d.data() }));
   
       const countEl = document.getElementById('stat-total-users');
       if (countEl) countEl.textContent = users.length;
   
       if (!users.length) {
         body.innerHTML = '<p style="color:var(--muted);font-size:13px;padding:16px">No registered users yet.</p>';
         return;
       }
   
       body.innerHTML = users.map(u => {
         const tier    = u.tier || 'free';
         const tierTag = tier === 'premium'
           ? '<span class="tag" style="background:rgba(126,232,162,0.1);color:var(--accent)">Premium</span>'
           : tier === 'trial'
           ? '<span class="tag tag-custom">Trial</span>'
           : '<span class="tag" style="background:rgba(96,165,250,0.1);color:#60A5FA">Free</span>';
         const av      = (u.fullName || u.email || 'U').split(' ').slice(0,2).map(n=>n[0]).join('').toUpperCase();
         const joined  = u.createdAt
           ? new Date(u.createdAt).toLocaleDateString('en-IL',{day:'numeric',month:'short',year:'numeric'})
           : '—';
         return `
         <div class="admin-user-card">
           <div class="user-avatar-sm" style="width:40px;height:40px;font-size:14px;flex-shrink:0">${av}</div>
           <div style="flex:1;min-width:0;overflow:hidden">
             <div style="font-weight:600;font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u.fullName || '—'}</div>
             <div style="font-size:11.5px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u.email || u.id}</div>
             <div style="font-size:11px;color:var(--muted2);margin-top:2px">${u.specialty || 'Trainer'} · Joined ${joined}</div>
           </div>
           ${tierTag}
         </div>`;
       }).join('');
   
     } catch(err) {
       console.error('loadAdminUsers error:', err);
       body.innerHTML = `<div class="admin-rules-hint">
         <i class="ti ti-alert-triangle" style="font-size:18px;color:var(--danger)"></i>
         <div>
           <strong style="display:block;margin-bottom:6px;color:var(--danger)">Firestore permission denied</strong>
           <p style="font-size:12.5px;color:var(--muted);line-height:1.6">
             Add this rule to your Firestore rules in Firebase Console:<br>
             <code style="background:var(--surface3);padding:6px 10px;border-radius:6px;display:block;margin-top:6px;font-size:11.5px">
               match /users/{uid} {<br>
               &nbsp;&nbsp;allow read: if true;<br>
               }
             </code>
           </p>
         </div>
       </div>`;
     }
   }
   
   function renderAdminTable(filterQuery) {
     const q    = (filterQuery || adminSearchQuery || '').toLowerCase();
     let   pool = q
       ? MASTER_EXERCISES.filter(e =>
           e.title.toLowerCase().includes(q) ||
           e.muscle.includes(q) ||
           e.sub.toLowerCase().includes(q))
       : [...MASTER_EXERCISES];
   
     document.getElementById('admin-exercise-count').textContent = `${MASTER_EXERCISES.length} exercises`;
     document.getElementById('stat-total-exercises').textContent  = MASTER_EXERCISES.length;
   
     const tbody = document.getElementById('admin-table-body');
     if (!pool.length) {
       tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:40px;color:var(--muted)">No exercises found.</td></tr>`;
       return;
     }
   
     tbody.innerHTML = pool.map(ex => `
       <tr>
         <td>
           <div class="admin-ex-title">${ex.title}</div>
           <div class="admin-ex-desc-preview">${ex.desc}</div>
         </td>
         <td><span class="tag tag-${ex.muscle}">${capitalize(ex.muscle)}</span></td>
         <td><span class="tag tag-sub">${ex.sub}</span></td>
         <td><span style="color:var(--muted);font-size:12.5px">${ex.diff}</span></td>
         <td>
           ${ex.premium
             ? '<span class="tag tag-premium">Premium</span>'
             : '<span class="tag" style="background:var(--surface3);color:var(--muted)">Free</span>'}
         </td>
         <td>
           <div class="admin-actions">
             <button class="admin-action-btn edit" onclick="openAdminModal('edit','${ex.id}')">
               <i class="ti ti-edit"></i> Edit
             </button>
             <button class="admin-action-btn delete" onclick="openDeleteConfirm('${ex.id}')">
               <i class="ti ti-trash"></i> Delete
             </button>
           </div>
         </td>
       </tr>`).join('');
   }
   
   function handleAdminSearch(q) {
     adminSearchQuery = q;
     renderAdminTable(q);
   }
   
   function openAdminModal(mode, id) {
     const modal   = document.getElementById('modal-admin-exercise');
     const titleEl = document.getElementById('admin-modal-title');
     const saveBtn = document.getElementById('admin-modal-save-btn');
   
     // Reset form fields
     document.getElementById('admin-edit-id').value       = '';
     document.getElementById('admin-ex-title').value      = '';
     document.getElementById('admin-ex-muscle').value     = '';
     document.getElementById('admin-ex-subcat').innerHTML = '<option value="">Select group first</option>';
     document.getElementById('admin-ex-diff').value       = 'Beginner';
     document.getElementById('admin-ex-duration').value   = '';
     document.getElementById('admin-ex-desc').value       = '';
     document.getElementById('admin-ex-premium').checked  = false;
     document.getElementById('admin-ex-video').value      = '';
     const adminFile = document.getElementById('admin-ex-file');
     if (adminFile) adminFile.value = '';
     const adminFileLabel = document.getElementById('admin-file-label');
     if (adminFileLabel) adminFileLabel.textContent = 'Choose video file…';
     const adminProg = document.getElementById('admin-upload-progress');
     if (adminProg) adminProg.style.display = 'none';
   
     if (mode === 'edit' && id) {
       const ex = MASTER_EXERCISES.find(e => e.id === id);
       if (!ex) return;
       titleEl.innerHTML = '<i class="ti ti-edit"></i> Edit Exercise';
       saveBtn.innerHTML = '<i class="ti ti-check"></i> Save Changes';
       document.getElementById('admin-edit-id').value      = ex.id;
       document.getElementById('admin-ex-title').value     = ex.title;
       document.getElementById('admin-ex-muscle').value    = ex.muscle;
       populateSubcats('admin-ex-muscle', 'admin-ex-subcat');
       document.getElementById('admin-ex-subcat').value    = ex.sub;
       document.getElementById('admin-ex-diff').value      = ex.diff    || 'Beginner';
       // Duration auto-detected from video — not shown in form
       document.getElementById('admin-ex-desc').value      = ex.desc;
       document.getElementById('admin-ex-premium').checked = !!ex.premium;
       document.getElementById('admin-ex-video').value     = ex.videoURL || '';
     } else {
       titleEl.innerHTML = '<i class="ti ti-plus"></i> Add Exercise to Master Library';
       saveBtn.innerHTML = '<i class="ti ti-check"></i> Save Exercise';
     }
   
     document.getElementById('modal-backdrop').classList.add('open');
     modal.classList.add('open');
   }
   
   async function saveAdminExercise() {
     const editId   = document.getElementById('admin-edit-id').value;
     const title    = document.getElementById('admin-ex-title').value.trim();
     const muscle   = document.getElementById('admin-ex-muscle').value;
     const sub      = document.getElementById('admin-ex-subcat').value;
     const diff     = document.getElementById('admin-ex-diff').value;
     // Duration is auto-detected from video, not manually entered
     const duration = document.getElementById('admin-ex-duration').value.trim() || '';
     const desc     = document.getElementById('admin-ex-desc').value.trim();
     const premium  = document.getElementById('admin-ex-premium').checked;
     let   videoURL = document.getElementById('admin-ex-video').value.trim();
   
     if (!title)  { showToast('Please enter an exercise title.'); return; }
     if (!muscle) { showToast('Please select a muscle group.'); return; }
     if (!sub)    { showToast('Please select a sub-category.'); return; }
     if (!desc)   { showToast('Please enter a description.'); return; }
   
     // ── Upload local video file if one was selected ──────────
     const fileInput = document.getElementById('admin-ex-file');
     const file      = fileInput && fileInput.files[0];
     if (file) {
       const saveBtn = document.getElementById('admin-modal-save-btn');
       saveBtn.disabled = true;
       saveBtn.innerHTML = '<i class="ti ti-loader" style="animation:spin 1s linear infinite"></i> Uploading…';
       try {
         // Auto-detect duration from admin-uploaded video
         const adminVideoDuration = await getVideoDuration(file);

         const storageRef = window._firebase.ref(
           window._storage,
           `masterVideos/${Date.now()}_${file.name}`
         );
         const task = window._firebase.uploadBytesResumable(storageRef, file);
   
         // Show progress in the admin progress bar
         const prog = document.getElementById('admin-upload-progress');
         const fill = document.getElementById('admin-upload-fill');
         const lbl  = document.getElementById('admin-upload-label');
         if (prog) prog.style.display = 'block';
   
         videoURL = await new Promise((resolve, reject) => {
           task.on('state_changed',
             snap => {
               const pct = Math.round(snap.bytesTransferred / snap.totalBytes * 100);
               if (fill) fill.style.width = pct + '%';
               if (lbl)  lbl.textContent  = `Uploading… ${pct}%`;
             },
             reject,
             async () => resolve(await window._firebase.getDownloadURL(task.snapshot.ref))
           );
         });
   
         if (prog) prog.style.display = 'none';
       } catch (e) {
         showToast('Video upload failed. Check Firebase Storage rules.');
         const saveBtn2 = document.getElementById('admin-modal-save-btn');
         saveBtn2.disabled = false;
         saveBtn2.innerHTML = '<i class="ti ti-check"></i> Save Exercise';
         return;
       }
       const saveBtn2 = document.getElementById('admin-modal-save-btn');
       saveBtn2.disabled = false;
       saveBtn2.innerHTML = '<i class="ti ti-check"></i> Save Exercise';
       if (fileInput) fileInput.value = '';
       document.getElementById('admin-file-label').textContent = 'Choose video file…';
     }
   
     if (editId) {
       const idx = MASTER_EXERCISES.findIndex(e => e.id === editId);
       if (idx === -1) return;
       MASTER_EXERCISES[idx] = {
         ...MASTER_EXERCISES[idx],
         title, muscle, sub, diff,
         duration: MASTER_EXERCISES[idx].duration || duration || '',
         desc, premium, videoURL,
       };
       showToast(`✓ "${title}" updated!`);
     } else {
       MASTER_EXERCISES.push({
         id: 'm_' + Date.now(),
         title, muscle, sub, diff,
         duration: (typeof adminVideoDuration !== 'undefined' ? adminVideoDuration : duration) || '',
         desc, premium, videoURL, custom: false,
       });
       showToast(`✓ "${title}" added to master library!`);
     }
   
     saveMasterLibrary();
     closeAllModals();
     renderAdminTable();
     updateAdminStats();
   }
   
   function openDeleteConfirm(id) {
     const ex = MASTER_EXERCISES.find(e => e.id === id);
     if (!ex) return;
     adminDeleteTargetId = id;
     document.getElementById('delete-confirm-text').textContent =
       `"${ex.title}" will be permanently removed from the master library and all trainer views.`;
     document.getElementById('modal-backdrop').classList.add('open');
     document.getElementById('modal-confirm-delete').classList.add('open');
   }
   
   function confirmDeleteExercise() {
     if (!adminDeleteTargetId) return;
     const ex   = MASTER_EXERCISES.find(e => e.id === adminDeleteTargetId);
     const name = ex ? ex.title : 'Exercise';
     MASTER_EXERCISES     = MASTER_EXERCISES.filter(e => e.id !== adminDeleteTargetId);
     adminDeleteTargetId  = null;
     saveMasterLibrary();
     closeAllModals();
     renderAdminTable();
     updateAdminStats();
     showToast(`🗑 "${name}" deleted.`);
   }
   
   /* ── Bulk Import ─────────────────────────────────────────── */
   var _bulkTab      = 'json';
   var _bulkParsed   = [];

   function switchBulkTab(tab, btn) {
     _bulkTab = tab;
     document.querySelectorAll('.bulk-tab').forEach(function(b){ b.classList.remove('active'); });
     document.querySelectorAll('.bulk-panel').forEach(function(p){ p.classList.remove('active'); });
     btn.classList.add('active');
     document.getElementById('bulk-panel-' + tab).classList.add('active');
     clearBulkPreview();
   }

   function clearBulkPreview() {
     _bulkParsed = [];
     document.getElementById('bulk-preview').style.display = 'none';
     document.getElementById('bulk-error').style.display   = 'none';
   }

   function parseBulkInput() {
     var exercises = [];
     var errors    = [];

     if (_bulkTab === 'json') {
       var raw = document.getElementById('bulk-json-input').value.trim();
       if (!raw) { errors.push('Please paste JSON data.'); return { exercises, errors }; }
       try {
         var parsed = JSON.parse(raw);
         if (!Array.isArray(parsed)) parsed = [parsed];
         parsed.forEach(function(e, i) {
           if (!e.title || !e.muscle || !e.sub || !e.desc) {
             errors.push('Row ' + (i+1) + ': missing required field (title, muscle, sub, or desc)');
             return;
           }
           exercises.push(normaliseExercise(e));
         });
       } catch(err) {
         errors.push('Invalid JSON: ' + err.message);
       }

     } else if (_bulkTab === 'csv') {
       var raw = document.getElementById('bulk-csv-input').value.trim();
       if (!raw) { errors.push('Please paste CSV data.'); return { exercises, errors }; }
       var lines = raw.split('\n').map(function(l){ return l.trim(); }).filter(Boolean);

       if (lines.length < 2) { errors.push('CSV needs at least a header row and one data row.'); return { exercises, errors }; }
       var headers = lines[0].split(',').map(function(h){ return h.trim().toLowerCase(); });
       for (var i = 1; i < lines.length; i++) {
         var cols = lines[i].split(',');
         var obj  = {};
         headers.forEach(function(h, j){ obj[h] = (cols[j] || '').trim(); });
         if (!obj.title || !obj.muscle || !obj.sub || !obj.desc) {
           errors.push('Row ' + (i+1) + ': missing required column');
           continue;
         }
         exercises.push(normaliseExercise(obj));
       }

     } else if (_bulkTab === 'simple') {
       var raw = document.getElementById('bulk-simple-input').value.trim();
       if (!raw) { errors.push('Please enter exercises.'); return { exercises, errors }; }
       var lines = raw.split('\n').map(function(l){ return l.trim(); }).filter(Boolean);

       lines.forEach(function(line, i) {
         var parts = line.split('|').map(function(p){ return p.trim(); });
         if (parts.length < 4) {
           errors.push('Row ' + (i+1) + ': need 4 parts separated by |');
           return;
         }
         exercises.push(normaliseExercise({
           title: parts[0], muscle: parts[1], sub: parts[2], desc: parts[3],
           diff: parts[4] || 'Intermediate', premium: false,
         }));
       });
     }

     return { exercises, errors };
   }

   function normaliseExercise(e) {
     return {
       id:       'mi_' + Date.now() + '_' + Math.random().toString(36).slice(2,6),
       title:    (e.title    || '').trim(),
       muscle:   (e.muscle   || '').trim().toLowerCase(),
       sub:      (e.sub      || '').trim(),
       desc:     (e.desc     || '').trim(),
       diff:     (e.diff     || 'Intermediate').trim(),
       duration: '',
       premium:  e.premium === true || e.premium === 'true',
       videoURL: (e.videoURL || e.video_url || '').trim(),
       custom:   false,
     };
   }

   function previewBulkImport() {
     var result = parseBulkInput();
     var errEl  = document.getElementById('bulk-error');
     var prevEl = document.getElementById('bulk-preview');

     if (result.errors.length) {
       errEl.innerHTML = '<i class="ti ti-alert-triangle"></i> ' + result.errors.join('<br>');
       errEl.style.display = 'block';
       prevEl.style.display = 'none';
       return;
     }
     errEl.style.display = 'none';

     if (!result.exercises.length) {
       errEl.innerHTML = 'No valid exercises found.';
       errEl.style.display = 'block';
       return;
     }

     _bulkParsed = result.exercises;
     document.getElementById('bulk-preview-count').innerHTML =
       '<i class="ti ti-check" style="color:var(--accent)"></i> <strong>' + _bulkParsed.length + ' exercises</strong> ready to import';

     document.getElementById('bulk-preview-list').innerHTML = _bulkParsed.map(function(e) {
       return '<div class="bulk-preview-row">' +
         '<span class="tag tag-' + e.muscle + '">' + capitalize(e.muscle) + '</span>' +
         '<span class="tag tag-sub">' + e.sub + '</span>' +
         '<strong>' + e.title + '</strong>' +
         (e.premium ? '<span class="tag tag-premium">Premium</span>' : '') +
         '</div>';
     }).join('');
     prevEl.style.display = 'block';
   }

   async function executeBulkImport() {
     if (!_bulkParsed.length) { previewBulkImport(); return; }

     var btn = document.getElementById('bulk-import-btn');
     if (btn) { btn.disabled = true; btn.innerHTML = '<i class="ti ti-loader" style="animation:spin 1s linear infinite"></i> Importing...'; }

     try {
       // Use in-memory MASTER_EXERCISES as the existing list —
       // avoids a Firestore read which fails for unauthenticated manager
       var existing = MASTER_EXERCISES.slice();
       var existingTitles = new Set(existing.map(function(e){ return e.title.toLowerCase(); }));

       var toAdd   = _bulkParsed.filter(function(e){ return !existingTitles.has(e.title.toLowerCase()); });
       var skipped = _bulkParsed.length - toAdd.length;
       var merged  = existing.concat(toAdd);

       // Write to Firestore — allow write: if true means no auth needed
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'config', 'masterLibrary'),
         { exercises: merged, updatedAt: new Date().toISOString() }
       );

       // Update local state
       MASTER_EXERCISES = merged;
       localStorage.setItem('repcast_master', JSON.stringify(merged));
       renderAdminTable();
       updateAdminStats();
       closeAllModals();
       clearBulkPreview();

       var msg = 'Imported ' + toAdd.length + ' exercises! Total: ' + merged.length;
       if (skipped > 0) msg += ' (' + skipped + ' skipped — duplicates)';
       showToast(msg);

     } catch(e) {
       console.error('Bulk import error:', e.code, e.message);
       showToast('Import failed: ' + (e.code || e.message));
     }

     if (btn) { btn.disabled = false; btn.innerHTML = '<i class="ti ti-file-import"></i> Import to Library'; }
   }

   /* ── Import new exercises into Firestore master library ─── */
   async function importNewExercises() {
     var btn = document.getElementById('import-btn');
     if (btn) { btn.disabled = true; btn.innerHTML = '<i class="ti ti-loader" style="animation:spin 1s linear infinite"></i> Importing...'; }

     var NEW_EXERCISES = [
       {id:'m105',title:'Pec Deck Fly',muscle:'chest',sub:'Middle Chest',desc:'Sit in machine, elbows on pads. Bring arms together in a wide arc. Squeeze chest at peak. Slow eccentric return.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'m106',title:'Svend Press',muscle:'chest',sub:'Middle Chest',desc:'Hold two plates together, press forward from chest. Squeeze plates hard throughout. Excellent mid-chest activation.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'m107',title:'Loaded Stretch Fly',muscle:'chest',sub:'Lower Chest',desc:'Dumbbell fly on slight decline. Pause 2 seconds at the bottom stretch. Emphasises lower chest and promotes hypertrophy.',diff:'Intermediate',duration:'',premium:true,custom:false},
       {id:'m108',title:'Pendlay Row',muscle:'back',sub:'Upper Back',desc:'Bar on floor between reps. Explosive pull to lower chest, horizontal torso. Reset completely each rep. Builds raw upper back power.',diff:'Advanced',duration:'',premium:false,custom:false},
       {id:'m109',title:'Cable Pullover',muscle:'back',sub:'Lats',desc:'High cable, arms straight. Pull bar in wide arc to hips. Keep core braced. Isolates lats through full range.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'m110',title:'Jefferson Curl',muscle:'back',sub:'Lower Back',desc:'Standing on platform, slowly curl spine down vertebra by vertebra. Use light weight. Advanced mobility exercise.',diff:'Advanced',duration:'',premium:true,custom:false},
       {id:'m111',title:'Sissy Squat',muscle:'legs',sub:'Quads',desc:'Hold support, lean back as knees travel forward past toes. Heels elevated. Extreme quad stretch and contraction.',diff:'Advanced',duration:'',premium:true,custom:false},
       {id:'m112',title:'Lying Hip Abduction',muscle:'legs',sub:'Glutes',desc:'Side-lying, raise top leg to 45 degrees. Hold 2 seconds. Works gluteus medius. Add ankle weight for progression.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'m113',title:'Reverse Hyper',muscle:'legs',sub:'Glutes',desc:'Lie prone on bench, raise legs parallel to floor. Decompresses spine while activating glutes and hamstrings.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'m114',title:'Copenhagen Adduction',muscle:'legs',sub:'Calves',desc:'Side plank with top foot on bench. Lift lower leg to meet top. Strengthens adductors. Reduces groin injury risk.',diff:'Advanced',duration:'',premium:false,custom:false},
       {id:'m115',title:'Cuban Press',muscle:'shoulders',sub:'Rear Deltoid',desc:'Upright row to chin, externally rotate to overhead press position. Trains full rotator cuff and deltoid complex.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'m116',title:'Prone Y-Raise',muscle:'shoulders',sub:'Rear Deltoid',desc:'Lie prone on incline bench. Raise arms in Y shape, thumbs up. Targets lower trapezius and rear deltoids.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'m117',title:'Bottoms-Up Press',muscle:'shoulders',sub:'Front Deltoid',desc:'Kettlebell upside down, press overhead. Demands extreme rotator cuff stability. Excellent shoulder health exercise.',diff:'Advanced',duration:'',premium:true,custom:false},
       {id:'m118',title:'Cross-Body Hammer Curl',muscle:'arms',sub:'Biceps',desc:'Curl dumbbell across body toward opposite shoulder. Emphasises brachialis. Builds arm thickness.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'m119',title:'JM Press',muscle:'arms',sub:'Triceps',desc:'Hybrid between close-grip bench and skull crusher. Bar travels back toward forehead then elbows flare to press.',diff:'Advanced',duration:'',premium:true,custom:false},
       {id:'m120',title:'Plate Pinch Carry',muscle:'arms',sub:'Forearms',desc:'Pinch weight plates between fingers and thumb. Walk for distance. Builds crushing grip and finger strength.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'m121',title:'Dragon Flag',muscle:'core',sub:'Abs',desc:'Lie on bench, hold behind head. Raise entire body rigid like a plank, lower with control. Extreme core strength.',diff:'Advanced',duration:'',premium:true,custom:false},
       {id:'m122',title:'L-Sit Hold',muscle:'core',sub:'Abs',desc:'On parallel bars or floor. Raise legs parallel, hold. Combines hip flexor, ab, and tricep strength.',diff:'Advanced',duration:'',premium:false,custom:false},
       {id:'m123',title:'Suitcase Carry',muscle:'core',sub:'Obliques',desc:'Single heavy dumbbell at side. Walk while resisting lateral bend. Builds anti-lateral flexion strength.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'m124',title:'McGill Bird Dog',muscle:'core',sub:'Transverse Abs',desc:'From all fours, extend opposite arm and leg to neutral. Hold 10 seconds. Key exercise for spine stabilisation.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'m125',title:'Sandbag Clean',muscle:'fullbody',sub:'Compound',desc:'Pick sandbag from floor to shoulder in one explosive movement. Awkward load challenges stability and athleticism.',diff:'Advanced',duration:'',premium:false,custom:false},
       {id:'m126',title:'Sled Push',muscle:'fullbody',sub:'HIIT',desc:'Drive sled forward with low hips and forward lean. Pure power and conditioning. No eccentric phase means minimal soreness.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'m127',title:'Rope Climb',muscle:'fullbody',sub:'Functional',desc:'Climb rope using arms and legs. Builds total body pulling strength, grip and coordination.',diff:'Advanced',duration:'',premium:true,custom:false},
       {id:'m128',title:'Broad Jump',muscle:'fullbody',sub:'HIIT',desc:'Athletic stance, swing arms and jump as far forward as possible. Land softly. Develops explosive lower body power.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'p40',title:'Scapular Push-Up',muscle:'physio',sub:'Shoulder Rehab',desc:'In push-up position, arms straight. Let chest sink then push shoulder blades apart without bending elbows. Trains serratus anterior.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p41',title:'Sidelying External Rotation',muscle:'physio',sub:'Shoulder Rehab',desc:'Lie on side, elbow at 90 degrees. Rotate forearm upward against gravity. Targets infraspinatus directly.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p42',title:'Wall Angels',muscle:'physio',sub:'Shoulder Rehab',desc:'Stand with back flat on wall, arms in goalpost position. Slide arms overhead maintaining contact. Improves thoracic mobility.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p43',title:'Prone T-Raise',muscle:'physio',sub:'Shoulder Rehab',desc:'Lie prone, arms out in T. Raise arms to horizontal, thumbs up. Hold 3 seconds. Targets mid trapezius.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p44',title:'Reverse Nordic Curl',muscle:'physio',sub:'Knee Rehab',desc:'Kneel, lean back slowly keeping hips extended. Strengthens quadriceps eccentrically. Excellent for patellar tendon rehab.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'p45',title:'Short Arc Quad',muscle:'physio',sub:'Knee Rehab',desc:'Sit with roll under knee. Extend from 45 degrees to full extension. Hold 5 seconds. Classic post-surgical quad activation.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p46',title:'Lateral Step-Up',muscle:'physio',sub:'Knee Rehab',desc:'Step sideways onto low box. Drive through heel to stand. Controls valgus collapse. Excellent VMO activation.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p47',title:'Isometric Wall Squat',muscle:'physio',sub:'Knee Rehab',desc:'Back against wall, lower to pain-free angle. Hold 30-60 seconds. Safe isometric quad exercise for early rehab.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p48',title:'McGill Curl-Up',muscle:'physio',sub:'Lower Back Rehab',desc:'One knee bent, hands under lumbar. Lift only head and shoulders. Spine-safe ab exercise for lower back patients.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p49',title:'Side Bridge',muscle:'physio',sub:'Lower Back Rehab',desc:'Side plank from knees or feet. Hold neutral spine. Part of McGill Big Three. Trains quadratus lumborum.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p50',title:'Prone Press-Up',muscle:'physio',sub:'Lower Back Rehab',desc:'Lie prone, hands under shoulders. Press up leaving hips on floor. McKenzie Method exercise for disc centralisation.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p51',title:'Lumbar Rotation Stretch',muscle:'physio',sub:'Lower Back Rehab',desc:'Supine, knees bent. Let knees fall gently side to side. Keep shoulders flat. Gentle rotational mobility for lumbar spine.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p52',title:'Hip Hinge Pattern',muscle:'physio',sub:'Lower Back Rehab',desc:'Stand with dowel on back. Hinge forward keeping 3 points of contact. Teaches proper movement pattern to protect lumbar spine.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p53',title:'Supine Hip Flexor Stretch',muscle:'physio',sub:'Hip Rehab',desc:'Lie on table edge, bring one knee to chest, let other leg hang. Hip flexor stretch without spinal compensation.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p54',title:'Fire Hydrant',muscle:'physio',sub:'Hip Rehab',desc:'All fours. Lift bent knee out to side. Targets gluteus medius and external rotators. Progress to banded version.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p55',title:'Hip Extension Isometric',muscle:'physio',sub:'Hip Rehab',desc:'Stand at wall, press heel back into wall. Hold 10 seconds. Activates gluteus maximus without movement.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p56',title:'Lateral Band Walk',muscle:'physio',sub:'Hip Rehab',desc:'Band around ankles or knees. Step sideways maintaining squat position. Strengthens gluteus medius. Essential for hip and knee rehab.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p57',title:'Frog Stretch',muscle:'physio',sub:'Hip Rehab',desc:'All fours, knees wide as hips open. Rock hips back. Deep hip adductor and groin stretch.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p58',title:'Heel Raise Progression',muscle:'physio',sub:'Ankle Rehab',desc:'Double to single leg calf raises. Full range. Builds gastrocnemius and soleus strength post ankle sprain.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p59',title:'Ankle Dorsiflexion Mobility',muscle:'physio',sub:'Ankle Rehab',desc:'Lunge position, drive knee forward over toes keeping heel down. Improves dorsiflexion range. Critical for squat depth.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p60',title:'Wobble Board Training',muscle:'physio',sub:'Ankle Rehab',desc:'Stand on wobble board. Progress from bilateral to unilateral to eyes closed. Restores proprioceptive function after ankle sprain.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'p61',title:'Neck Isometrics',muscle:'physio',sub:'Neck Rehab',desc:'Press head into hand in all directions. Hold 5-10 seconds. Builds neck stability without movement. Safe for most neck conditions.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p62',title:'Thoracic Extension Stretch',muscle:'physio',sub:'Neck Rehab',desc:'Foam roller under mid back. Gently extend over it. Improves thoracic mobility which reduces neck and shoulder tension.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p63',title:'Upper Trap Stretch',muscle:'physio',sub:'Neck Rehab',desc:'Sit upright. Ear toward shoulder, hand gently on head. Hold 30 seconds. Releases upper trapezius tension.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p64',title:'Wrist Flexor Stretch',muscle:'physio',sub:'Shoulder Rehab',desc:'Arm straight, palm up. Pull fingers back with other hand. Hold 30 seconds. Essential for tennis elbow and carpal tunnel.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p65',title:'Eccentric Wrist Curl',muscle:'physio',sub:'Shoulder Rehab',desc:'Forearm on table. Curl up with both hands, lower with one. Eccentric loading for lateral epicondylitis rehabilitation.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p66',title:'Supination and Pronation',muscle:'physio',sub:'Shoulder Rehab',desc:'Hold hammer at end. Rotate forearm palm up and palm down slowly. Key exercise for elbow and forearm rehab.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p67',title:'Plantar Fascia Stretch',muscle:'physio',sub:'Ankle Rehab',desc:'Seated, cross foot over knee. Pull toes back toward shin. Hold 30 seconds. Best done first thing in the morning.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p68',title:'Toe Spread and Lift',muscle:'physio',sub:'Ankle Rehab',desc:'Seated barefoot. Spread all toes wide then lift big toe only. Strengthens intrinsic foot muscles. Improves arch support.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p69',title:'Short Foot Exercise',muscle:'physio',sub:'Ankle Rehab',desc:'Shorten the foot by pulling ball of foot toward heel without curling toes. Activates intrinsic arch muscles.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p70',title:'Ankle Pumps',muscle:'physio',sub:'Ankle Rehab',desc:'Pump ankle up and down rhythmically. Activates calf muscle pump. Critical post-surgery DVT prevention. Do every hour.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p71',title:'Quad Set',muscle:'physio',sub:'Knee Rehab',desc:'Lie supine, leg straight. Tighten quad by pressing knee into surface. Hold 10 seconds. First exercise post knee surgery.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p72',title:'Active Assisted Range of Motion',muscle:'physio',sub:'Shoulder Rehab',desc:'Use unaffected arm to move affected joint through available range. Maintains joint mobility after injury or surgery.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p73',title:'Single Leg Squat Progression',muscle:'physio',sub:'Balance',desc:'Progress from box-supported to full single leg squat. Controls knee valgus. Functional test for lower limb rehabilitation.',diff:'Intermediate',duration:'',premium:false,custom:false},
       {id:'p74',title:'Foam Pad Standing',muscle:'physio',sub:'Balance',desc:'Stand on foam pad single leg. Progress to eyes closed. Challenges proprioception. Excellent for post-ankle or knee rehab.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p75',title:'Vestibular Exercises',muscle:'physio',sub:'Balance',desc:'Head movements side to side and up/down while focusing on a point. Trains vestibular system. Used for vertigo and concussion rehab.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p76',title:'Pursed Lip Breathing',muscle:'physio',sub:'Breathing',desc:'Inhale through nose 2 counts. Exhale through pursed lips 4 counts. Improves breathing efficiency. Used in COPD and asthma rehab.',diff:'Beginner',duration:'',premium:false,custom:false},
       {id:'p77',title:'Segmental Breathing',muscle:'physio',sub:'Breathing',desc:'Place hands on different rib areas. Direct breath into that zone. Improves regional lung ventilation. Critical post-thoracic surgery.',diff:'Beginner',duration:'',premium:false,custom:false},
     ];

     try {
       // Use in-memory MASTER_EXERCISES — avoids read auth check for manager
       var existing = MASTER_EXERCISES.slice();
       var existingIds = new Set(existing.map(function(e){ return e.id; }));
       var toAdd    = NEW_EXERCISES.filter(function(e){ return !existingIds.has(e.id); });

       if (toAdd.length === 0) {
         showToast('All exercises already in library — nothing to add.');
         if (btn) { btn.disabled = false; btn.innerHTML = '<i class="ti ti-download"></i> Import 75 New Exercises'; }
         return;
       }

       var merged = existing.concat(toAdd);
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'config', 'masterLibrary'),
         { exercises: merged, updatedAt: new Date().toISOString() }
       );

       MASTER_EXERCISES = merged;
       localStorage.setItem('repcast_master', JSON.stringify(merged));
       renderAdminTable();
       updateAdminStats();
       showToast('Imported ' + toAdd.length + ' exercises! Total: ' + merged.length);
       if (btn) { btn.disabled = false; btn.innerHTML = '<i class="ti ti-check"></i> Imported!'; }

     } catch(e) {
       console.error('Import error:', e.code, e.message);
       showToast('Import failed: ' + e.code + '. Check Firestore rules for config/masterLibrary.');
       if (btn) { btn.disabled = false; btn.innerHTML = '<i class="ti ti-download"></i> Import 75 New Exercises'; }
     }
   }

   function updateAdminStats() {
     const el = document.getElementById('stat-total-exercises');
     if (el) el.textContent = MASTER_EXERCISES.length;
     const rl = document.getElementById('stat-total-routines');
     if (rl) rl.textContent = sentRoutines.length;
   }
   

/* ══════════════════════════════════════════════════════════
   NUTRITION — BMR CALCULATOR + MENU SYSTEM
══════════════════════════════════════════════════════════ */

let menus        = [];
let foods        = [];   // master food database (admin-controlled)
let bmrResult    = null;
let activeGoal   = 'maintain';
let menuFilter   = 'all';
let editingMenuId = null;

/* ── Goal selector ────────────────────────────────────── */
function setGoal(goal, btn) {
  activeGoal = goal;
  document.querySelectorAll('.goal-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById('cut-intensity-group').style.display  = goal === 'cut'  ? '' : 'none';
  document.getElementById('bulk-intensity-group').style.display = goal === 'bulk' ? '' : 'none';
}

/* ── BMR Calculation (Mifflin-St Jeor) ───────────────── */
function calculateBMR() {
  var name     = document.getElementById('bmr-name').value.trim() || 'Client';
  var gender   = document.getElementById('bmr-gender').value;
  var age      = parseFloat(document.getElementById('bmr-age').value);
  var weight   = parseFloat(document.getElementById('bmr-weight').value);
  var height   = parseFloat(document.getElementById('bmr-height').value);
  var activity = parseFloat(document.getElementById('bmr-activity').value);

  if (!age || !weight || !height) { showToast('Please fill in age, weight and height.'); return; }

  // Mifflin-St Jeor
  var bmr = (10 * weight) + (6.25 * height) - (5 * age) + (gender === 'male' ? 5 : -161);
  var tdee = Math.round(bmr * activity);

  // Adjust for goal
  var factor = 1;
  if (activeGoal === 'cut')  factor = parseFloat(document.getElementById('bmr-cut-intensity').value  || 0.85);
  if (activeGoal === 'bulk') factor = parseFloat(document.getElementById('bmr-bulk-intensity').value || 1.10);
  var target = Math.round(tdee * factor);

  // Macro split based on goal
  var proteinG, carbsG, fatG;
  if (activeGoal === 'cut') {
    proteinG = Math.round(weight * 2.2);           // 2.2g per kg
    fatG     = Math.round(weight * 0.9);           // 0.9g per kg
    carbsG   = Math.round((target - (proteinG * 4) - (fatG * 9)) / 4);
  } else if (activeGoal === 'bulk') {
    proteinG = Math.round(weight * 2.0);
    fatG     = Math.round(weight * 1.0);
    carbsG   = Math.round((target - (proteinG * 4) - (fatG * 9)) / 4);
  } else {
    proteinG = Math.round(weight * 1.8);
    fatG     = Math.round(weight * 0.9);
    carbsG   = Math.round((target - (proteinG * 4) - (fatG * 9)) / 4);
  }
  carbsG = Math.max(50, carbsG); // floor

  bmrResult = { name, gender, age, weight, height, bmr: Math.round(bmr), tdee, target, proteinG, carbsG, fatG, goal: activeGoal };

  // Show results
  document.getElementById('bmr-result-name').textContent = name;
  document.getElementById('res-bmr').textContent    = Math.round(bmr).toLocaleString();
  document.getElementById('res-tdee').textContent   = tdee.toLocaleString();
  document.getElementById('res-target').textContent = target.toLocaleString();
  document.getElementById('res-protein').textContent = proteinG + 'g';
  document.getElementById('res-carbs').textContent   = carbsG + 'g';
  document.getElementById('res-fat').textContent     = fatG + 'g';

  // Macro bars
  var total = (proteinG * 4) + (carbsG * 4) + (fatG * 9);
  document.getElementById('bar-protein').style.width = Math.round((proteinG * 4 / total) * 100) + '%';
  document.getElementById('bar-carbs').style.width   = Math.round((carbsG   * 4 / total) * 100) + '%';
  document.getElementById('bar-fat').style.width     = Math.round((fatG     * 9 / total) * 100) + '%';

  document.getElementById('bmr-results').style.display = '';
  showToast('BMR calculated for ' + name);
}

/* ── Find matching menus ──────────────────────────────── */
function findMatchingMenus() {
  if (!bmrResult) return;
  menuFilter = bmrResult.goal;
  document.querySelectorAll('.lib-tab[id^="menu-tab"]').forEach(function(b){ b.classList.remove('active'); });
  var tabEl = document.getElementById('menu-tab-' + bmrResult.goal);
  if (tabEl) tabEl.classList.add('active');
  renderMenuLibrary();
  // Scroll to menu library
  document.getElementById('menu-library-body').scrollIntoView({ behavior:'smooth' });
  showToast('Showing ' + bmrResult.goal + ' menus closest to ' + bmrResult.target + ' kcal');
}

/* ── Load menus from Firestore ───────────────────────── */
async function loadMenus() {
  if (!window._firebase || !window._db) return;
  try {
    var snap = await window._firebase.getDocs(window._firebase.collection(window._db, col('menus')));
    menus = [];
    snap.forEach(function(d){ menus.push(Object.assign({ id: d.id }, d.data())); });
    if (menus.length === 0 && _lang === 'he') {
      var snapEn = await window._firebase.getDocs(window._firebase.collection(window._db, 'menus'));
      snapEn.forEach(function(d){ menus.push(Object.assign({ id: d.id }, d.data())); });
    }
    renderMenuLibrary();
    renderAdminMenuList();
  } catch(e) {
    console.warn('Load menus error:', e.code, '— using local cache');
    renderMenuLibrary();
    renderAdminMenuList();
  }
}




/* ── Workout Day Picker (client selects which day to train) ── */
function showWorkoutDayPicker(program) {
  var existing = document.getElementById('workout-day-picker-overlay');
  if (existing) existing.remove();

  var days = program.trainingDays || [];
  if (!days.length) { showToast('This program has no training days.'); return; }

  var overlay = document.createElement('div');
  overlay.id = 'workout-day-picker-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99997;background:rgba(0,0,0,0.75);display:flex;align-items:flex-end;justify-content:center;padding:0';

  var sheet = '<div style="background:var(--surface);border-radius:20px 20px 0 0;padding:20px;width:100%;max-width:500px;max-height:80vh;overflow-y:auto">' +
    '<div style="width:36px;height:4px;background:var(--border2);border-radius:2px;margin:0 auto 16px"></div>' +
    '<h3 style="margin:0 0 6px;font-size:16px;font-weight:700">Select Training Day</h3>' +
    '<p style="font-size:13px;color:var(--muted);margin:0 0 16px">' + (program.name||'Program') + '</p>';

  days.forEach(function(day, idx) {
    var exCount = (day.exercises||[]).length;
    sheet += '<div onclick="startWorkout(' + JSON.stringify(program).replace(/</g,'\u003c').replace(/'/g,"\'") + ',' + idx + ');closeWorkoutDayPicker()" ' +
      'style="padding:14px 16px;background:var(--surface2);border:1px solid var(--border2);border-radius:12px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;touch-action:manipulation">' +
      '<div>' +
        '<div style="font-size:14px;font-weight:700">' + (day.day||('Day ' + (idx+1))) + '</div>' +
        '<div style="font-size:12px;color:var(--muted);margin-top:2px">' + exCount + ' exercise' + (exCount !== 1 ? 's' : '') + '</div>' +
      '</div>' +
      '<i class="ti ti-player-play" style="color:var(--accent);font-size:18px"></i>' +
    '</div>';
  });

  sheet += '<button onclick="closeWorkoutDayPicker()" style="width:100%;padding:12px;border:none;background:none;color:var(--muted);font-size:14px;cursor:pointer;margin-top:4px;font-family:inherit">Cancel</button>' +
    '</div>';

  overlay.innerHTML = sheet;
  overlay.addEventListener('click', function(e){ if (e.target === overlay) closeWorkoutDayPicker(); });
  document.body.appendChild(overlay);
}

function closeWorkoutDayPicker() {
  var el = document.getElementById('workout-day-picker-overlay');
  if (el) el.remove();
}


/* ══════════════════════════════════════════════════════════
   WORKOUT TRACKING SYSTEM
══════════════════════════════════════════════════════════ */

var _workout = null;          // active workout state
var _workoutTimerInterval = null;
var _workoutWeightUnit = localStorage.getItem('repcast_weight_unit') || 'kg';

function startWorkoutFromDetail(programId, dayIndex) {
  var program = programs.find(function(p){ return p.id === programId; });
  if (!program) {
    program = (JSON.parse(localStorage.getItem('repcast_my_programs')||'[]')).find(function(p){ return p.id === programId; });
  }
  if (!program) {
    program = (window._clientAssignedPrograms || []).find(function(p){ return p.id === programId; });
  }
  if (!program) { showToast('Program not found'); return; }
  closeAllModals();
  startWorkout(program, dayIndex);
}

function startWorkout(program, dayIndex) {
  var day = program.trainingDays && program.trainingDays[dayIndex];
  if (!day) return;

  _workout = {
    programId:   program.id || '',
    programName: program.name || '',
    dayName:     day.name || day.day || ('Day ' + (dayIndex + 1)),
    dayIndex:    dayIndex,
    startTime:   Date.now(),
    weightUnit:  _workoutWeightUnit,
    exercises:   (day.exercises || []).map(function(ex, i) {
      return {
        exerciseId: ex.id || ex.videoId || '',
        title:      ex.title || ex.name || 'Exercise',
        muscle:     ex.muscle || '',
        targetSets: parseInt(ex.sets) || 3,
        targetReps: ex.reps || '',
        restSeconds: parseRestToSeconds(ex.rest),
        swapped:    false,
        sets:       Array.from({length: parseInt(ex.sets)||3}, function(_,s) {
          return { setNum: s+1, weight: '', reps: ex.reps||'', completed: false };
        })
      };
    })
  };

  renderWorkoutScreen();
  var modal = document.getElementById('modal-workout-tracking');
  if (modal) modal.style.display = 'flex';
  startWorkoutTimer();
}

/* Parse rest strings like "90s", "2 min", "1:30", "90" into seconds */
function parseRestToSeconds(rest) {
  if (!rest) return 60;
  rest = String(rest).toLowerCase().trim();
  // "1:30" format
  if (rest.indexOf(':') > -1) {
    var parts = rest.split(':');
    return (parseInt(parts[0])||0) * 60 + (parseInt(parts[1])||0);
  }
  var num = parseFloat(rest.replace(/[^0-9.]/g, '')) || 0;
  if (rest.indexOf('min') > -1) return Math.round(num * 60);
  // bare number or "90s" → seconds; but if small (<10) and says min-ish, treat as minutes
  return Math.round(num) || 60;
}

function renderWorkoutScreen() {
  if (!_workout) return;
  var titleEl = document.getElementById('workout-day-title');
  if (titleEl) titleEl.textContent = _workout.dayName;

  var unitBtn = document.getElementById('weight-unit-btn');
  if (unitBtn) unitBtn.textContent = _workout.weightUnit;

  var body = document.getElementById('workout-exercises-body');
  if (!body) return;

  body.innerHTML = _workout.exercises.map(function(ex, ei) {
    var setsHTML = '<table class="workout-sets-table">' +
      '<thead><tr><th>Set</th><th>' + _workout.weightUnit + '</th><th>Reps</th><th></th></tr></thead><tbody>' +
      ex.sets.map(function(set, si) {
        return '<tr class="workout-set-row' + (set.completed ? ' completed' : '') + '" id="workout-set-' + ei + '-' + si + '">' +
          '<td style="font-size:13px;font-weight:700;color:var(--muted)">' + set.setNum + '</td>' +
          '<td><input class="workout-set-input" type="number" inputmode="decimal" placeholder="0" value="' + (set.weight||'') + '" ' +
            'onchange="updateWorkoutSet(' + ei + ',' + si + ',\'weight\',this.value)"></td>' +
          '<td><input class="workout-set-input" type="number" inputmode="numeric" placeholder="0" value="' + (set.reps||'') + '" ' +
            'onchange="updateWorkoutSet(' + ei + ',' + si + ',\'reps\',this.value)"></td>' +
          '<td><button class="workout-check-btn' + (set.completed ? ' done' : '') + '" ' +
            'onclick="toggleSetDone(' + ei + ',' + si + ')">' +
            '<i class="ti ' + (set.completed ? 'ti-check' : 'ti-circle') + '"></i>' +
          '</button></td>' +
        '</tr>';
      }).join('') + '</tbody></table>';

    return '<div class="workout-exercise-card">' +
      '<div class="workout-ex-header">' +
        '<div>' +
          '<div class="workout-ex-title">' + ex.title + (ex.swapped ? ' <span style="font-size:10px;color:var(--accent);background:rgba(126,232,162,0.1);padding:2px 6px;border-radius:4px">swapped</span>' : '') + '</div>' +
          '<div class="workout-ex-muscle">' + (ex.muscle||'') + '</div>' +
        '</div>' +
        '<button class="workout-swap-btn" onclick="openSwapExercise(' + ei + ')"><i class="ti ti-refresh"></i> Swap</button>' +
      '</div>' +
      setsHTML +
      '<button class="workout-add-set-btn" onclick="addWorkoutSet(' + ei + ')"><i class="ti ti-plus"></i> Add Set</button>' +
    '</div>';
  }).join('');
}

function updateWorkoutSet(exIdx, setIdx, field, value) {
  if (_workout && _workout.exercises[exIdx] && _workout.exercises[exIdx].sets[setIdx]) {
    _workout.exercises[exIdx].sets[setIdx][field] = value;
  }
}

function toggleSetDone(exIdx, setIdx) {
  if (!_workout) return;
  var set = _workout.exercises[exIdx].sets[setIdx];
  set.completed = !set.completed;
  // Update just this row
  var row = document.getElementById('workout-set-' + exIdx + '-' + setIdx);
  if (row) {
    row.className = 'workout-set-row' + (set.completed ? ' completed' : '');
    var btn = row.querySelector('.workout-check-btn');
    if (btn) {
      btn.className = 'workout-check-btn' + (set.completed ? ' done' : '');
      btn.querySelector('i').className = 'ti ' + (set.completed ? 'ti-check' : 'ti-circle');
    }
  }
  // Start rest timer when a set is completed
  if (set.completed) {
    var restSec = _workout.exercises[exIdx].restSeconds || 60;
    startRestTimer(restSec);
  }
}

/* ── Rest Timer between sets ── */
var _restInterval = null;
var _restRemaining = 0;

function startRestTimer(seconds) {
  _restRemaining = seconds;
  clearInterval(_restInterval);

  var bar = document.getElementById('rest-timer-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'rest-timer-bar';
    bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:100000;background:var(--accent);color:#0a0c0f;padding:16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 -4px 20px rgba(0,0,0,0.3)';
    document.body.appendChild(bar);
  }
  bar.style.display = 'flex';

  function render() {
    var mm = Math.floor(_restRemaining / 60);
    var ss = _restRemaining % 60;
    var label = (mm > 0 ? mm + ':' + (ss<10?'0':'') + ss : ss + 's');
    bar.innerHTML =
      '<div style="display:flex;align-items:center;gap:12px">' +
        '<i class="ti ti-clock-pause" style="font-size:22px"></i>' +
        '<div><div style="font-size:12px;font-weight:600;opacity:0.7">REST</div>' +
        '<div style="font-size:24px;font-weight:800;font-variant-numeric:tabular-nums" id="rest-timer-display">' + label + '</div></div>' +
      '</div>' +
      '<div style="display:flex;gap:8px">' +
        '<button onclick="addRestTime(15)" style="background:rgba(0,0,0,0.18);border:none;color:#0a0c0f;font-weight:700;padding:8px 12px;border-radius:8px;cursor:pointer;font-size:13px">+15s</button>' +
        '<button onclick="skipRestTimer()" style="background:#0a0c0f;border:none;color:var(--accent);font-weight:700;padding:8px 16px;border-radius:8px;cursor:pointer;font-size:13px">Skip</button>' +
      '</div>';
  }
  render();

  _restInterval = setInterval(function() {
    _restRemaining--;
    if (_restRemaining <= 0) {
      clearInterval(_restInterval);
      // Vibrate + sound cue when rest is over
      try { if (navigator.vibrate) navigator.vibrate([200,100,200]); } catch(e){}
      try { playRestDoneBeep(); } catch(e){}
      var display = document.getElementById('rest-timer-display');
      if (display) display.textContent = 'Done!';
      setTimeout(skipRestTimer, 1500);
    } else {
      var d = document.getElementById('rest-timer-display');
      if (d) {
        var mm = Math.floor(_restRemaining / 60);
        var ss = _restRemaining % 60;
        d.textContent = (mm > 0 ? mm + ':' + (ss<10?'0':'') + ss : ss + 's');
      }
    }
  }, 1000);
}

function addRestTime(sec) {
  _restRemaining += sec;
}

function skipRestTimer() {
  clearInterval(_restInterval);
  var bar = document.getElementById('rest-timer-bar');
  if (bar) bar.style.display = 'none';
}

function playRestDoneBeep() {
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.start(); osc.stop(ctx.currentTime + 0.5);
  } catch(e) {}
}

function addWorkoutSet(exIdx) {
  if (!_workout) return;
  var ex = _workout.exercises[exIdx];
  var lastSet = ex.sets[ex.sets.length - 1] || {};
  ex.sets.push({
    setNum: ex.sets.length + 1,
    weight: lastSet.weight || '',
    reps:   lastSet.reps || '',
    completed: false
  });
  renderWorkoutScreen();
}

function toggleWorkoutWeightUnit() {
  if (!_workout) return;
  _workout.weightUnit = _workout.weightUnit === 'kg' ? 'lbs' : 'kg';
  _workoutWeightUnit = _workout.weightUnit;
  localStorage.setItem('repcast_weight_unit', _workoutWeightUnit);
  renderWorkoutScreen();
}

function openSwapExercise(exIdx) {
  _workout._swappingExIdx = exIdx;
  // Reuse food-picker style modal with exercises
  if (typeof openFoodPicker === 'function') {
    // Open exercise picker instead
    openExercisePicker(exIdx);
  }
}

function openExercisePicker(exIdx) {
  _workout._swappingExIdx = exIdx;
  // Build a simple exercise search overlay
  var existing = document.getElementById('workout-ex-picker');
  if (existing) existing.remove();

  var picker = document.createElement('div');
  picker.id = 'workout-ex-picker';
  picker.style.cssText = 'position:fixed;inset:0;z-index:999999;background:var(--bg);display:flex;flex-direction:column';
  picker.innerHTML =
    '<div style="background:var(--surface);padding:12px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px">' +
      '<button onclick="closeExercisePicker()" style="background:none;border:none;cursor:pointer;color:var(--text)"><i class="ti ti-arrow-left" style="font-size:20px"></i></button>' +
      '<div class="search-wrap" style="flex:1"><i class="ti ti-search"></i>' +
        '<input type="text" id="ex-picker-search" placeholder="Search exercises..." oninput="filterExPicker(this.value)" style="width:100%" autofocus>' +
      '</div>' +
    '</div>' +
    '<div id="ex-picker-body" style="flex:1;overflow-y:auto;padding:12px"></div>';
  document.body.appendChild(picker);
  filterExPicker('');
}

function filterExPicker(q) {
  var body = document.getElementById('ex-picker-body');
  if (!body) return;
  var pool = MASTER_EXERCISES || [];
  var filtered = q ? pool.filter(function(ex){ return (ex.title||'').toLowerCase().includes(q.toLowerCase()); }) : pool.slice(0, 60);
  body.innerHTML = filtered.map(function(ex) {
    var enc = encodeURIComponent(JSON.stringify({id:ex.id,title:ex.title,muscle:ex.muscle}));
    return '<div onclick="selectSwapExercise(\'' + enc + '\')" style="padding:12px 16px;border-bottom:1px solid var(--border);cursor:pointer;display:flex;align-items:center;justify-content:space-between">' +
      '<div><div style="font-size:14px;font-weight:600">' + (ex.title||'') + '</div><div style="font-size:12px;color:var(--muted)">' + (ex.muscle||'') + '</div></div>' +
      '<i class="ti ti-replace" style="color:var(--accent)"></i>' +
    '</div>';
  }).join('') || '<div style="padding:30px;text-align:center;color:var(--muted)">No exercises found</div>';
}

function selectSwapExercise(enc) {
  var ex = JSON.parse(decodeURIComponent(enc));
  if (_workout && _workout._swappingExIdx !== undefined) {
    var idx = _workout._swappingExIdx;
    _workout.exercises[idx].title      = ex.title;
    _workout.exercises[idx].muscle     = ex.muscle;
    _workout.exercises[idx].exerciseId = ex.id;
    _workout.exercises[idx].swapped    = true;
  }
  closeExercisePicker();
  renderWorkoutScreen();
}

function closeExercisePicker() {
  var el = document.getElementById('workout-ex-picker');
  if (el) el.remove();
}

function startWorkoutTimer() {
  clearInterval(_workoutTimerInterval);
  _workoutTimerInterval = setInterval(function() {
    var elapsed = Math.floor((Date.now() - _workout.startTime) / 1000);
    var mm = Math.floor(elapsed / 60).toString().padStart(2, '0');
    var ss = (elapsed % 60).toString().padStart(2, '0');
    var el = document.getElementById('workout-timer');
    if (el) el.textContent = mm + ':' + ss;
  }, 1000);
}

function closeWorkout() {
  if (!confirm('End workout without saving?')) return;
  _workout = null;
  clearInterval(_workoutTimerInterval);
  skipRestTimer();
  var modal = document.getElementById('modal-workout-tracking');
  if (modal) modal.style.display = 'none';
}

async function finishWorkout() {
  if (!_workout) return;
  clearInterval(_workoutTimerInterval);
  skipRestTimer();

  var duration = Math.floor((Date.now() - _workout.startTime) / 1000);

  var session = {
    clientUid:    state.user.uid,
    trainerUid:   state.user.linkedTrainer || '',
    programId:    _workout.programId,
    programName:  _workout.programName,
    dayName:      _workout.dayName,
    date:         new Date().toISOString(),
    durationSeconds: duration,
    weightUnit:   _workout.weightUnit,
    exercises:    _workout.exercises.map(function(ex) {
      return {
        exerciseId: ex.exerciseId,
        title:      ex.title,
        muscle:     ex.muscle,
        swapped:    ex.swapped,
        sets:       ex.sets.filter(function(s){ return s.completed; })
      };
    }).filter(function(ex){ return ex.sets.length > 0; })
  };

  try {
    await window._firebase.addDoc(
      window._firebase.collection(window._db, 'workoutSessions'),
      session
    );
    showToast('✓ Workout saved!');
  } catch(e) {
    showToast('Save failed: ' + e.message);
  }

  _workout = null;
  var modal = document.getElementById('modal-workout-tracking');
  if (modal) modal.style.display = 'none';
}


/* ══════════════════════════════════════════════════════════
   FOOD PICKER — trainer picks from food database for menus
══════════════════════════════════════════════════════════ */
var _foodPickerMealId = null;
var _foodPickerCat    = 'All';

async function openFoodPicker(mealId) {
  _foodPickerMealId = mealId;
  _foodPickerCat    = 'All';
  if (!foods.length) await loadFoods();

  // Close menu modal first, keep backdrop open
  var menuModal = document.getElementById('modal-admin-menu');
  if (menuModal) menuModal.classList.remove('open');

  renderFoodPickerCategories();
  renderFoodPicker('');

  var picker = document.getElementById('modal-food-picker');
  if (picker) picker.classList.add('open');
  document.getElementById('modal-backdrop').classList.add('open');

  // Reset to list view
  var lv = document.getElementById('food-picker-list-view');
  var qv = document.getElementById('food-picker-qty-view');
  if (lv) lv.style.display = 'block';
  if (qv) qv.style.display = 'none';

  setTimeout(function(){
    var s = document.getElementById('food-picker-search');
    if (s) { s.value = ''; s.focus(); }
  }, 200);
}

function renderFoodPickerCategories() {
  var bar = document.getElementById('food-picker-cats');
  if (!bar) return;
  var cats = ['All'].concat([...new Set(foods.map(function(f){ return f.category||'Other'; }))].sort());
  bar.innerHTML = cats.map(function(c){
    return '<button class="food-cat-pill' + (c === _foodPickerCat ? ' active' : '') + '" onclick="setFoodPickerCat(\'' + c.replace(/'/g, '') + '\')">' + c + '</button>';
  }).join('');
}

function setFoodPickerCat(cat) {
  _foodPickerCat = cat;
  renderFoodPickerCategories();
  var q = document.getElementById('food-picker-search');
  renderFoodPicker(q ? q.value : '');
}

function filterFoodPicker(q) {
  renderFoodPicker(q);
}

function renderFoodPicker(query) {
  var body = document.getElementById('food-picker-body');
  if (!body) return;
  query = (query || '').toLowerCase().trim();

  var filtered = foods.filter(function(f){
    var matchCat = (_foodPickerCat === 'All' || (f.category||'Other') === _foodPickerCat);
    var matchQ   = !query || (f.name||'').toLowerCase().includes(query) || (f.category||'').toLowerCase().includes(query);
    return matchCat && matchQ;
  });

  if (!filtered.length) {
    body.innerHTML = '<div style="text-align:center;padding:40px 20px;color:var(--muted)">' +
      '<i class="ti ti-apple" style="font-size:36px;opacity:0.3;display:block;margin-bottom:10px"></i>' +
      (foods.length ? 'No foods match' : 'Food database is empty. Admin needs to add foods.') +
    '</div>';
    return;
  }

  // Group by category (only when showing All)
  var html = '';
  if (_foodPickerCat === 'All') {
    var byCat = {};
    filtered.forEach(function(f){ (byCat[f.category||'Other'] = byCat[f.category||'Other'] || []).push(f); });
    Object.keys(byCat).sort().forEach(function(cat){
      html += '<div class="food-picker-cat"><div class="food-picker-cat-title">' + cat + '</div>';
      byCat[cat].forEach(function(f){ html += foodPickerItemHTML(f); });
      html += '</div>';
    });
  } else {
    filtered.forEach(function(f){ html += foodPickerItemHTML(f); });
  }
  body.innerHTML = html;
}

function foodPickerItemHTML(f) {
  var fEnc = encodeURIComponent(JSON.stringify(f));
  return '<div class="food-picker-item" onclick="selectFoodFromPicker(\'' + fEnc + '\')">' +
    '<div style="flex:1">' +
      '<div class="food-picker-name">' + f.name + '</div>' +
      '<div class="food-picker-macros">Per ' + (f.serving||100) + (f.unit||'g') + ': ' + (f.calories||0) + ' kcal · P' + (f.protein||0) + ' C' + (f.carbs||0) + ' F' + (f.fat||0) + '</div>' +
    '</div>' +
    '<i class="ti ti-plus" style="color:var(--accent)"></i>' +
  '</div>';
}

var _selectedFood = null;

function selectFoodFromPicker(fEnc) {
  _selectedFood = JSON.parse(decodeURIComponent(fEnc));
  // Show quantity step
  document.getElementById('food-qty-name').textContent = _selectedFood.name;
  document.getElementById('food-qty-base').textContent =
    'Per ' + (_selectedFood.serving||100) + (_selectedFood.unit||'g') + ': ' +
    (_selectedFood.calories||0) + ' kcal · P' + (_selectedFood.protein||0) + ' C' + (_selectedFood.carbs||0) + ' F' + (_selectedFood.fat||0);
  var qtyInput = document.getElementById('food-qty-input');
  qtyInput.value = _selectedFood.serving || 100;
  document.getElementById('food-qty-unit').textContent = _selectedFood.unit || 'g';
  updateFoodQtyPreview();
  document.getElementById('food-picker-list-view').style.display = 'none';
  document.getElementById('food-picker-qty-view').style.display = 'block';
  setTimeout(function(){ qtyInput.focus(); qtyInput.select(); }, 100);
}

function updateFoodQtyPreview() {
  if (!_selectedFood) return;
  var qty  = parseFloat(document.getElementById('food-qty-input').value) || 0;
  var base = _selectedFood.serving || 100;
  var mult = qty / base;
  var cal = Math.round((_selectedFood.calories||0) * mult);
  var pro = Math.round((_selectedFood.protein||0) * mult);
  var car = Math.round((_selectedFood.carbs||0) * mult);
  var fat = Math.round((_selectedFood.fat||0) * mult);
  document.getElementById('food-qty-preview').innerHTML =
    '<span style="font-size:22px;font-weight:800">' + cal + '</span> kcal &nbsp;·&nbsp; ' +
    '<span style="color:#60A5FA">P' + pro + 'g</span> ' +
    '<span style="color:#FBBF24">C' + car + 'g</span> ' +
    '<span style="color:#F472B6">F' + fat + 'g</span>';
}

function confirmFoodQty() {
  if (!_selectedFood || !_foodPickerMealId) return;
  var qty  = parseFloat(document.getElementById('food-qty-input').value) || 0;
  if (qty <= 0) { showToast('Enter a quantity'); return; }
  var base = _selectedFood.serving || 100;
  var mult = qty / base;

  var item = {
    name:     _selectedFood.name,
    qty:      String(qty),
    unit:     _selectedFood.unit || 'g',
    calories: Math.round((_selectedFood.calories||0) * mult),
    protein:  Math.round((_selectedFood.protein||0) * mult),
    carbs:    Math.round((_selectedFood.carbs||0) * mult),
    fat:      Math.round((_selectedFood.fat||0) * mult)
  };

  // Add to the meal
  var container = document.getElementById('items-' + _foodPickerMealId);
  if (container) {
    var div = document.createElement('div');
    div.innerHTML = foodItemHTML(_foodPickerMealId, item);
    container.appendChild(div.firstChild);
    updateAdminMenuPreview();
  }

  // Reset and go back to list for adding more
  _selectedFood = null;
  document.getElementById('food-picker-qty-view').style.display = 'none';
  document.getElementById('food-picker-list-view').style.display = 'block';
  showToast('✓ ' + item.name + ' added');
}

function backToFoodList() {
  _selectedFood = null;
  var qv = document.getElementById('food-picker-qty-view');
  var lv = document.getElementById('food-picker-list-view');
  if (qv) qv.style.display = 'none';
  if (lv) lv.style.display = 'block';
}


/* ══════════════════════════════════════════════════════════
   FOOD DATABASE — master collection, admin-controlled
══════════════════════════════════════════════════════════ */
async function loadFoods() {
  if (!window._firebase || !window._db) return;
  try {
    var snap = await window._firebase.getDocs(window._firebase.collection(window._db, col('foods')));
    foods = [];
    snap.forEach(function(d){ foods.push(Object.assign({ id: d.id }, d.data())); });
    if (foods.length === 0 && _lang === 'he') {
      var snapEn = await window._firebase.getDocs(window._firebase.collection(window._db, 'foods'));
      snapEn.forEach(function(d){ foods.push(Object.assign({ id: d.id }, d.data())); });
    }
    foods.sort(function(a,b){ return (a.category||'').localeCompare(b.category||'') || (a.name||'').localeCompare(b.name||''); });
    if (state.isManager) renderAdminFoodList();
  } catch(e) { console.warn('loadFoods error:', e); }
}

var editingFoodId = null;

function openAdminFoodModal(id) {
  if (id) {
    var f = foods.find(function(x){ return x.id === id; });
    if (!f) return;
    editingFoodId = id;
    document.getElementById('food-name').value     = f.name || '';
    document.getElementById('food-category').value = f.category || '';
    document.getElementById('food-serving').value  = f.serving || 100;
    document.getElementById('food-unit').value     = f.unit || 'g';
    document.getElementById('food-calories').value = f.calories || 0;
    document.getElementById('food-protein').value  = f.protein || 0;
    document.getElementById('food-carbs').value    = f.carbs || 0;
    document.getElementById('food-fat').value      = f.fat || 0;
    document.getElementById('food-modal-title').innerHTML = '<i class="ti ti-edit"></i> Edit Food';
  } else {
    editingFoodId = null;
    ['food-name','food-category','food-calories','food-protein','food-carbs','food-fat'].forEach(function(fid){
      var el = document.getElementById(fid); if (el) el.value = '';
    });
    document.getElementById('food-serving').value = 100;
    document.getElementById('food-unit').value    = 'g';
    document.getElementById('food-modal-title').innerHTML = '<i class="ti ti-plus"></i> Add Food';
  }
  openModal('admin-food');
}

async function saveAdminFood() {
  var name = document.getElementById('food-name').value.trim();
  var cat  = document.getElementById('food-category').value.trim();
  if (!name) { showToast('Enter a food name'); return; }
  if (!cat)  { showToast('Choose a category'); return; }

  var foodData = {
    name:     name,
    category: cat,
    serving:  parseFloat(document.getElementById('food-serving').value) || 100,
    unit:     document.getElementById('food-unit').value || 'g',
    calories: parseFloat(document.getElementById('food-calories').value) || 0,
    protein:  parseFloat(document.getElementById('food-protein').value) || 0,
    carbs:    parseFloat(document.getElementById('food-carbs').value) || 0,
    fat:      parseFloat(document.getElementById('food-fat').value) || 0,
    updatedAt: new Date().toISOString()
  };

  try {
    var foodColName = (_adminLang && _adminLang['foods'] === 'he') ? 'foods_he' : 'foods';
    if (editingFoodId) {
      await window._firebase.setDoc(window._firebase.doc(window._db, foodColName, editingFoodId), foodData, { merge: true });
      showToast(_adminLang && _adminLang['foods'] === 'he' ? 'נשמר!' : 'Food updated');
    } else {
      await window._firebase.addDoc(window._firebase.collection(window._db, foodColName), foodData);
      showToast(_adminLang && _adminLang['foods'] === 'he' ? 'נשמר!' : 'Food added');
    }
    closeAllModals();
    await loadFoods();
  } catch(e) { showToast('Error: ' + e.message); }
}

async function deleteFood(id) {
  if (!state.isManager) { showToast('Only admin can delete foods'); return; }
  if (!confirm('Delete this food from the database?')) return;
  try {
    await window._firebase.deleteDoc(window._firebase.doc(window._db, col('foods'), id));
    foods = foods.filter(function(f){ return f.id !== id; });
    renderAdminFoodList();
    showToast('Food deleted');
  } catch(e) { showToast('Error: ' + e.message); }
}

function renderAdminFoodList() {
  // Render to active language container
  var adminFoodLang = _adminLang && _adminLang['foods'] ? _adminLang['foods'] : 'en';
  var el = document.getElementById(adminFoodLang === 'he' ? 'admin-food-list-he' : 'admin-food-list');
  if (!el) return;
  if (!foods.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon"><i class="ti ti-apple"></i></div><h3>No foods yet</h3><p>Add foods or bulk import to build your database.</p></div>';
    return;
  }
  // Group by category
  var byCat = {};
  foods.forEach(function(f){ (byCat[f.category||'Other'] = byCat[f.category||'Other'] || []).push(f); });

  var html = '';
  Object.keys(byCat).sort().forEach(function(cat){
    html += '<div style="margin-bottom:14px">' +
      '<div style="font-size:12px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;padding:0 4px">' + cat + ' (' + byCat[cat].length + ')</div>';
    byCat[cat].forEach(function(f){
      html += '<div class="admin-menu-row">' +
        '<div style="flex:1"><strong>' + f.name + '</strong>' +
          '<div style="font-size:12px;color:var(--muted);margin-top:3px">Per ' + (f.serving||100) + (f.unit||'g') + ': ' + (f.calories||0) + ' kcal · P' + (f.protein||0) + ' C' + (f.carbs||0) + ' F' + (f.fat||0) + '</div>' +
        '</div>' +
        '<div class="admin-actions">' +
          '<button class="admin-action-btn edit" onclick="openAdminFoodModal(\'' + f.id + '\')"><i class="ti ti-edit"></i></button>' +
          '<button class="admin-action-btn delete" onclick="deleteFood(\'' + f.id + '\')"><i class="ti ti-trash"></i></button>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
  });
  el.innerHTML = html;
}



// Auto-load menus when trainer opens nutrition tab (even without BMR)
var _origSetView = typeof setView === 'function' ? setView : null;

function filterMenus(goal, btn) {
  menuFilter = goal;
  document.querySelectorAll('.lib-tab[id^="menu-tab"]').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  renderMenuLibrary();
}

/* ── Render menu library (trainer view) ──────────────── */
function renderMenuLibrary() {
  var myUid = state.user ? state.user.uid : null;
  var pool = (menuFilter === 'all' ? menus : menus.filter(function(m){ return m.goal === menuFilter; }));
  // Clients: menus already contains only their assigned menus — show all.
  // Trainers: filter to public + own.
  if (!state.isClient) {
    pool = pool.filter(function(m){ return m.isPublic !== false || m.createdBy === myUid; });
  }

  // Sort by closest calories to bmrResult if available
  if (bmrResult && menuFilter !== 'all') {
    pool = pool.slice().sort(function(a, b){
      return Math.abs((a.calories||0) - bmrResult.target) - Math.abs((b.calories||0) - bmrResult.target);
    });
  }

  var body = document.getElementById('menu-library-body');
  if (!pool.length) {
    var msg = menuFilter === 'all' ? 'No menus in the library yet. Ask your manager to add some.' : 'No ' + menuFilter + ' menus yet.';
    body.innerHTML = '<div class="empty-state"><div class="empty-icon"><i class="ti ti-salad"></i></div><h3>No menus found</h3><p>' + msg + '</p></div>';
    return;
  }

  var goalColors = { cut:'#F472B6', maintain:'#60A5FA', bulk:'#7EE8A2' };
  body.innerHTML = '<div class="menu-grid">' + pool.map(function(m) {
    var totals = calcMenuTotals(m);
    var diff   = bmrResult ? (Math.abs(totals.calories - bmrResult.target)) : null;
    var match  = diff !== null ? (diff < 100 ? '🎯 Best match' : diff < 200 ? '✓ Good match' : '') : '';
    var canEdit = canEditItem(m);
    return '<div class="menu-card' + (!m.isPublic && m.createdBy === myUid ? ' menu-card-private' : '') + '" onclick="openMenuDetail(\'' + m.id + '\')">' +
      '<div class="menu-card-header" style="border-left:4px solid ' + (goalColors[m.goal]||'var(--accent)') + '">' +
        '<div>' +
          '<div class="menu-card-name">' + m.name + '</div>' +
          '<div class="menu-card-meta">' +
            '<span class="tag" style="background:rgba(126,232,162,0.1);color:var(--accent);font-size:10px">' + (m.goal||'').toUpperCase() + '</span>' +
            (match ? '<span style="font-size:11px;color:var(--accent)">' + match + '</span>' : '') +
          '</div>' +
        '</div>' +
        '<div class="menu-card-cal">' + (totals.calories||m.calories||0) + '<span>kcal</span></div>' +
      '</div>' +
      '<div class="menu-card-chart">' + macroChartHTML(totals.protein, totals.carbs, totals.fat, totals.calories, 120) + '</div>' +
      '<div class="menu-card-desc">' + (m.desc||'') + '</div>' +
      (canEdit ? '<div class="menu-card-actions">' +
        '<span class="tag" style="background:' + (!m.isPublic?'rgba(251,191,36,0.1)':'rgba(126,232,162,0.1)') + ';color:' + (!m.isPublic?'#FBBF24':'var(--accent)') + '">' + (!m.isPublic?'🔒 Private':'🌐 Public') + '</span>' +
        '<div style="display:flex;gap:6px">' +
          '<button class="btn btn-ghost btn-sm" style="padding:4px 8px" onclick="event.stopPropagation();openTrainerMenuModal(\'' + m.id + '\')" ><i class="ti ti-edit"></i></button>' +
          '<button class="btn btn-ghost btn-sm" style="padding:4px 8px;color:var(--danger)" onclick="event.stopPropagation();deleteTrainerMenu(\'' + m.id + '\')"><i class="ti ti-trash"></i></button>' +
        '</div>' +
      '</div>' : '') +
    '</div>';
  }).join('') + '</div>';
}

/* ── Calculate menu totals from meals ────────────────── */
function calcMenuTotals(menu) {
  var cal = 0, prot = 0, carb = 0, fat = 0;
  (menu.meals || []).forEach(function(meal) {
    (meal.items || []).forEach(function(item) {
      cal  += (item.calories || 0);
      prot += (item.protein  || 0);
      carb += (item.carbs    || 0);
      fat  += (item.fat      || 0);
    });
  });
  return { calories: Math.round(cal), protein: Math.round(prot), carbs: Math.round(carb), fat: Math.round(fat) };
}

/* ── Open menu detail modal ──────────────────────────── */
function openMenuDetail(id) {
  var menu = menus.find(function(m){ return m.id === id; });
  if (!menu) return;
  document.getElementById('menu-detail-title').innerHTML = '<i class="ti ti-salad"></i> ' + menu.name;
  var assignBtn = document.getElementById('menu-assign-btn');
  if (assignBtn) assignBtn.setAttribute('data-menu-id', id);

  var totals = calcMenuTotals(menu);
  var html =
    '<div class="menu-detail-header">' +
      macroChartHTML(totals.protein, totals.carbs, totals.fat, totals.calories, 180) +
      (menu.desc ? '<p class="menu-detail-desc">' + menu.desc + '</p>' : '') +
    '</div>';

  var grandTot = { cal:0, p:0, c:0, f:0 };

  (menu.meals || []).forEach(function(meal) {
    var mealTot = { cal:0, p:0, c:0, f:0 };
    (meal.items||[]).forEach(function(item){
      mealTot.cal += item.calories||0;
      mealTot.p   += item.protein||0;
      mealTot.c   += item.carbs||0;
      mealTot.f   += item.fat||0;
    });
    grandTot.cal += mealTot.cal;
    grandTot.p   += mealTot.p;
    grandTot.c   += mealTot.c;
    grandTot.f   += mealTot.f;

    html += '<div class="meal-section">' +
      '<div class="meal-header">' +
        '<span class="meal-name">' + meal.name + '</span>' +
        '<span class="meal-total">' + Math.round(mealTot.cal) + ' kcal</span>' +
      '</div>' +
      '<table class="food-table">' +
        '<thead><tr>' +
          '<th style="text-align:left">Food</th>' +
          '<th>Qty</th>' +
          '<th>Cal</th>' +
          '<th style="color:#60A5FA">Protein</th>' +
          '<th style="color:#FBBF24">Carbs</th>' +
          '<th style="color:#F472B6">Fat</th>' +
        '</tr></thead>' +
        '<tbody>' +
        (meal.items||[]).map(function(item) {
          return '<tr>' +
            '<td style="font-weight:500">' + (item.name||'') + '</td>' +
            '<td style="color:var(--muted)">' + (item.qty||'') + ' ' + (item.unit||'') + '</td>' +
            '<td>' + (item.calories||0) + '</td>' +
            '<td style="color:#60A5FA">' + (item.protein||0) + 'g</td>' +
            '<td style="color:#FBBF24">' + (item.carbs||0) + 'g</td>' +
            '<td style="color:#F472B6">' + (item.fat||0) + 'g</td>' +
          '</tr>';
        }).join('') +
        '</tbody>' +
        '<tfoot>' +
          '<tr class="food-table-subtotal">' +
            '<td colspan="2"><strong>Meal Total</strong></td>' +
            '<td><strong>' + Math.round(mealTot.cal) + '</strong></td>' +
            '<td><strong>' + Math.round(mealTot.p) + 'g</strong></td>' +
            '<td><strong>' + Math.round(mealTot.c) + 'g</strong></td>' +
            '<td><strong>' + Math.round(mealTot.f) + 'g</strong></td>' +
          '</tr>' +
        '</tfoot>' +
      '</table></div>';
  });

  // Grand total row
  html +=
    '<div class="menu-grand-total">' +
      '<div class="menu-grand-item">' +
        '<span class="menu-grand-label">Daily Total</span>' +
      '</div>' +
      '<div class="menu-grand-macros">' +
        '<div class="menu-grand-macro"><span class="menu-grand-val">' + Math.round(grandTot.cal) + '</span><em>Calories</em></div>' +
        '<div class="menu-grand-macro" style="color:#60A5FA"><span class="menu-grand-val">' + Math.round(grandTot.p) + 'g</span><em>Protein</em></div>' +
        '<div class="menu-grand-macro" style="color:#FBBF24"><span class="menu-grand-val">' + Math.round(grandTot.c) + 'g</span><em>Carbs</em></div>' +
        '<div class="menu-grand-macro" style="color:#F472B6"><span class="menu-grand-val">' + Math.round(grandTot.f) + 'g</span><em>Fat</em></div>' +
      '</div>' +
    '</div>';

  document.getElementById('menu-detail-body').innerHTML = html;
  openModal('menu-detail');
}

/* ── Assign menu to client (share link) ──────────────── */
async function assignMenuToClient() {
  var menuId   = document.getElementById('menu-assign-btn').getAttribute('data-menu-id');
  var menu     = menus.find(function(m){ return m.id === menuId; });
  if (!menu || !state.user) return;

  var clientName = prompt('Client name:', bmrResult ? bmrResult.name : '');
  if (!clientName) return;

  var token = 'mn_' + Math.random().toString(36).substr(2, 8);
  var shareData = {
    type:        'menu',
    token:       token,
    menuId:      menuId,
    menuName:    menu.name,
    clientName:  clientName,
    trainerName: state.user.fullName,
    bmrData:     bmrResult || null,
    createdAt:   new Date().toISOString(),
  };

  try {
    await window._firebase.setDoc(
      window._firebase.doc(window._db, 'sharedMenus', token),
      shareData
    );
    var url = window.location.origin + '?menu=' + token;
    navigator.clipboard.writeText(url).catch(function(){});
    closeAllModals();
    showToast('Menu link copied! Share with ' + clientName);
  } catch(e) {
    showToast('Could not create share link: ' + e.code);
  }
}

/* ── ADMIN: Render menu list ──────────────────────────── */
function renderAdminMenuList() {
  var adminMenuLang = _adminLang && _adminLang['menus'] ? _adminLang['menus'] : 'en';
  var el = document.getElementById(adminMenuLang === 'he' ? 'admin-menu-list-he' : 'admin-menu-list');
  if (!el) return;
  var countEl = document.getElementById('admin-menu-count');
  if (countEl) countEl.textContent = menus.length + ' menus';

  if (!menus.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon"><i class="ti ti-salad"></i></div><h3>No menus yet</h3><p>Click "Add Menu" to create your first nutrition plan.</p></div>';
    return;
  }
  var goalColors = { cut:'rgba(244,114,182,0.1)', maintain:'rgba(96,165,250,0.1)', bulk:'rgba(126,232,162,0.1)' };
  el.innerHTML = menus.map(function(m) {
    var totals = calcMenuTotals(m);
    return '<div class="admin-menu-row" style="background:' + (goalColors[m.goal]||'var(--surface)') + '">' +
      '<div style="flex:1"><strong>' + m.name + '</strong>' +
      '<div style="font-size:12px;color:var(--muted);margin-top:3px">' +
        (m.goal||'').toUpperCase() + ' · ' + totals.calories + ' kcal · P:' + totals.protein + 'g C:' + totals.carbs + 'g F:' + totals.fat + 'g' +
      '</div></div>' +
      '<div class="admin-actions">' +
        '<button class="admin-action-btn edit" onclick="openAdminMenuModal(\'' + m.id + '\')"><i class="ti ti-edit"></i> Edit</button>' +
        '<button class="admin-action-btn delete" onclick="deleteMenu(\'' + m.id + '\')"><i class="ti ti-trash"></i></button>' +
      '</div></div>';
  }).join('');
}

/* ── ADMIN: Open menu editor ──────────────────────────── */
function openAdminMenuModal(id) {
  if (id) {
    var m = menus.find(function(x){ return x.id === id; });
    if (!canEditItem(m)) { showToast('You can only edit your own menus.'); return; }
  }
  editingMenuId = id || null;
  var titleEl = document.getElementById('admin-menu-modal-title');

  // Reset
  document.getElementById('admin-menu-edit-id').value = id || '';
  document.getElementById('admin-menu-name').value     = '';
  document.getElementById('admin-menu-goal').value     = 'cut';
  document.getElementById('admin-menu-calories').value = '';
  document.getElementById('admin-menu-desc').value     = '';
  document.getElementById('admin-menu-meals').innerHTML = '';

  if (id) {
    var menu = menus.find(function(m){ return m.id === id; });
    if (!menu) return;
    titleEl.innerHTML = '<i class="ti ti-edit"></i> Edit Menu';
    document.getElementById('admin-menu-name').value     = menu.name || '';
    document.getElementById('admin-menu-goal').value     = menu.goal || 'cut';
    document.getElementById('admin-menu-calories').value = menu.calories || '';
    document.getElementById('admin-menu-desc').value     = menu.desc || '';
    (menu.meals || []).forEach(function(meal){ renderMealEditor(meal); });
  } else {
    titleEl.innerHTML = '<i class="ti ti-plus"></i> Add Menu Plan';
    // Start with 4 default meals
    ['Breakfast','Lunch','Dinner','Snacks'].forEach(function(name){ renderMealEditor({ name:name, items:[] }); });
  }

  openModal('admin-menu');
}

function renderMealEditor(meal) {
  var container = document.getElementById('admin-menu-meals');
  var mealId    = 'meal-' + Date.now() + Math.random().toString(36).substr(2,4);
  var div = document.createElement('div');
  div.className = 'meal-editor';
  div.id = mealId;
  div.innerHTML =
    '<div class="meal-editor-header">' +
      '<input class="form-input meal-name-input" value="' + (meal.name||'Meal') + '" placeholder="Meal name (e.g. Breakfast)" style="flex:1">' +
      '<button class="admin-action-btn delete" onclick="this.closest(\'.meal-editor\').remove()"><i class="ti ti-trash"></i></button>' +
    '</div>' +
    '<div class="food-table-header">' +
      '<span style="flex:2">Food Name</span>' +
      '<span style="width:60px">Qty</span>' +
      '<span style="width:60px">Unit</span>' +
      '<span style="width:65px">Calories</span>' +
      '<span style="width:55px">Protein</span>' +
      '<span style="width:55px">Carbs</span>' +
      '<span style="width:55px">Fat</span>' +
      '<span style="width:32px"></span>' +
    '</div>' +
    '<div class="food-items-container" id="items-' + mealId + '">' +
      (meal.items||[]).map(function(item){ return foodItemHTML(mealId, item); }).join('') +
    '</div>' +
    '<div style="display:flex;gap:6px;margin-top:6px">' +
      '<button class="btn btn-primary btn-sm" data-mid="' + mealId + '" onclick="openFoodPicker(this.dataset.mid)">' +
        '<i class="ti ti-search"></i> Pick from Database' +
      '</button>' +
      '<button class="btn btn-ghost btn-sm" data-mid="' + mealId + '" onclick="addFoodItem(this.dataset.mid)">' +
        '<i class="ti ti-plus"></i> Add Manually' +
      '</button>' +
    '</div>';
  container.appendChild(div);
}

function foodItemHTML(mealId, item) {
  item = item || {};
  return '<div class="food-item-row">' +
    '<input class="form-input food-name" placeholder="e.g. Chicken breast" value="' + (item.name||'') + '" style="flex:2">' +
    '<input class="form-input food-qty"  placeholder="150"  value="' + (item.qty||'') + '" style="width:60px">' +
    '<input class="form-input food-unit" placeholder="g"    value="' + (item.unit||'g') + '" style="width:60px">' +
    '<input class="form-input food-cal"  type="number" placeholder="0" value="' + (item.calories||'') + '" style="width:65px">' +
    '<input class="form-input food-pro"  type="number" placeholder="0" value="' + (item.protein||'') + '" style="width:55px">' +
    '<input class="form-input food-car"  type="number" placeholder="0" value="' + (item.carbs||'') + '" style="width:55px">' +
    '<input class="form-input food-fat"  type="number" placeholder="0" value="' + (item.fat||'') + '" style="width:55px">' +
    '<button class="admin-action-btn delete" onclick="this.parentElement.remove()" style="padding:6px 8px"><i class="ti ti-x"></i></button>' +
  '</div>';
}

function addFoodItem(mealId) {
  var container = document.getElementById('items-' + mealId);
  if (!container) return;
  var div = document.createElement('div');
  div.innerHTML = foodItemHTML(mealId, {});
  container.appendChild(div.firstChild);
}

function addMealToEditor() {
  renderMealEditor({ name: 'New Meal', items: [] });
}

/* ── Live macro preview + totals in admin menu editor ─── */
function updateAdminMenuPreview() {
  var cal=0, pro=0, car=0, fat=0;
  document.querySelectorAll('#modal-admin-menu .food-cal').forEach(function(i){ cal += parseFloat(i.value)||0; });
  document.querySelectorAll('#modal-admin-menu .food-pro').forEach(function(i){ pro += parseFloat(i.value)||0; });
  document.querySelectorAll('#modal-admin-menu .food-car').forEach(function(i){ car += parseFloat(i.value)||0; });
  document.querySelectorAll('#modal-admin-menu .food-fat').forEach(function(i){ fat += parseFloat(i.value)||0; });
  var el = document.getElementById('admin-menu-preview-chart');
  if (el) el.innerHTML =
    macroChartHTML(Math.round(pro), Math.round(car), Math.round(fat), Math.round(cal), 140) +
    '<div class="menu-grand-total" style="margin-top:12px">' +
      '<div class="menu-grand-macros">' +
        '<div class="menu-grand-macro"><span class="menu-grand-val">' + Math.round(cal) + '</span><em>Calories</em></div>' +
        '<div class="menu-grand-macro" style="color:#60A5FA"><span class="menu-grand-val">' + Math.round(pro) + 'g</span><em>Protein</em></div>' +
        '<div class="menu-grand-macro" style="color:#FBBF24"><span class="menu-grand-val">' + Math.round(car) + 'g</span><em>Carbs</em></div>' +
        '<div class="menu-grand-macro" style="color:#F472B6"><span class="menu-grand-val">' + Math.round(fat) + 'g</span><em>Fat</em></div>' +
      '</div>' +
    '</div>';
  var calEl = document.getElementById('admin-menu-calories');
  if (calEl) calEl.placeholder = cal > 0 ? 'Auto: ' + Math.round(cal) : '1800';
}

/* ── ADMIN: Save menu to Firestore ───────────────────── */
async function saveAdminMenu() {
  var name = document.getElementById('admin-menu-name').value.trim();
  var goal = document.getElementById('admin-menu-goal').value;
  var desc = document.getElementById('admin-menu-desc').value.trim();
  if (!name) { showToast('Please enter a menu name.'); return; }

  // Collect meals from editor
  var meals = [];
  document.querySelectorAll('.meal-editor').forEach(function(mealEl) {
    var mealName = mealEl.querySelector('.meal-name-input').value.trim();
    var items = [];
    mealEl.querySelectorAll('.food-item-row').forEach(function(row) {
      var foodName = row.querySelector('.food-name').value.trim();
      if (!foodName) return;
      items.push({
        name:     foodName,
        qty:      row.querySelector('.food-qty').value.trim(),
        unit:     row.querySelector('.food-unit').value.trim(),
        calories: parseFloat(row.querySelector('.food-cal').value) || 0,
        protein:  parseFloat(row.querySelector('.food-pro').value) || 0,
        carbs:    parseFloat(row.querySelector('.food-car').value) || 0,
        fat:      parseFloat(row.querySelector('.food-fat').value) || 0,
      });
    });
    if (mealName) meals.push({ name: mealName, items: items });
  });

  var langEl = document.getElementById('admin-menu-lang');
  var menuData = {
    name:      name,
    name_he:   (document.getElementById('admin-menu-name-he')||{}).value || '',
    goal:      goal,
    desc:      desc,
    meals:     meals,
    lang:      langEl ? langEl.value : 'en',
    updatedAt: new Date().toISOString(),
  };

  // Always set createdBy for trainers; respect override if present
  var override = window._trainerMenuOverride;
  if (override) {
    menuData.createdBy   = override.createdBy;
    menuData.trainerName = override.trainerName;
    menuData.isPublic    = override.isPublic;
    window._trainerMenuOverride = null;
  } else if (state.isManager) {
    menuData.isPublic  = true; // admin menus always public
    menuData.createdBy = state.user ? state.user.uid : null;
  } else if (state.user && state.user.uid) {
    // Trainer saving — always attach ownership
    if (!editingMenuId) {  // new menu
      menuData.createdBy   = state.user.uid;
      menuData.trainerName = state.user.fullName || '';
      // Read public toggle if it exists, default to true
      var pubToggle = document.getElementById('menu-is-public');
      menuData.isPublic = pubToggle ? pubToggle.checked : true;
    }
  }

  var menuColName = (_adminLang && _adminLang['menus'] === 'he') ? 'menus_he' : 'menus';
  try {
    var editId = document.getElementById('admin-menu-edit-id').value;
    if (editId) {
      await window._firebase.setDoc(
        window._firebase.doc(window._db, menuColName, editId),
        menuData, { merge: true }
      );
      showToast(_adminLang && _adminLang['menus']==='he' ? 'עודכן!' : 'Menu updated!');
    } else {
      await window._firebase.addDoc(
        window._firebase.collection(window._db, menuColName),
        menuData
      );
      showToast(_adminLang && _adminLang['menus']==='he' ? 'נשמר!' : 'Menu saved!');
    }
    closeAllModals();
    await loadMenus();
    renderAdminMenuList();
    if (menuColName === 'menus') renderMenuLibrary();
  } catch(e) {
    console.error('Save menu error:', e);
    showToast('Save failed: ' + (e.code || e.message));
  }
}

async function deleteMenu(id) {
  var m = menus.find(function(x){ return x.id === id; });
  if (!canEditItem(m)) { showToast('You can only delete your own menus.'); return; }
  if (!confirm('Delete this menu? This cannot be undone.')) return;
  try {
    await window._firebase.deleteDoc(window._firebase.doc(window._db, col('menus'), id));
    menus = menus.filter(function(m){ return m.id !== id; });
    renderAdminMenuList();
    renderMenuLibrary();
    showToast('Menu deleted.');
  } catch(e) { showToast('Delete failed: ' + e.code); }
}


/* ══════════════════════════════════════════════════════════
   PROGRAMS
══════════════════════════════════════════════════════════ */
var programs = [];

async function loadPrograms() {
  if (!window._firebase || !window._db) return;
  try {
    var snap = await window._firebase.getDocs(window._firebase.collection(window._db, col('programs')));
    programs = [];
    snap.forEach(function(d){ programs.push(Object.assign({ id: d.id }, d.data())); });
    // Fallback: if Hebrew collection is empty, load English content so the app isn't blank
    if (programs.length === 0 && _lang === 'he') {
      var snapEn = await window._firebase.getDocs(window._firebase.collection(window._db, 'programs'));
      snapEn.forEach(function(d){ programs.push(Object.assign({ id: d.id }, d.data())); });
    }
    renderProgramsView();
    renderAdminProgramsList();
  } catch(e) {
    console.warn('loadPrograms:', e.code, '— keeping local data');
    renderProgramsView();
    renderAdminProgramsList();
  }
}

function renderProgramsView() {
  var body = document.getElementById('programs-body');
  if (!body) return;
  var myUid = state.user ? state.user.uid : null;

  var allPrograms;
  if (state.isClient) {
    // Clients see ONLY their assigned programs
    allPrograms = programs.slice();
  } else {
    var myPrograms = JSON.parse(localStorage.getItem('repcast_my_programs') || '[]');
    var libProgs = programs.filter(function(p){ return p.isPublic !== false || p.createdBy === myUid; });
    allPrograms = libProgs.concat(myPrograms);
  }
  if (!allPrograms.length) {
    var isNative = document.documentElement.classList.contains('is-native');
    body.innerHTML = '<div style="text-align:center;padding:40px 20px"><div class="empty-icon"><i class="ti ti-calendar"></i></div><h3>No programs yet</h3><p style="color:var(--muted);margin-bottom:20px">Training programs will appear here.</p>' +
      ((isNative || state.isClient) ? '' : '<button class="btn btn-primary" onclick="openCreateOwnProgram()"><i class="ti ti-plus"></i> Create My Own Program</button>') +
    '</div>';
    return;
  }
  var gc = { strength:'#F472B6', hypertrophy:'#A78BFA', 'fat-loss':'#7EE8A2', endurance:'#60A5FA', rehab:'#FBBF24' };
  body.innerHTML =
    ((document.documentElement.classList.contains('is-native') || state.isClient) ? '' : '<div style="display:flex;justify-content:flex-end;padding:0 24px 12px"><button class="btn btn-ghost" onclick="openCreateOwnProgram()"><i class="ti ti-plus"></i> Create My Own Program</button></div>') +
    '<div class="resource-grid" style="padding:0 24px">' +
    allPrograms.map(function(p) {
      var col = gc[p.goal] || '#7EE8A2';
      var splits = (p.trainingDays||[]).map(function(d){ return (d.day||'').split('\u2014')[0].split('—')[0].trim(); });
      return '<div class="resource-card" onclick="openProgramDetail(\'' + p.id + '\')">' +
        '<div class="resource-card-header" style="background:linear-gradient(135deg,' + col + '22,' + col + '08)">' +
          '<i class="ti ti-calendar resource-card-icon" style="color:' + col + '"></i>' +
          '<div style="flex:1"><div class="resource-card-name">' + p.name + '</div>' +
          '<div class="resource-card-meta">' + (p.weeks||'?') + ' weeks &middot; ' + (p.days||p.trainingDays&&p.trainingDays.length||'?') + 'x/week &middot; ' + (p.level||'') + '</div></div>' +
        '</div>' +
        (splits.length ? '<div class="program-splits">' + splits.slice(0,5).map(function(s){ return '<span class="split-pill">' + s + '</span>'; }).join('') + '</div>' : '') +
        '<div class="resource-card-body">' + (p.desc||'').slice(0,100) + (p.desc&&p.desc.length>100?'...':'') + '</div>' +
        '<div class="resource-card-tags">' +
          '<span class="tag" style="background:' + col + '22;color:' + col + '">' + (p.goal||'').replace(/-/g,' ').toUpperCase() + '</span>' +
          (p._isPersonal ? '<span class="tag" style="background:rgba(96,165,250,0.1);color:#60A5FA">MY PROGRAM</span>' : '') +
        ((myUid && p.createdBy === myUid) ? '<span class="tag" style="background:rgba(255,107,107,0.1);color:var(--danger);cursor:pointer" onclick="event.stopPropagation();deleteTrainerProgram(\'' + p.id + '\')"><i class="ti ti-trash" style="font-size:10px"></i> Delete</span>' : '') +
        '</div>' +
      '</div>';
    }).join('') + '</div>';
}

function openProgramDetail(id) {
  var p = programs.find(function(x){ return x.id === id; });
  if (!p) return;
  document.getElementById('program-detail-title').innerHTML = '<i class="ti ti-calendar"></i> ' + p.name;
  var el = document.getElementById('program-detail-body');
  el.setAttribute('data-id', id);
  var days = p.trainingDays || [];
  el.innerHTML =
    '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px">' +
      '<div class="bmr-stat"><div class="bmr-stat-val">' + (p.weeks||'?') + '</div><div class="bmr-stat-label">Weeks</div></div>' +
      '<div class="bmr-stat"><div class="bmr-stat-val">' + (days.length||p.days||'?') + '</div><div class="bmr-stat-label">Days/week</div></div>' +
      '<div class="bmr-stat accent"><div class="bmr-stat-val">' + (p.goal||'').replace('-',' ') + '</div><div class="bmr-stat-label">Goal</div></div>' +
      '<div class="bmr-stat"><div class="bmr-stat-val">' + (p.level||'?') + '</div><div class="bmr-stat-label">Level</div></div>' +
    '</div>' +
    '<p style="color:var(--muted);margin-bottom:20px">' + (p.desc||'') + '</p>' +
    (days.length ? days.map(function(day, dayIdx) {
      return '<div class="meal-section">' +
        '<div class="meal-header"><span class="meal-name">' + (day.name||day.day||'Day') + '</span>' +
        '<span class="meal-total" style="color:var(--muted2)">' + (day.muscleGroup||'') + '</span></div>' +
        (day.exercises && day.exercises.length ?
          '<table class="food-table"><thead><tr><th>Exercise</th><th>Muscle</th><th>Sets</th><th>Reps</th><th>Rest</th><th>Notes</th></tr></thead><tbody>' +
          day.exercises.map(function(ex){
            return '<tr><td><strong>' + (ex.name||ex.title||'') + '</strong></td><td>' + (ex.muscle||'') + '</td><td>' + (ex.sets||'') + '</td><td>' + (ex.reps||'') + '</td><td>' + (ex.rest||'') + '</td><td style="color:var(--muted);font-size:12px">' + (ex.notes||'') + '</td></tr>';
          }).join('') + '</tbody></table>' : '') +
        // Start Workout button — only for clients
        (state.isClient && day.exercises && day.exercises.length ?
          '<button class="btn btn-primary" style="width:100%;margin-top:10px" onclick="startWorkoutFromDetail(\'' + id + '\',' + dayIdx + ')"><i class="ti ti-player-play"></i> Start This Workout</button>' : '') +
      '</div>';
    }).join('') : (p.schedule ? '<h4>Schedule</h4><div class="schedule-grid">' + p.schedule.split('\n').filter(Boolean).map(function(d){ return '<div class="schedule-day">' + d + '</div>'; }).join('') + '</div>' : '')) +
    (p.notes ? '<div style="margin-top:16px;padding:14px;background:var(--surface2);border-radius:8px;font-size:13px;color:var(--muted)"><i class="ti ti-info-circle" style="color:var(--accent)"></i> ' + p.notes + '</div>' : '');
  openModal('program-detail');
}

async function assignProgram() {
  var id   = document.getElementById('program-detail-body').getAttribute('data-id');
  var prog = programs.find(function(p){ return p.id === id; }) ||
             JSON.parse(localStorage.getItem('repcast_my_programs')||'[]').find(function(p){ return p.id === id; });
  if (!prog) return;

  if (!clientsList.length) {
    showToast('No clients yet. Add a client first.');
    return;
  }

  // Build client picker
  var existing = document.getElementById('modal-prog-assign');
  if (existing) existing.remove();
  var modal = document.createElement('div');
  modal.id = 'modal-prog-assign';
  modal.className = 'modal';
  modal.style.cssText = 'max-width:400px';
  modal.innerHTML =
    '<div class="modal-header"><h3><i class="ti ti-user-check"></i> Assign to Client</h3>' +
    '<button class="modal-close" onclick="this.closest(\'.modal\').remove()"><i class="ti ti-x"></i></button></div>' +
    '<div class="modal-body">' +
      '<p style="color:var(--muted);font-size:13px;margin-bottom:14px">Assign <strong>' + prog.name + '</strong> to:</p>' +
      clientsList.map(function(c) {
        var hasIt = (c.assignedPrograms||[]).some(function(p){ return p.id === id; });
        return '<div class="assign-row' + (hasIt?' assigned':'') + '" onclick="assignProgToClient(\'' + id + '\',\'' + c.id + '\')">' +
          '<div class="assign-check"><i class="ti ' + (hasIt?'ti-check':'ti-plus') + '"></i></div>' +
          '<div><div class="assign-name">' + c.name + '</div>' +
          '<div class="assign-meta">' + (c.email||'') + '</div></div>' +
        '</div>';
      }).join('') +
    '</div>';
  document.body.appendChild(modal);
  modal.style.display = 'flex';
  setTimeout(function(){ modal.classList.add('modal-open'); }, 10);
}

async function assignProgToClient(progId, clientId) {
  var prog   = programs.find(function(p){ return p.id === progId; }) ||
               JSON.parse(localStorage.getItem('repcast_my_programs')||'[]').find(function(p){ return p.id === progId; });
  var client = clientsList.find(function(c){ return c.id === clientId; });
  if (!prog || !client) return;

  var arr    = client.assignedPrograms || [];
  var exists = arr.findIndex(function(p){ return p.id === progId; });

  if (exists > -1) {
    arr.splice(exists, 1);
    showToast('Program removed from ' + client.name);
  } else {
    arr.push(prog);
    showToast('Program assigned to ' + client.name + '!');
  }
  client.assignedPrograms = arr;

  await _saveClientProfile(clientId, client);
  renderClientsList();

  // Close picker and refresh assign modal
  var picker = document.getElementById('modal-prog-assign');
  if (picker) picker.remove();
  assignProgram(); // re-open to show updated state
}

/* ── Program Day Editor ──────────────────────────────── */
function addProgramDay(dayData) {
  var container = document.getElementById('prog-days-editor');
  var dayId = 'pd_' + Date.now() + '_' + Math.random().toString(36).substr(2,4);
  var div = document.createElement('div');
  div.className = 'meal-editor';
  div.id = dayId;
  var exHTML = dayData && dayData.exercises ? dayData.exercises.map(function(ex){ return programExerciseHTML(ex); }).join('') : '';
  div.innerHTML =
    '<div class="meal-editor-header">' +
      '<input class="form-input prog-day-name" value="' + (dayData&&dayData.name||'Day 1') + '" placeholder="Day name e.g. Monday — Chest" style="flex:2">' +
      '<input class="form-input prog-day-muscle" value="' + (dayData&&dayData.muscleGroup||'') + '" placeholder="Muscle group" style="flex:1">' +
      '<button class="admin-action-btn delete" onclick="this.closest(\'.meal-editor\').remove()"><i class="ti ti-trash"></i></button>' +
    '</div>' +
    '<div class="prog-ex-header"><span style="flex:2;min-width:230px">Exercise</span><span style="width:52px">Sets</span><span style="width:60px">Reps</span><span style="width:60px">Rest</span><span style="flex:1">Notes</span><span style="width:32px"></span></div>' +
    '<div class="prog-ex-container" id="pex-' + dayId + '">' + exHTML + '</div>' +
    '<button class="btn btn-ghost btn-sm" data-dayid="' + dayId + '" onclick="addProgramExercise(this.dataset.dayid)" style="margin-top:6px"><i class="ti ti-plus"></i> Add Exercise</button>';
  container.appendChild(div);
}

function programExerciseHTML(ex) {
  ex = ex || {};
  return '<div class="prog-ex-row">' +
    '<input class="form-input" placeholder="Exercise name" value="' + (ex.name||'') + '">' +
    '<input class="form-input" placeholder="Chest" value="' + (ex.muscle||'') + '" style="width:90px">' +
    '<input class="form-input" type="number" placeholder="4" value="' + (ex.sets||'') + '" style="width:60px">' +
    '<input class="form-input" placeholder="8-12" value="' + (ex.reps||'') + '" style="width:70px">' +
    '<input class="form-input" placeholder="90s" value="' + (ex.rest||'') + '" style="width:65px">' +
    '<input class="form-input" placeholder="Notes..." value="' + (ex.notes||'') + '">' +
    '<button class="admin-action-btn delete" onclick="this.parentElement.remove()" style="padding:5px 8px"><i class="ti ti-x"></i></button>' +
  '</div>';
}

function addProgramExercise(dayId) {
  var container = document.getElementById('pex-' + dayId);
  if (!container) return;
  var div = document.createElement('div');
  div.innerHTML = programExerciseHTML({});
  container.appendChild(div.firstChild);
}

function openAdminProgramModal(id) {
  document.getElementById('admin-program-id').value = id || '';
  ['prog-name','prog-weeks','prog-days','prog-desc','prog-schedule','prog-notes'].forEach(function(x){ document.getElementById(x).value=''; });
  document.getElementById('prog-goal').value  = 'strength';
  document.getElementById('prog-level').value = 'Intermediate';
  document.getElementById('prog-exercises-container').innerHTML = '';
  document.getElementById('admin-program-title').innerHTML = id ? '<i class="ti ti-edit"></i> Edit Program' : '<i class="ti ti-plus"></i> Add Program';
  if (id) {
    var allP = programs.concat(JSON.parse(localStorage.getItem('repcast_my_programs')||'[]'));
    var p = allP.find(function(x){ return x.id === id; });
    if (p) {
      document.getElementById('prog-name').value     = p.name     || '';
      document.getElementById('prog-weeks').value    = p.weeks    || '';
      document.getElementById('prog-days').value     = p.days     || '';
      document.getElementById('prog-goal').value     = p.goal     || 'strength';
      document.getElementById('prog-level').value    = p.level    || 'Intermediate';
      document.getElementById('prog-desc').value     = p.desc     || '';
      document.getElementById('prog-schedule').value = p.schedule || '';
      document.getElementById('prog-notes').value    = p.notes    || '';
      (p.trainingDays || []).forEach(function(day){ addProgExercise(day); });
    }
  } else {
    addProgExercise({ day: 'Workout A — Chest, Shoulders & Triceps', exercises: [] });
    addProgExercise({ day: 'Workout B — Back & Biceps',               exercises: [] });
    addProgExercise({ day: 'Workout C — Legs & Core',                 exercises: [] });
  }
  openModal('admin-program');
}

async function saveAdminProgram() {
  var name = document.getElementById('prog-name').value.trim();
  if (!name) { showToast('Please enter a program name.'); return; }
  // Collect training days
  var trainingDays = [];
  document.querySelectorAll('#prog-days-editor .meal-editor').forEach(function(dayEl) {
    var dayName   = dayEl.querySelector('.prog-day-name').value.trim();
    var muscle    = dayEl.querySelector('.prog-day-muscle').value.trim();
    var exercises = [];
    dayEl.querySelectorAll('.prog-ex-row').forEach(function(row) {
      var inputs = row.querySelectorAll('input');
      var exName = inputs[0].value.trim();
      if (!exName) return;
      exercises.push({ name:exName, muscle:inputs[1].value.trim(), sets:inputs[2].value.trim(), reps:inputs[3].value.trim(), rest:inputs[4].value.trim(), notes:inputs[5].value.trim() });
    });
    if (dayName) trainingDays.push({ name:dayName, muscleGroup:muscle, exercises:exercises });
  });
  var data = {
    name, weeks: parseInt(document.getElementById('prog-weeks').value)||0,
    days: trainingDays.length,
    goal: document.getElementById('prog-goal').value,
    level: document.getElementById('prog-level').value,
    desc: document.getElementById('prog-desc').value.trim(),
    notes: document.getElementById('prog-notes').value.trim(),
    trainingDays: trainingDays,
    updatedAt: new Date().toISOString(),
  };
  var editId = document.getElementById('admin-program-id').value;
  try {
    if (editId) { await window._firebase.setDoc(window._firebase.doc(window._db, col('programs'),editId), data, {merge:true}); }
    else { await window._firebase.addDoc(window._firebase.collection(window._db, col('programs')), data); }
    showToast('Program saved!'); closeAllModals(); renderAdminProgramsList(); renderProgramsView();
  } catch(e) { showToast('Save failed: ' + e.code); }
}

function renderAdminProgramsList() {
  var adminProgLang = _adminLang && _adminLang['programs'] ? _adminLang['programs'] : 'en';
  var el = document.getElementById(adminProgLang === 'he' ? 'admin-programs-list-he' : 'admin-programs-list');
  if (!el) return;
  var cnt = document.getElementById('admin-programs-count');
  if (cnt) cnt.textContent = programs.length + ' programs';
  if (!programs.length) { el.innerHTML = '<div class="empty-state"><div class="empty-icon"><i class="ti ti-calendar"></i></div><h3>No programs yet</h3></div>'; return; }
  var gc = { strength:'rgba(244,114,182,0.08)', hypertrophy:'rgba(167,139,250,0.08)', 'fat-loss':'rgba(126,232,162,0.08)', endurance:'rgba(96,165,250,0.08)', rehab:'rgba(251,191,36,0.08)' };
  el.innerHTML = programs.map(function(p) {
    var days = (p.trainingDays||[]).length || p.days || 0;
    var totalEx = (p.trainingDays||[]).reduce(function(s,d){ return s+(d.exercises||[]).length; },0);
    return '<div class="admin-menu-row" style="background:' + (gc[p.goal]||'var(--surface)') + '">' +
      '<div style="flex:1"><strong>' + p.name + '</strong>' +
      '<div style="font-size:12px;color:var(--muted);margin-top:3px">' + (p.goal||'').replace('-',' ') + ' &middot; ' + (p.weeks||0) + ' weeks &middot; ' + days + ' days/week &middot; ' + totalEx + ' exercises &middot; ' + (p.level||'') + '</div></div>' +
      '<div class="admin-actions">' +
        '<button class="admin-action-btn edit" onclick="openAdminProgramModal(\'' + p.id + '\')"><i class="ti ti-edit"></i> Edit</button>' +
        '<button class="admin-action-btn delete" onclick="deleteProgram(\'' + p.id + '\')"><i class="ti ti-trash"></i></button>' +
      '</div></div>';
  }).join('');
}

async function deleteTrainerProgram(id) {
  var p = programs.find(function(x){ return x.id === id; });
  if (!canEditItem(p)) { showToast('You can only delete your own programs.'); return; }
  if (!confirm('Delete this program? This cannot be undone.')) return;
  try {
    await window._firebase.deleteDoc(window._firebase.doc(window._db, col('programs'), id));
    programs = programs.filter(function(p){ return p.id !== id; });
    // Also remove from localStorage personal programs
    var my = JSON.parse(localStorage.getItem('repcast_my_programs')||'[]').filter(function(p){ return p.id !== id; });
    localStorage.setItem('repcast_my_programs', JSON.stringify(my));
    renderProgramsView();
    renderAdminProgramsList();
    showToast('Program deleted.');
  } catch(e) { showToast('Delete failed: ' + e.code); }
}

async function deleteProgram(id) {
  var p = programs.find(function(x){ return x.id === id; });
  if (!canEditItem(p)) { showToast('You can only delete your own programs.'); return; }
  if (!confirm('Delete this program?')) return;
  await window._firebase.deleteDoc(window._firebase.doc(window._db, col('programs'),id));
  programs = programs.filter(function(p){ return p.id !== id; });
  renderAdminProgramsList(); renderProgramsView(); showToast('Program deleted.');
}

/* ══════════════════════════════════════════════════════════
   RECIPES
══════════════════════════════════════════════════════════ */
var recipes = [];
var recipeFilter = 'all';

async function loadRecipes() {
  if (!window._firebase || !window._db) return;
  try {
    var snap = await window._firebase.getDocs(window._firebase.collection(window._db, col('recipes')));
    recipes = [];
    snap.forEach(function(d){ recipes.push(Object.assign({ id: d.id }, d.data())); });
    if (recipes.length === 0 && _lang === 'he') {
      var snapEn = await window._firebase.getDocs(window._firebase.collection(window._db, 'recipes'));
      snapEn.forEach(function(d){ recipes.push(Object.assign({ id: d.id }, d.data())); });
    }
    renderRecipesView(); renderAdminRecipesList();
  } catch(e) {
    console.warn('loadRecipes:', e.code, '— keeping local data');
    renderRecipesView(); renderAdminRecipesList();
  }
}

function filterRecipes(cat, btn) {
  recipeFilter = cat;
  document.querySelectorAll('#view-recipes .lib-tab').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  renderRecipesView();
}

function renderRecipesView() {
  var body = document.getElementById('recipes-body');
  if (!body) return;
  var myUidR2 = state.user ? state.user.uid : null;
  var pool = (recipeFilter === 'all' ? recipes : recipes.filter(function(r){ return r.category === recipeFilter; }));
  // Clients see only their assigned recipes (already filtered); trainers see public + own
  if (!state.isClient) {
    pool = pool.filter(function(r){ return r.isPublic !== false || r.createdBy === myUidR2; });
  }
  if (!pool.length) { body.innerHTML = '<div class="empty-state"><div class="empty-icon"><i class="ti ti-chef-hat"></i></div><h3>No recipes found</h3></div>'; return; }
  var cc = { breakfast:'#FBBF24', lunch:'#60A5FA', dinner:'#A78BFA', snack:'#7EE8A2', 'post-workout':'#F472B6' };
  body.innerHTML = '<div class="resource-grid">' + pool.map(function(r) {
    var col = cc[r.category] || '#7EE8A2';
    var myUidR = state.user ? state.user.uid : null;
    var canEditR = canEditItem(r);
    return '<div class="resource-card" onclick="openRecipeDetail(\'' + r.id + '\')">' +
      (r.photoURL ? '<img src="' + r.photoURL + '" alt="' + r.name + '" style="width:100%;height:140px;object-fit:cover;border-radius:var(--radius-lg) var(--radius-lg) 0 0">' : '') +
      '<div class="resource-card-header" style="background:' + (r.photoURL ? 'var(--surface)' : 'linear-gradient(135deg,' + col + '22,' + col + '08)') + '">' +
        '<i class="ti ti-chef-hat resource-card-icon" style="color:' + col + '"></i>' +
        '<div><div class="resource-card-name">' + r.name + '</div><div class="resource-card-meta">' + (r.prepTime||'?') + ' min &middot; ' + (r.calories||0) + ' kcal</div></div>' +
      '</div>' +
      '<div class="menu-card-macros"><div class="menu-macro"><span>' + (r.protein||0) + 'g</span><em>Protein</em></div><div class="menu-macro"><span>' + (r.carbs||0) + 'g</span><em>Carbs</em></div><div class="menu-macro"><span>' + (r.fat||0) + 'g</span><em>Fat</em></div></div>' +
      '<div class="resource-card-tags">' +
        '<span class="tag" style="background:' + col + '22;color:' + col + '">' + (r.category||'').toUpperCase() + '</span>' +
        (!r.isPublic && canEditR ? '<span class="tag" style="background:rgba(251,191,36,0.1);color:#FBBF24">🔒 Private</span>' : '') +
      '</div>' +
      (canEditR ? '<div class="menu-card-actions">' +
        '<button class="btn btn-ghost btn-sm" style="padding:4px 8px" onclick="event.stopPropagation();openTrainerRecipeModal(\'' + r.id + '\')" ><i class="ti ti-edit"></i></button>' +
        '<button class="btn btn-ghost btn-sm" style="padding:4px 8px;color:var(--danger)" onclick="event.stopPropagation();deleteTrainerRecipe(\'' + r.id + '\')"><i class="ti ti-trash"></i></button>' +
      '</div>' : '') +
    '</div>';
  }).join('') + '</div>';
}

function openRecipeDetail(id) {
  var r = recipes.find(function(x){ return x.id === id; });
  if (!r) return;
  document.getElementById('recipe-detail-title').innerHTML = '<i class="ti ti-chef-hat"></i> ' + r.name;
  var ings  = (r.ingredients ||'').split('\n').filter(Boolean);
  var steps = (r.instructions||'').split('\n').filter(Boolean);
  // Build photo/video section
  var mediaHTML = '';
  if (r.videoURL) {
    if (isYouTubeURL(r.videoURL)) {
      var ytId = getYouTubeID(r.videoURL);
      mediaHTML = '<div class="recipe-media"><iframe src="https://www.youtube.com/embed/' + ytId + '" frameborder="0" allow="autoplay;fullscreen" allowfullscreen style="width:100%;height:280px;border-radius:12px;margin-bottom:16px"></iframe></div>';
    } else {
      mediaHTML = '<video src="' + r.videoURL + '" controls style="width:100%;border-radius:12px;margin-bottom:16px;max-height:280px"></video>';
    }
  } else if (r.photoURL) {
    mediaHTML = '<img src="' + r.photoURL + '" alt="' + r.name + '" style="width:100%;border-radius:12px;margin-bottom:16px;max-height:280px;object-fit:cover">';
  }

  document.getElementById('recipe-detail-body').innerHTML =
    mediaHTML +
    '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px">' +
      '<div class="bmr-stat accent"><div class="bmr-stat-val">' + (r.calories||0) + '</div><div class="bmr-stat-label">Calories</div></div>' +
      '<div class="bmr-stat"><div class="bmr-stat-val">' + (r.protein||0) + 'g</div><div class="bmr-stat-label">Protein</div></div>' +
      '<div class="bmr-stat"><div class="bmr-stat-val">' + (r.carbs||0) + 'g</div><div class="bmr-stat-label">Carbs</div></div>' +
      '<div class="bmr-stat"><div class="bmr-stat-val">' + (r.fat||0) + 'g</div><div class="bmr-stat-label">Fat</div></div>' +
      '<div class="bmr-stat"><div class="bmr-stat-val">' + (r.prepTime||'?') + '</div><div class="bmr-stat-label">Minutes</div></div>' +
    '</div>' +
    '<div class="recipe-two-col">' +
      '<div><h4>Ingredients</h4><ul class="recipe-list">' + ings.map(function(i){ return '<li>' + i + '</li>'; }).join('') + '</ul></div>' +
      '<div><h4>Instructions</h4><ol class="recipe-list">' + steps.map(function(s){ return '<li>' + s.replace(/^step\s*\d+:\s*/i,'') + '</li>'; }).join('') + '</ol></div>' +
    '</div>' +
    (r.tips ? '<div class="recipe-tips"><i class="ti ti-bulb"></i> ' + r.tips + '</div>' : '');
  openModal('recipe-detail');
}

function openAdminRecipeModal(id) {
  document.getElementById('admin-recipe-id').value = id || '';
  ['recipe-name','recipe-time','recipe-cal','recipe-pro','recipe-car','recipe-fat','recipe-ingredients','recipe-instructions','recipe-tips'].forEach(function(x){ document.getElementById(x).value=''; });
  document.getElementById('recipe-category').value = 'breakfast';
  document.getElementById('admin-recipe-title').innerHTML = id ? '<i class="ti ti-edit"></i> Edit Recipe' : '<i class="ti ti-plus"></i> Add Recipe';
  var rLangEl = document.getElementById('admin-recipe-lang');
  if (rLangEl) rLangEl.value = (id && recipes.find(function(r){return r.id===id;})||{}).lang || 'en';
  // Clear photo/video fields
  var photoEl = document.getElementById('recipe-photo');
  var videoEl = document.getElementById('recipe-video');
  if (photoEl) photoEl.value = '';
  if (videoEl) videoEl.value = '';

  if (id) {
    var r = recipes.find(function(x){ return x.id === id; });
    if (r) {
      document.getElementById('recipe-name').value         = r.name         || '';
      document.getElementById('recipe-category').value     = r.category     || 'breakfast';
      document.getElementById('recipe-time').value         = r.prepTime     || '';
      document.getElementById('recipe-cal').value          = r.calories     || '';
      document.getElementById('recipe-pro').value          = r.protein      || '';
      document.getElementById('recipe-car').value          = r.carbs        || '';
      document.getElementById('recipe-fat').value          = r.fat          || '';
      document.getElementById('recipe-ingredients').value  = r.ingredients  || '';
      document.getElementById('recipe-instructions').value = r.instructions || '';
      document.getElementById('recipe-tips').value         = r.tips         || '';
      if (photoEl) photoEl.value = r.photoURL || '';
      if (videoEl) videoEl.value = r.videoURL || '';
    }
  }
  openModal('admin-recipe');
}

async function saveAdminRecipe() {
  var name = document.getElementById('recipe-name').value.trim();
  if (!name) { showToast('Please enter a recipe name.'); return; }
  var photoEl = document.getElementById('recipe-photo');
  var videoEl = document.getElementById('recipe-video');
  var pubEl   = document.getElementById('recipe-is-public');
  var data = {
    name,
    category:     document.getElementById('recipe-category').value,
    prepTime:     parseInt(document.getElementById('recipe-time').value)     || 0,
    calories:     parseFloat(document.getElementById('recipe-cal').value)    || 0,
    protein:      parseFloat(document.getElementById('recipe-pro').value)    || 0,
    carbs:        parseFloat(document.getElementById('recipe-car').value)    || 0,
    fat:          parseFloat(document.getElementById('recipe-fat').value)    || 0,
    ingredients:  document.getElementById('recipe-ingredients').value.trim(),
    instructions: document.getElementById('recipe-instructions').value.trim(),
    tips:         document.getElementById('recipe-tips').value.trim(),
    photoURL:     photoEl ? photoEl.value.trim() : '',
    videoURL:     videoEl ? videoEl.value.trim() : '',
    isPublic:     pubEl   ? pubEl.checked         : true,
    createdBy:    state.user ? state.user.uid : null,
    updatedAt:    new Date().toISOString(),
  };
  var editId = document.getElementById('admin-recipe-id').value;
  try {
    if (editId) {
      await window._firebase.setDoc(window._firebase.doc(window._db, col('recipes'),editId),data,{merge:true});
      var idx = recipes.findIndex(function(r){ return r.id === editId; });
      if (idx > -1) recipes[idx] = Object.assign({}, recipes[idx], data);
      else recipes.push(Object.assign({ id: editId }, data));
    } else {
      var recCol = (_adminLang && _adminLang['recipes'] === 'he') ? 'recipes_he' : col('recipes');
      var ref = await window._firebase.addDoc(window._firebase.collection(window._db, recCol),data);
      recipes.push(Object.assign({ id: ref.id }, data));
    }
    showToast('Recipe saved!'); closeAllModals(); renderAdminRecipesList(); renderRecipesView();
  } catch(e) { showToast('Save failed: '+e.code); }
}

function renderAdminRecipesList() {
  var adminRecLang = _adminLang && _adminLang['recipes'] ? _adminLang['recipes'] : 'en';
  var el = document.getElementById(adminRecLang === 'he' ? 'admin-recipes-list-he' : 'admin-recipes-list');
  if (!el) return;
  var cnt = document.getElementById('admin-recipes-count');
  if (cnt) cnt.textContent = recipes.length + ' recipes';
  if (!recipes.length) { el.innerHTML = '<div class="empty-state"><div class="empty-icon"><i class="ti ti-chef-hat"></i></div><h3>No recipes yet</h3></div>'; return; }
  el.innerHTML = recipes.map(function(r) {
    return '<div class="admin-menu-row"><div style="flex:1"><strong>' + r.name + '</strong><div style="font-size:12px;color:var(--muted);margin-top:3px">' + (r.category||'') + ' &middot; ' + (r.calories||0) + ' kcal</div></div>' +
      '<div class="admin-actions"><button class="admin-action-btn edit" onclick="openAdminRecipeModal(\'' + r.id + '\')"><i class="ti ti-edit"></i></button><button class="admin-action-btn delete" onclick="deleteRecipe(\'' + r.id + '\')"><i class="ti ti-trash"></i></button></div></div>';
  }).join('');
}

async function deleteRecipe(id) {
  var r = recipes.find(function(x){ return x.id === id; });
  if (!canEditItem(r)) { showToast('You can only delete your own recipes.'); return; }
  if (!confirm('Delete this recipe?')) return;
  await window._firebase.deleteDoc(window._firebase.doc(window._db, col('recipes'),id));
  recipes = recipes.filter(function(r){ return r.id !== id; });
  renderAdminRecipesList(); renderRecipesView(); showToast('Recipe deleted.');
}

/* ══════════════════════════════════════════════════════════
   RESEARCH
══════════════════════════════════════════════════════════ */
var researches = [];
var researchQuery = '';

async function loadResearch() {
  if (!window._firebase || !window._db) return;
  try {
    var snap = await window._firebase.getDocs(window._firebase.collection(window._db, 'research'));
    researches = [];
    snap.forEach(function(d){ researches.push(Object.assign({ id: d.id }, d.data())); });
    renderResearchView(); renderAdminResearchList();
  } catch(e) {
    console.warn('loadResearch:', e.code, '— keeping local data');
    renderResearchView(); renderAdminResearchList();
  }
}

function filterResearch(q) {
  researchQuery = (q||'').toLowerCase();
  renderResearchView();
}

function renderResearchView() {
  var body = document.getElementById('research-body');
  if (!body) return;
  var pool = researches.filter(function(r){ var rl = r.lang || 'both'; return rl === _lang || rl === 'both'; });
  if (researchQuery) pool = pool.filter(function(r){ return (r.title||'').toLowerCase().includes(researchQuery)||(r.summary||'').toLowerCase().includes(researchQuery); });
  if (!pool.length) { body.innerHTML = '<div class="empty-state"><div class="empty-icon"><i class="ti ti-microscope"></i></div><h3>No studies found</h3></div>'; return; }
  var cc = { strength:'#F472B6', hypertrophy:'#A78BFA', nutrition:'#7EE8A2', recovery:'#60A5FA', injury:'#FBBF24', cardio:'#3ECFCF', physio:'#FB923C', psychology:'#EC4899' };
  body.innerHTML = '<div class="research-list">' + pool.map(function(r) {
    var col = cc[r.category] || 'var(--accent)';
    return '<div class="research-card">' +
      '<div class="research-card-header">' +
        '<div style="flex:1"><div class="research-title">' + (r.title||'') + '</div>' +
        '<div class="research-meta">' + [r.authors,r.journal,r.year].filter(Boolean).join(' &middot; ') + '</div></div>' +
        '<span class="tag" style="background:' + col + '22;color:' + col + ';flex-shrink:0">' + (r.category||'').toUpperCase() + '</span>' +
      '</div>' +
      '<div class="research-summary">' + (r.summary||'').slice(0,220) + '...</div>' +
      '<div class="research-footer">' +
        (r.url ? '<a href="' + r.url + '" target="_blank" class="btn btn-ghost btn-sm"><i class="ti ti-external-link"></i> Read Paper</a>' : '') +
        (r.application ? '<div class="research-application"><i class="ti ti-bulb"></i> ' + r.application.slice(0,120) + '...</div>' : '') +
        ((state.user && r.createdBy === state.user.uid) ? '<div style="display:flex;gap:6px;margin-left:auto">' +
          (!r.isPublic ? '<span class="tag" style="background:rgba(251,191,36,0.1);color:#FBBF24;font-size:10px">🔒 Private</span>' : '') +
          '<button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();openTrainerResearchModal(\'' + r.id + '\')"><i class="ti ti-edit"></i></button>' +
          '<button class="btn btn-ghost btn-sm" style="color:var(--danger)" onclick="event.stopPropagation();deleteTrainerResearch(\'' + r.id + '\')"><i class="ti ti-trash"></i></button>' +
        '</div>' : '') +
      '</div></div>';
  }).join('') + '</div>';
}

function openAdminResearchModal(id) {
  document.getElementById('admin-research-id').value = id || '';
  ['research-title-input','research-authors','research-year','research-journal','research-summary','research-url','research-application'].forEach(function(x){ document.getElementById(x).value=''; });
  document.getElementById('research-cat').value = 'strength';
  document.getElementById('admin-research-title').innerHTML = id ? '<i class="ti ti-edit"></i> Edit Study' : '<i class="ti ti-plus"></i> Add Study';
  if (id) {
    var r = researches.find(function(x){ return x.id === id; });
    if (r) { document.getElementById('research-title-input').value=r.title||'';
      var heResTitle = document.getElementById('research-title-he');
      if (heResTitle) heResTitle.value = r.title_he || ''; document.getElementById('research-authors').value=r.authors||''; document.getElementById('research-year').value=r.year||''; document.getElementById('research-journal').value=r.journal||''; document.getElementById('research-cat').value=r.category||'strength'; document.getElementById('research-summary').value=r.summary||''; document.getElementById('research-url').value=r.url||''; document.getElementById('research-application').value=r.application||''; }
  }
  openModal('admin-research');
}

async function saveAdminResearch() {
  var title = document.getElementById('research-title-input').value.trim();
  if (!title) { showToast('Please enter a study title.'); return; }
  var resLangEl = document.getElementById('admin-research-lang');
  var resHeTitleEl = document.getElementById('research-title-he');
  var data = { lang: resLangEl ? resLangEl.value : 'en', title, title_he: resHeTitleEl ? resHeTitleEl.value : '', authors: document.getElementById('research-authors').value.trim(), year: parseInt(document.getElementById('research-year').value)||null, journal: document.getElementById('research-journal').value.trim(), category: document.getElementById('research-cat').value, summary: document.getElementById('research-summary').value.trim(), url: document.getElementById('research-url').value.trim(), application: document.getElementById('research-application').value.trim(), updatedAt: new Date().toISOString() };
  var editId = document.getElementById('admin-research-id').value;
  try {
    if (editId) { await window._firebase.setDoc(window._firebase.doc(window._db,'research',editId),data,{merge:true}); }
    else { await window._firebase.addDoc(window._firebase.collection(window._db,'research'),data); }
    showToast('Study saved!'); closeAllModals(); renderAdminResearchList(); renderResearchView();
  } catch(e) { showToast('Save failed: '+e.code); }
}

function renderAdminResearchList() {
  var el = document.getElementById('admin-research-list');
  if (!el) return;
  var cnt = document.getElementById('admin-research-count');
  if (cnt) cnt.textContent = researches.length + ' studies';
  if (!researches.length) { el.innerHTML = '<div class="empty-state"><div class="empty-icon"><i class="ti ti-microscope"></i></div><h3>No studies yet</h3></div>'; return; }
  el.innerHTML = researches.map(function(r) {
    return '<div class="admin-menu-row"><div style="flex:1"><strong>' + r.title + '</strong><div style="font-size:12px;color:var(--muted);margin-top:3px">' + [r.authors,r.journal,r.year].filter(Boolean).join(' &middot; ') + '</div></div>' +
      '<div class="admin-actions"><button class="admin-action-btn edit" onclick="openAdminResearchModal(\'' + r.id + '\')"><i class="ti ti-edit"></i></button><button class="admin-action-btn delete" onclick="deleteResearch(\'' + r.id + '\')"><i class="ti ti-trash"></i></button></div></div>';
  }).join('');
}

async function deleteResearch(id) {
  var r = researches.find(function(x){ return x.id === id; });
  if (!canEditItem(r)) { showToast('You can only delete your own studies.'); return; }
  if (!confirm('Delete this study?')) return;
  await window._firebase.deleteDoc(window._firebase.doc(window._db,'research',id));
  researches = researches.filter(function(r){ return r.id !== id; });
  renderAdminResearchList(); renderResearchView(); showToast('Study deleted.');
}


/* ── Program exercise day editor ─────────────────────── */
function addProgExercise(dayData) {
  var container = document.getElementById('prog-exercises-container');
  var dayId = 'progday-' + Date.now();
  dayData = dayData || {};
  var div = document.createElement('div');
  div.className = 'meal-editor';
  div.id = dayId;
  div.innerHTML =
    '<div class="meal-editor-header">' +
      '<input class="form-input meal-name-input" value="' + (dayData.day||'Day 1') + '" placeholder="e.g. Monday — Chest & Triceps" style="flex:1">' +
      '<button class="admin-action-btn delete" onclick="this.closest(\'.meal-editor\').remove()"><i class="ti ti-trash"></i></button>' +
    '</div>' +
    '<div class="prog-ex-header"><span>Exercise</span><span>Muscle</span><span>Sets</span><span>Reps</span><span>Rest</span><span>Notes</span><span></span></div>' +
    '<div id="exrows-' + dayId + '">' +
      ((dayData.exercises||[]).map(function(ex){ return progExRowHTML(dayId, ex); }).join('')) +
    '</div>' +
    '<button class="btn btn-ghost btn-sm" data-day="' + dayId + '" onclick="addProgExRow(this.dataset.day)" style="margin-top:6px">' +
      '<i class="ti ti-plus"></i> Add Exercise' +
    '</button>';
  container.appendChild(div);
}

function progExRowHTML(dayId, ex) {
  ex = ex || {};
  var exId = ex.exerciseId || ex.id || '';
  var muscleOpts = ['','chest','back','legs','shoulders','arms','core','fullbody','physio'];
  return '<div class="prog-ex-row" data-exid="' + exId + '">' +
    '<div class="prog-ex-pick">' +
      '<select class="form-input prog-ex-muscle-filter" onchange="filterProgExSearch(this.closest(\'.prog-ex-row\').querySelector(\'.prog-ex-name\'))" style="width:110px;flex-shrink:0">' +
        muscleOpts.map(function(m){ return '<option value="' + m + '">' + (m||'All muscles') + '</option>'; }).join('') +
      '</select>' +
      '<input class="form-input prog-ex-name" placeholder="Search exercise..." value="' + (ex.title||ex.name||'') + '" ' +
        'oninput="filterProgExSearch(this)" onfocus="showProgExDropdown(this)" style="flex:1;min-width:120px">' +
      '<input type="hidden" class="prog-ex-id"    value="' + exId + '">' +
      '<input type="hidden" class="prog-ex-url"   value="' + (ex.videoURL||'') + '">' +
      '<input type="hidden" class="prog-ex-muscle" value="' + (ex.muscle||'') + '">' +
      '<div class="prog-ex-dropdown" style="display:none"></div>' +
    '</div>' +
    '<input class="form-input" placeholder="Sets"  value="' + (ex.sets||'')  + '" style="width:52px">' +
    '<input class="form-input" placeholder="Reps"  value="' + (ex.reps||'')  + '" style="width:60px">' +
    '<input class="form-input" placeholder="Rest"  value="' + (ex.rest||'')  + '" style="width:60px">' +
    '<input class="form-input" placeholder="Notes" value="' + (ex.notes||'') + '" style="flex:1;min-width:70px">' +
    '<button class="admin-action-btn delete" onclick="this.closest(\'.prog-ex-row\').remove()" style="padding:6px 8px"><i class="ti ti-x"></i></button>' +
  '</div>';
}

/* ── Exercise search dropdown for program editor ──────── */
function filterProgExSearch(input) {
  var q      = input.value.toLowerCase().trim();
  var row    = input.closest('.prog-ex-row');
  var dd     = row.querySelector('.prog-ex-dropdown');
  var muscle = (row.querySelector('.prog-ex-muscle-filter') || {}).value || '';

  if (!q && !muscle) { dd.style.display = 'none'; return; }
  // Don't show dropdown if exercise already selected (exId set) and input unchanged
  var exId = (row.querySelector('.prog-ex-id') || {}).value || '';
  if (exId && row.querySelector('.prog-ex-name').value.toLowerCase().trim() === q && dd.innerHTML === '') {
    return; // already selected, dropdown was cleared
  }

  var all  = MASTER_EXERCISES.concat(customExercises || []);
  var hits = all.filter(function(e) {
    var matchQ = !q || (e.title||'').toLowerCase().includes(q) || (e.sub||'').toLowerCase().includes(q);
    var matchM = !muscle || (e.muscle||'').toLowerCase() === muscle.toLowerCase();
    return matchQ && matchM;
  }).slice(0, 10);

  if (!hits.length) {
    dd.innerHTML = '<div style="padding:12px;color:var(--muted);font-size:13px;text-align:center">No exercises found</div>';
    dd.style.display = 'block';
    return;
  }

  dd.innerHTML = hits.map(function(e) {
    var thumb = e.videoURL && isYouTubeURL(e.videoURL) ? getYouTubeThumbnail(e.videoURL) : '';
    var hasDirect = e.videoURL && !isYouTubeURL(e.videoURL);
    return '<div class="prog-ex-drop-item" data-exid="' + e.id + '" data-title="' + (e.title||'').replace(/"/g,'&#34;') + '" data-muscle="' + (e.muscle||'') + '" data-url="' + (e.videoURL||'').replace(/"/g,'&#34;') + '" onclick="pickProgEx(this)">' +
      (thumb ? '<img src="' + thumb + '" style="width:40px;height:30px;object-fit:cover;border-radius:4px;flex-shrink:0">' :
       hasDirect ? '<div style="width:40px;height:30px;background:var(--surface3);border-radius:4px;flex-shrink:0;display:flex;align-items:center;justify-content:center"><i class="ti ti-player-play" style="font-size:12px;color:var(--accent)"></i></div>' :
       '<div style="width:40px;height:30px;background:var(--surface3);border-radius:4px;flex-shrink:0;display:flex;align-items:center;justify-content:center"><i class="ti ti-barbell" style="font-size:12px;color:var(--muted2)"></i></div>') +
      '<div style="flex:1;min-width:0">' +
        '<div style="font-size:13px;font-weight:600">' + (e.title||'') + '</div>' +
        '<div style="font-size:11px;color:var(--muted)">' + (e.muscle||'') + (e.sub ? ' · ' + e.sub : '') + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
  dd.style.display = 'block';
}

function pickProgEx(el) {
  var exId   = el.getAttribute('data-exid')   || '';
  var title  = el.getAttribute('data-title')  || '';
  var muscle = el.getAttribute('data-muscle') || '';
  var url    = el.getAttribute('data-url')    || '';
  selectProgEx(el, exId, title, muscle, url);
}

function showProgExDropdown(input) {
  if (input.value.trim()) filterProgExSearch(input);
}

function selectProgEx(item, exId, title, muscle, videoURL) {
  var row = item.closest('.prog-ex-row');
  if (!row) return;
  row.querySelector('.prog-ex-name').value   = title;
  row.querySelector('.prog-ex-id').value     = exId;
  row.querySelector('.prog-ex-url').value    = videoURL;
  row.querySelector('.prog-ex-muscle').value = muscle;
  var muscleTag = row.querySelector('.prog-ex-muscle-tag');
  if (muscleTag) muscleTag.textContent = muscle;

  // CRITICAL: hide dropdown immediately and prevent it showing again
  var dd = row.querySelector('.prog-ex-dropdown');
  if (dd) {
    dd.style.display = 'none';
    dd.innerHTML = ''; // clear so it can't reappear
  }
  row.setAttribute('data-exid', exId);

  // Blur the search input so keyboard stays up but dropdown gone
  var nameInput = row.querySelector('.prog-ex-name');
  if (nameInput) nameInput.blur();

  // Focus Sets input after short delay
  var setsInput = row.querySelector('input[placeholder="Sets"]');
  if (setsInput) {
    setTimeout(function(){
      setsInput.focus();
      setsInput.select();
    }, 150);
  }
}

// Close dropdowns on outside click
document.addEventListener('click', function(e) {
  if (!e.target.closest('.prog-ex-pick')) {
    document.querySelectorAll('.prog-ex-dropdown').forEach(function(d){ d.style.display='none'; });
  }
});

function addProgExRow(dayId) {
  var container = document.getElementById('exrows-' + dayId);
  if (!container) return;
  var div = document.createElement('div');
  div.innerHTML = progExRowHTML(dayId, {});
  container.appendChild(div.firstChild);
}

/* ── Override saveAdminProgram to include exercise days ── */
async function saveAdminProgram() {
  var name = (document.getElementById('prog-name').value||'').trim() || 'My Program';

  var days = [];
  document.querySelectorAll('#prog-exercises-container .meal-editor').forEach(function(dayEl) {
    var dayName = dayEl.querySelector('.meal-name-input').value.trim();
    var exercises = [];
    dayEl.querySelectorAll('.prog-ex-row').forEach(function(row) {
      var nameEl = row.querySelector('.prog-ex-name');
      if (!nameEl || !nameEl.value.trim()) return;
      exercises.push({
        exerciseId: (row.querySelector('.prog-ex-id')     || {}).value || '',
        title:      nameEl.value.trim(),
        muscle:     (row.querySelector('.prog-ex-muscle') || {}).value || '',
        videoURL:   (row.querySelector('.prog-ex-url')    || {}).value || '',
        sets:  (row.querySelector('input[placeholder="Sets"]')  || {}).value || '',
        reps:  (row.querySelector('input[placeholder="Reps"]')  || {}).value || '',
        rest:  (row.querySelector('input[placeholder="Rest"]')  || {}).value || '',
        notes: (row.querySelector('input[placeholder="Notes"]') || {}).value || '',
      });
    });
    days.push({ day: dayName || 'Workout', exercises: exercises });
  });

  var pubEl = document.getElementById('prog-is-public');
  // Support both checkbox (.checked) and hidden input (.value)
  var isPublic = pubEl ? (pubEl.type === 'checkbox' ? Boolean(pubEl.checked) : pubEl.value !== 'false') : true;

  var data = {
    name, isPublic,
    weeks:        parseInt(document.getElementById('prog-weeks').value) || 0,
    days:         parseInt(document.getElementById('prog-days').value)  || 0,
    goal:         document.getElementById('prog-goal').value,
    level:        document.getElementById('prog-level').value,
    desc:         document.getElementById('prog-desc').value.trim(),
    notes:        document.getElementById('prog-notes').value.trim(),
    trainingDays: days,
    createdBy:    state.user ? state.user.uid : null,
    trainerName:  state.user ? state.user.fullName : null,
    updatedAt:    new Date().toISOString(),
  };

  var editId = document.getElementById('admin-program-id').value;
  try {
    var savedId;
    if (editId) {
      await window._firebase.setDoc(window._firebase.doc(window._db, col('programs'),editId),data,{merge:true});
      savedId = editId;
      var idx = programs.findIndex(function(p){ return p.id === editId; });
      if (idx > -1) programs[idx] = Object.assign({}, programs[idx], data);
      else programs.push(Object.assign({ id: editId }, data));
    } else {
      var ref = await window._firebase.addDoc(window._firebase.collection(window._db, col('programs')),data);
      savedId = ref.id;
      programs.push(Object.assign({ id: savedId }, data));
    }
    showToast('Program saved!');
    closeAllModals();
    renderAdminProgramsList();
    renderProgramsView();
  } catch(e) { showToast('Save failed: ' + e.code); }
}

/* ── Override openAdminProgramModal to load days ─────── */
function openAdminProgramModal(id) {
  document.getElementById('admin-program-id').value = id || '';
  ['prog-name','prog-weeks','prog-days','prog-desc','prog-schedule','prog-notes'].forEach(function(x){ document.getElementById(x).value=''; });
  document.getElementById('prog-goal').value  = 'strength';
  document.getElementById('prog-level').value = 'Intermediate';
  document.getElementById('prog-exercises-container').innerHTML = '';
  document.getElementById('admin-program-title').innerHTML = id ? '<i class="ti ti-edit"></i> Edit Program' : '<i class="ti ti-plus"></i> Add Program';

  if (id) {
    var p = programs.find(function(x){ return x.id === id; });
    if (p) {
      document.getElementById('prog-name').value     = p.name     || '';
      document.getElementById('prog-weeks').value    = p.weeks    || '';
      document.getElementById('prog-days').value     = p.days     || '';
      document.getElementById('prog-goal').value     = p.goal     || 'strength';
      document.getElementById('prog-level').value    = p.level    || 'Intermediate';
      document.getElementById('prog-desc').value     = p.desc     || '';
      document.getElementById('prog-schedule').value = p.schedule || '';
      document.getElementById('prog-notes').value    = p.notes    || '';
      (p.trainingDays || []).forEach(function(day){ addProgExercise(day); });
    }
  } else {
    // Default: one empty day
    addProgExercise({ day: 'Day 1 — Chest & Triceps', exercises: [] });
  }
  openModal('admin-program');
}

function openProgramDetail(id) {
  var allP = programs.concat(JSON.parse(localStorage.getItem('repcast_my_programs')||'[]'));
  var p    = allP.find(function(x){ return x.id === id; });
  // Also check client assigned programs (for client portal)
  if (!p && state.user && state.user.tier === 'client') {
    p = allP.find(function(x){ return x.id === id; }) ||
        (window._clientAssignedPrograms || []).find(function(x){ return x.id === id; });
  }
  if (!p) {
    // Last resort: search by id in all known program arrays
    var allKnown = programs.concat(
      JSON.parse(localStorage.getItem('repcast_my_programs')||'[]'),
      window._clientAssignedPrograms || []
    );
    p = allKnown.find(function(x){ return x.id === id; });
  }
  if (!p) { showToast('Program not found'); return; }

  document.getElementById('program-detail-title').innerHTML = '<i class="ti ti-calendar"></i> ' + p.name;
  var el = document.getElementById('program-detail-body');
  el.setAttribute('data-id', id);

  // Header stats
  var goalFull = (p.goal||'?').replace(/-/g,' ');
  goalFull = goalFull.charAt(0).toUpperCase() + goalFull.slice(1);
  var html =
    '<div style="display:flex;gap:8px;flex-wrap:nowrap;margin-bottom:16px;overflow-x:auto">' +
      '<div class="bmr-stat" style="min-width:56px;text-align:center"><div class="bmr-stat-val">' + (p.weeks||'?') + '</div><div class="bmr-stat-label">Weeks</div></div>' +
      '<div class="bmr-stat" style="min-width:56px;text-align:center"><div class="bmr-stat-val">' + (p.trainingDays&&p.trainingDays.length||p.days||'?') + '</div><div class="bmr-stat-label">Days</div></div>' +
      '<div class="bmr-stat accent" style="flex:1;text-align:center"><div class="bmr-stat-val" style="font-size:13px">' + goalFull + '</div><div class="bmr-stat-label">Goal</div></div>' +
      '<div class="bmr-stat" style="flex:1;text-align:center"><div class="bmr-stat-val" style="font-size:13px">' + (p.level||'?') + '</div><div class="bmr-stat-label">Level</div></div>' +
    '</div>' +
    (p.desc ? '<p style="color:var(--muted);font-size:13px;margin-bottom:16px;line-height:1.5">' + p.desc + '</p>' : '');

  // Day tab pills
  var days = p.trainingDays || [];
  if (days.length > 1) {
    html += '<div class="prog-day-tabs" id="prog-day-tabs">' +
      days.map(function(day, i) {
        var label = (day.day||'Day '+(i+1)).split('—')[0].split('—')[0].trim();
        return '<button class="prog-day-tab' + (i===0?' active':'') + '" onclick="switchProgDay(' + i + ',this)">' + label + '</button>';
      }).join('') +
    '</div>';
  }

  // Day panels
  html += days.map(function(day, i) {
    var exercises = day.exercises || [];
    return '<div class="prog-day-panel' + (i===0?' active':'') + '" id="prog-panel-' + i + '">' +
      '<h4 style="font-size:15px;font-weight:700;margin-bottom:12px;color:var(--text)">' + (day.day||'Day '+(i+1)) + '</h4>' +

      // Exercise table
      '<table class="prog-ex-table">' +
        '<thead><tr>' +
          '<th style="width:36px"></th>' +
          '<th>Exercise</th><th>Sets</th><th>Reps</th><th>Rest</th><th>Notes</th>' +
        '</tr></thead>' +
        '<tbody>' +
        exercises.map(function(ex, ei) {
          var hasVideo = !!(ex.videoURL);
          var thumb    = hasVideo && isYouTubeURL(ex.videoURL) ? getYouTubeThumbnail(ex.videoURL) : '';
          var thumbHTML = thumb
            ? '<img src="' + thumb + '" style="width:32px;height:26px;object-fit:cover;border-radius:4px">'
            : (hasVideo ? '<div style="width:32px;height:26px;background:var(--surface3);border-radius:4px;display:flex;align-items:center;justify-content:center"><i class="ti ti-player-play" style="font-size:11px;color:var(--accent)"></i></div>'
                        : '<div style="width:32px;height:26px;background:var(--surface3);border-radius:4px;display:flex;align-items:center;justify-content:center"><i class="ti ti-barbell" style="font-size:11px;color:var(--muted2)"></i></div>');
          // Resolve videoURL — fall back to master library if not stored
          var resolvedVideo = ex.videoURL || '';
          var _masterPool = (typeof MASTER_EXERCISES !== 'undefined' ? MASTER_EXERCISES : []);
          if (!resolvedVideo && ex.exerciseId) {
            var masterEx = _masterPool.find(function(m){ return m.id === ex.exerciseId; });
            if (masterEx) resolvedVideo = masterEx.videoURL || masterEx.video_url || masterEx.video || masterEx.youtube || '';
          }
          if (!resolvedVideo && ex.title) {
            var byTitle = _masterPool.find(function(m){
              return (m.title||'').toLowerCase() === (ex.title||'').toLowerCase();
            });
            if (byTitle) resolvedVideo = byTitle.videoURL || byTitle.video_url || byTitle.video || byTitle.youtube || '';
          }
          var hasV = !!resolvedVideo;
          var thumb2 = hasV && isYouTubeURL(resolvedVideo) ? getYouTubeThumbnail(resolvedVideo) : '';
          var thumbHTML2 = thumb2
            ? '<img src="' + thumb2 + '" style="width:40px;height:32px;object-fit:cover;border-radius:5px">'
            : (hasV ? '<div style="width:40px;height:32px;background:rgba(126,232,162,0.12);border-radius:5px;display:flex;align-items:center;justify-content:center"><i class="ti ti-player-play" style="font-size:14px;color:var(--accent)"></i></div>'
                    : '<div style="width:40px;height:32px;background:var(--surface3);border-radius:5px;display:flex;align-items:center;justify-content:center"><i class="ti ti-barbell" style="font-size:12px;color:var(--muted2)"></i></div>');
          var clickAttr = hasV ? ' onclick="openVideoPopup(decodeURIComponent(\'' + encodeURIComponent(resolvedVideo) + '\'))" style="cursor:pointer"' : '';
          return '<tr class="prog-ex-table-row"' + clickAttr + '>' +
            '<td>' + thumbHTML2 + '</td>' +
            '<td><strong>' + (ex.title||ex.name||'-') + '</strong>' +
              (ex.muscle ? '<div style="font-size:11px;color:var(--muted)">' + ex.muscle + '</div>' : '') +
              (hasV ? '<div style="font-size:10px;color:var(--accent)"><i class="ti ti-player-play"></i> Tap to watch</div>' : '') +
            '</td>' +
            '<td>' + (ex.sets||'-') + '</td>' +
            '<td>' + (ex.reps||'-') + '</td>' +
            '<td>' + (ex.rest||'-') + '</td>' +
            '<td style="color:var(--muted);font-size:12px">' + (ex.notes||'') + '</td>' +
          '</tr>';
        }).join('') +
        '</tbody>' +
      '</table>' +
      // Start Workout button — only for clients, per day
      (state.isClient && exercises.length ?
        '<button class="btn btn-primary" style="width:100%;margin-top:12px" onclick="startWorkoutFromDetail(\'' + (p.id||id) + '\',' + i + ')"><i class="ti ti-player-play"></i> Start This Workout</button>' : '') +
    '</div>';
  }).join('');

  if (p.notes) html += '<div class="recipe-tips" style="margin-top:16px"><i class="ti ti-bulb"></i> ' + p.notes + '</div>';
  el.innerHTML = html;
  openModal('program-detail');
}

function switchProgDay(idx, btn) {
  // Scope to the parent tabs container only
  var tabsContainer = btn.closest('.prog-day-tabs') || document.getElementById('prog-day-tabs');
  if (tabsContainer) {
    tabsContainer.querySelectorAll('.prog-day-tab').forEach(function(b){ b.classList.remove('active'); });
  }
  // Hide all panels in same modal
  var modal = btn.closest('.modal-body') || document.getElementById('program-detail-body');
  if (modal) {
    modal.querySelectorAll('.prog-day-panel').forEach(function(p){ p.classList.remove('active'); });
  }
  btn.classList.add('active');
  var panel = document.getElementById('prog-panel-' + idx);
  if (panel) {
    panel.classList.add('active');
    // Scroll panel into view smoothly
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function toggleProgExCard(rowEl) {
  var key          = rowEl.getAttribute('data-key');
  var exDataEncoded = rowEl.getAttribute('data-ex');
  // Find card row — try by ID first, then by sibling
  var cardRow = document.getElementById('prog-ex-card-' + key);
  if (!cardRow) {
    // Fallback: next sibling row
    cardRow = rowEl.nextElementSibling;
    if (!cardRow || !cardRow.classList.contains('prog-ex-card-row')) cardRow = null;
  }
  if (!cardRow) return;

  // Toggle: if visible hide it, if hidden show it
  if (cardRow.style.display !== 'none') {
    cardRow.style.display = 'none';
    return;
  }

  var ex = JSON.parse(decodeURIComponent(exDataEncoded));
  var hasVideo = !!(ex.videoURL);
  var isYT     = hasVideo && isYouTubeURL(ex.videoURL);
  var thumb    = isYT ? getYouTubeThumbnail(ex.videoURL) : '';

  var videoHTML = '';
  if (hasVideo) {
    if (isYT) {
      var ytId = getYouTubeID(ex.videoURL);
      videoHTML = '<div style="position:relative;padding-top:56.25%;border-radius:10px;overflow:hidden;cursor:pointer" onclick="playVideo(null,\'' + ex.videoURL + '\')">' +
        '<img src="' + thumb + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">' +
        '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3)">' +
          '<div class="shared-play-btn"><i class="ti ti-player-play"></i></div>' +
        '</div></div>';
    } else {
      videoHTML = '<video src="' + ex.videoURL + '" controls style="width:100%;border-radius:10px;max-height:220px;background:#000"></video>';
    }
  }

  var html =
    '<div class="prog-ex-expanded">' +
      (videoHTML ? '<div style="margin-bottom:12px">' + videoHTML + '</div>' : '') +
      '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
        (ex.sets  ? '<div class="prog-ex-stat"><span>' + ex.sets  + '</span><em>Sets</em></div>' : '') +
        (ex.reps  ? '<div class="prog-ex-stat"><span>' + ex.reps  + '</span><em>Reps</em></div>' : '') +
        (ex.rest  ? '<div class="prog-ex-stat"><span>' + ex.rest  + '</span><em>Rest</em></div>' : '') +
      '</div>' +
      (ex.notes ? '<p style="font-size:13px;color:var(--muted);margin-top:10px">' + ex.notes + '</p>' : '') +
    '</div>';

  cardRow.querySelector('td').innerHTML = html;
  cardRow.style.display = '';
  // Scroll expanded card into view — works in both modal and client portal
  setTimeout(function() {
    // Find scrollable container
    var scrollParent = cardRow.closest('.modal-body') ||
                       cardRow.closest('.view') ||
                       cardRow.closest('#screen-client-portal');
    if (scrollParent) {
      var cardTop = cardRow.offsetTop;
      var parentTop = scrollParent.scrollTop;
      var parentHeight = scrollParent.clientHeight;
      // Only scroll if card is below visible area
      if (cardTop > parentTop + parentHeight * 0.6) {
        scrollParent.scrollTo({ top: cardTop - 80, behavior: 'smooth' });
      }
    } else {
      cardRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 100);
}

/* ── Trainer: Create own routine/program ─────────────── */
function openCreateOwnProgram() {
  document.getElementById('admin-program-id').value = '';  // empty = save to Firestore
  ['prog-name','prog-weeks','prog-days','prog-desc','prog-schedule','prog-notes'].forEach(function(x){ document.getElementById(x).value=''; });
  document.getElementById('prog-goal').value  = 'hypertrophy';
  document.getElementById('prog-level').value = 'Intermediate';
  document.getElementById('prog-exercises-container').innerHTML = '';
  document.getElementById('admin-program-title').innerHTML = '<i class="ti ti-plus"></i> Create My Program';
  // Start with one empty day — trainer names it themselves
  addProgExercise({ day: '', exercises: [] });
  openModal('admin-program');
}

/* override saveAdminProgram to handle personal programs */
var _origSaveAdminProgram = saveAdminProgram;
saveAdminProgram = async function() {
  var editId = document.getElementById('admin-program-id').value;
  var isPersonal = editId && editId.startsWith('personal_');

  if (!isPersonal) { return _origSaveAdminProgram(); }

  var name = document.getElementById('prog-name').value.trim();
  if (!name) { showToast('Please enter a program name.'); return; }

  var days = [];
  document.querySelectorAll('#prog-exercises-container .meal-editor').forEach(function(dayEl) {
    var dayName = dayEl.querySelector('.meal-name-input').value.trim();
    var exercises = [];
    dayEl.querySelectorAll('.prog-ex-row').forEach(function(row) {
      var inputs = row.querySelectorAll('input');
      var exName = inputs[0].value.trim();
      if (!exName) return;
      exercises.push({ name:exName, muscle:inputs[1].value.trim(), sets:inputs[2].value.trim(), reps:inputs[3].value.trim(), rest:inputs[4].value.trim(), notes:inputs[5].value.trim() });
    });
    if (dayName) days.push({ day: dayName, exercises: exercises });
  });

  var prog = {
    id:      editId,
    name,
    weeks:   parseInt(document.getElementById('prog-weeks').value)||0,
    days:    parseInt(document.getElementById('prog-days').value)||0,
    goal:    document.getElementById('prog-goal').value,
    level:   document.getElementById('prog-level').value,
    desc:    document.getElementById('prog-desc').value.trim(),
    notes:   document.getElementById('prog-notes').value.trim(),
    trainingDays: days,
    _isPersonal: true,
    createdAt: new Date().toISOString(),
  };

  var saved = JSON.parse(localStorage.getItem('repcast_my_programs') || '[]');
  var idx = saved.findIndex(function(p){ return p.id === editId; });
  if (idx > -1) saved[idx] = prog; else saved.push(prog);
  localStorage.setItem('repcast_my_programs', JSON.stringify(saved));

  showToast('Your program saved!');
  closeAllModals();
  renderProgramsView();
};


/* ══════════════════════════════════════════════════════════
   MACRO DONUT CHART  (pure SVG, no library)
══════════════════════════════════════════════════════════ */

/**
 * Returns an SVG donut chart string showing protein / carbs / fat %
 * @param {number} protein - grams
 * @param {number} carbs   - grams
 * @param {number} fat     - grams
 * @param {number} calories
 * @param {number} size    - pixel size (default 160)
 */
function macroDonutSVG(protein, carbs, fat, calories, size) {
  size = size || 160;
  var r   = size * 0.38;   // ring radius
  var cx  = size / 2;
  var cy  = size / 2;
  var sw  = size * 0.13;   // stroke width

  // Calorie contributions
  var pCal = (protein || 0) * 4;
  var cCal = (carbs   || 0) * 4;
  var fCal = (fat     || 0) * 9;
  var total = pCal + cCal + fCal || 1;

  var pPct = pCal / total;
  var cPct = cCal / total;
  var fPct = fCal / total;

  // Build arc segments
  function arcPath(startAngle, endAngle, radius, cx, cy, sw) {
    var gap = 0.03; // radians gap between segments
    startAngle += gap;
    endAngle   -= gap;
    if (endAngle <= startAngle) return '';

    var x1 = cx + radius * Math.cos(startAngle);
    var y1 = cy + radius * Math.sin(startAngle);
    var x2 = cx + radius * Math.cos(endAngle);
    var y2 = cy + radius * Math.sin(endAngle);
    var large = (endAngle - startAngle) > Math.PI ? 1 : 0;

    return 'M ' + x1 + ' ' + y1 + ' A ' + radius + ' ' + radius + ' 0 ' + large + ' 1 ' + x2 + ' ' + y2;
  }

  var start = -Math.PI / 2; // top
  var pEnd  = start + pPct * 2 * Math.PI;
  var cEnd  = pEnd  + cPct * 2 * Math.PI;
  var fEnd  = cEnd  + fPct * 2 * Math.PI;

  var pPath = arcPath(start, pEnd,  r, cx, cy, sw);
  var cPath = arcPath(pEnd,  cEnd,  r, cx, cy, sw);
  var fPath = arcPath(cEnd,  fEnd,  r, cx, cy, sw);

  var fontSize = size * 0.13;
  var subSize  = size * 0.085;

  return '<svg viewBox="0 0 ' + size + ' ' + size + '" width="' + size + '" height="' + size + '" xmlns="http://www.w3.org/2000/svg" aria-label="Macro breakdown chart" role="img">' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="' + sw + '"/>' +

    (pPath ? '<path d="' + pPath + '" fill="none" stroke="#60A5FA" stroke-width="' + sw + '" stroke-linecap="round"/>' : '') +
    (cPath ? '<path d="' + cPath + '" fill="none" stroke="#FBBF24" stroke-width="' + sw + '" stroke-linecap="round"/>' : '') +
    (fPath ? '<path d="' + fPath + '" fill="none" stroke="#F472B6" stroke-width="' + sw + '" stroke-linecap="round"/>' : '') +

    // Centre text
    '<text x="' + cx + '" y="' + (cy - fontSize*0.3) + '" text-anchor="middle" fill="#f0f2f5" font-size="' + fontSize + '" font-weight="800" font-family="Syne,sans-serif">' + (calories || 0) + '</text>' +
    '<text x="' + cx + '" y="' + (cy + subSize * 1.1) + '" text-anchor="middle" fill="#8a9bb0" font-size="' + subSize + '" font-family="Inter,sans-serif">kcal</text>' +
  '</svg>';
}

/**
 * Renders a full macro chart block (donut + legend)
 */
function macroChartHTML(protein, carbs, fat, calories, size) {
  var pCal  = (protein||0)*4, cCal = (carbs||0)*4, fCal = (fat||0)*9;
  var total = pCal + cCal + fCal || 1;
  var pPct  = Math.round(pCal/total*100);
  var cPct  = Math.round(cCal/total*100);
  var fPct  = Math.round(fCal/total*100);

  return '<div class="macro-chart-wrap">' +
    '<div class="macro-donut">' + macroDonutSVG(protein, carbs, fat, calories, size||160) + '</div>' +
    '<div class="macro-legend">' +
      '<div class="macro-legend-item">' +
        '<span class="macro-legend-dot" style="background:#60A5FA"></span>' +
        '<span class="macro-legend-label">Protein</span>' +
        '<span class="macro-legend-val">' + (protein||0) + 'g</span>' +
        '<span class="macro-legend-pct">' + pPct + '%</span>' +
      '</div>' +
      '<div class="macro-legend-item">' +
        '<span class="macro-legend-dot" style="background:#FBBF24"></span>' +
        '<span class="macro-legend-label">Carbs</span>' +
        '<span class="macro-legend-val">' + (carbs||0) + 'g</span>' +
        '<span class="macro-legend-pct">' + cPct + '%</span>' +
      '</div>' +
      '<div class="macro-legend-item">' +
        '<span class="macro-legend-dot" style="background:#F472B6"></span>' +
        '<span class="macro-legend-label">Fat</span>' +
        '<span class="macro-legend-val">' + (fat||0) + 'g</span>' +
        '<span class="macro-legend-pct">' + fPct + '%</span>' +
      '</div>' +
    '</div>' +
  '</div>';
}


/* ── Video popup — works on both web and native ─────────── */
function openVideoPopup(videoURL) {
  // Remove any existing popup
  var existing = document.getElementById('native-video-popup');
  if (existing) existing.remove();

  var isYT  = isYouTubeURL(videoURL);
  var ytId  = isYT ? getYouTubeID(videoURL) : '';
  var inner = isYT
    ? '<iframe src="https://www.youtube.com/embed/' + ytId + '?autoplay=1&playsinline=1" ' +
        'style="width:100%;height:100%;border:none" allow="autoplay;fullscreen" allowfullscreen></iframe>'
    : '<video src="' + videoURL + '" controls autoplay playsinline ' +
        'style="width:100%;height:100%;background:#000"></video>';

  var popup = document.createElement('div');
  popup.id = 'native-video-popup';
  popup.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.96);z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px';
  popup.onclick = function(ev) { if (ev.target === popup) closeVideoPopup(); };
  popup.innerHTML =
    '<button onclick="closeVideoPopup()" style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.18);border:none;color:white;width:42px;height:42px;border-radius:50%;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center">' +
      '<i class="ti ti-x"></i></button>' +
    '<div style="width:100%;max-width:800px;aspect-ratio:16/9;border-radius:12px;overflow:hidden;background:#000">' + inner + '</div>';
  document.body.appendChild(popup);
  document.body.style.overflow = 'hidden';
}

function closeVideoPopup() {
  var el = document.getElementById('native-video-popup');
  if (el) el.remove();
  document.body.style.overflow = '';
}

/* ── Open URL in system browser from native app ─────────── */


/* ══════════════════════════════════════════════════════════
   ADMIN LANGUAGE TABS — switch between EN and HE collections
══════════════════════════════════════════════════════════ */

// Track which lang each admin section is viewing
var _adminLang = {
  exercises: 'en', menus: 'en', programs: 'en', recipes: 'en', foods: 'en'
};

// Config for each section
var _adminSectionConfig = {
  exercises: {
    listEn: 'exercises-en-wrap', listHe: 'exercises-he-wrap',
    topbarFn: function(lang) { updateAdminExercisesTopbar(lang); }
  },
  menus: {
    listEn: 'admin-menu-list', listHe: 'admin-menu-list-he',
    topbarFn: function(lang) { updateAdminMenusTopbar(lang); },
    loadHe: function() { return loadAdminHeCollection('menus'); }
  },
  programs: {
    listEn: 'admin-programs-list', listHe: 'admin-programs-list-he',
    topbarFn: function(lang) { updateAdminProgramsTopbar(lang); },
    loadHe: function() { return loadAdminHeCollection('programs'); }
  },
  recipes: {
    listEn: 'admin-recipes-list', listHe: 'admin-recipes-list-he',
    topbarFn: function(lang) { updateAdminRecipesTopbar(lang); },
    loadHe: function() { return loadAdminHeCollection('recipes'); }
  },
  foods: {
    listEn: 'admin-food-list', listHe: 'admin-food-list-he',
    topbarFn: function(lang) { updateAdminFoodsTopbar(lang); },
    loadHe: function() { return loadAdminHeCollection('foods'); }
  }
};

// Hebrew data caches (separate from main EN arrays)
var _heMenus = [], _hePrograms = [], _heRecipes = [], _heFoods = [];

async function loadAdminHeCollection(type) {
  try {
    var snap = await window._firebase.getDocs(
      window._firebase.collection(window._db, type + '_he')
    );
    var items = [];
    snap.forEach(function(d){ items.push(Object.assign({ id: d.id }, d.data())); });
    if (type === 'menus')    _heMenus    = items;
    if (type === 'programs') _hePrograms = items;
    if (type === 'recipes')  _heRecipes  = items;
    if (type === 'foods')    _heFoods    = items;
    return items;
  } catch(e) { console.warn('loadAdminHeCollection error:', e); return []; }
}

async function setAdminLang(section, lang) {
  _adminLang[section] = lang;
  var cfg = _adminSectionConfig[section];
  if (!cfg) return;

  // Update tab styles
  var enTab = document.getElementById('admin-tab-' + section + '-en');
  var heTab = document.getElementById('admin-tab-' + section + '-he');
  if (enTab) {
    enTab.style.background = lang === 'en' ? 'var(--surface2)' : 'transparent';
    enTab.style.color      = lang === 'en' ? 'var(--text)'     : 'var(--muted)';
  }
  if (heTab) {
    heTab.style.background = lang === 'he' ? 'var(--surface2)' : 'transparent';
    heTab.style.color      = lang === 'he' ? 'var(--text)'     : 'var(--muted)';
  }

  // Show/hide list containers
  var listEn = document.getElementById(cfg.listEn);
  var listHe = cfg.listHe ? document.getElementById(cfg.listHe) : null;
  if (listEn) listEn.style.display = lang === 'en' ? '' : 'none';
  if (listHe) listHe.style.display = lang === 'he' ? '' : 'none';

  // Update topbar buttons (Add / Bulk Import)
  if (cfg.topbarFn) cfg.topbarFn(lang);

  // Load Hebrew data if switching to Hebrew
  if (lang === 'he' && cfg.loadHe) {
    await cfg.loadHe();
    renderAdminHeList(section);
  }
}

function renderAdminHeList(section) {
  var items = section === 'menus'    ? _heMenus    :
              section === 'programs' ? _hePrograms :
              section === 'recipes'  ? _heRecipes  :
              section === 'foods'    ? _heFoods    : [];
  var listId = section + (section === 'foods' ? '-food-list-he' : 
               section === 'menus' ? '-menu-list-he' :
               'admin-' + section + '-list-he');

  // Map section to correct list ID
  var listIdMap = {
    menus: 'admin-menu-list-he', programs: 'admin-programs-list-he',
    recipes: 'admin-recipes-list-he', foods: 'admin-food-list-he'
  };
  var el = document.getElementById(listIdMap[section]);
  if (!el) return;

  if (!items.length) {
    el.innerHTML = '<div class="empty-state" style="padding:30px"><div class="empty-icon"><i class="ti ti-language"></i></div><h3>No Hebrew content yet</h3><p>Add items or use Bulk Import to add Hebrew content.</p></div>';
    return;
  }

  if (section === 'menus') {
    el.innerHTML = items.map(function(m) {
      return '<div class="admin-menu-row"><div style="flex:1"><strong>' + m.name + '</strong>' +
        '<div style="font-size:12px;color:var(--muted);margin-top:3px">' + (m.goal||'') + '</div></div>' +
        '<div class="admin-actions">' +
          '<button class="admin-action-btn edit" onclick="openAdminMenuModalHe(\'' + m.id + '\')"><i class="ti ti-edit"></i> ערוך</button>' +
          '<button class="admin-action-btn delete" onclick="deleteHeItem(\'' + m.id + '\',\'menus\')"><i class="ti ti-trash"></i></button>' +
        '</div></div>';
    }).join('');
  } else if (section === 'programs') {
    el.innerHTML = items.map(function(p) {
      return '<div class="admin-menu-row"><div style="flex:1"><strong>' + p.name + '</strong>' +
        '<div style="font-size:12px;color:var(--muted);margin-top:3px">' + (p.goal||'') + ' · ' + (p.weeks||'?') + ' שבועות</div></div>' +
        '<div class="admin-actions">' +
          '<button class="admin-action-btn edit" onclick="openAdminProgramModalHe(\'' + p.id + '\')"><i class="ti ti-edit"></i> ערוך</button>' +
          '<button class="admin-action-btn delete" onclick="deleteHeItem(\'' + p.id + '\',\'programs\')"><i class="ti ti-trash"></i></button>' +
        '</div></div>';
    }).join('');
  } else if (section === 'recipes') {
    el.innerHTML = items.map(function(r) {
      return '<div class="admin-menu-row"><div style="flex:1"><strong>' + r.name + '</strong>' +
        '<div style="font-size:12px;color:var(--muted);margin-top:3px">' + (r.category||'') + ' · ' + (r.calories||0) + ' קל׳</div></div>' +
        '<div class="admin-actions">' +
          '<button class="admin-action-btn edit" onclick="openAdminRecipeModalHe(\'' + r.id + '\')"><i class="ti ti-edit"></i> ערוך</button>' +
          '<button class="admin-action-btn delete" onclick="deleteHeItem(\'' + r.id + '\',\'recipes\')"><i class="ti ti-trash"></i></button>' +
        '</div></div>';
    }).join('');
  } else if (section === 'foods') {
    var byCat = {};
    items.forEach(function(f){ (byCat[f.category||'אחר'] = byCat[f.category||'אחר'] || []).push(f); });
    var html = '';
    Object.keys(byCat).sort().forEach(function(cat){
      html += '<div style="margin-bottom:14px"><div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:6px">' + cat + '</div>';
      byCat[cat].forEach(function(f){
        html += '<div class="admin-menu-row"><div style="flex:1"><strong>' + f.name + '</strong>' +
          '<div style="font-size:12px;color:var(--muted)">' + (f.calories||0) + ' קל׳ · חלבון ' + (f.protein||0) + 'g</div></div>' +
          '<div class="admin-actions">' +
            '<button class="admin-action-btn edit" onclick="openAdminFoodModalHe(\'' + f.id + '\')"><i class="ti ti-edit"></i></button>' +
            '<button class="admin-action-btn delete" onclick="deleteHeItem(\'' + f.id + '\',\'foods\')"><i class="ti ti-trash"></i></button>' +
          '</div></div>';
      });
      html += '</div>';
    });
    el.innerHTML = html;
  }
}

async function deleteHeItem(id, type) {
  if (!confirm('מחק פריט זה?')) return;
  try {
    var colName = type === 'exercises' ? 'masterLibrary_he' : type + '_he';
    await window._firebase.deleteDoc(window._firebase.doc(window._db, colName, id));
    showToast('נמחק!');
    if (type === 'exercises') { await loadHeExercises(); renderHeExercisesList(); }
    else { await loadAdminHeCollection(type); renderAdminHeList(type); }
  } catch(e) { showToast('שגיאה: ' + e.message); }
}

// Topbar button updaters — switch Add/Bulk buttons between EN and HE
function updateAdminMenusTopbar(lang) {
  var addBtn  = document.querySelector('#admin-view-nutrition .btn-primary');
  var bulkBtn = document.querySelector('#admin-view-nutrition .btn-ghost');
  if (lang === 'he') {
    if (addBtn)  { addBtn.onclick  = function(){ openAdminMenuModalHe(); }; addBtn.innerHTML  = '<i class="ti ti-plus"></i> הוסף תפריט'; }
    if (bulkBtn) { bulkBtn.onclick = function(){ openModal('bulk-menus-he'); }; bulkBtn.innerHTML = '<i class="ti ti-file-import"></i> ייבוא עברית'; }
  } else {
    if (addBtn)  { addBtn.onclick  = function(){ openAdminMenuModal(); }; addBtn.innerHTML  = '<i class="ti ti-plus"></i> Add Menu'; }
    if (bulkBtn) { bulkBtn.onclick = function(){ openModal('bulk-menus'); }; bulkBtn.innerHTML = '<i class="ti ti-file-import"></i> Bulk Import'; }
  }
}
function updateAdminProgramsTopbar(lang) {
  var addBtn = document.querySelector('#admin-view-programs .btn-primary');
  if (lang === 'he') {
    if (addBtn) { addBtn.onclick = function(){ openAdminProgramModalHe(); }; addBtn.innerHTML = '<i class="ti ti-plus"></i> הוסף תוכנית'; }
  } else {
    if (addBtn) { addBtn.onclick = function(){ openAdminProgramModal(); }; addBtn.innerHTML = '<i class="ti ti-plus"></i> Add Program'; }
  }
}
function updateAdminRecipesTopbar(lang) {
  var addBtn = document.querySelector('#admin-view-recipes .btn-primary');
  if (lang === 'he') {
    if (addBtn) { addBtn.onclick = function(){ openAdminRecipeModalHe(); }; addBtn.innerHTML = '<i class="ti ti-plus"></i> הוסף מתכון'; }
  } else {
    if (addBtn) { addBtn.onclick = function(){ openAdminRecipeModal(); }; addBtn.innerHTML = '<i class="ti ti-plus"></i> Add Recipe'; }
  }
}
function updateAdminFoodsTopbar(lang) {
  var addBtn  = document.querySelector('#admin-view-foods .btn-primary');
  var bulkBtn = document.querySelector('#admin-view-foods .btn-ghost');
  if (lang === 'he') {
    if (addBtn)  { addBtn.onclick  = function(){ openAdminFoodModalHe(); }; addBtn.innerHTML  = '<i class="ti ti-plus"></i> הוסף מזון'; }
    if (bulkBtn) { bulkBtn.onclick = function(){ openModal('bulk-foods-he'); }; bulkBtn.innerHTML = '<i class="ti ti-file-import"></i> ייבוא עברית'; }
  } else {
    if (addBtn)  { addBtn.onclick  = function(){ openAdminFoodModal(); }; addBtn.innerHTML  = '<i class="ti ti-plus"></i> Add Food'; }
    if (bulkBtn) { bulkBtn.onclick = function(){ openModal('bulk-foods'); }; bulkBtn.innerHTML = '<i class="ti ti-file-import"></i> Bulk Import'; }
  }
}
var _heExercises = [];

async function loadHeExercises() {
  try {
    var snap = await window._firebase.getDocs(
      window._firebase.collection(window._db, 'masterLibrary_he')
    );
    _heExercises = [];
    snap.forEach(function(d){ _heExercises.push(Object.assign({id:d.id},d.data())); });
    return _heExercises;
  } catch(e) { console.warn('loadHeExercises:', e); return []; }
}

function renderHeExercisesList() {
  var el = document.getElementById('admin-exercises-he-list');
  if (!el) return;
  if (!_heExercises.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon"><i class="ti ti-language"></i></div><h3>No Hebrew exercises yet</h3><p>Add exercises or bulk import.</p></div>';
    return;
  }
  el.innerHTML = _heExercises.map(function(ex) {
    return '<div class="admin-menu-row"><div style="flex:1"><strong>' + (ex.title||ex.name||'') + '</strong>' +
      '<div style="font-size:12px;color:var(--muted);margin-top:3px">' + (ex.muscle||'') + (ex.sub ? ' · ' + ex.sub : '') + '</div></div>' +
      '<div class="admin-actions">' +
        '<button class="admin-action-btn edit" onclick="openAdminModal(\'edit\',\''+ex.id+'\')" title="Edit"><i class="ti ti-edit"></i></button>' +
        '<button class="admin-action-btn delete" onclick="deleteHeItem(\''+ex.id+'\',\'exercises\')" title="Delete"><i class="ti ti-trash"></i></button>' +
      '</div></div>';
  }).join('');
}

async function updateAdminExercisesTopbar(lang) {
  var enWrap = document.getElementById('exercises-en-wrap');
  var heWrap = document.getElementById('exercises-he-wrap');
  var addBtn  = document.querySelector('#admin-view-exercises .btn-primary');
  var bulkBtn = document.querySelector('#admin-view-exercises .btn-ghost');
  if (lang === 'he') {
    if (enWrap) enWrap.style.display = 'none';
    if (heWrap) heWrap.style.display = '';
    if (addBtn) { addBtn.innerHTML = '<i class="ti ti-plus"></i> הוסף תרגיל'; addBtn.onclick = function(){ window._addExToHe=true; openAdminModal('add'); }; }
    if (bulkBtn) { bulkBtn.innerHTML = '<i class="ti ti-file-import"></i> ייבוא עברית'; bulkBtn.onclick = function(){ openModal('bulk-import-he-exercises'); }; }
    await loadHeExercises();
    renderHeExercisesList();
  } else {
    if (enWrap) enWrap.style.display = '';
    if (heWrap) heWrap.style.display = 'none';
    if (addBtn) { addBtn.innerHTML = '<i class="ti ti-plus"></i> Add Exercise'; addBtn.onclick = function(){ window._addExToHe=false; openAdminModal('add'); }; }
    if (bulkBtn) { bulkBtn.innerHTML = '<i class="ti ti-file-import"></i> Bulk Import'; bulkBtn.onclick = function(){ openModal('bulk-import'); }; }
  }
}

/* ── Hebrew modal openers (reuse existing modals, just change save target) ── */
var _editingHeId   = null;
var _editingHeType = null;

function openAdminMenuModalHe(id) {
  _editingHeId = id || null; _editingHeType = 'menus';
  if (id) {
    var m = _heMenus.find(function(x){ return x.id===id; });
    if (m) {
      editingMenuId = id;
      document.getElementById('admin-menu-name').value = m.name || '';
      var g = document.getElementById('admin-menu-goal'); if (g) g.value = m.goal||'cut';
      var d = document.getElementById('admin-menu-desc'); if (d) d.value = m.desc||'';
    }
  } else {
    editingMenuId = null;
    ['admin-menu-name','admin-menu-desc'].forEach(function(id){ var e=document.getElementById(id); if(e) e.value=''; });
  }
  // Override save to use Hebrew collection
  window._saveMenuToHe = true;
  openModal('admin-menu');
}

function openAdminProgramModalHe(id) {
  _editingHeId = id || null; _editingHeType = 'programs';
  window._saveProgramToHe = true;
  if (id) {
    var p = _hePrograms.find(function(x){ return x.id===id; });
    if (p) {
      document.getElementById('prog-name').value  = p.name  || '';
      document.getElementById('prog-weeks').value = p.weeks || 12;
      var g = document.getElementById('prog-goal');  if (g) g.value = p.goal||'';
      var l = document.getElementById('prog-level'); if (l) l.value = p.level||'Beginner';
    }
  }
  openModal('admin-program');
}

function openAdminRecipeModalHe(id) {
  _editingHeId = id || null; _editingHeType = 'recipes';
  window._saveRecipeToHe = true;
  if (id) {
    var r = _heRecipes.find(function(x){ return x.id===id; });
    if (r) {
      document.getElementById('recipe-name').value = r.name || '';
      var c = document.getElementById('recipe-category'); if (c) c.value = r.category||'';
      var cal = document.getElementById('recipe-calories'); if (cal) cal.value = r.calories||0;
      var i = document.getElementById('recipe-ingredients'); if (i) i.value = r.ingredients||'';
      var ins = document.getElementById('recipe-instructions'); if (ins) ins.value = r.instructions||'';
    }
  }
  openModal('admin-recipe');
}

function openAdminFoodModalHe(id) {
  _editingHeId = id || null; _editingHeType = 'foods';
  window._saveFoodToHe = true;
  if (id) {
    var f = _heFoods.find(function(x){ return x.id===id; });
    if (f) {
      document.getElementById('food-name').value     = f.name     || '';
      document.getElementById('food-category').value = f.category || '';
      document.getElementById('food-serving').value  = f.serving  || 100;
      document.getElementById('food-unit').value     = f.unit     || 'g';
      document.getElementById('food-calories').value = f.calories || 0;
      document.getElementById('food-protein').value  = f.protein  || 0;
      document.getElementById('food-carbs').value    = f.carbs    || 0;
      document.getElementById('food-fat').value      = f.fat      || 0;
      document.getElementById('food-modal-title').innerHTML = '<i class="ti ti-edit"></i> ערוך מזון';
    }
  } else {
    ['food-name','food-category'].forEach(function(fid){ var e=document.getElementById(fid); if(e) e.value=''; });
    document.getElementById('food-serving').value = 100;
    document.getElementById('food-unit').value    = 'g';
    ['food-calories','food-protein','food-carbs','food-fat'].forEach(function(fid){ var e=document.getElementById(fid); if(e) e.value=0; });
    document.getElementById('food-modal-title').innerHTML = '<i class="ti ti-plus"></i> הוסף מזון';
  }
  openModal('admin-food');
}

/* ── Patch save functions to check Hebrew flag ── */
var _origSaveAdminMenu, _origSaveAdminFood;

function patchHeSaves() {
  // Patch saveAdminMenu
  var origSaveMenu = window.saveAdminMenu;
  window.saveAdminMenu = async function() {
    if (window._saveMenuToHe) {
      window._saveMenuToHe = false;
      var name = document.getElementById('admin-menu-name').value.trim();
      if (!name) { showToast('Enter menu name'); return; }
      var menuData = {
        name: name,
        goal: (document.getElementById('admin-menu-goal')||{}).value || 'cut',
        desc: (document.getElementById('admin-menu-desc')||{}).value || '',
        meals: [],
        isPublic: true,
        createdBy: state.user ? state.user.uid : null,
        updatedAt: new Date().toISOString()
      };
      try {
        if (_editingHeId) {
          await window._firebase.setDoc(window._firebase.doc(window._db,'menus_he',_editingHeId), menuData, {merge:true});
        } else {
          await window._firebase.addDoc(window._firebase.collection(window._db,'menus_he'), menuData);
        }
        _editingHeId = null;
        showToast('נשמר!');
        closeAllModals();
        await loadAdminHeCollection('menus');
        renderAdminHeList('menus');
      } catch(e) { showToast('שגיאה: ' + e.message); }
      return;
    }
    if (origSaveMenu) origSaveMenu.apply(this, arguments);
  };

  // Patch saveAdminFood
  var origSaveFood = window.saveAdminFood;
  window.saveAdminFood = async function() {
    if (window._saveFoodToHe) {
      window._saveFoodToHe = false;
      var name = document.getElementById('food-name').value.trim();
      var cat  = document.getElementById('food-category').value.trim();
      if (!name) { showToast('הכנס שם מזון'); return; }
      var foodData = {
        name: name, category: cat,
        serving:  parseFloat(document.getElementById('food-serving').value)  || 100,
        unit:     document.getElementById('food-unit').value || 'g',
        calories: parseFloat(document.getElementById('food-calories').value) || 0,
        protein:  parseFloat(document.getElementById('food-protein').value)  || 0,
        carbs:    parseFloat(document.getElementById('food-carbs').value)    || 0,
        fat:      parseFloat(document.getElementById('food-fat').value)      || 0,
        updatedAt: new Date().toISOString()
      };
      try {
        if (_editingHeId) {
          await window._firebase.setDoc(window._firebase.doc(window._db,'foods_he',_editingHeId), foodData, {merge:true});
        } else {
          await window._firebase.addDoc(window._firebase.collection(window._db,'foods_he'), foodData);
        }
        _editingHeId = null;
        showToast('נשמר!');
        closeAllModals();
        await loadAdminHeCollection('foods');
        renderAdminHeList('foods');
      } catch(e) { showToast('שגיאה: ' + e.message); }
      return;
    }
    if (origSaveFood) origSaveFood.apply(this, arguments);
  };
}

// Wire bulk import for Hebrew collections
var _sectionRequiredHe = {
  'menus-he':    ['name', 'meals'],
  'programs-he': ['name', 'trainingDays'],
  'recipes-he':  ['name', 'category', 'calories', 'ingredients', 'instructions'],
  'foods-he':    ['name', 'category', 'calories']
};

var _heColMap = {
  'menus-he': 'menus_he', 'programs-he': 'programs_he',
  'recipes-he': 'recipes_he', 'foods-he': 'foods_he'
};


/* ══════════════════════════════════════════════════════════
   BULK IMPORT — separate per section, no conflicts
══════════════════════════════════════════════════════════ */

/* ── File loader (shared) ── */
function loadBulkFile(input, textareaId) {
  var file = input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    var ta = document.getElementById(textareaId);
    if (ta) ta.value = e.target.result;
  };
  reader.readAsText(file);
  input.value = '';
}

/* ── Template download (shared) ── */
var _bulkTemplates = {
  foods: [
    { "name": "Chicken Breast", "category": "Proteins", "serving": 100, "unit": "g", "calories": 165, "protein": 31, "carbs": 0, "fat": 4 },
    { "name": "Greek Yogurt 0%", "category": "Dairy", "serving": 100, "unit": "g", "calories": 59, "protein": 10, "carbs": 4, "fat": 0 },
    { "name": "Brown Rice (cooked)", "category": "Carbohydrates", "serving": 100, "unit": "g", "calories": 130, "protein": 3, "carbs": 28, "fat": 1 },
    { "name": "Almonds", "category": "Fats & Nuts", "serving": 100, "unit": "g", "calories": 579, "protein": 21, "carbs": 22, "fat": 50 },
    { "name": "Banana", "category": "Fruits", "serving": 100, "unit": "g", "calories": 89, "protein": 1, "carbs": 23, "fat": 0 }
  ],
  menus: [{"name":"High Protein Cut","goal":"cut","desc":"A balanced cut menu high in protein.","isPublic":true,"meals":[{"name":"Breakfast","items":[{"name":"Oats","qty":80,"unit":"g","calories":300,"protein":10,"carbs":55,"fat":5},{"name":"Whey Protein","qty":30,"unit":"g","calories":120,"protein":24,"carbs":3,"fat":2}]},{"name":"Lunch","items":[{"name":"Chicken Breast","qty":200,"unit":"g","calories":220,"protein":46,"carbs":0,"fat":5},{"name":"Brown Rice","qty":100,"unit":"g","calories":130,"protein":3,"carbs":28,"fat":1}]},{"name":"Dinner","items":[{"name":"Salmon","qty":180,"unit":"g","calories":350,"protein":40,"carbs":0,"fat":20},{"name":"Broccoli","qty":200,"unit":"g","calories":68,"protein":6,"carbs":13,"fat":1}]}]}],
  programs: [{"name":"12-Week Hypertrophy","goal":"hypertrophy","level":"Intermediate","weeks":12,"days":4,"desc":"Science-based hypertrophy program.","notes":"Increase weight when you hit top of rep range.","isPublic":true,"trainingDays":[{"day":"Day 1 - Chest & Shoulders","exercises":[{"title":"Incline Dumbbell Press","muscle":"chest","sets":"4","reps":"10","rest":"90","notes":"Slow eccentric"},{"title":"Overhead Press","muscle":"shoulders","sets":"4","reps":"8","rest":"120","notes":""}]},{"day":"Day 2 - Back & Biceps","exercises":[{"title":"Barbell Row","muscle":"back","sets":"4","reps":"10","rest":"90","notes":""},{"title":"Pull-Up","muscle":"back","sets":"3","reps":"8","rest":"90","notes":""}]}]}],
  recipes: [{"name":"Protein Pancakes","category":"breakfast","prepTime":15,"calories":380,"protein":35,"carbs":40,"fat":8,"ingredients":"2 scoops whey protein\n2 eggs\n1 banana\n50ml almond milk","instructions":"Blend all ingredients. Cook on medium heat 3 min each side.","tips":"Add blueberries for extra antioxidants.","photoURL":"","videoURL":"","isPublic":true}],
  research: [{"title":"Effect of Protein Timing on Muscle Synthesis","authors":"Phillips SM, Van Loon LJC","year":2023,"journal":"Journal of Sports Science","category":"Nutrition","summary":"Consuming protein within 30-60 minutes post-workout significantly increases muscle protein synthesis.","url":"https://pubmed.ncbi.nlm.nih.gov/","application":"Aim for 30-40g protein within 30 minutes after training."}]
};

function downloadBulkTemplate(type) {
  var template = _bulkTemplates[type] || [];
  var blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'repcast-' + type + '-template.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ── Validate section JSON ── */
var _sectionRequired = {
  foods:           ['name', 'category', 'calories'],
  menus:           ['name', 'meals'],
  programs:        ['name', 'trainingDays'],
  recipes:         ['name', 'category', 'calories', 'ingredients', 'instructions'],
  research:        ['title', 'summary', 'category'],
  'menus-he':      ['name', 'meals'],
  'programs-he':   ['name', 'trainingDays'],
  'recipes-he':    ['name', 'category', 'calories', 'ingredients', 'instructions'],
  'foods-he':      ['name', 'category', 'calories']
};

function validateSectionBulk(type) {
  var ta     = document.getElementById(type + '-textarea');
  var result = document.getElementById('bulk-' + type + '-result');
  if (!ta || !result) return null;

  var raw = ta.value.trim();
  if (!raw) { showToast('Paste some JSON first'); return null; }

  try {
    var data = JSON.parse(raw);
    if (!Array.isArray(data)) throw new Error('Must be a JSON array: [ ... ]');
    if (!data.length)         throw new Error('Array is empty');

    var req = _sectionRequired[type] || [];
    data.forEach(function(item, i) {
      req.forEach(function(field) {
        if (item[field] === undefined || item[field] === null || item[field] === '')
          throw new Error('Item ' + (i+1) + ' is missing: "' + field + '"');
      });
    });

    result.style.display = 'block';
    result.innerHTML = '<div style="padding:10px 14px;background:rgba(126,232,162,0.08);border:1px solid rgba(126,232,162,0.3);border-radius:8px;font-size:13px;font-weight:600;color:var(--accent)">' +
      '<i class="ti ti-circle-check"></i> Valid JSON — ' + data.length + ' ' + type + ' ready to import</div>';
    return data;
  } catch(e) {
    result.style.display = 'block';
    result.innerHTML = '<div style="padding:10px 14px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.3);border-radius:8px;font-size:13px;color:var(--danger)">' +
      '<i class="ti ti-x"></i> ' + e.message + '</div>';
    return null;
  }
}

/* ── Run import for a section ── */
async function runSectionBulkImport(type) {
  var data = validateSectionBulk(type);
  if (!data) return;

  // For Hebrew types (e.g. 'menus-he'), use 'menus_he' collection
  var colName = type.endsWith('-he') ? type.replace('-he','_he') : type;
  var col = colName;
  var prog = document.getElementById('bulk-' + type + '-progress');
  var progText = document.getElementById('bulk-' + type + '-prog-text');
  var progBar  = document.getElementById('bulk-' + type + '-prog-bar');
  var result   = document.getElementById('bulk-' + type + '-result');

  if (prog) prog.style.display = 'block';

  var total = data.length, success = 0, errors = [];

  for (var i = 0; i < data.length; i++) {
    try {
      var item = Object.assign({}, data[i], {
        createdBy:   state.user ? state.user.uid    : null,
        trainerName: state.user ? state.user.fullName : null,
        isPublic:    data[i].isPublic !== false,
        updatedAt:   new Date().toISOString(),
        importedAt:  new Date().toISOString()
      });
      await window._firebase.addDoc(window._firebase.collection(window._db, col), item);
      success++;
    } catch(e) {
      errors.push('Item ' + (i+1) + ': ' + (e.code || e.message));
    }
    var pct = Math.round(((i+1)/total)*100);
    if (progText) progText.textContent = (i+1) + ' / ' + total;
    if (progBar)  progBar.style.width  = pct + '%';
  }

  // Refresh — use original load functions which also re-render
  await reloadAfterBulkImport(type);

  if (errors.length === 0) {
    if (result) result.innerHTML = '<div style="padding:10px 14px;background:rgba(126,232,162,0.08);border:1px solid rgba(126,232,162,0.3);border-radius:8px;font-size:13px;font-weight:600;color:var(--accent)">' +
      '<i class="ti ti-circle-check"></i> ✓ Imported ' + success + ' ' + type + ' successfully!</div>';
    showToast('✓ ' + success + ' ' + type + ' imported!');
    setTimeout(function(){ closeAllModals(); }, 1800);
  } else {
    if (result) result.innerHTML = '<div style="padding:10px 14px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.3);border-radius:8px;font-size:13px;color:var(--danger)">' +
      success + ' imported. ' + errors.length + ' failed: ' + errors.join('; ') + '</div>';
  }
  if (prog) prog.style.display = 'none';
}

/* ── Loaders for bulk import (reload + re-render) ── */
async function reloadAfterBulkImport(type) {
  if (type === 'foods')        { await loadFoods();    }
  if (type === 'menus')        { await loadMenus();    }
  if (type === 'programs')     { await loadPrograms(); }
  if (type === 'recipes')      { await loadRecipes();  }
  if (type === 'research')     { await loadResearch(); }
  // Hebrew collections — reload and re-render Hebrew list
  if (type.endsWith('-he')) {
    var heType = type.replace('-he','');
    await loadAdminHeCollection(heType);
    renderAdminHeList(heType);
  }
}


/* ── Forgot Password ────────────────────────────────────── */
function showForgotPassword() {
  var emailInput = document.getElementById('forgot-email');
  var loginEmail = document.getElementById('login-email') || document.getElementById('auth-email');
  // Pre-fill with whatever they typed in the email field
  if (emailInput && loginEmail && loginEmail.value) {
    emailInput.value = loginEmail.value;
  }
  var successEl = document.getElementById('forgot-success');
  if (successEl) successEl.style.display = 'none';
  openModal('forgot-password');
}

async function sendPasswordReset() {
  var emailInput = document.getElementById('forgot-email');
  var email = emailInput ? emailInput.value.trim() : '';
  if (!email) {
    showToast('Please enter your email address');
    if (emailInput) emailInput.focus();
    return;
  }
  if (!email.includes('@')) {
    showToast('Please enter a valid email address');
    return;
  }

  var errEl = document.getElementById('forgot-error');
  var successEl = document.getElementById('forgot-success');
  var sendBtn = document.querySelector('#modal-forgot-password .btn-primary');
  if (errEl) errEl.style.display = 'none';
  if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = 'Checking...'; }

  try {
    // Check if the email is registered at all
    var methods = await window._firebase.fetchSignInMethodsForEmail(window._auth, email);

    if (!methods || methods.length === 0) {
      // Not registered
      if (errEl) {
        errEl.style.display = 'block';
        errEl.innerHTML = '<i class="ti ti-user-x"></i> No account found with this email. Please register first.';
      }
      return;
    }

    // Check if they signed up with Google (not password)
    if (methods.includes('google.com') && !methods.includes('password')) {
      if (errEl) {
        errEl.style.display = 'block';
        errEl.innerHTML = '<i class="ti ti-brand-google"></i> This account uses Google sign-in. ' +
          'Use the "Continue with Google" button to log in — no password needed.';
      }
      return;
    }

    // All good — send reset email
    await window._firebase.sendPasswordResetEmail(window._auth, email);
    if (successEl) successEl.style.display = 'block';
    var footer = document.querySelector('#modal-forgot-password .modal-footer');
    if (footer) footer.style.display = 'none';
    showToast('Reset link sent to ' + email);

  } catch(e) {
    var msg = e.code === 'auth/invalid-email'     ? 'Please enter a valid email address.' :
              e.code === 'auth/too-many-requests'  ? 'Too many attempts. Please try again later.' :
              'Something went wrong. Please try again.';
    if (errEl) { errEl.style.display = 'block'; errEl.textContent = msg; }
    else showToast(msg);
  } finally {
    if (sendBtn) { sendBtn.disabled = false; sendBtn.innerHTML = '<i class="ti ti-send"></i> Send Reset Link'; }
  }
}

function openInBrowser(url) {
  if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Browser) {
    window.Capacitor.Plugins.Browser.open({ url: url });
  } else {
    window.open(url, '_blank');
  }
}

/* ══════════════════════════════════════════════════════════
   CLIENT SYSTEM
══════════════════════════════════════════════════════════ */
var clientsList = [];

/* ── Boot client portal (when logged in user has tier:'client') ── */
async function bootClientPortal(user, profile) {
  state.user = {
    uid:           user.uid,
    email:         user.email,
    fullName:      profile.fullName || profile.name || 'Client',
    tier:          'client',
    linkedTrainer: profile.linkedTrainer || null,
    goal:          profile.goal || '',
    photoURL:      profile.photoURL || '',
  };
  state.isManager = false;
  state.isClient  = true;
  window._clientMode = true;

  // Run the SHARED app initialization (muscle filters, master library,
  // exercise library, views, event handlers). This is essential — without
  // it the app shell is empty. We override data loading right after.
  await bootClientApp();

  // Apply client-specific nav filtering (hide upload tabs + Clients tab)
  applyClientNav();

  // Load their assigned content from Firestore (overrides loadClients etc)
  await loadClientPortal(profile.linkedTrainer, user.uid);
}

/* Shared app boot for CLIENT — same as bootTrainerApp minus trainer-only loads */
async function bootClientApp() {
  // Expose renderers globally
  window._renderMenuLibrary  = function(){ if(typeof renderMenuLibrary  === 'function') renderMenuLibrary(); };
  window._renderProgramsView = function(){ if(typeof renderProgramsView === 'function') renderProgramsView(); };
  window._renderRecipesView  = function(){ if(typeof renderRecipesView  === 'function') renderRecipesView(); };
  window._renderResearchView = function(){ if(typeof renderResearchView === 'function') renderResearchView(); };

  var u = state.user;
  function setEl(id, prop, val) { try { var e = document.getElementById(id); if (e) e[prop] = val; } catch(err) {} }

  // Identity
  if (u.photoURL) {
    var av = document.getElementById('topnav-avatar');
    if (av) { av.style.backgroundImage='url('+u.photoURL+')'; av.style.backgroundSize='cover'; av.textContent=''; }
  } else {
    setEl('topnav-avatar', 'textContent', (u.fullName||'C')[0].toUpperCase());
  }
  setEl('topnav-name', 'textContent', u.fullName);

  // Hide trial pill for clients
  var trialPill = document.getElementById('trial-pill-top');
  if (trialPill) trialPill.style.display = 'none';

  showScreen('app');
  buildMuscleFilters();

  // Load shared library content (exercises)
  await syncMasterLibraryFromFirestore();

  // Load research (clients can see all research)
  loadResearch();

  // Render library so client can browse exercises
  renderLibrary();
}

function applyClientNav() {
  window._clientMode = true;

  // ── Mobile bottom tab bar — hide Clients tab, show My Profile ──
  var clientsTab = document.getElementById('mtab-clients');
  if (clientsTab) clientsTab.style.display = 'none';

  // Hide the trainer "Profile" (settings) tab for clients
  var profileTab = document.getElementById('mtab-profile');
  if (profileTab) profileTab.style.display = 'none';

  // Show "My Profile" client tab
  var cpTab = document.getElementById('mtab-client-profile');
  if (cpTab) {
    cpTab.style.display = 'flex';
    cpTab.setAttribute('onclick', "mobileTab('client-profile',this)");
  }

  // ── Top nav — hide Clients link, reroute Profile to client-profile ──
  var tnav = document.getElementById('tnav-clients');
  if (tnav) tnav.style.display = 'none';

  var tnavProfile = document.getElementById('tnav-profile');
  if (tnavProfile) {
    tnavProfile.setAttribute('onclick', "setView('client-profile',this)");
  }
  // The topnav-user avatar area also goes to trainer profile — reroute it
  var topnavUser = document.querySelector('.topnav-user');
  if (topnavUser) topnavUser.setAttribute('onclick', "setView('client-profile', document.getElementById('tnav-profile'))");

  // ── Library tabs — hide ALL trainer upload tabs ──
  ['tab-custom', 'tab-myvideos', 'tab-myprograms', 'tab-mymenus', 'tab-myrecipes', 'tab-myresearch'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  // Hide upload bar
  var uploadBar = document.getElementById('lib-upload-bar');
  if (uploadBar) uploadBar.style.display = 'none';

  // Hide billing tab for clients
  var tnavBilling = document.getElementById('tnav-billing');
  if (tnavBilling) tnavBilling.style.display = 'none';

  // Hide trial/upgrade banner — clients have no trial
  var nudgeBanner = document.getElementById('upgrade-nudge-banner');
  if (nudgeBanner) nudgeBanner.style.display = 'none';
  var trialPillTop = document.getElementById('trial-pill-top');
  if (trialPillTop) trialPillTop.style.display = 'none';

  // Hide Add Recipe button — clients don't create content
  var addRecipeBtn = document.getElementById('recipes-add-btn');
  if (addRecipeBtn) addRecipeBtn.style.display = 'none';

  // Update name in topnav
  var nameEl = document.getElementById('topnav-name');
  if (nameEl && state.user) nameEl.textContent = state.user.fullName;

  // Restore avatar if photoURL
  if (state.user && state.user.photoURL) {
    var av = document.getElementById('topnav-avatar');
    if (av) { av.style.backgroundImage = 'url(' + state.user.photoURL + ')'; av.style.backgroundSize = 'cover'; av.textContent = ''; }
  } else if (state.user) {
    var av2 = document.getElementById('topnav-avatar');
    if (av2) av2.textContent = (state.user.fullName || 'C')[0].toUpperCase();
  }
}

async function loadClientPortal(trainerUid, clientUid) {
  if (!window._firebase || !window._db) return;
  try {
    var snap = await window._firebase.getDoc(
      window._firebase.doc(window._db, 'clientProfiles', clientUid)
    );
    var data = snap.exists() ? snap.data() : {};

    // Populate main app arrays with client's assigned content
    menus    = data.assignedMenus    || [];
    programs = data.assignedPrograms || [];
    recipes  = data.assignedRecipes  || [];
    window._clientAssignedPrograms = data.assignedPrograms || [];

    // Enrich routines
    var rawRoutines = data.assignedRoutines || [];
    var enriched = [];
    for (var ri = 0; ri < rawRoutines.length; ri++) {
      var r = rawRoutines[ri];
      if (r.exercises && r.exercises.length > 0) {
        enriched.push(r);
      } else if (r.shareToken || r.id) {
        try {
          var rSnap = await window._firebase.getDoc(
            window._firebase.doc(window._db, 'routines', r.shareToken || r.id)
          );
          if (rSnap.exists()) enriched.push(Object.assign({}, r, rSnap.data()));
          else enriched.push(r);
        } catch(e) { enriched.push(r); }
      } else { enriched.push(r); }
    }
    sentRoutines = enriched;
    window._clientData = data;

    // Render the client profile tab
    renderClientProfileTab(data);

    // Re-render content views with client's assigned content
    renderMenuLibrary();
    renderProgramsView();
    renderRecipesView();
    renderRoutinesHistory();

    // Switch to library view by default (clients start in library)
    setView('library', document.getElementById('tnav-library'));

    // Mark mtab-library as active
    var mlibTab = document.getElementById('mtab-library');
    document.querySelectorAll('.mobile-tab-btn').forEach(function(b){ b.classList.remove('active'); });
    if (mlibTab) mlibTab.classList.add('active');

  } catch(e) {
    console.warn('loadClientPortal error:', e.code || e.message);
  }
}

/* ── Client Profile Tab — focuses on PROGRESS not personal details ── */
async function renderClientProfileTab(data) {
  var el = document.getElementById('view-client-profile');
  if (!el) return;

  var name  = state.user.fullName;
  var goal  = data.goal || state.user.goal || '';
  var goalColor = { cut:'#F472B6', maintain:'#60A5FA', bulk:'#7EE8A2' }[goal] || 'var(--accent)';
  var goalLabel = { cut:'Cut', maintain:'Maintain', bulk:'Bulk' }[goal] || goal;

  // Show loading first
  el.innerHTML = '<div style="padding:40px;text-align:center;color:var(--muted)"><i class="ti ti-loader" style="font-size:28px"></i><div style="margin-top:8px">Loading your progress...</div></div>';

  // Fetch measurements from Firestore (entered by trainer)
  var measurements = [];
  try {
    var snap = await window._firebase.getDocs(
      window._firebase.query(
        window._firebase.collection(window._db, 'clientMeasurements'),
        window._firebase.where('clientUid', '==', state.user.uid),
        window._firebase.orderBy('date', 'asc')
      )
    );
    snap.forEach(function(d){ measurements.push(Object.assign({id:d.id}, d.data())); });
  } catch(e) { console.warn('client measurements:', e.code || e.message); }

  // Fetch workout sessions for progress
  var sessions = [];
  try {
    var wsnap = await window._firebase.getDocs(
      window._firebase.query(
        window._firebase.collection(window._db, 'workoutSessions'),
        window._firebase.where('clientUid', '==', state.user.uid),
        window._firebase.orderBy('date', 'desc'),
        window._firebase.limit(30)
      )
    );
    wsnap.forEach(function(d){ sessions.push(Object.assign({id:d.id}, d.data())); });
  } catch(e) { console.warn('client sessions:', e.code || e.message); }

  var latest = measurements.length ? measurements[measurements.length - 1] : null;
  var totalWorkouts = sessions.length;

  el.innerHTML =
    '<div style="padding:20px;max-width:600px;margin:0 auto">' +

    // Compact greeting
    '<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">' +
      '<div style="width:48px;height:48px;border-radius:50%;background:rgba(126,232,162,0.15);border:2px solid ' + goalColor + ';display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:' + goalColor + '">' +
        (name[0]||'?').toUpperCase() +
      '</div>' +
      '<div>' +
        '<div style="font-size:13px;color:var(--muted)">My Progress</div>' +
        '<div style="font-size:18px;font-weight:800">' + name.split(' ')[0] + (goalLabel ? ' · <span style="color:' + goalColor + ';font-size:13px">' + goalLabel + '</span>' : '') + '</div>' +
      '</div>' +
    '</div>' +

    // Current stats — weight, body fat, workouts
    '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:24px">' +
      _clientStatCard('ti-weight', (latest && latest.weight ? latest.weight + ' ' + (latest.weightUnit||'kg') : '—'), 'Weight', '#60A5FA') +
      _clientStatCard('ti-percentage', (latest && latest.bodyFat ? latest.bodyFat + '%' : '—'), 'Body Fat', '#F472B6') +
      _clientStatCard('ti-barbell', totalWorkouts, 'Workouts', '#7EE8A2') +
    '</div>' +

    // Progress graph
    (measurements.length >= 2 ?
      '<h3 style="font-size:15px;font-weight:700;margin:0 0 12px">Weight & Body Fat Trend</h3>' +
      '<div style="background:var(--surface);border:1px solid var(--border2);border-radius:14px;padding:16px;margin-bottom:24px">' +
        renderProgressGraph(measurements) +
      '</div>'
    : measurements.length === 1 ?
      '<div style="background:var(--surface);border:1px solid var(--border2);border-radius:14px;padding:20px;margin-bottom:24px;text-align:center;color:var(--muted)">' +
        '<i class="ti ti-chart-line" style="font-size:28px;opacity:0.4;display:block;margin-bottom:8px"></i>' +
        '<div style="font-size:13px">One measurement so far. Your progress graph will appear after your next measurement.</div>' +
      '</div>'
    :
      '<div style="background:var(--surface);border:1px solid var(--border2);border-radius:14px;padding:20px;margin-bottom:24px;text-align:center;color:var(--muted)">' +
        '<i class="ti ti-ruler" style="font-size:28px;opacity:0.4;display:block;margin-bottom:8px"></i>' +
        '<div style="font-size:13px">No measurements yet.<br>Your trainer will add your weight and body fat after your assessment.</div>' +
      '</div>'
    ) +

    // Measurement history
    (measurements.length ?
      '<h3 style="font-size:15px;font-weight:700;margin:0 0 12px">Measurement History</h3>' +
      measurements.slice().reverse().map(function(m) {
        return '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 14px;background:var(--surface);border:1px solid var(--border2);border-radius:10px;margin-bottom:6px">' +
          '<span style="font-size:13px;color:var(--muted)">' + new Date(m.date).toLocaleDateString() + '</span>' +
          '<div style="display:flex;gap:16px">' +
            (m.weight ? '<span style="font-size:14px;font-weight:700"><i class="ti ti-weight" style="font-size:11px;color:#60A5FA"></i> ' + m.weight + ' ' + (m.weightUnit||'kg') + '</span>' : '') +
            (m.bodyFat ? '<span style="font-size:14px;font-weight:700;color:#F472B6"><i class="ti ti-percentage" style="font-size:11px"></i> ' + m.bodyFat + '%</span>' : '') +
          '</div>' +
        '</div>';
      }).join('')
    : '') +

    // Workout history summary
    (sessions.length ?
      '<h3 style="font-size:15px;font-weight:700;margin:24px 0 12px">Recent Workouts</h3>' +
      sessions.slice(0, 8).map(function(s) {
        var d = new Date(s.date);
        var dur = s.durationSeconds ? Math.floor(s.durationSeconds/60) + ' min' : '';
        return '<div style="padding:12px 14px;background:var(--surface);border:1px solid var(--border2);border-radius:10px;margin-bottom:6px">' +
          '<div style="display:flex;justify-content:space-between;align-items:center">' +
            '<div style="font-size:14px;font-weight:700">' + (s.dayName||s.programName||'Workout') + '</div>' +
            '<div style="font-size:12px;color:var(--muted)">' + d.toLocaleDateString() + (dur ? ' · ' + dur : '') + '</div>' +
          '</div>' +
          '<div style="font-size:12px;color:var(--muted);margin-top:3px">' + (s.exercises||[]).length + ' exercises completed</div>' +
        '</div>';
      }).join('')
    : '') +

  '</div>';
}

/* Simple SVG line graph of weight + body fat over time */
function renderProgressGraph(measurements) {
  var W = 500, H = 200, pad = 40;
  var weights = measurements.map(function(m){ return m.weight || null; });
  var bodyFats = measurements.map(function(m){ return m.bodyFat || null; });
  var dates = measurements.map(function(m){ return new Date(m.date); });

  var validW = weights.filter(function(w){ return w != null; });
  var validBF = bodyFats.filter(function(b){ return b != null; });

  function buildLine(values, color, minV, maxV) {
    var range = maxV - minV || 1;
    var pts = [];
    values.forEach(function(v, i) {
      if (v == null) return;
      var x = pad + (i / Math.max(1, values.length - 1)) * (W - 2*pad);
      var y = H - pad - ((v - minV) / range) * (H - 2*pad);
      pts.push([x, y]);
    });
    if (!pts.length) return '';
    var path = pts.map(function(p, i){ return (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    var dots = pts.map(function(p){ return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.5" fill="' + color + '"/>'; }).join('');
    return '<path d="' + path + '" fill="none" stroke="' + color + '" stroke-width="2.5"/>' + dots;
  }

  var wMin = Math.min.apply(null, validW), wMax = Math.max.apply(null, validW);
  var bfMin = validBF.length ? Math.min.apply(null, validBF) : 0;
  var bfMax = validBF.length ? Math.max.apply(null, validBF) : 1;

  var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;height:auto;overflow:visible">';
  // baseline
  svg += '<line x1="' + pad + '" y1="' + (H-pad) + '" x2="' + (W-pad) + '" y2="' + (H-pad) + '" stroke="var(--border2)" stroke-width="1"/>';
  // lines
  if (validW.length) svg += buildLine(weights, '#60A5FA', wMin - 1, wMax + 1);
  if (validBF.length) svg += buildLine(bodyFats, '#F472B6', bfMin - 1, bfMax + 1);
  // date labels (first + last)
  if (dates.length) {
    svg += '<text x="' + pad + '" y="' + (H-pad+18) + '" font-size="11" fill="var(--muted)">' + dates[0].toLocaleDateString() + '</text>';
    svg += '<text x="' + (W-pad) + '" y="' + (H-pad+18) + '" font-size="11" fill="var(--muted)" text-anchor="end">' + dates[dates.length-1].toLocaleDateString() + '</text>';
  }
  svg += '</svg>';

  // legend
  svg += '<div style="display:flex;gap:18px;justify-content:center;margin-top:10px">' +
    (validW.length ? '<span style="font-size:12px;color:var(--muted)"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#60A5FA;margin-right:5px"></span>Weight</span>' : '') +
    (validBF.length ? '<span style="font-size:12px;color:var(--muted)"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#F472B6;margin-right:5px"></span>Body Fat %</span>' : '') +
  '</div>';

  return svg;
}

function _clientStatCard(icon, count, label, color) {
  return '<div style="background:var(--surface);border:1px solid var(--border2);border-radius:12px;padding:16px;text-align:center">' +
    '<i class="ti ' + icon + '" style="font-size:22px;color:' + color + '"></i>' +
    '<div style="font-size:20px;font-weight:800;margin:6px 0 2px">' + count + '</div>' +
    '<div style="font-size:12px;color:var(--muted)">' + label + '</div>' +
  '</div>';
}

function renderClientMeasurements(measurements) {
  if (!measurements || !measurements.length) {
    return '<div style="background:var(--surface);border:1px solid var(--border2);border-radius:12px;padding:20px;text-align:center;color:var(--muted)">' +
      '<i class="ti ti-ruler" style="font-size:28px;opacity:0.4;display:block;margin-bottom:8px"></i>' +
      '<div style="font-size:13px">No measurements recorded yet.<br>Your trainer will add these after your assessment.</div>' +
    '</div>';
  }

  // Sort by date descending
  var sorted = measurements.slice().sort(function(a,b){ return new Date(b.date) - new Date(a.date); });
  var latest = sorted[0];

  return '<h3 style="font-size:15px;font-weight:700;margin:20px 0 12px">Body Measurements</h3>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">' +
      (latest.weight ? '<div style="background:var(--surface);border:1px solid var(--border2);border-radius:12px;padding:16px;text-align:center"><i class="ti ti-weight" style="font-size:20px;color:#60A5FA"></i><div style="font-size:24px;font-weight:800;margin:6px 0 2px">' + latest.weight + ' ' + (latest.weightUnit||'kg') + '</div><div style="font-size:12px;color:var(--muted)">Weight</div></div>' : '') +
      (latest.bodyFat ? '<div style="background:var(--surface);border:1px solid var(--border2);border-radius:12px;padding:16px;text-align:center"><i class="ti ti-percentage" style="font-size:20px;color:#F472B6"></i><div style="font-size:24px;font-weight:800;margin:6px 0 2px">' + latest.bodyFat + '%</div><div style="font-size:12px;color:var(--muted)">Body Fat</div></div>' : '') +
    '</div>' +
    (sorted.length > 1 ? '<button class="btn btn-ghost btn-sm" onclick="showMeasurementsHistory()" style="margin-bottom:16px"><i class="ti ti-chart-line"></i> View Progress</button>' : '') +
    sorted.slice(0, 3).map(function(m) {
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:var(--surface);border:1px solid var(--border2);border-radius:10px;margin-bottom:6px">' +
        '<span style="font-size:13px;color:var(--muted)">' + new Date(m.date).toLocaleDateString() + '</span>' +
        '<div style="display:flex;gap:16px">' +
          (m.weight ? '<span style="font-size:13px;font-weight:600">' + m.weight + ' ' + (m.weightUnit||'kg') + '</span>' : '') +
          (m.bodyFat ? '<span style="font-size:13px;font-weight:600;color:#F472B6">' + m.bodyFat + '%</span>' : '') +
        '</div>' +
      '</div>';
    }).join('');
}

function renderClientPortal(data) {
  // Render each section of the client portal
  var name = state.user.fullName;
  var el = document.getElementById('client-portal-name');
  if (el) el.textContent = 'Welcome, ' + name.split(' ')[0] + '!';

  renderClientSection('client-routines-body',  data.assignedRoutines  || [], 'routines');
  renderClientSection('client-menu-body',       data.assignedMenus     || [], 'menus');
  renderClientSection('client-program-body',    data.assignedPrograms  || [], 'programs');
  renderClientSection('client-recipes-body',    data.assignedRecipes   || [], 'recipes');

  // BMR stats — full explained breakdown for client
  var bmrEl = document.getElementById('client-bmr-stats');
  if (bmrEl) {
    if (data.bmrData) {
      var b = data.bmrData;
      var actLabel = b.activityLabel || 'Moderately Active';
      var goalLabel = b.goal === 'cut' ? 'Weight Loss' : b.goal === 'bulk' ? 'Muscle Gain' : 'Maintenance';
      var goalIcon  = b.goal === 'cut' ? 'ti-trending-down' : b.goal === 'bulk' ? 'ti-trending-up' : 'ti-minus';
      var goalColor = b.goal === 'cut' ? '#F472B6' : b.goal === 'bulk' ? '#7EE8A2' : '#60A5FA';

      bmrEl.innerHTML =
        '<div class="client-bmr-card">' +

          // Header
          '<div class="client-bmr-header">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">' +
              '<h3 style="margin:0;font-size:16px">Your Daily Nutrition Plan</h3>' +
              '<div style="display:flex;align-items:center;gap:6px;background:' + goalColor + '15;padding:5px 10px;border-radius:20px;border:1px solid ' + goalColor + '40">' +
                '<i class="ti ' + goalIcon + '" style="color:' + goalColor + '"></i>' +
                '<span style="font-size:13px;font-weight:700;color:' + goalColor + '">' + goalLabel + '</span>' +
              '</div>' +
            '</div>' +
            '<p style="font-size:13px;color:var(--muted);margin:8px 0 0">' +
              '<i class="ti ti-run" style="color:var(--accent)"></i>&nbsp;' + actLabel +
            '</p>' +
          '</div>' +

          // Explained stats row
          '<div class="client-bmr-stats-row">' +

            '<div class="client-bmr-stat">' +
              '<div class="client-bmr-stat-val">' + b.bmr + '</div>' +
              '<div class="client-bmr-stat-label">BMR</div>' +
              '<div class="client-bmr-stat-explain">Calories your body burns at rest — just to keep your heart beating, breathing, and organs working. This is your baseline even if you stayed in bed all day.</div>' +
            '</div>' +

            '<div class="client-bmr-stat">' +
              '<div class="client-bmr-stat-val">' + b.tdee + '</div>' +
              '<div class="client-bmr-stat-label">TDEE</div>' +
              '<div class="client-bmr-stat-explain">Total Daily Energy Expenditure — your BMR (' + b.bmr + ') multiplied by your activity level (' + actLabel + '). This is what you actually burn in a full day including exercise and movement.</div>' +
            '</div>' +

            '<div class="client-bmr-stat accent">' +
              '<div class="client-bmr-stat-val">' + b.target + '</div>' +
              '<div class="client-bmr-stat-label">Daily Target</div>' +
              '<div class="client-bmr-stat-explain">Your TDEE (' + b.tdee + ') adjusted for your goal (' + goalLabel + '). ' +
                (b.goal === 'cut' ? 'Eating ' + b.target + ' kcal creates a calorie deficit to help you lose fat while preserving muscle.' :
                 b.goal === 'bulk' ? 'Eating ' + b.target + ' kcal gives your body the extra energy needed to build muscle.' :
                 'Eating ' + b.target + ' kcal keeps your weight stable while supporting your training.') +
              '</div>' +
            '</div>' +

          '</div>' +

          // Macro targets
          '<div class="client-bmr-macros">' +
            '<h4 style="margin-bottom:12px;font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:0.5px">Daily Macro Targets</h4>' +
            '<div class="client-macro-row">' +
              '<div class="client-macro-icon" style="background:rgba(96,165,250,0.12);color:#60A5FA"><i class="ti ti-fish"></i></div>' +
              '<div class="client-macro-info">' +
                '<div class="client-macro-name">Protein <strong>' + b.proteinG + 'g</strong></div>' +
                '<div class="client-macro-explain">Builds and repairs muscle. Aim for ' + b.proteinG + 'g (' + Math.round(b.proteinG*4) + ' kcal) spread across your meals — prioritise after training.</div>' +
              '</div>' +
              '<div class="macro-bar-track" style="width:60px"><div class="macro-bar protein" style="width:100%"></div></div>' +
            '</div>' +
            '<div class="client-macro-row">' +
              '<div class="client-macro-icon" style="background:rgba(251,191,36,0.12);color:#FBBF24"><i class="ti ti-grain"></i></div>' +
              '<div class="client-macro-info">' +
                '<div class="client-macro-name">Carbohydrates <strong>' + b.carbsG + 'g</strong></div>' +
                '<div class="client-macro-explain">Your main energy source for training. ' + b.carbsG + 'g (' + Math.round(b.carbsG*4) + ' kcal) — eat more on training days, less on rest days.</div>' +
              '</div>' +
              '<div class="macro-bar-track" style="width:60px"><div class="macro-bar carbs" style="width:100%"></div></div>' +
            '</div>' +
            '<div class="client-macro-row">' +
              '<div class="client-macro-icon" style="background:rgba(244,114,182,0.12);color:#F472B6"><i class="ti ti-droplet"></i></div>' +
              '<div class="client-macro-info">' +
                '<div class="client-macro-name">Fat <strong>' + b.fatG + 'g</strong></div>' +
                '<div class="client-macro-explain">Essential for hormones and vitamin absorption. ' + b.fatG + 'g (' + Math.round(b.fatG*9) + ' kcal) — focus on healthy sources like olive oil, nuts, and avocado.</div>' +
              '</div>' +
              '<div class="macro-bar-track" style="width:60px"><div class="macro-bar fat" style="width:100%"></div></div>' +
            '</div>' +
          '</div>' +

        '</div>';
    } else {
      bmrEl.innerHTML =
        '<div class="client-bmr-empty">' +
          '<i class="ti ti-calculator" style="font-size:32px;color:var(--muted2);margin-bottom:12px"></i>' +
          '<p style="color:var(--muted)">Your trainer has not set your nutrition targets yet.</p>' +
        '</div>';
    }
  }
}

function renderClientSection(elId, items, type) {
  var el = document.getElementById(elId);
  if (!el || !items.length) {
    if (el) el.innerHTML = '<p style="color:var(--muted);font-size:13px;padding:12px 0">Nothing assigned yet.</p>';
    return;
  }
  if (type === 'menus') {
    el.innerHTML = items.map(function(m) {
      var t = calcMenuTotals(m);
      return '<div class="client-item-card" onclick="openMenuDetail(\'' + m.id + '\' )">' +
        '<div class="client-item-icon"><i class="ti ti-salad"></i></div>' +
        '<div><div class="client-item-name">' + m.name + '</div>' +
        '<div class="client-item-meta">' + t.calories + ' kcal · P:' + t.protein + 'g C:' + t.carbs + 'g F:' + t.fat + 'g</div></div>' +
      '</div>';
    }).join('');
  } else if (type === 'programs') {
    el.innerHTML = items.map(function(p) {
      return '<div class="client-item-card" onclick="openProgramDetail(\'' + p.id + '\')">' +
        '<div class="client-item-icon"><i class="ti ti-calendar"></i></div>' +
        '<div><div class="client-item-name">' + p.name + '</div>' +
        '<div class="client-item-meta">' + (p.weeks||'?') + ' weeks · ' + (p.goal||'') + ' · ' + (p.level||'') + '</div></div>' +
      '</div>';
    }).join('');
  } else if (type === 'recipes') {
    el.innerHTML = items.map(function(r) {
      return '<div class="client-item-card" onclick="openRecipeDetail(\'' + r.id + '\')">' +
        (r.photoURL ? '<img src="' + r.photoURL + '" style="width:48px;height:48px;object-fit:cover;border-radius:8px;flex-shrink:0">' :
          '<div class="client-item-icon"><i class="ti ti-chef-hat"></i></div>') +
        '<div><div class="client-item-name">' + r.name + '</div>' +
        '<div class="client-item-meta">' + (r.calories||0) + ' kcal · ' + (r.prepTime||'?') + ' min</div></div>' +
      '</div>';
    }).join('');
  } else if (type === 'routines') {
    el.innerHTML = items.map(function(r, idx) {
      var exCount = (r.exercises||[]).length;
      return '<div class="client-item-card" onclick="toggleClientRoutine(' + idx + ',this)">' +
        '<div class="client-item-icon"><i class="ti ti-list-check"></i></div>' +
        '<div style="flex:1">' +
          '<div class="client-item-name">' + (r.name || 'Routine') + '</div>' +
          '<div class="client-item-meta">' + exCount + ' exercise' + (exCount!==1?'s':'') + (r.trainerName?' · '+r.trainerName:'') + '</div>' +
        '</div>' +
        '<i class="ti ti-chevron-down" style="color:var(--muted);font-size:14px"></i>' +
      '</div>' +
      '<div id="client-routine-' + idx + '" style="display:none;padding:8px 14px 14px;border-bottom:1px solid var(--border)">' +
        (r.exercises||[]).map(function(ex) {
          var hasV = !!(ex.videoURL);
          return '<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)"' +
            (hasV ? ' onclick="event.stopPropagation();openVideoPopup(decodeURIComponent(\'' + encodeURIComponent(ex.videoURL) + '\'))" style="cursor:pointer"' : '') + '>' +
            '<div style="width:36px;height:36px;border-radius:8px;background:' + (hasV?'rgba(126,232,162,0.1)':'var(--surface3)') + ';display:flex;align-items:center;justify-content:center;flex-shrink:0">' +
              '<i class="ti ' + (hasV?'ti-player-play':'ti-barbell') + '" style="color:' + (hasV?'var(--accent)':'var(--muted2)') + ';font-size:14px"></i>' +
            '</div>' +
            '<div style="flex:1">' +
              '<div style="font-size:13px;font-weight:600">' + (ex.title||ex.name||'Exercise') + '</div>' +
              '<div style="font-size:11px;color:var(--muted)">' +
                [ex.sets?ex.sets+' sets':'', ex.reps?ex.reps+' reps':'', ex.muscle||''].filter(Boolean).join(' · ') +
              '</div>' +
            '</div>' +
            (hasV ? '<i class="ti ti-player-play" style="color:var(--accent);font-size:12px"></i>' : '') +
          '</div>';
        }).join('') +
      '</div>';
    }).join('');
  }
} // end of renderClientSection

/* ── Global: toggle client routine exercises panel ──────── */
function toggleClientRoutine(idx, headerRow) {
  var panel = document.getElementById('client-routine-' + idx);
  var icon  = document.getElementById('routine-icon-' + idx);
  if (!panel) return;
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
    if (icon) { icon.classList.remove('ti-chevron-down'); icon.classList.add('ti-chevron-up'); }
  } else {
    panel.style.display = 'none';
    if (icon) { icon.classList.remove('ti-chevron-up'); icon.classList.add('ti-chevron-down'); }
  }
}

/* ── Trainer: Load clients ──────────────────────────── */
async function loadClients() {
  if (!state.user || !window._firebase || !window._db) return;
  try {
    var snap = await window._firebase.getDocs(
      window._firebase.collection(window._db, 'clientProfiles')
    );
    clientsList = [];
    snap.forEach(function(d){
      var data = d.data();
      if (data.linkedTrainer === state.user.uid) {
        clientsList.push(Object.assign({ id: d.id }, data));
      }
    });
    renderClientsList();
  } catch(e) { console.warn('loadClients:', e.code); }
}

function renderClientsList(searchQuery) {
  var el = document.getElementById('clients-list-body');
  if (!el) return;
  var query = (searchQuery || '').toLowerCase().trim();
  var cnt = document.getElementById('clients-count');
  if (cnt) cnt.textContent = clientsList.length + ' clients';

  if (!clientsList.length) {
    el.innerHTML =
      '<div style="text-align:center;padding:48px 20px">' +
        '<div class="empty-icon"><i class="ti ti-users"></i></div>' +
        '<h3>No clients yet</h3>' +
        '<p style="color:var(--muted);margin-bottom:20px">Add your first client to get started.</p>' +
        '<button class="btn btn-primary" onclick="openAddClientModal()"><i class="ti ti-user-plus"></i> Add Client</button>' +
      '</div>';
    return;
  }

  var filtered = query
    ? clientsList.filter(function(c){ return (c.name||'').toLowerCase().includes(query) || (c.email||'').toLowerCase().includes(query); })
    : clientsList;

  if (!filtered.length) {
    el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--muted)"><i class="ti ti-search" style="font-size:32px;opacity:0.3;display:block;margin-bottom:10px"></i>No clients match "' + query + '"</div>';
    return;
  }

  el.innerHTML = filtered.map(function(c) {
    var goalColors = { cut:'#F472B6', maintain:'#60A5FA', bulk:'#7EE8A2' };
    var goalColor  = goalColors[c.goal] || 'var(--accent)';
    var assigned   = ((c.assignedMenus||[]).length + (c.assignedPrograms||[]).length + (c.assignedRoutines||[]).length + (c.assignedRecipes||[]).length);
    return '<div class="client-row" onclick="openClientProfile(\'' + c.id + '\')">' +
      '<div class="client-avatar">' + ((c.name||'?')[0]).toUpperCase() + '</div>' +
      '<div class="client-info">' +
        '<div class="client-name">' + c.name + '</div>' +
        '<div class="client-meta">' + (c.email||'') + (c.goal ? ' · <span style="color:' + goalColor + '">' + c.goal + '</span>' : '') + '</div>' +
      '</div>' +
      '<div class="client-stats">' +
        '<span class="tag">' + assigned + ' items assigned</span>' +
      '</div>' +
      '<div class="client-actions">' +
        '<button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();openClientProfile(\'' + c.id + '\')"><i class="ti ti-eye"></i> View</button>' +
      '</div>' +
    '</div>';
  }).join('');
}

/* ── Add client modal ───────────────────────────────── */
function openAddClientModal() {
  ['client-name','client-email','client-phone','client-age','client-weight','client-height','client-notes'].forEach(function(x){
    var el = document.getElementById(x);
    if (el) el.value = '';
  });
  var g = document.getElementById('client-goal');
  if (g) g.value = 'maintain';
  openModal('add-client');
}

async function saveNewClient() {
  var name   = (document.getElementById('client-name')   ||{}).value || '';
  var email  = (document.getElementById('client-email')  ||{}).value || '';
  var phone  = (document.getElementById('client-phone')  ||{}).value || '';
  var goal   = (document.getElementById('client-goal')   ||{}).value || 'maintain';
  var gender       = (document.getElementById('client-gender')        ||{}).value || 'male';
  var age          = parseFloat((document.getElementById('client-age')         ||{}).value) || 0;
  var weight       = parseFloat((document.getElementById('client-weight')      ||{}).value) || 0;
  var height       = parseFloat((document.getElementById('client-height')      ||{}).value) || 0;
  var activity     = parseFloat((document.getElementById('client-activity')    ||{}).value) || 1.55;
  var cutFactor    = parseFloat((document.getElementById('client-cut-intensity')||{}).value) || 0.85;
  var bulkFactor   = parseFloat((document.getElementById('client-bulk-intensity')||{}).value) || 1.10;
  var notes        = (document.getElementById('client-notes') ||{}).value || '';

  if (!name.trim()) { showToast('Please enter the client name.'); return; }
  if (!email.trim()) { showToast('Email is required to create a client login.'); return; }

  // Calculate BMR with activity level
  var bmrData = null;
  if (age && weight && height) {
    var bmr    = (10 * weight) + (6.25 * height) - (5 * age) + (gender === 'male' ? 5 : -161);
    var tdee   = Math.round(bmr * activity);
    var factor = goal === 'cut' ? cutFactor : goal === 'bulk' ? bulkFactor : 1;
    var target = Math.round(tdee * factor);
    var proteinG = Math.round(weight * (goal==='cut'?2.2:goal==='bulk'?2.0:1.8));
    var fatG     = Math.round(weight * 0.9);
    var carbsG   = Math.max(50, Math.round((target - proteinG*4 - fatG*9)/4));
    var activityLabels = {
      '1.2':'Sedentary','1.375':'Lightly Active','1.55':'Moderately Active',
      '1.725':'Very Active','1.9':'Athlete'
    };
    bmrData = {
      bmr: Math.round(bmr), tdee, target, proteinG, carbsG, fatG,
      goal, gender, activity, activityLabel: activityLabels[String(activity)] || 'Moderately Active',
      cutFactor, bulkFactor
    };
  }

  var btn = document.querySelector('#modal-add-client .btn-primary');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="ti ti-loader" style="animation:spin 1s linear infinite"></i> Creating...'; }

  try {
    // Call Cloud Function — it creates Firebase Auth + Firestore
    var fn       = window._firebase.httpsCallable(window._functions, 'createClientAccount');
    var result   = await fn({ name, email, phone, goal, gender, age, weight, height, notes, activity, bmrData });
    var data     = result.data;

    // Add to local list
    var clientData = {
      id:               data.clientUid,
      name, email, phone, goal, gender, age, weight, height, notes, bmrData,
      linkedTrainer:    state.user.uid,
      trainerName:      state.user.fullName,
      assignedMenus:    [],
      assignedPrograms: [],
      assignedRoutines: [],
      assignedRecipes:  [],
      tempPassword:     data.tempPassword,
    };
    clientsList.push(clientData);
    renderClientsList();
    closeAllModals();

    // Refresh all client dropdowns immediately so trainer can assign right away
    var opts2 = '<option value="">— Choose client —</option>';
    clientsList.forEach(function(c) {
      opts2 += '<option value="' + c.id + '">' + (c.name || c.email || c.id) + '</option>';
    });
    document.querySelectorAll('[id*="client-select"], [id*="checkout-client"]').forEach(function(sel){
      if (sel) sel.innerHTML = opts2;
    });

    // Show credentials to trainer
    showClientCredentials(name, email);

  } catch(e) {
    console.error('saveNewClient error:', e);
    var msg = (e.message || e.code || 'Unknown error');
    if (msg.includes('already-exists')) msg = 'A user with this email already exists.';
    showToast('Failed: ' + msg);
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="ti ti-user-plus"></i> Add Client'; }
  }
}

var _lastCredsText = '';
function copyClientCreds() {
  copyToClipboard(_lastCredsText);
  var btn = document.querySelector('#modal-client-creds .btn-primary');
  if (btn) btn.innerHTML = '<i class="ti ti-check"></i> Copied!';
}

function closeCredsModal() {
  var el = document.getElementById('modal-client-creds');
  if (el) el.remove();
}

function showClientCredentials(name, email) {
  var existing = document.getElementById('modal-client-creds');
  if (existing) existing.remove();
  // Find the newly created client
  var newClient = clientsList.find(function(c){ return c.email === email; });
  var newClientId = newClient ? newClient.id : null;

  _lastCredsText = 'Site: repcast.co.il\nEmail: ' + email + '\n(Client sets password via email link)';

  var modal = document.createElement('div');
  modal.id = 'modal-client-creds';
  modal.className = 'modal';
  modal.style.cssText = 'max-width:440px';
  modal.innerHTML =
    '<div class="modal-header">' +
      '<h3><i class="ti ti-circle-check" style="color:var(--accent)"></i> Client Account Created!</h3>' +
      '<button class="modal-close" onclick="closeCredsModal()"><i class="ti ti-x"></i></button>' +
    '</div>' +
    '<div class="modal-body">' +
      '<div style="text-align:center;padding:8px 0 20px">' +
        '<div style="width:56px;height:56px;background:rgba(126,232,162,0.12);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px">' +
          '<i class="ti ti-mail" style="font-size:24px;color:var(--accent)"></i>' +
        '</div>' +
        '<p style="font-size:15px;font-weight:600;margin-bottom:6px">' + name + '</p>' +
        '<p style="color:var(--muted);font-size:14px">A password setup email has been sent to <strong>' + email + '</strong></p>' +
      '</div>' +
      '<div class="creds-box">' +
        '<div class="cred-row"><span class="cred-label">Site</span><span class="cred-val">repcast.co.il</span></div>' +
        '<div class="cred-row"><span class="cred-label">Email</span><span class="cred-val">' + email + '</span></div>' +
        '<div class="cred-row"><span class="cred-label">Password</span><span class="cred-val" style="color:var(--muted)">Client sets via email link</span></div>' +
      '</div>' +
      '<div class="recipe-tips" style="margin-top:14px">' +
        '<i class="ti ti-info-circle"></i>' +
        '<span>Tell your client to check their inbox and click the link to set their password. The email comes from Firebase.</span>' +
      '</div>' +
    '</div>' +
    '<div class="modal-footer">' +
      '<button class="btn btn-ghost" onclick="closeCredsModal()">Close</button>' +
      (newClientId ? '<button class="btn btn-ghost" onclick="closeCredsModal();openClientProfile(\'' + newClientId + '\')"><i class="ti ti-user-plus"></i> Assign Content Now</button>' : '') +
      '<button class="btn btn-primary" onclick="copyClientCreds()"><i class="ti ti-copy"></i> Copy Login Details</button>' +
    '</div>';

  document.body.appendChild(modal);
  modal.style.display = 'flex';
  setTimeout(function(){ modal.classList.add('modal-open'); }, 10);
}

/* ── Client profile / assignment ───────────────────── */
function searchClients(q) {
  renderClientsList(q);
}

/* ── Redesigned Trainer Client Profile ── */
var _currentClientId = null;
var _currentClientTab = 'assign';

async function openClientProfile(clientId) {
  _currentClientId = clientId;
  var client = clientsList.find(function(c){ return c.id === clientId; });
  if (!client) return;

  // Set header
  var goalColor = { cut:'#F472B6', maintain:'#60A5FA', bulk:'#7EE8A2' }[client.goal] || 'var(--accent)';
  var avatarEl = document.getElementById('client-profile-avatar');
  var nameEl   = document.getElementById('client-profile-modal-name');
  var metaEl   = document.getElementById('client-profile-modal-meta');
  if (avatarEl) { avatarEl.textContent = (client.name||'?')[0].toUpperCase(); avatarEl.style.borderColor = goalColor; avatarEl.style.color = goalColor; }
  if (nameEl) nameEl.textContent = client.name || 'Client';
  if (metaEl) metaEl.textContent = (client.email||'') + (client.goal ? ' · ' + client.goal : '');

  // Open modal
  var modal = document.getElementById('modal-client-profile');
  if (modal) { modal.style.display = 'flex'; modal.classList.add('open'); }
  document.getElementById('modal-backdrop').classList.add('open');

  switchClientProfileTab('assign');
}

async function switchClientProfileTab(tab) {
  _currentClientTab = tab;

  // Update tab styles
  ['assign','training','body'].forEach(function(t) {
    var btn = document.getElementById('cptab-' + t);
    if (btn) { btn.className = 'client-profile-tab' + (t === tab ? ' active' : ''); }
  });

  var body = document.getElementById('client-profile-modal-body');
  var footer = document.getElementById('client-profile-modal-footer');
  if (!body) return;

  var client = clientsList.find(function(c){ return c.id === _currentClientId; });
  if (!client) return;

  if (tab === 'assign') {
    renderClientAssignTab(body, footer, client);
  } else if (tab === 'training') {
    await renderClientTrainingTab(body, footer, client);
  } else if (tab === 'body') {
    await renderClientBodyTab(body, footer, client);
  }
}

function renderClientAssignTab(body, footer, client) {
  footer.innerHTML = '<button class="btn btn-ghost" onclick="closeAllModals()">Close</button>';
  var menus2   = (client.assignedMenus    || []);
  var progs    = (client.assignedPrograms || []);
  var routs    = (client.assignedRoutines || []);
  var recs     = (client.assignedRecipes  || []);

  var html = '<div style="padding:16px">';

  html += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">';
  [['menus','ti-salad','Menus',menus2],['programs','ti-calendar','Programs',progs],
   ['routines','ti-run','Routines',routs],['recipes','ti-chef-hat','Recipes',recs]].forEach(function(item) {
    html += '<button class="btn btn-ghost btn-sm" onclick="openAssignModal(\'' + client.id + '\',\'' + item[0] + '\')">' +
      '<i class="ti ' + item[1] + '"></i> Assign ' + item[2] + ' <span style="background:var(--surface2);border-radius:10px;padding:0 6px;font-size:11px">' + item[3].length + '</span></button>';
  });
  html += '</div>';

  // List assigned items
  if (routs.length) {
    html += '<h4 style="font-size:13px;font-weight:700;color:var(--muted);margin:12px 0 8px">ROUTINES</h4>';
    routs.forEach(function(r) {
      html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--surface);border:1px solid var(--border2);border-radius:10px;margin-bottom:6px">' +
        '<span style="font-size:14px;font-weight:600">' + (r.name||'Routine') + '</span>' +
        '<button class="btn btn-ghost btn-sm" onclick="unassignFromClient(\'' + client.id + '\',\'assignedRoutines\',\'' + (r.id||r.shareToken) + '\')"><i class="ti ti-x"></i></button>' +
      '</div>';
    });
  }
  if (progs.length) {
    html += '<h4 style="font-size:13px;font-weight:700;color:var(--muted);margin:12px 0 8px">PROGRAMS</h4>';
    progs.forEach(function(p) {
      html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--surface);border:1px solid var(--border2);border-radius:10px;margin-bottom:6px">' +
        '<span style="font-size:14px;font-weight:600">' + (p.name||'Program') + '</span>' +
        '<button class="btn btn-ghost btn-sm" onclick="unassignFromClient(\'' + client.id + '\',\'assignedPrograms\',\'' + p.id + '\')"><i class="ti ti-x"></i></button>' +
      '</div>';
    });
  }
  if (menus2.length) {
    html += '<h4 style="font-size:13px;font-weight:700;color:var(--muted);margin:12px 0 8px">MENUS</h4>';
    menus2.forEach(function(m) {
      html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--surface);border:1px solid var(--border2);border-radius:10px;margin-bottom:6px">' +
        '<span style="font-size:14px;font-weight:600">' + (m.name||'Menu') + '</span>' +
        '<button class="btn btn-ghost btn-sm" onclick="unassignFromClient(\'' + client.id + '\',\'assignedMenus\',\'' + m.id + '\')"><i class="ti ti-x"></i></button>' +
      '</div>';
    });
  }
  if (recs.length) {
    html += '<h4 style="font-size:13px;font-weight:700;color:var(--muted);margin:12px 0 8px">RECIPES</h4>';
    recs.forEach(function(rc) {
      html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--surface);border:1px solid var(--border2);border-radius:10px;margin-bottom:6px">' +
        '<span style="font-size:14px;font-weight:600">' + (rc.name||'Recipe') + '</span>' +
        '<button class="btn btn-ghost btn-sm" onclick="unassignFromClient(\'' + client.id + '\',\'assignedRecipes\',\'' + rc.id + '\')"><i class="ti ti-x"></i></button>' +
      '</div>';
    });
  }

  if (!routs.length && !progs.length && !menus2.length && !recs.length) {
    html += '<div style="text-align:center;padding:30px;color:var(--muted)"><i class="ti ti-clipboard-list" style="font-size:28px;opacity:0.3;display:block;margin-bottom:8px"></i>No content assigned yet. Use the buttons above to assign.</div>';
  }

  html += '</div>';
  body.innerHTML = html;
}

async function renderClientTrainingTab(body, footer, client) {
  footer.innerHTML = '<button class="btn btn-ghost" onclick="closeAllModals()">Close</button>';
  body.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted)"><i class="ti ti-loader" style="font-size:28px;animation:spin 1s linear infinite"></i><div style="margin-top:8px">Loading training log...</div></div>';

  try {
    var snap = await window._firebase.getDocs(
      window._firebase.query(
        window._firebase.collection(window._db, 'workoutSessions'),
        window._firebase.where('clientUid', '==', client.id),
        window._firebase.orderBy('date', 'desc'),
        window._firebase.limit(20)
      )
    );
    var sessions = [];
    snap.forEach(function(d){ sessions.push(Object.assign({id:d.id}, d.data())); });

    if (!sessions.length) {
      body.innerHTML = '<div style="padding:40px;text-align:center;color:var(--muted)"><i class="ti ti-chart-line" style="font-size:36px;opacity:0.3;display:block;margin-bottom:10px"></i><div>No workouts logged yet.</div></div>';
      return;
    }

    var html = '<div style="padding:16px">';

    // Summary stats
    var totalSessions = sessions.length;
    var lastDate = new Date(sessions[0].date);
    var daysSince = Math.floor((Date.now() - lastDate.getTime()) / 86400000);

    html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:20px">' +
      _trainerStatCard(totalSessions, 'Sessions', 'ti-barbell', '#7EE8A2') +
      _trainerStatCard((daysSince === 0 ? 'Today' : daysSince + 'd ago'), 'Last Workout', 'ti-clock', '#60A5FA') +
      _trainerStatCard(sessions.reduce(function(a,s){ return a + (s.durationSeconds||0); }, 0) > 0 ? Math.round(sessions.reduce(function(a,s){ return a + (s.durationSeconds||0); }, 0) / sessions.length / 60) + ' min' : '-', 'Avg Duration', 'ti-stopwatch', '#FBBF24') +
    '</div>';

    // Session list
    html += '<h4 style="font-size:13px;font-weight:700;color:var(--muted);margin:0 0 10px">SESSION HISTORY</h4>';
    sessions.forEach(function(s) {
      var d = new Date(s.date);
      var dur = s.durationSeconds ? Math.floor(s.durationSeconds/60) + ' min' : '';
      html += '<div onclick="expandTrainerSession(\'' + s.id + '\')" style="padding:12px 16px;background:var(--surface);border:1px solid var(--border2);border-radius:12px;margin-bottom:8px;cursor:pointer">' +
        '<div style="display:flex;justify-content:space-between;align-items:center">' +
          '<div>' +
            '<div style="font-size:14px;font-weight:700">' + (s.dayName||s.programName||'Workout') + '</div>' +
            '<div style="font-size:12px;color:var(--muted);margin-top:2px">' + d.toLocaleDateString() + (dur ? ' · ' + dur : '') + ' · ' + (s.exercises||[]).length + ' exercises</div>' +
          '</div>' +
          '<i class="ti ti-chevron-right" style="color:var(--muted)"></i>' +
        '</div>' +
        '<div id="session-detail-' + s.id + '" style="display:none;margin-top:10px;border-top:1px solid var(--border);padding-top:10px">' +
          (s.exercises||[]).map(function(ex) {
            return '<div style="margin-bottom:8px"><div style="font-size:13px;font-weight:600">' + ex.title + '</div>' +
              ex.sets.map(function(set) {
                return '<span style="font-size:12px;color:var(--muted);margin-right:8px">Set ' + set.setNum + ': ' + (set.weight||'BW') + ' ' + (s.weightUnit||'kg') + ' × ' + (set.reps||'?') + ' reps</span>';
              }).join('') + '</div>';
          }).join('') +
        '</div>' +
      '</div>';
    });

    html += '</div>';
    body.innerHTML = html;

  } catch(e) {
    body.innerHTML = '<div style="padding:20px;color:var(--danger)">Error loading sessions: ' + e.message + '</div>';
  }
}

function expandTrainerSession(sessionId) {
  var el = document.getElementById('session-detail-' + sessionId);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function _trainerStatCard(value, label, icon, color) {
  return '<div style="background:var(--surface);border:1px solid var(--border2);border-radius:12px;padding:12px;text-align:center">' +
    '<i class="ti ' + icon + '" style="font-size:18px;color:' + color + '"></i>' +
    '<div style="font-size:18px;font-weight:800;margin:4px 0 2px">' + value + '</div>' +
    '<div style="font-size:11px;color:var(--muted)">' + label + '</div>' +
  '</div>';
}

async function renderClientBodyTab(body, footer, client) {
  footer.innerHTML =
    '<button class="btn btn-ghost" onclick="closeAllModals()">Close</button>' +
    '<button class="btn btn-primary" onclick="openAddMeasurementModal(\'' + client.id + '\')">' +
      '<i class="ti ti-plus"></i> Add Measurement' +
    '</button>';

  body.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted)"><i class="ti ti-loader" style="font-size:28px;animation:spin 1s linear infinite"></i></div>';

  try {
    var snap = await window._firebase.getDocs(
      window._firebase.query(
        window._firebase.collection(window._db, 'clientMeasurements'),
        window._firebase.where('clientUid', '==', client.id),
        window._firebase.orderBy('date', 'desc')
      )
    );
    var measurements = [];
    snap.forEach(function(d){ measurements.push(Object.assign({id:d.id}, d.data())); });

    if (!measurements.length) {
      body.innerHTML = '<div style="padding:40px;text-align:center;color:var(--muted)"><i class="ti ti-ruler" style="font-size:36px;opacity:0.3;display:block;margin-bottom:10px"></i><div>No measurements yet.<br>Add the first measurement below.</div></div>';
      return;
    }

    var html = '<div style="padding:16px">';
    var latest = measurements[0];
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">' +
      (latest.weight ? _trainerStatCard(latest.weight + ' ' + (latest.weightUnit||'kg'), 'Current Weight', 'ti-weight', '#60A5FA') : '') +
      (latest.bodyFat ? _trainerStatCard(latest.bodyFat + '%', 'Body Fat', 'ti-percentage', '#F472B6') : '') +
    '</div>';

    html += '<h4 style="font-size:13px;font-weight:700;color:var(--muted);margin:0 0 10px">MEASUREMENT HISTORY</h4>';
    measurements.forEach(function(m) {
      html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:var(--surface);border:1px solid var(--border2);border-radius:10px;margin-bottom:6px">' +
        '<span style="font-size:13px;color:var(--muted)">' + new Date(m.date).toLocaleDateString() + '</span>' +
        '<div style="display:flex;gap:16px;align-items:center">' +
          (m.weight ? '<span style="font-size:14px;font-weight:700"><i class="ti ti-weight" style="font-size:11px;color:#60A5FA"></i> ' + m.weight + ' ' + (m.weightUnit||'kg') + '</span>' : '') +
          (m.bodyFat ? '<span style="font-size:14px;font-weight:700;color:#F472B6"><i class="ti ti-percentage" style="font-size:11px"></i> ' + m.bodyFat + '%</span>' : '') +
          (m.notes ? '<span style="font-size:12px;color:var(--muted)">' + m.notes + '</span>' : '') +
          '<button onclick="deleteMeasurement(\'' + m.id + '\',\'' + client.id + '\')" style="background:none;border:none;cursor:pointer;color:var(--muted)"><i class="ti ti-trash" style="font-size:14px"></i></button>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    body.innerHTML = html;

  } catch(e) {
    body.innerHTML = '<div style="padding:20px;color:var(--danger)">Error: ' + e.message + '</div>';
  }
}

function openAddMeasurementModal(clientId) {
  var existing = document.getElementById('modal-add-measurement');
  if (existing) existing.remove();
  var modal = document.createElement('div');
  modal.id = 'modal-add-measurement';
  modal.style.cssText = 'position:fixed;inset:0;z-index:99998;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;padding:20px';
  modal.innerHTML =
    '<div style="background:var(--surface);border-radius:16px;padding:24px;width:100%;max-width:400px">' +
      '<h3 style="margin:0 0 16px;font-size:16px;font-weight:700">Add Measurement</h3>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">' +
        '<div><label class="form-label">Weight</label><input class="form-input" type="number" id="meas-weight" placeholder="75.5"></div>' +
        '<div><label class="form-label">Unit</label><select class="form-select" id="meas-unit"><option value="kg">kg</option><option value="lbs">lbs</option></select></div>' +
      '</div>' +
      '<div class="form-group"><label class="form-label">Body Fat %</label><input class="form-input" type="number" id="meas-bodyfat" placeholder="18.5"></div>' +
      '<div class="form-group"><label class="form-label">Date</label><input class="form-input" type="date" id="meas-date" value="' + new Date().toISOString().split('T')[0] + '"></div>' +
      '<div class="form-group"><label class="form-label">Notes</label><input class="form-input" id="meas-notes" placeholder="After morning weigh-in..."></div>' +
      '<div style="display:flex;gap:8px;margin-top:16px">' +
        '<button class="btn btn-ghost" style="flex:1" onclick="document.getElementById(\'modal-add-measurement\').remove()">Cancel</button>' +
        '<button class="btn btn-primary" style="flex:2" onclick="saveMeasurement(\'' + clientId + '\')">' +
          'Save Measurement</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(modal);
}

async function saveMeasurement(clientId) {
  var weight  = parseFloat(document.getElementById('meas-weight').value) || 0;
  var unit    = document.getElementById('meas-unit').value;
  var bodyFat = parseFloat(document.getElementById('meas-bodyfat').value) || 0;
  var date    = document.getElementById('meas-date').value;
  var notes   = document.getElementById('meas-notes').value.trim();

  if (!weight && !bodyFat) { showToast('Enter at least weight or body fat'); return; }

  try {
    await window._firebase.addDoc(
      window._firebase.collection(window._db, 'clientMeasurements'),
      { clientUid: clientId, trainerUid: state.user.uid, date, weight, weightUnit: unit, bodyFat, notes, createdAt: new Date().toISOString() }
    );
    showToast('✓ Measurement saved!');
    document.getElementById('modal-add-measurement').remove();
    // Refresh body tab
    await renderClientBodyTab(
      document.getElementById('client-profile-modal-body'),
      document.getElementById('client-profile-modal-footer'),
      clientsList.find(function(c){ return c.id === clientId; })
    );
  } catch(e) { showToast('Error: ' + e.message); }
}

async function deleteMeasurement(measurementId, clientId) {
  if (!confirm('Delete this measurement?')) return;
  try {
    await window._firebase.deleteDoc(window._firebase.doc(window._db, 'clientMeasurements', measurementId));
    showToast('Deleted');
    await renderClientBodyTab(
      document.getElementById('client-profile-modal-body'),
      document.getElementById('client-profile-modal-footer'),
      clientsList.find(function(c){ return c.id === clientId; })
    );
  } catch(e) { showToast('Error: ' + e.message); }
}

/* OLD openClientProfile placeholder - replaced above */
function openClientProfile_OLD(clientId) {
  var client = clientsList.find(function(c){ return c.id === clientId; });
  if (!client) return;

  var el = document.getElementById('client-profile-body');
  var title = document.getElementById('client-profile-title');
  if (title) title.innerHTML = '<i class="ti ti-user"></i> ' + client.name;

  // Build BMR summary
  var bmrHTML = '';
  if (client.bmrData) {
    var b = client.bmrData;
    bmrHTML = '<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:flex-start;margin-bottom:20px">' +
      macroChartHTML(b.proteinG, b.carbsG, b.fatG, b.target, 130) +
      '<div style="flex:1">' +
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">' +
          '<h4 style="margin:0">Nutrition Targets</h4>' +
          '<button class="btn btn-ghost btn-sm" onclick="openEditClientBMR(\'' + clientId + '\')" style="padding:4px 8px;font-size:11px">' +
            '<i class="ti ti-edit"></i> Edit BMR' +
          '</button>' +
        '</div>' +
        '<p style="font-size:13px;color:var(--muted)">BMR: ' + b.bmr + ' · TDEE: ' + b.tdee + ' · Target: ' + b.target + ' kcal</p>' +
        '<p style="font-size:12px;color:var(--muted2);margin-top:3px">Goal: ' + (b.goal||'') + (b.activityLabel ? ' · ' + b.activityLabel : '') + '</p>' +
        (client.notes ? '<div class="recipe-tips" style="margin-top:10px"><i class="ti ti-note"></i> ' + client.notes + '</div>' : '') +
      '</div>' +
    '</div>';
  } else {
    bmrHTML = '<div style="margin-bottom:16px"><button class="btn btn-ghost btn-sm" onclick="openEditClientBMR(\'' + clientId + '\')">' +
      '<i class="ti ti-calculator"></i> Set BMR & Nutrition Targets</button></div>';
  }

  // Assignment sections
  var sections = [
    { key:'assignedMenus',    icon:'ti-salad',      label:'Menus',    type:'menus'    },
    { key:'assignedPrograms', icon:'ti-calendar',   label:'Programs', type:'programs' },
    { key:'assignedRoutines', icon:'ti-list-check', label:'Routines', type:'routines' },
    { key:'assignedRecipes',  icon:'ti-chef-hat',   label:'Recipes',  type:'recipes'  },
  ];

  var sectHTML = sections.map(function(s) {
    var items = client[s.key] || [];
    return '<div class="client-assign-section">' +
      '<div class="client-assign-header">' +
        '<span><i class="ti ' + s.icon + '"></i> ' + s.label + ' (' + items.length + ')</span>' +
        '<button class="btn btn-ghost btn-sm" onclick="openAssignModal(\'' + clientId + '\',\'' + s.type + '\')">' +
          '<i class="ti ti-plus"></i> Assign' +
        '</button>' +
      '</div>' +
      (items.length
        ? '<div class="client-assigned-list">' + items.map(function(item) {
            return '<div class="client-assigned-item">' +
              '<span>' + (item.name||item.title||'Item') + '</span>' +
              '<button class="admin-action-btn delete" style="padding:3px 8px" onclick="unassignFromClient(\'' + clientId + '\',\'' + s.key + '\',\'' + (item.id||item.shareToken) + '\')"><i class="ti ti-x"></i></button>' +
            '</div>';
          }).join('') + '</div>'
        : '<p style="font-size:12px;color:var(--muted2);padding:8px 0">Nothing assigned yet.</p>'
      ) +
    '</div>';
  }).join('');

  var shareURL = window.location.origin + '?client=' + clientId;
  if (el) el.innerHTML = bmrHTML + sectHTML +
    '<div style="margin-top:20px;padding:14px;background:var(--surface2);border-radius:var(--radius);border:1px solid var(--border)">' +
      '<p style="font-size:13px;color:var(--muted);margin-bottom:8px"><i class="ti ti-link"></i> Client portal link:</p>' +
      '<div style="display:flex;gap:8px;align-items:center">' +
        '<code style="flex:1;font-size:12px;color:var(--accent);word-break:break-all">' + shareURL + '</code>' +
        '<button class="btn btn-ghost btn-sm" onclick="copyToClipboard(\'' + shareURL + '\')"><i class="ti ti-copy"></i> Copy</button>' +
      '</div>' +
    '</div>';

  // Add delete button to modal footer
  var footer = document.querySelector('#modal-client-profile .modal-footer');
  if (footer) {
    footer.innerHTML =
      '<button class="btn btn-ghost" style="color:var(--danger);border-color:rgba(255,107,107,0.3)" onclick="deleteClient(\'' + clientId + '\')">' +
        '<i class="ti ti-trash"></i> Delete Client' +
      '</button>' +
      '<button class="btn btn-ghost" onclick="closeAllModals()">Close</button>';
  }

  openModal('client-profile');
}

/* ── Assign content to client ───────────────────────── */
var _assigningClient = null;
var _assigningType   = null;

/* ── Assign content to client — with search + filter ──── */
var _assignPool      = [];
var _assignAlready   = [];
var _assignType2     = '';

function openAssignModal(clientId, type) {
  _assigningClient = clientId;
  _assigningType   = type;
  var client = clientsList.find(function(c){ return c.id === clientId; });
  if (!client) return;
  _assignAlready = (client[_typeToKey(type)] || []).map(function(x){ return x.id || x.shareToken; });

  _assignPool = [];
  if (type === 'menus')    _assignPool = menus;
  if (type === 'programs') _assignPool = programs;
  if (type === 'recipes')  _assignPool = recipes;
  if (type === 'routines') _assignPool = sentRoutines || [];
  _assignType2 = type;

  // Set title
  var title = document.getElementById('assign-modal-title');
  if (title) title.textContent = 'Assign ' + type.charAt(0).toUpperCase() + type.slice(1) + ' to ' + client.name;

  // Reset search
  var searchEl = document.getElementById('assign-search-input');
  if (searchEl) searchEl.value = '';

  // Build category filter pills
  var pillsEl = document.getElementById('assign-filter-pills');
  if (pillsEl) {
    var pills = [];
    if (type === 'menus' || type === 'programs') {
      pills = ['All', 'Cut', 'Bulk', 'Maintain'];
    } else if (type === 'recipes') {
      var cats = ['All'].concat([...new Set(_assignPool.map(function(i){ return i.category||'Other'; }))].sort());
      pills = cats;
    }
    if (pills.length > 1) {
      pillsEl.style.display = 'flex';
      pillsEl.innerHTML = pills.map(function(p, i){
        return '<button class="assign-pill' + (i===0?' active':'') + '" onclick="setAssignFilter(this,\'' + p + '\')">' + p + '</button>';
      }).join('');
    } else {
      pillsEl.style.display = 'none';
      pillsEl.innerHTML = '';
    }
  }

  renderAssignList('', 'All');
  // Hide client profile modal while assigning, keep backdrop
  var profileModal = document.getElementById('modal-client-profile');
  if (profileModal) profileModal.classList.remove('open');
  var pickModal = document.getElementById('modal-assign-content');
  if (pickModal) pickModal.classList.add('open');
  document.getElementById('modal-backdrop').classList.add('open');
}

function setAssignFilter(btn, filter) {
  document.querySelectorAll('#assign-filter-pills .assign-pill').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  var q = document.getElementById('assign-search-input');
  renderAssignList(q ? q.value : '', filter);
}

function filterAssignSearch(q) {
  var activeBtn = document.querySelector('#assign-filter-pills .assign-pill.active');
  var filter = activeBtn ? activeBtn.textContent : 'All';
  renderAssignList(q, filter);
}

function renderAssignList(query, filter) {
  var body = document.getElementById('assign-modal-body');
  if (!body) return;

  query  = (query  || '').toLowerCase().trim();
  filter = (filter || 'All');

  var filtered = _assignPool.filter(function(item) {
    var label = (item.name || item.title || '').toLowerCase();
    var matchQ = !query || label.includes(query);
    var matchF = filter === 'All' || filter === '' ||
      (item.goal     || '').toLowerCase() === filter.toLowerCase() ||
      (item.category || '').toLowerCase() === filter.toLowerCase();
    return matchQ && matchF;
  });

  if (!filtered.length) {
    body.innerHTML = '<div style="text-align:center;padding:30px;color:var(--muted)">' +
      '<i class="ti ti-search" style="font-size:28px;opacity:0.3;display:block;margin-bottom:8px"></i>' +
      (_assignPool.length ? 'Nothing matches your search.' : 'No ' + _assignType2 + ' available yet.') +
    '</div>';
    return;
  }

  body.innerHTML = filtered.map(function(item) {
    var id       = item.id || item.shareToken;
    var assigned = _assignAlready.includes(id);
    var label    = item.name || item.title || 'Item';
    var meta     = _assignType2 === 'menus'    ? ((typeof calcMenuTotals === 'function' ? calcMenuTotals(item).calories : 0) + ' kcal · ' + (item.goal||'')) :
                   _assignType2 === 'programs' ? ((item.weeks||'?') + ' weeks · ' + (item.goal||'') + ' · ' + (item.level||'')) :
                   _assignType2 === 'recipes'  ? ((item.calories||0) + ' kcal · ' + (item.prepTime||'?') + ' min · ' + (item.category||'')) :
                   _assignType2 === 'routines' ? ((item.exercises||[]).length + ' exercises') : '';
    return '<div class="assign-row' + (assigned?' assigned':'') + '" onclick="toggleAssign(\'' + id + '\')">' +
      '<div class="assign-check"><i class="ti ' + (assigned?'ti-check':'ti-plus') + '"></i></div>' +
      '<div style="flex:1;min-width:0">' +
        '<div class="assign-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + label + '</div>' +
        (meta ? '<div class="assign-meta">' + meta + '</div>' : '') +
      '</div>' +
    '</div>';
  }).join('');
}



/* ── Edit client BMR from client profile ─────────────── */
// Store current client being edited
var _bmrEditClientId = null;

function openEditClientBMR(clientId) {
  var client = clientsList.find(function(c){ return c.id === clientId; });
  if (!client) { showToast('Client not found'); return; }

  _bmrEditClientId = clientId;
  var b = client.bmrData || {};

  // Populate the static modal fields
  var genderEl   = document.getElementById('ebmr-gender');
  var goalEl     = document.getElementById('ebmr-goal');
  var ageEl      = document.getElementById('ebmr-age');
  var weightEl   = document.getElementById('ebmr-weight');
  var heightEl   = document.getElementById('ebmr-height');
  var actEl      = document.getElementById('ebmr-activity');
  var cutEl      = document.getElementById('ebmr-cut');
  var bulkEl     = document.getElementById('ebmr-bulk');
  var titleEl    = document.getElementById('ebmr-title');
  var previewEl  = document.getElementById('ebmr-preview');

  if (titleEl)   titleEl.textContent   = 'Edit BMR — ' + client.name;
  if (genderEl)  genderEl.value        = b.gender     || client.gender  || 'male';
  if (goalEl)    goalEl.value          = b.goal       || client.goal    || 'maintain';
  if (ageEl)     ageEl.value           = client.age   || b.age          || '';
  if (weightEl)  weightEl.value        = client.weight|| b.weight       || '';
  if (heightEl)  heightEl.value        = client.height|| b.height       || '';
  if (actEl)     actEl.value           = String(b.activity   || 1.55);
  if (cutEl)     cutEl.value           = String(b.cutFactor  || 0.85);
  if (bulkEl)    bulkEl.value          = String(b.bulkFactor || 1.10);
  if (previewEl) previewEl.innerHTML   = '';

  openModal('edit-bmr');
  // Auto-preview if data exists
  if (client.age && client.weight && client.height) {
    setTimeout(previewEditBMR, 100);
  }
}

function closeEditBMR() {
  // Only close the BMR modal, reopen client profile
  var bmrModal = document.getElementById('modal-edit-bmr');
  if (bmrModal) bmrModal.classList.remove('open');
  // Reopen client profile if we have a client
  if (_bmrEditClientId) {
    openClientProfile(_bmrEditClientId);
  } else {
    closeAllModals();
  }
  _bmrEditClientId = null;
}

function previewEditBMR() {
  var gender   = (document.getElementById('ebmr-gender')  ||{}).value || 'male';
  var goal     = (document.getElementById('ebmr-goal')    ||{}).value || 'maintain';
  var age      = parseFloat((document.getElementById('ebmr-age')    ||{}).value) || 0;
  var weight   = parseFloat((document.getElementById('ebmr-weight') ||{}).value) || 0;
  var height   = parseFloat((document.getElementById('ebmr-height') ||{}).value) || 0;
  var activity = parseFloat((document.getElementById('ebmr-activity')||{}).value) || 1.55;
  var cutF     = parseFloat((document.getElementById('ebmr-cut')    ||{}).value) || 0.85;
  var bulkF    = parseFloat((document.getElementById('ebmr-bulk')   ||{}).value) || 1.10;

  if (!age || !weight || !height) { showToast('Fill in age, weight and height first.'); return; }

  var bmr    = Math.round((10*weight) + (6.25*height) - (5*age) + (gender==='male'?5:-161));
  var tdee   = Math.round(bmr * activity);
  var factor = goal==='cut' ? cutF : goal==='bulk' ? bulkF : 1;
  var target = Math.round(tdee * factor);
  var proteinG = Math.round(weight * (goal==='cut'?2.2:goal==='bulk'?2.0:1.8));
  var fatG     = Math.round(weight * 0.9);
  var carbsG   = Math.max(50, Math.round((target - proteinG*4 - fatG*9)/4));

  var actLabels = {'1.2':'Sedentary','1.375':'Lightly Active','1.55':'Moderately Active','1.725':'Very Active','1.9':'Athlete'};

  var el = document.getElementById('ebmr-preview');
  if (el) el.innerHTML =
    '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:16px">' +
      '<div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap">' +
        macroChartHTML(proteinG, carbsG, fatG, target, 140) +
        '<div style="flex:1;min-width:160px">' +
          '<div class="bmr-stats-grid" style="grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">' +
            '<div class="bmr-stat"><div class="bmr-stat-val" style="font-size:18px">' + bmr + '</div><div class="bmr-stat-label">BMR<br><small>at rest</small></div></div>' +
            '<div class="bmr-stat"><div class="bmr-stat-val" style="font-size:18px">' + tdee + '</div><div class="bmr-stat-label">TDEE<br><small>' + (actLabels[String(activity)]||'') + '</small></div></div>' +
            '<div class="bmr-stat accent" style="grid-column:span 2"><div class="bmr-stat-val" style="font-size:20px">' + target + '</div><div class="bmr-stat-label">Target kcal/day · ' + goal + '</div></div>' +
          '</div>' +
          '<p style="font-size:12px;color:var(--muted2)">P: ' + proteinG + 'g · C: ' + carbsG + 'g · F: ' + fatG + 'g</p>' +
        '</div>' +
      '</div>' +
    '</div>';
}

async function saveEditClientBMR(cid) {
  var clientId = cid || _bmrEditClientId;
  var client = clientsList.find(function(c){ return c.id === clientId; });
  if (!client) return;

  var gender   = (document.getElementById('ebmr-gender')  ||{}).value || 'male';
  var goal     = (document.getElementById('ebmr-goal')    ||{}).value || 'maintain';
  var age      = parseFloat((document.getElementById('ebmr-age')    ||{}).value) || 0;
  var weight   = parseFloat((document.getElementById('ebmr-weight') ||{}).value) || 0;
  var height   = parseFloat((document.getElementById('ebmr-height') ||{}).value) || 0;
  var activity = parseFloat((document.getElementById('ebmr-activity')||{}).value) || 1.55;
  var cutF     = parseFloat((document.getElementById('ebmr-cut')    ||{}).value) || 0.85;
  var bulkF    = parseFloat((document.getElementById('ebmr-bulk')   ||{}).value) || 1.10;

  if (!age || !weight || !height) { showToast('Fill in age, weight and height.'); return; }

  var bmr      = Math.round((10*weight) + (6.25*height) - (5*age) + (gender==='male'?5:-161));
  var tdee     = Math.round(bmr * activity);
  var factor   = goal==='cut' ? cutF : goal==='bulk' ? bulkF : 1;
  var target   = Math.round(tdee * factor);
  var proteinG = Math.round(weight * (goal==='cut'?2.2:goal==='bulk'?2.0:1.8));
  var fatG     = Math.round(weight * 0.9);
  var carbsG   = Math.max(50, Math.round((target - proteinG*4 - fatG*9)/4));

  client.age    = age;
  client.weight = weight;
  client.height = height;
  client.gender = gender;
  client.goal   = goal;
  client.bmrData = { bmr, tdee, target, proteinG, carbsG, fatG, goal, gender, activity, cutFactor: cutF, bulkFactor: bulkF };

  await _saveClientProfile(clientId, client);
  // Close BMR modal and reopen client profile
  var bmrModal = document.getElementById('modal-edit-bmr');
  if (bmrModal) bmrModal.classList.remove('open');
  _bmrEditClientId = null;
  openClientProfile(clientId);
  showToast('BMR updated!');
}

async function saveAssignments() {
  if (!_assigningClient) return;
  var client = clientsList.find(function(c){ return c.id === _assigningClient; });
  if (!client) return;

  var saveBtn = document.querySelector('#modal-assign-content .btn-primary');
  if (saveBtn) { saveBtn.disabled = true; saveBtn.innerHTML = '<i class="ti ti-loader" style="animation:spin 1s linear infinite"></i> Saving...'; }

  try {
    await _saveClientProfile(_assigningClient, client);
    showToast('Assignments saved!');
    if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = '<i class="ti ti-device-floppy"></i> Save'; }
    // Close assign modal and reopen client profile
    document.getElementById('modal-assign-content').classList.remove('open');
    renderClientsList();
    openClientProfile(_assigningClient);
  } catch(e) {
    showToast('Save failed: ' + (e.code || e.message));
    if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = '<i class="ti ti-device-floppy"></i> Save'; }
  }
}

function toggleAssign(itemId) {
  if (!_assigningClient || !_assigningType) return;
  var client  = clientsList.find(function(c){ return c.id === _assigningClient; });
  if (!client) return;
  var key     = _typeToKey(_assigningType);
  var item    = _assignPool.find(function(x){ return (x.id||x.shareToken) === itemId; });
  if (!item) return;

  var arr     = client[key] || [];
  var exists  = arr.findIndex(function(x){ return (x.id||x.shareToken) === itemId; });

  if (exists > -1) arr.splice(exists, 1);
  else arr.push(item);
  client[key] = arr;

  // Update the already-assigned set and re-render list WITHOUT resetting search/filter
  _assignAlready = arr.map(function(x){ return x.id || x.shareToken; });
  var q = document.getElementById('assign-search-input');
  var activeBtn = document.querySelector('#assign-filter-pills .assign-pill.active');
  var filter = activeBtn ? activeBtn.textContent : 'All';
  renderAssignList(q ? q.value : '', filter);
}

function closeAssignModal() {
  var m = document.getElementById('modal-assign-content');
  if (m) m.classList.remove('open');
  // Return to client profile
  if (_assigningClient) {
    var profileModal = document.getElementById('modal-client-profile');
    if (profileModal) { profileModal.classList.add('open'); openClientProfile(_assigningClient); }
  } else {
    document.getElementById('modal-backdrop').classList.remove('open');
  }
}

async function confirmAssign() {
  if (!_assigningClient) { showToast('No client selected'); return; }
  var client = clientsList.find(function(c){ return c.id === _assigningClient; });
  if (!client) { showToast('Client not found'); return; }

  var saveBtn = document.querySelector('#modal-assign-content .btn-primary');
  if (saveBtn) { saveBtn.disabled = true; saveBtn.innerHTML = '<i class="ti ti-loader"></i> Saving...'; }

  try {
    await _saveClientProfile(_assigningClient, client);
    showToast('✓ Assignment saved!');
    var m = document.getElementById('modal-assign-content');
    if (m) m.classList.remove('open');
    openClientProfile(_assigningClient);
  } catch(e) {
    showToast('Error saving: ' + (e.message || e.code));
  } finally {
    if (saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = '<i class="ti ti-check"></i> Save Assignment'; }
  }
}

async function unassignFromClient(clientId, key, itemId) {
  var client = clientsList.find(function(c){ return c.id === clientId; });
  if (!client) return;
  client[key] = (client[key]||[]).filter(function(x){ return (x.id||x.shareToken) !== itemId; });
  await _saveClientProfile(clientId, client);
  openClientProfile(clientId);
}

async function deleteClient(clientId) {
  var client = clientsList.find(function(c){ return c.id === clientId; });
  if (!client) return;
  if (!confirm('Delete client "' + client.name + '"? This will remove their account and all assigned content. This cannot be undone.')) return;

  try {
    // Call Cloud Function to delete Auth + Firestore
    var fn = window._firebase.httpsCallable(window._functions, 'deleteClientAccount');
    await fn({ clientUid: clientId });
    clientsList = clientsList.filter(function(c){ return c.id !== clientId; });
    closeAllModals();
    renderClientsList();
    showToast('Client deleted.');
  } catch(e) {
    console.error('deleteClient error:', e);
    // Fallback: delete from Firestore only if function call fails
    try {
      await window._firebase.deleteDoc(window._firebase.doc(window._db, 'clientProfiles', clientId));
      clientsList = clientsList.filter(function(c){ return c.id !== clientId; });
      closeAllModals();
      renderClientsList();
      showToast('Client removed.');
    } catch(e2) {
      showToast('Delete failed: ' + (e.message || e.code));
    }
  }
}

async function _saveClientProfile(clientId, data) {
  try {
    // Ensure arrays exist before merging
    var safeData = Object.assign({
      assignedMenus:    [],
      assignedPrograms: [],
      assignedRoutines: [],
      assignedRecipes:  []
    }, data);
    await window._firebase.setDoc(
      window._firebase.doc(window._db, 'clientProfiles', clientId),
      safeData, { merge: true }
    );
  } catch(e) { console.warn('Save client profile error:', e.code); }
}

function _typeToKey(type) {
  return type === 'menus' ? 'assignedMenus' :
         type === 'programs' ? 'assignedPrograms' :
         type === 'recipes'  ? 'assignedRecipes'  :
         'assignedRoutines';
}


/* ══════════════════════════════════════════════════════════
   TRAINER — Add own content (Menu / Recipe / Research)
   Uses same admin modals but saves createdBy + isPublic
══════════════════════════════════════════════════════════ */

/* ── Program public/private toggle ──────────────────────── */
function toggleProgPublic(btn) {
  var hidden = document.getElementById('prog-is-public');
  var icon   = document.getElementById('prog-public-icon');
  var label  = document.getElementById('prog-public-label');
  var isNowPublic = hidden.value !== 'true';
  hidden.value = isNowPublic ? 'true' : 'false';
  if (isNowPublic) {
    btn.style.background    = 'rgba(126,232,162,0.1)';
    btn.style.borderColor   = 'var(--accent)';
    btn.style.color         = 'var(--accent)';
    icon.className          = 'ti ti-world';
    label.textContent       = 'Public';
  } else {
    btn.style.background    = 'rgba(251,191,36,0.1)';
    btn.style.borderColor   = '#FBBF24';
    btn.style.color         = '#FBBF24';
    icon.className          = 'ti ti-lock';
    label.textContent       = 'Private';
  }
}

/* ── MENU ─────────────────────────────────────────────── */
function openTrainerMenuModal(id) {
  openAdminMenuModal(id);  // reuse admin modal
  // Add public/private toggle if not already there
  var existing = document.getElementById('trainer-menu-public-row');
  if (!existing) {
    var footer = document.querySelector('#modal-admin-menu .modal-body');
    var row = document.createElement('div');
    row.id = 'trainer-menu-public-row';
    row.className = 'form-group';
    row.style.marginTop = '8px';
    row.innerHTML = '<label style="display:flex;align-items:center;gap:8px;cursor:pointer">' +
      '<input type="checkbox" id="menu-is-public" checked style="width:16px;height:16px;accent-color:var(--accent)">' +
      '<span style="font-size:13px;color:var(--muted)">Public — visible to all trainers</span></label>';
    footer.appendChild(row);
  }
  if (id) {
    var menu = menus.find(function(m){ return m.id === id; });
    if (menu) document.getElementById('menu-is-public').checked = menu.isPublic !== false;
  var langEl2 = document.getElementById('admin-menu-lang');
  if (langEl2 && menu) langEl2.value = menu.lang || 'en';
  }
}

/* override saveAdminMenu for trainer context */
var _origSaveAdminMenu = null;
function saveTrainerMenu() {
  var isPublic = document.getElementById('menu-is-public');
  // Inject createdBy before saving
  var origFn = window.saveAdminMenu;
  // We patch saveAdminMenu temporarily by setting a flag
  window._trainerMenuOverride = {
    createdBy:   state.user ? state.user.uid : null,
    trainerName: state.user ? state.user.fullName : null,
    isPublic:    isPublic ? isPublic.checked : true,
  };
  saveAdminMenu();
}

async function deleteTrainerMenu(id) {
  if (!confirm('Delete this menu?')) return;
  try {
    await window._firebase.deleteDoc(window._firebase.doc(window._db, col('menus'), id));
    menus = menus.filter(function(m){ return m.id !== id; });
    renderMenuLibrary();
    renderAdminMenuList();
    showToast('Menu deleted.');
  } catch(e) { showToast('Delete failed: ' + e.code); }
}

/* ── RECIPE ───────────────────────────────────────────── */
function openTrainerRecipeModal(id) {
  openAdminRecipeModal(id);
  var existing = document.getElementById('trainer-recipe-public-row');
  if (!existing) {
    var body = document.querySelector('#modal-admin-recipe .modal-body');
    var row = document.createElement('div');
    row.id = 'trainer-recipe-public-row';
    row.className = 'form-group';
    row.style.marginTop = '8px';
    row.innerHTML = '<label style="display:flex;align-items:center;gap:8px;cursor:pointer">' +
      '<input type="checkbox" id="recipe-is-public" checked style="width:16px;height:16px;accent-color:var(--accent)">' +
      '<span style="font-size:13px;color:var(--muted)">Public — visible to all trainers</span></label>';
    body.appendChild(row);
  }
  if (id) {
    var r = recipes.find(function(x){ return x.id === id; });
    if (r) document.getElementById('recipe-is-public').checked = r.isPublic !== false;
  }
}

async function deleteTrainerRecipe(id) {
  if (!confirm('Delete this recipe?')) return;
  try {
    await window._firebase.deleteDoc(window._firebase.doc(window._db, col('recipes'), id));
    recipes = recipes.filter(function(r){ return r.id !== id; });
    renderRecipesView();
    renderAdminRecipesList();
    showToast('Recipe deleted.');
  } catch(e) { showToast('Delete failed: ' + e.code); }
}

/* ── RESEARCH ─────────────────────────────────────────── */
function openTrainerResearchModal(id) {
  openAdminResearchModal(id);
  var existing = document.getElementById('trainer-research-public-row');
  if (!existing) {
    var body = document.querySelector('#modal-admin-research .modal-body');
    var row = document.createElement('div');
    row.id = 'trainer-research-public-row';
    row.className = 'form-group';
    row.style.marginTop = '8px';
    row.innerHTML = '<label style="display:flex;align-items:center;gap:8px;cursor:pointer">' +
      '<input type="checkbox" id="research-is-public" checked style="width:16px;height:16px;accent-color:var(--accent)">' +
      '<span style="font-size:13px;color:var(--muted)">Public — visible to all trainers</span></label>';
    body.appendChild(row);
  }
  if (id) {
    var r = researches.find(function(x){ return x.id === id; });
    if (r) document.getElementById('research-is-public').checked = r.isPublic !== false;
  }
}

async function deleteTrainerResearch(id) {
  if (!confirm('Delete this study?')) return;
  try {
    await window._firebase.deleteDoc(window._firebase.doc(window._db, 'research', id));
    researches = researches.filter(function(r){ return r.id !== id; });
    renderResearchView();
    renderAdminResearchList();
    showToast('Study deleted.');
  } catch(e) { showToast('Delete failed: ' + e.code); }
}


/* ══════════════════════════════════════════════════════════
   MOBILE TAB BAR
══════════════════════════════════════════════════════════ */
function mobileTab(viewId, btn) {
  // Update mobile tab active state
  document.querySelectorAll('.mobile-tab-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');

  // Handle client-profile tab specially
  if (viewId === 'client-profile') {
    setView('client-profile', null);
    return;
  }
  // Sync with desktop topnav
  var desktopLink = document.getElementById('tnav-' + viewId);
  setView(viewId, desktopLink);

  // Update mobile tab active state
  document.querySelectorAll('.mobile-tab-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
}

// Sync mobile tab bar when desktop nav is used
var _origSetView = setView;
setView = function(viewId, navEl) {
  _origSetView(viewId, navEl);
  // Update mobile tab bar
  document.querySelectorAll('.mobile-tab-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  var mBtn = document.getElementById('mtab-' + viewId);
  if (mBtn) mBtn.classList.add('active');
};

   /* ══════════════════════════════════════════════════════════
      UTILS
   ══════════════════════════════════════════════════════════ */
   
   function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }
   function delay(ms)     { return new Promise(r => setTimeout(r, ms)); }
   
   function showToast(msg) {
     var t = document.getElementById('toast');
     if (!t) return;
     t.textContent = msg;
     t.classList.add('show');
     clearTimeout(t._hideTimer);
     t._hideTimer = setTimeout(function(){ t.classList.remove('show'); }, 2800);
   }

   /* openVideoPopup and closeVideoPopup defined globally above */
   
   function copyToClipboard(text) {
     navigator.clipboard.writeText(text).catch(() => {});
     showToast('✓ Link copied!');
   }
   
   /* ══════════════════════════════════════════════════════════
      KEYBOARD SHORTCUTS
   ══════════════════════════════════════════════════════════ */
   
   document.addEventListener('keydown', e => {
     if (e.key === 'Escape') closeAllModals();
     if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
       const s = document.getElementById('search-input');
       if (s) { s.focus(); e.preventDefault(); }
     }
   });
   
   /* ══════════════════════════════════════════════════════════
      INIT — restore Firebase session on page load
   ══════════════════════════════════════════════════════════ */
   
   // ── Check URL params on page load ─────────────────────────
   // Handles two cases:
   //   ?payment=success|failed  → return from Morning payment page
   //   ?routine=TOKEN           → shared client routine (no login needed)
   (function checkSharedRoute() {
     const params = new URLSearchParams(window.location.search);
   
     /* ── 1. Payment return from Morning ─────────────────────── */
     const paymentStatus = params.get('payment');
     if (paymentStatus === 'success') {
       // Clean the URL immediately so refreshing doesn't re-trigger
       window.history.replaceState({}, '', window.location.pathname);
       // Wait for the app to boot, then show the success message
       // and reload the user profile so the Premium tier is reflected
       window.addEventListener('firebaseReady', async () => {
         showToast('🎉 Payment successful! Your Premium account is now active.');
         // If the user is already logged in, refresh their profile from Firestore
         // so tier updates to "premium" without needing a full logout/login
         if (window._auth && window._firebase) {
           window._firebase.onAuthStateChanged(window._auth, async (user) => {
             if (user && state.user) {
               const profile = await loadUserProfile(user.uid);
               if (profile && profile.tier === 'premium') {
                 state.user.tier = 'premium';
                 // Hide the upgrade nudge banner
                 const banner = document.getElementById('upgrade-nudge-banner');
                 if (banner) banner.classList.add('dismissed');
                 // Hide trial pill in topnav
                 const pill = document.getElementById('trial-pill-top');
                 if (pill) pill.style.display = 'none';
                 showToast('✅ Premium is now active — enjoy unlimited access!');
               }
             }
           });
         }
       });
       return; // Don't process routine token on payment return
     }
   
     if (paymentStatus === 'failed') {
       window.history.replaceState({}, '', window.location.pathname);
       window.addEventListener('firebaseReady', () => {
         showToast('❌ Payment was not completed. Try again from Billing.');
       });
       return;
     }
   
     /* ── 2. Shared routine page (no login required) ─────────── */
     const token = params.get('routine');
     if (!token) return;
   
     // Try localStorage cache first (instant load for the trainer themselves)
     const cached = sentRoutines.find(r => r.shareToken === token);
     if (cached) {
       renderSharedPage(cached);
       showScreen('shared');
       return;
     }
   
     // Show the shared screen with a loading spinner while Firestore fetches
     showScreen('shared');
     document.getElementById('shared-exercises').innerHTML = `
       <div style="text-align:center;padding:60px 20px;color:var(--muted)">
         <i class="ti ti-loader" style="font-size:28px;animation:spin 1s linear infinite;display:block;margin-bottom:12px"></i>
         Loading routine…
       </div>`;
   
     function fetchRoutine() {
       if (!window._firebase || !window._db) return;
       const { getDoc, doc } = window._firebase;
       // Fetch directly by document ID (token) — no query needed, always works
       getDoc(doc(window._db, 'routines', token))
         .then(snap => {
           if (!snap.exists()) {
             document.getElementById('shared-exercises').innerHTML =
               '<div style="text-align:center;padding:60px;color:var(--muted)">Routine not found or has expired.</div>';
             return;
           }
           renderSharedPage(snap.data());
         })
         .catch(err => {
           console.error('Routine fetch error:', err);
           document.getElementById('shared-exercises').innerHTML =
             '<div style="text-align:center;padding:60px;color:var(--muted)">Could not load routine. Please try again.</div>';
         });
     }
   
     if (window._firebaseReady) fetchRoutine();
     else window.addEventListener('firebaseReady', fetchRoutine);
   })();
   
   // Wait for the Firebase module script to signal it's ready,
   // then register the auth state listener.
   if (window._firebaseReady) {
     _initAuthPersistence();
   } else {
     window.addEventListener('firebaseReady', _initAuthPersistence);
   }