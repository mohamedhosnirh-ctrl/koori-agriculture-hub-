
/* ── SECURITY: SHA-256 hash helper (runs in browser, no library needed) ── */
async function hashPassword(pw) {
  const buf  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pw));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

document.addEventListener("DOMContentLoaded", function () {

  //HERO LEAVES (fallback decoration)
  const video = document.querySelector(".hero-video");
  const leavesContainer = document.getElementById("heroLeaves");
  const emojis = ["🌿","🌱","🍃","🌾","🌻","🍀"];
  function spawnLeaves() {
    if (!leavesContainer) return;
    for (let i = 0; i < 12; i++) {
      const leaf = document.createElement("span");
      leaf.className = "hero-leaf";
      leaf.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      leaf.style.left = Math.random() * 100 + "%";
      leaf.style.animationDuration = (8 + Math.random() * 10) + "s";
      leaf.style.animationDelay = (Math.random() * 10) + "s";
      leaf.style.fontSize = (1.2 + Math.random() * 1.5) + "rem";
      leavesContainer.appendChild(leaf);
    }
  }
//logo 
 
const kooriLogo = document.querySelector('.koori-logo');
if (kooriLogo) {
  kooriLogo.addEventListener('click', function(e) {
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.style.cssText = `position:fixed;width:${4+Math.random()*6}px;height:${4+Math.random()*6}px;border-radius:50%;background:${Math.random()>.5?'#F5C842':'#fde98a'};left:${e.clientX}px;top:${e.clientY}px;pointer-events:none;z-index:9999;`;
      document.body.appendChild(p);
      const angle = (Math.PI*2/18)*i;
      const dist  = 40 + Math.random()*60;
      p.animate([
        {transform:'translate(-50%,-50%) scale(1)',opacity:1},
        {transform:`translate(calc(-50% + ${Math.cos(angle)*dist}px),calc(-50% + ${Math.sin(angle)*dist}px)) scale(0)`,opacity:0}
      ],{duration:500+Math.random()*300,easing:'cubic-bezier(.16,1,.3,1)',fill:'forwards'})
      .onfinish = () => p.remove();
    }
  });
}
  // MOBILE HAMBURGER
  const hamburger = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", isOpen);
    });
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }
 
  //SEARCH FUNCTIONALITY
