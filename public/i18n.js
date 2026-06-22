// RepCast — i18n core
// Loaded AFTER i18n.en.js and i18n.he.js, BEFORE app.js.
// Exposes: _lang, t(), ct(), col(), colHe(), colEn()
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
  en: window._i18n_en || {},
  he: window._i18n_he || {},
};

function t(key) {
  return (_i18n[_lang] && _i18n[_lang][key]) || (_i18n.en[key]) || key;
}

// Pick Hebrew or English content field
function ct(item, field) {
  if (_lang === 'he' && item[field + '_he']) return item[field + '_he'];
  return item[field] || '';
}