const searchData = [
  { name: "Vegetables",   nameAr: "خضروات",          emoji: "🥦", href: "products.html" },
  { name: "Fruits",       nameAr: "فواكه",            emoji: "🍎", href: "products.html" },
  { name: "Grains",       nameAr: "حبوب",             emoji: "🌾", href: "products.html" },
  { name: "Dairy",        nameAr: "ألبان",            emoji: "🥛", href: "products.html" },
  { name: "Herbs",        nameAr: "أعشاب",            emoji: "🌿", href: "products.html" },
  { name: "Honey",        nameAr: "عسل",              emoji: "🍯", href: "products.html" },
  { name: "Cows & Bulls", nameAr: "أبقار وثيران",     emoji: "🐄", href: "products.html" },
  { name: "Sheep",        nameAr: "أغنام",            emoji: "🐑", href: "products.html" },
  { name: "Goats",        nameAr: "ماعز",             emoji: "🐐", href: "products.html" },
  { name: "Poultry",      nameAr: "دواجن",            emoji: "🐔", href: "products.html" },
  { name: "Agricultural Medicines", nameAr: "أدوية زراعية", emoji: "💊", href: "products.html" },
  { name: "Animal Feed",  nameAr: "علف الحيوانات",   emoji: "🌾", href: "products.html" },
  { name: "Farm Equipment", nameAr: "معدات زراعية",  emoji: "🚜", href: "products.html" },
  { name: "Seeds & Fertilizers", nameAr: "بذور وأسمدة", emoji: "🌱", href: "products.html" },
  { name: "Fresh Herbs Bundle", nameAr: "باقة أعشاب طازجة", emoji: "🌿", href: "products.html" },
  { name: "Sweet Corn",   nameAr: "ذرة حلوة",        emoji: "🌽", href: "products.html" },
  { name: "Organic Tomatoes", nameAr: "طماطم عضوية", emoji: "🍅", href: "products.html" },
  { name: "Baby Carrots", nameAr: "جزر صغير",        emoji: "🥕", href: "products.html" },
];
 
  const navSearch = document.getElementById("navSearch");
  const searchResults = document.getElementById("searchResults");
 
  if (navSearch && searchResults) {
navSearch.addEventListener("input", function () {
  const q = this.value.trim().toLowerCase();
  if (!q) { searchResults.classList.remove("open"); return; }
  const matches = searchData.filter(item =>
    item.name.toLowerCase().includes(q) || (item.nameAr && item.nameAr.includes(q))
  ).slice(0, 6);
searchResults.innerHTML = '';
      if (matches.length === 0) {
        const noRes = document.createElement('div');
        noRes.className = 'search-no-results';
        noRes.textContent = 'No results for "' + this.value + '"';
        searchResults.appendChild(noRes);
      } else {
        matches.forEach(m => {
          const a = document.createElement('a');
          a.className = 'search-result-item';
          a.href = 'products.html?search=' + encodeURIComponent(m.name);
          const emoji = document.createElement('span');
          emoji.className = 'search-result-emoji';
          emoji.textContent = m.emoji;
          const name = document.createTextNode(m.name);
          a.appendChild(emoji);
          a.appendChild(name);
          searchResults.appendChild(a);
        });
      }
  searchResults.classList.add("open");
});
 
navSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && this.value.trim()) {
    window.location.href = "products.html?search=" + encodeURIComponent(this.value.trim());
  }
  if (e.key === "Escape") { searchResults.classList.remove("open"); this.blur(); }
});
 
    // clear button: close results, clear input, AND collapse the search box
    const clearBtn = navSearch.closest(".search-box").querySelector("button[type='reset']");
    if (clearBtn) clearBtn.addEventListener("click", () => {
      searchResults.classList.remove("open");
      navSearch.value = "";
      navSearch.blur(); // collapses the box back to its small pill state
    });
  }
 
  //ADD ITEM LINK
  const addItemLink = document.getElementById("addItemLink");
  if (addItemLink) {
    if (localStorage.getItem("loggedIn") !== "true") {
      addItemLink.style.opacity = "0.5";
      addItemLink.style.cursor = "not-allowed";
      addItemLink.setAttribute("aria-disabled", "true");
    }
    addItemLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = localStorage.getItem("loggedIn") === "true" ? "add-product.html" : "login.html";
    });
  }
  const addItemLinkMobile = document.getElementById("addItemLinkMobile");
  if (addItemLinkMobile) {
    addItemLinkMobile.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = localStorage.getItem("loggedIn") === "true" ? "add-product.html" : "login.html";
    });
  }
 
  //LANGUAGE
  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    const savedLang = localStorage.getItem("siteLanguage") || "en";
    langSelect.value = savedLang;
    applyLang(savedLang);
    langSelect.addEventListener("change", function () {
      const lang = this.value;
      localStorage.setItem("siteLanguage", lang);
      applyLang(lang);
    });
  }
 
  spawnLeaves();

  // ── INIT (merged from second DOMContentLoaded) ──
  const urlParams  = new URLSearchParams(window.location.search);
  const redirectTo = urlParams.get('redirect');
  if (redirectTo === 'add-product.html') {
    showAlert('🔒 Please log in to add a product.', 'error');
  }

  const savedLang = localStorage.getItem('siteLanguage') || 'en';
  const langSel   = document.getElementById('languageSelect');
  if (langSel) langSel.value = savedLang;
  applyLang(savedLang);

  const savedEmail = localStorage.getItem('rememberEmail');
  if (savedEmail) {
    document.getElementById('loginEmail').value   = savedEmail;
    document.getElementById('rememberMe').checked = true;

    // Show saved phone if the account has one
    const accounts = JSON.parse(localStorage.getItem('kooriAccounts') || '[]');
    const acct = accounts.find(a => a.email === savedEmail);
    if (acct && acct.phone) {
      document.getElementById('savedPhoneDisplay').value = acct.phone;
      document.getElementById('savedPhoneField').style.display = 'block';
    }
  }

  if (localStorage.getItem('loggedIn') === 'true') {
    const redirect = urlParams.get('redirect') || 'products.html';
    window.location.href = redirect;
  }

  document.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    if (document.getElementById('panelLogin').classList.contains('visible')) doLogin();
    else doRegister();
  });

});

/* 
   LANGUAGE
 */
const LOGIN_TRANSLATIONS = {
  en: {
    search_ph:   'Search products…', search_btn: '🔍 Search',
    nav_home:    'Home', nav_products: 'Products', nav_categories: 'Categories', nav_contact: 'Contact',
    welcome:     'Welcome back',     welcome_sub: 'Log in to your koori account',
    join:        'Join koori',       join_sub:    'Create your free account today',
    tab_login:   'Login',            tab_reg:     'Register',
    lbl_email:   'Email',            lbl_pw:      'Password',       lbl_name:    'Full Name',
    lbl_phone:   'Phone Number',     ph_phone:    '+213 555 123 456',
    lbl_confirm: 'Confirm Password', ph_email:    'you@example.com',
    ph_pw:       'Your password',    ph_name:     'Your full name', ph_confirm:  'Repeat your password',
    ph_new_pw:   'Choose a password',
    remember:    'Remember me',      forgot:      'Forgot password?',
    btn_login:   '🌿 Login',         btn_reg:     '🌱 Create Account',
    or_with:     'or continue with',
    footer:      '© 2026 koori. All rights reserved.',
  },
  fr: {
    search_ph:   'Rechercher…',       search_btn: '🔍 Chercher',
    nav_home:    'Accueil', nav_products: 'Produits', nav_categories: 'Catégories', nav_contact: 'Contact',
    welcome:     'Bon retour',         welcome_sub: 'Connectez-vous à votre compte koori',
    join:        'Rejoindre koori',    join_sub:    'Créez votre compte gratuit',
    tab_login:   'Connexion',          tab_reg:     'Inscription',
    lbl_email:   'Email',              lbl_pw:      'Mot de passe',   lbl_name:    'Nom complet',
    lbl_phone:   'Numéro de téléphone', ph_phone:   '+213 555 123 456',
    lbl_confirm: 'Confirmer le mot de passe',        ph_email:    'vous@exemple.com',
    ph_pw:       'Votre mot de passe', ph_name:     'Votre nom',     ph_confirm:  'Répétez le mot de passe',
    ph_new_pw:   'Choisir un mot de passe',
    remember:    'Se souvenir',        forgot:      'Mot de passe oublié ?',
    btn_login:   '🌿 Connexion',       btn_reg:     '🌱 Créer un compte',
    or_with:     'ou continuer avec',
    footer:      '© 2026 koori. Tous droits réservés.',
  },
  ar: {
    search_ph:   'ابحث عن منتجات…',  search_btn: '🔍 بحث',
    nav_home:    'الرئيسية', nav_products: 'المنتجات', nav_categories: 'الفئات', nav_contact: 'اتصل بنا',
    welcome:     'مرحباً بعودتك',    welcome_sub: 'سجّل الدخول إلى حسابك في koori',
    join:        'انضم إلى koori',   join_sub:    'أنشئ حسابك المجاني اليوم',
    tab_login:   'تسجيل الدخول',     tab_reg:     'إنشاء حساب',
    lbl_email:   'البريد الإلكتروني', lbl_pw:     'كلمة المرور',    lbl_name:    'الاسم الكامل',
    lbl_phone:   'رقم الهاتف',        ph_phone:   '+213 555 123 456',
    lbl_confirm: 'تأكيد كلمة المرور', ph_email:   'أنت@مثال.com',
    ph_pw:       'كلمة مرورك',       ph_name:     'اسمك الكامل',   ph_confirm:  'أعد كلمة المرور',
    ph_new_pw:   'اختر كلمة مرور',
    remember:    'تذكّرني',           forgot:      'نسيت كلمة المرور؟',
    btn_login:   '🌿 دخول',           btn_reg:     '🌱 إنشاء حساب',
    or_with:     'أو تابع عبر',
    footer:      '© 2026 koori. جميع الحقوق محفوظة.',
  },
  it: {
    search_ph:   'Cerca prodotti…',   search_btn: '🔍 Cerca',
    nav_home:    'Home', nav_products: 'Prodotti', nav_categories: 'Categorie', nav_contact: 'Contatti',
    welcome:     'Bentornato',         welcome_sub: 'Accedi al tuo account koori',
    join:        'Unisciti a koori',   join_sub:    'Crea il tuo account gratuito',
    tab_login:   'Accedi',             tab_reg:     'Registrati',
    lbl_email:   'Email',              lbl_pw:      'Password',      lbl_name:    'Nome completo',
    lbl_phone:   'Numero di telefono', ph_phone:    '+213 555 123 456',
    lbl_confirm: 'Conferma password',  ph_email:    'tu@esempio.com',
    ph_pw:       'La tua password',    ph_name:     'Il tuo nome',   ph_confirm:  'Ripeti la password',
    ph_new_pw:   'Scegli una password',
    remember:    'Ricordami',          forgot:      'Password dimenticata?',
    btn_login:   '🌿 Accedi',          btn_reg:     '🌱 Crea account',
    or_with:     'o continua con',
    footer:      '© 2026 koori. Tutti i diritti riservati.',
  }
};

function switchLang(lang) {
  localStorage.setItem('siteLanguage', lang);
  applyLang(lang);
}

function applyLang(lang) {
  const t = LOGIN_TRANSLATIONS[lang] || LOGIN_TRANSLATIONS.en;
  const isLogin = document.getElementById('panelLogin').classList.contains('visible');

  document.documentElement.dir          = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelector('.navbar').dir = 'ltr';

  // navbar search
  const ns = document.getElementById('navSearch');
  if (ns) ns.placeholder = t.search_ph;
  const nsb = document.querySelector('.search-box button[type="reset"]');
  // nsb is a visual clear/X button — do not set text content on it

  // nav links
  const links = document.querySelectorAll('.nav-links a');
  if (links[0]) links[0].textContent = t.nav_home;
  if (links[1]) links[1].textContent = t.nav_products;
  if (links[2]) links[2].textContent = t.nav_categories;
  if (links[3]) links[3].textContent = t.nav_contact;

  // card heading
  document.querySelector('.card-title').textContent    = isLogin ? t.welcome  : t.join;
  document.querySelector('.card-subtitle').textContent = isLogin ? t.welcome_sub : t.join_sub;

  // tabs
  document.getElementById('tabLogin').textContent    = t.tab_login;
  document.getElementById('tabRegister').textContent = t.tab_reg;

  // login form labels & placeholders
  setLabelText('loginEmail',    t.lbl_email);
  setLabelText('loginPassword', t.lbl_pw);
  document.getElementById('loginEmail').placeholder    = t.ph_email;
  document.getElementById('loginPassword').placeholder = t.ph_pw;
  document.querySelector('.remember-label').childNodes[1].textContent = ' ' + t.remember;
  document.querySelector('.forgot-link').textContent   = t.forgot;
  document.getElementById('loginBtn').textContent      = t.btn_login;

  // register form labels & placeholders
  setLabelText('regName',     t.lbl_name);
  setLabelText('regPhone',    t.lbl_phone);
  setLabelText('regEmail',    t.lbl_email);
  setLabelText('regPassword', t.lbl_pw);
  setLabelText('regConfirm',  t.lbl_confirm);
  document.getElementById('regName').placeholder     = t.ph_name;
  document.getElementById('regPhone').placeholder    = t.ph_phone;
  document.getElementById('regEmail').placeholder    = t.ph_email;
  document.getElementById('regPassword').placeholder = t.ph_new_pw;
  document.getElementById('regConfirm').placeholder  = t.ph_confirm;
  document.getElementById('registerBtn').textContent = t.btn_reg;

  // dividers
  document.querySelectorAll('.divider').forEach(d => d.textContent = t.or_with);

  // footer
  const fp = document.querySelector('.site-footer');
  if (fp) fp.textContent = t.footer;
}

function setLabelText(inputId, text) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const label = input.closest('.field')?.querySelector('label');
  if (label) label.textContent = text;
}

/* 
   TAB SWITCHING
 */
function switchTab(tab) {
  clearAlert();
  document.getElementById('panelLogin').classList.toggle('visible',    tab === 'login');
  document.getElementById('panelRegister').classList.toggle('visible', tab === 'register');
  document.getElementById('tabLogin').classList.toggle('active',    tab === 'login');
  document.getElementById('tabRegister').classList.toggle('active', tab === 'register');

  const lang = localStorage.getItem('siteLanguage') || 'en';
  const t    = LOGIN_TRANSLATIONS[lang] || LOGIN_TRANSLATIONS.en;
  document.querySelector('.card-title').textContent    = tab === 'login' ? t.welcome     : t.join;
  document.querySelector('.card-subtitle').textContent = tab === 'login' ? t.welcome_sub : t.join_sub;
}

/* 
   PASSWORD TOGGLE
 */
function togglePw(id, btn) {
  const input = document.getElementById(id);
  const show  = input.type === 'password';
  input.type  = show ? 'text' : 'password';
  btn.textContent = show ? '🙈' : '👁';
}

/* 
   PASSWORD STRENGTH + LIVE TIPS
 */
function checkStrength(pw) {
  const rules = {
    length:  pw.length >= 8,
    upper:   /[A-Z]/.test(pw),
    number:  /[0-9]/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
  };

  // Update each rule row
  Object.entries(rules).forEach(([key, passed]) => {
    const li   = document.getElementById('rule-' + key);
    const icon = li && li.querySelector('.rule-icon');
    if (!li) return;
    li.classList.toggle('passed', passed);
    if (icon) icon.textContent = passed ? '✓' : '✗';
  });

  // Show tips box only while typing
  const tips = document.getElementById('pwTips');
  if (tips) tips.classList.toggle('visible', pw.length > 0);

  // Strength bar
  const score  = Object.values(rules).filter(Boolean).length;
  const colors = ['#c0392b','#e67e22','#f1c40f','#3a7d44'];
  const labels = ['Weak — keep going!', 'Fair — getting better', 'Good — almost there!', 'Strong 💪'];
  ['seg1','seg2','seg3','seg4'].forEach((s, i) => {
    document.getElementById(s).style.background =
      i < score ? colors[score - 1] : '#e8d8c0';
  });
  document.getElementById('strengthLabel').textContent =
    pw.length ? labels[score - 1] || '' : '';
}

/* 
   ALERT HELPERS
 */
function showAlert(msg, type) {
  const box = document.getElementById('alertBox');
  box.textContent = msg;
  box.className   = 'alert ' + type;
}
function clearAlert() {
  const box = document.getElementById('alertBox');
  box.className   = 'alert';
  box.textContent = '';
}

function setErr(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}
function clearErrs(...ids) {
  ids.forEach(id => setErr(id, ''));
}
function markError(inputId) {
  const el = document.getElementById(inputId);
  if (el) el.classList.add('error');
}
function clearError(inputId) {
  const el = document.getElementById(inputId);
  if (el) el.classList.remove('error');
}

/* 
   LOGIN
 */
function doLogin() {
  clearAlert();
  clearErrs('loginEmailErr','loginPasswordErr');
  clearError('loginEmail'); clearError('loginPassword');

  const email = document.getElementById('loginEmail').value.trim();
  const pw    = document.getElementById('loginPassword').value;
  let   valid = true;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setErr('loginEmailErr', 'Please enter a valid email address.');
    markError('loginEmail'); valid = false;
  }
  if (!pw) {
    setErr('loginPasswordErr', 'Password is required.');
    markError('loginPassword'); valid = false;
  }
  if (!valid) return;

  const btn = document.getElementById('loginBtn');
  btn.textContent = '⏳ Logging in…';
  btn.classList.add('loading');

  // FIXED: hash password before comparing — no plain-text comparison
  hashPassword(pw).then(hashedPw => {
    const accounts = JSON.parse(localStorage.getItem('kooriAccounts') || '[]');
    // FIXED: removed || accounts.length === 0 demo bypass
    const match = accounts.find(a => a.email === email && a.passwordHash === hashedPw);

    setTimeout(() => {
      btn.textContent = '🌿 Login';
      btn.classList.remove('loading');

      if (match) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('kooriUser', JSON.stringify({ email: match.email, name: match.name }));
        if (document.getElementById('rememberMe').checked) {
          localStorage.setItem('rememberEmail', email);
        } else {
          localStorage.removeItem('rememberEmail');
        }
        showAlert('✅ Login successful! Redirecting…', 'success');
        setTimeout(() => {
          const redirect = new URLSearchParams(window.location.search).get('redirect') || 'products.html';
          window.location.href = redirect;
        }, 900);
      } else {
        showAlert('❌ Incorrect email or password. Please try again.', 'error');
        markError('loginEmail'); markError('loginPassword');
      }
    }, 600);
  });
}

/* 
   REGISTER
 */
function doRegister() {
  clearAlert();
  clearErrs('regNameErr','regPhoneErr','regEmailErr','regPasswordErr','regConfirmErr');
  ['regName','regPhone','regEmail','regPassword','regConfirm'].forEach(clearError);

  const name    = document.getElementById('regName').value.trim();
  const phone   = document.getElementById('regPhone').value.trim();
  const email   = document.getElementById('regEmail').value.trim();
  const pw      = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  let   valid   = true;

  if (!name) {
    setErr('regNameErr', 'Please enter your full name.');
    markError('regName'); valid = false;
  }
  if (!phone || !/^\+?[\d\s\-().]{7,20}$/.test(phone)) {
    setErr('regPhoneErr', 'Please enter a valid phone number.');
    markError('regPhone'); valid = false;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setErr('regEmailErr', 'Please enter a valid email address.');
    markError('regEmail'); valid = false;
  }
  // Detailed password rules
  const pwRules = {
    length:  pw.length >= 8,
    upper:   /[A-Z]/.test(pw),
    number:  /[0-9]/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
  };
  const missing = [];
  if (!pwRules.length)  missing.push('at least 8 characters');
  if (!pwRules.upper)   missing.push('one uppercase letter (A–Z)');
  if (!pwRules.number)  missing.push('one number (0–9)');
  if (!pwRules.special) missing.push('one special character (!@#$…)');
  if (!pw) {
    setErr('regPasswordErr', 'Password is required.');
    markError('regPassword'); valid = false;
  } else if (missing.length) {
    setErr('regPasswordErr', '⚠️ Your password still needs: ' + missing.join(', ') + '.');
    markError('regPassword'); valid = false;
  }
  if (pw !== confirm) {
    setErr('regConfirmErr', 'Passwords do not match.');
    markError('regConfirm'); valid = false;
  }
  if (!valid) return;

  // Check email not already registered
  const accounts = JSON.parse(localStorage.getItem('kooriAccounts') || '[]');
  if (accounts.find(a => a.email === email)) {
    setErr('regEmailErr', 'This email is already registered.');
    markError('regEmail'); return;
  }

  const btn = document.getElementById('registerBtn');
  btn.textContent = '⏳ Creating account…';
  btn.classList.add('loading');

  // FIXED: hash password before storing — never save plain text
  hashPassword(pw).then(hashedPw => {
    setTimeout(() => {
      btn.textContent = '🌱 Create Account';
      btn.classList.remove('loading');

      accounts.push({ name, phone, email, passwordHash: hashedPw });
      localStorage.setItem('kooriAccounts', JSON.stringify(accounts));
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('kooriUser', JSON.stringify({ name, phone, email }));

      showAlert('🎉 Account created! Redirecting…', 'success');
      setTimeout(() => {
        const redirect = new URLSearchParams(window.location.search).get('redirect') || 'products.html';
        window.location.href = redirect;
      }, 900);
    }, 600);
  });
}

/* 
   FORGOT PASSWORD
 */
function forgotPassword(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  if (!email) {
    setErr('loginEmailErr', 'Enter your email above first.');
    markError('loginEmail'); return;
  }
  showAlert('📩 If that email exists, a reset link has been sent.', 'success');
}

/* 
   SOCIAL LOGIN (placeholder)
 */
function socialLogin(provider) {
  showAlert(`🔗 ${provider} login coming soon!`, 'success');
}

/* 
   INIT
 */
// (init code merged into the main DOMContentLoaded above) 