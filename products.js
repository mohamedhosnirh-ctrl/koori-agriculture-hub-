/*CONSTANTS*/
const CAT_EMOJI = {
  Vegetables: '🥦', Fruits:    '🍎', Grains:    '🌾',
  Dairy:      '🥛', Herbs:     '🌿', Honey:     '🍯',
  Livestock:  '🐄', Equipment: '🚜', Other:     '📦'
};
/*mobile nav */
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
const BADGES = ['new', 'sale', 'popular', 'organic'];

/* TRANSLATIONS */
const PAGE_TRANSLATIONS = {
  en: {
    hero_title:       '🌾 All Products',
    hero_desc:        'Fresh from the farm — browse, filter, and order in seconds',
    cat_all:          'All',
    cat_vegetables:   'Vegetables', cat_fruits:  'Fruits',      cat_grains: 'Grains',
    cat_dairy:        'Dairy',      cat_herbs:   'Herbs',       cat_honey:  'Honey',
    cat_livestock:    'Livestock',  cat_equip:   'Equipment',   cat_other:  'Other',
    search_ph:        'Search by name or description…',
    search_btn:       'Search',
    sort_default:     'Sort: Default',
    sort_pa:          'Price: Low → High',  sort_pd: 'Price: High → Low',
    sort_na:          'Name: A → Z',        sort_nd: 'Name: Z → A',
    sort_new:         'Newest First',
    filter_title:     '🔍 Filters',
    filter_cat:       'Category',
    filter_price:     'Price (DZD)',
    filter_tags:      'Tags',
    filter_clear:     '✕ Clear all filters',
    apply_price:      'Apply',
    tag_new:          'New',     tag_sale:    'Sale',
    tag_popular:      'Popular', tag_organic: 'Organic',
    empty_title:      'No products yet',
    empty_desc:       'Be the first to list something! Add your farm product and it will appear here for everyone to browse.',
    empty_btn:        '+ Add your first product',
    no_results_title: 'No products match your filters',
    no_results_desc:  'Try clearing some filters or search with a different term.',
    showing:          'Showing',
    products:         'products',
    product:          'product',
    add_cart:         '+ Cart',
    added:            'Added ✓',
    footer_copy:      '© 2026 koori. All rights reserved.',
    login_btn:        'Login',
  },
  fr: {
    hero_title:       '🌾 Tous les Produits',
    hero_desc:        'Frais de la ferme — parcourez, filtrez et commandez en secondes',
    cat_all:          'Tout',
    cat_vegetables:   'Légumes',    cat_fruits: 'Fruits',       cat_grains: 'Céréales',
    cat_dairy:        'Laitier',    cat_herbs:  'Herbes',       cat_honey:  'Miel',
    cat_livestock:    'Bétail',     cat_equip:  'Équipement',   cat_other:  'Autre',
    search_ph:        'Rechercher par nom ou description…',
    search_btn:       'Chercher',
    sort_default:     'Trier : Défaut',
    sort_pa:          'Prix : Bas → Haut',  sort_pd: 'Prix : Haut → Bas',
    sort_na:          'Nom : A → Z',        sort_nd: 'Nom : Z → A',
    sort_new:         'Plus récents',
    filter_title:     '🔍 Filtres',
    filter_cat:       'Catégorie',
    filter_price:     'Prix (DZD)',
    filter_tags:      'Étiquettes',
    filter_clear:     '✕ Effacer les filtres',
    apply_price:      'Appliquer',
    tag_new:          'Nouveau',   tag_sale:    'Promo',
    tag_popular:      'Populaire', tag_organic: 'Bio',
    empty_title:      'Aucun produit',
    empty_desc:       'Soyez le premier à publier ! Ajoutez votre produit agricole.',
    empty_btn:        '+ Ajouter un produit',
    no_results_title: 'Aucun produit ne correspond',
    no_results_desc:  'Essayez de modifier vos filtres ou votre recherche.',
    showing:          'Affichage de',
    products:         'produits',
    product:          'produit',
    add_cart:         '+ Panier',
    added:            'Ajouté ✓',
    footer_copy:      '© 2026 koori. Tous droits réservés.',
    login_btn:        'Connexion',
  },
  ar: {
    hero_title:       '🌾 جميع المنتجات',
    hero_desc:        'طازج من المزرعة — تصفح، فلتر، واطلب في ثوانٍ',
    cat_all:          'الكل',
    cat_vegetables:   'خضروات', cat_fruits: 'فواكه',  cat_grains: 'حبوب',
    cat_dairy:        'ألبان',  cat_herbs:  'أعشاب',  cat_honey:  'عسل',
    cat_livestock:    'ماشية',  cat_equip:  'معدات',  cat_other:  'أخرى',
    search_ph:        'ابحث بالاسم أو الوصف…',
    search_btn:       'بحث',
    sort_default:     'الترتيب: افتراضي',
    sort_pa:          'السعر: من الأقل',   sort_pd: 'السعر: من الأعلى',
    sort_na:          'الاسم: أ → ي',      sort_nd: 'الاسم: ي → أ',
    sort_new:         'الأحدث أولاً',
    filter_title:     '🔍 التصفية',
    filter_cat:       'الفئة',
    filter_price:     'السعر (دج)',
    filter_tags:      'الوسوم',
    filter_clear:     '✕ مسح الفلاتر',
    apply_price:      'تطبيق',
    tag_new:          'جديد',        tag_sale:    'خصم',
    tag_popular:      'الأكثر طلباً', tag_organic: 'عضوي',
    empty_title:      'لا توجد منتجات بعد',
    empty_desc:       'كن أول من يضيف منتجاً! أضف منتجك الزراعي وسيظهر هنا.',
    empty_btn:        '+ أضف أول منتج',
    no_results_title: 'لا توجد منتجات تطابق بحثك',
    no_results_desc:  'جرّب تعديل الفلاتر أو البحث بكلمة مختلفة.',
    showing:          'عرض',
    products:         'منتجات',
    product:          'منتج',
    add_cart:         '+ السلة',
    added:            'أُضيف ✓',
    footer_copy:      '© 2026 koori. جميع الحقوق محفوظة.',
    login_btn:        'تسجيل الدخول',
  },
  it: {
    hero_title:       '🌾 Tutti i Prodotti',
    hero_desc:        'Freschi dalla fattoria — sfoglia, filtra e ordina in secondi',
    cat_all:          'Tutti',
    cat_vegetables:   'Verdure',   cat_fruits: 'Frutta',         cat_grains: 'Cereali',
    cat_dairy:        'Latticini', cat_herbs:  'Erbe',           cat_honey:  'Miele',
    cat_livestock:    'Bestiame',  cat_equip:  'Attrezzature',   cat_other:  'Altro',
    search_ph:        'Cerca per nome o descrizione…',
    search_btn:       'Cerca',
    sort_default:     'Ordina: Default',
    sort_pa:          'Prezzo: Basso → Alto', sort_pd: 'Prezzo: Alto → Basso',
    sort_na:          'Nome: A → Z',           sort_nd: 'Nome: Z → A',
    sort_new:         'Più recenti',
    filter_title:     '🔍 Filtri',
    filter_cat:       'Categoria',
    filter_price:     'Prezzo (DZD)',
    filter_tags:      'Etichette',
    filter_clear:     '✕ Cancella filtri',
    apply_price:      'Applica',
    tag_new:          'Nuovo',    tag_sale:    'Offerta',
    tag_popular:      'Popolare', tag_organic: 'Bio',
    empty_title:      'Nessun prodotto ancora',
    empty_desc:       'Sii il primo ad aggiungere qualcosa! Pubblica il tuo prodotto agricolo.',
    empty_btn:        '+ Aggiungi prodotto',
    no_results_title: 'Nessun prodotto corrisponde',
    no_results_desc:  'Prova a modificare i filtri o la ricerca.',
    showing:          'Mostrando',
    products:         'prodotti',
    product:          'prodotto',
    add_cart:         '+ Carrello',
    added:            'Aggiunto ✓',
    footer_copy:      '© 2026 koori. Tutti i diritti riservati.',
    login_btn:        'Accedi',
  }
};

/* STATE */
let activeCategories = new Set();
let activeBadges     = new Set();
let activeCatBar     = 'all';
window._currentLangT = PAGE_TRANSLATIONS.en;
// paste readURLParams()
window._currentLangT = PAGE_TRANSLATIONS.en;
/* LOCALSTORAGE HELPERS */
function getProducts() {
  return JSON.parse(localStorage.getItem('kooriProducts') || '[]');
}

/*CATEGORY BAR */
function selectCatBar(btn, cat) {
  activeCatBar = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCategories.clear();
  if (cat !== 'all') activeCategories.add(cat);
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  renderList();
}

/* SIDEBAR */
function buildSidebar() {
  const products = getProducts();
  const cats = [...new Set(products.map(p => p.cat).filter(Boolean))];

  // category pills
  const cp = document.getElementById('catPills');
  cp.innerHTML = '';
  cats.forEach(cat => {
    const count = products.filter(p => p.cat === cat).length;
    const btn   = document.createElement('button');
    btn.className = 'pill' + (activeCategories.has(cat) ? ' active' : '');
    btn.innerHTML = `<span class="pill-emoji">${CAT_EMOJI[cat] || '📦'}</span>${cat}<span class="pill-count">${count}</span>`;
    btn.onclick   = () => toggleCat(cat, btn);
    cp.appendChild(btn);
  });

  // badge pills
  const t  = window._currentLangT;
  const bp = document.getElementById('badgePills');
  bp.innerHTML = '';
  const tagLabels = [t.tag_new, t.tag_sale, t.tag_popular, t.tag_organic];
  BADGES.forEach((b, i) => {
    const btn     = document.createElement('button');
    btn.className = 'badge-pill' + (activeBadges.has(b) ? ' active' : '');
    btn.textContent = tagLabels[i] || (b.charAt(0).toUpperCase() + b.slice(1));
    btn.onclick   = () => toggleBadge(b, btn);
    bp.appendChild(btn);
  });
}

function toggleCat(cat, btn) {
  activeCategories.has(cat) ? activeCategories.delete(cat) : activeCategories.add(cat);
  btn.classList.toggle('active');
  renderList();
}

function toggleBadge(b, btn) {
  activeBadges.has(b) ? activeBadges.delete(b) : activeBadges.add(b);
  btn.classList.toggle('active');
  renderList();
}

function clearFilters() {
  activeCategories.clear();
  activeBadges.clear();
  activeCatBar = 'all';
  document.querySelectorAll('.pill, .badge-pill').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('.cat-btn[data-cat="all"]');
  if (allBtn) allBtn.classList.add('active');
  document.getElementById('priceMin').value  = '';
  document.getElementById('priceMax').value  = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('sortSelect').value  = 'default';
  renderList();
}

/* RENDER LIST */

function renderList() {
  const products = getProducts();
  const area     = document.getElementById('gridArea');
  const t        = window._currentLangT;
  const query    = document.getElementById('searchInput').value.trim().toLowerCase();
  const sort     = document.getElementById('sortSelect').value;
  const minPrice = parseFloat(document.getElementById('priceMin').value) || 0;
  const maxPrice = parseFloat(document.getElementById('priceMax').value) || Infinity;

  /* empty state — no products at all */
  if (products.length === 0) {
    document.getElementById('resultCount').textContent = '';
    area.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🌱</div>
        <h2>${t.empty_title}</h2>
        <p>${t.empty_desc}</p>
        <a href="add-product.html" class="empty-cta">${t.empty_btn}</a>
      </div>`;
    return;
  }

  /* filter */
  let items = products.filter(p => {
    if (activeCategories.size && !activeCategories.has(p.cat))  return false;
    if (activeBadges.size     && !activeBadges.has(p.badge))    return false;
    const price = parseFloat(p.price) || 0;
    if (price < minPrice || price > maxPrice)                    return false;
    if (query &&
        !p.name.toLowerCase().includes(query) &&
        !(p.desc || '').toLowerCase().includes(query) &&
        !(p.cat  || '').toLowerCase().includes(query))          return false;
    return true;
  });

  /* sort */
  if (sort === 'price-asc')  items.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') items.sort((a, b) => b.price - a.price);
  if (sort === 'name-asc')   items.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === 'name-desc')  items.sort((a, b) => b.name.localeCompare(a.name));
  if (sort === 'newest')     items.sort((a, b) => b.id - a.id);

  /* result count */
  const count = items.length;
  document.getElementById('resultCount').textContent =
    `${t.showing} ${count} ${count !== 1 ? t.products : t.product}`;

  /* no results after filtering */
  if (items.length === 0) {
    area.innerHTML = `
      <div class="no-results">
        <div class="nr-icon">🔍</div>
        <h3>${t.no_results_title}</h3>
        <p>${t.no_results_desc}</p>
      </div>`;
    return;
  }

  /* build list */
  const list = document.createElement('div');
  list.className = 'products-list';

  items.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'product-row';
    row.style.animationDelay = (i * 0.04) + 's';

    const badgeHTML    = p.badge
      ? `<span class="row-badge badge-${p.badge}">${p.badge.charAt(0).toUpperCase() + p.badge.slice(1)}</span>`
      : '';
    const oldPriceHTML = p.oldPrice
      ? `<span class="old-price">${p.oldPrice} DZD</span>`
      : '';
    const emoji = p.emoji || CAT_EMOJI[p.cat] || '📦';

    row.innerHTML = `
      <div class="row-emoji">${emoji}</div>
      <div class="row-info">
        <p class="row-category">${p.cat || 'General'}</p>
        <h3 class="row-name">${highlight(p.name, query)}</h3>
        <p class="row-desc">${highlight(p.desc || '', query)}</p>
      </div>
      ${badgeHTML}
      <div class="row-right">
        <div class="row-price">${parseFloat(p.price) || 0} DZD ${oldPriceHTML}</div>
        <button class="add-btn" onclick="addToCart(this, '${p.name.replace(/'/g, "\\'")}')">
          ${t.add_cart}
        </button>
      </div>`;
    list.appendChild(row);
  });

  area.innerHTML = '';
  area.appendChild(list);
}

/*CART */
function addToCart(btn, name) {
  const cart = JSON.parse(localStorage.getItem('kooriCart') || '[]');
  const ex   = cart.find(i => i.name === name);
  ex ? ex.qty++ : cart.push({ name, qty: 1 });
  localStorage.setItem('kooriCart', JSON.stringify(cart));

  const t = window._currentLangT;
  btn.textContent = t.added;
  btn.classList.add('added');
  setTimeout(() => {
    btn.textContent = t.add_cart;
    btn.classList.remove('added');
  }, 1500);

  showToast(`"${name}" added to cart!`);
  updateCartCount();
}

function showToast(msg) {
  const toast = document.getElementById('cartToast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._tt);
  window._tt = setTimeout(() => toast.classList.remove('show'), 2500);
}

function updateCartCount() {
  const cart  = JSON.parse(localStorage.getItem('kooriCart') || '[]');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartCount');
  if (badge) {
    badge.textContent    = total;
    badge.style.display  = total > 0 ? 'inline-block' : 'none';
  }
}

/*LANGUAGE */
function switchLang(lang) {
  localStorage.setItem('siteLanguage', lang);
  applyLang(lang);
}

function applyLang(lang) {
  const t = PAGE_TRANSLATIONS[lang] || PAGE_TRANSLATIONS.en;
  window._currentLangT = t;

  /* direction — navbar always LTR */
  document.documentElement.dir        = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelector('.navbar').dir = 'ltr';

  /* hero */
  const h1 = document.querySelector('.page-hero h1');
  if (h1) h1.textContent = t.hero_title;
  const hp = document.querySelector('.page-hero p');
  if (hp) hp.textContent = t.hero_desc;

  /* category bar */
  const catMap = {
    all:       t.cat_all,
    Vegetables:t.cat_vegetables, Fruits:    t.cat_fruits,  Grains: t.cat_grains,
    Dairy:     t.cat_dairy,      Herbs:     t.cat_herbs,   Honey:  t.cat_honey,
    Livestock: t.cat_livestock,  Equipment: t.cat_equip,   Other:  t.cat_other
  };
  document.querySelectorAll('.cat-btn').forEach(btn => {
    const cat  = btn.dataset.cat;
    const last = btn.childNodes[btn.childNodes.length - 1];
    if (catMap[cat] && last) last.textContent = ' ' + catMap[cat];
  });

  /* toolbar */
  const si = document.getElementById('searchInput');
  if (si) si.placeholder = t.search_ph;
  const sb = document.querySelector('.toolbar-search button');
  if (sb) sb.textContent = t.search_btn;

  const ss = document.getElementById('sortSelect');
  if (ss) {
    ss.options[0].text = t.sort_default;
    ss.options[1].text = t.sort_pa;
    ss.options[2].text = t.sort_pd;
    ss.options[3].text = t.sort_na;
    ss.options[4].text = t.sort_nd;
    ss.options[5].text = t.sort_new;
  }

  /* sidebar */
  const fh3 = document.querySelector('.filter-box h3');
  if (fh3) fh3.textContent = t.filter_title;
  const fh4s = document.querySelectorAll('.filter-group h4');
  if (fh4s[0]) fh4s[0].textContent = t.filter_cat;
  if (fh4s[1]) fh4s[1].textContent = t.filter_price;
  if (fh4s[2]) fh4s[2].textContent = t.filter_tags;
  const ap = document.querySelector('.apply-price');
  if (ap) ap.textContent = t.apply_price;
  const cf = document.querySelector('.clear-filters');
  if (cf) cf.textContent = t.filter_clear;

  /* navbar */
  const lb = document.querySelector('.login-btn');
  if (lb) lb.textContent = t.login_btn;

  /* footer */
  const fp = document.querySelector('.footer-bottom p');
  if (fp) fp.textContent = t.footer_copy;

  /* rebuild sidebar (badge pills need translated labels) */
  buildSidebar();
  renderList();
}

/*ADD ITEM LINK GUARD */
function initAddItemLink() {
  const addItemLink = document.getElementById('addItemLink');
  if (!addItemLink) return;

  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  if (!isLoggedIn) {
    addItemLink.style.opacity  = '0.55';
    addItemLink.style.cursor   = 'not-allowed';
    addItemLink.title           = 'You must be logged in to add a product';
  } else {
    // Fully active for logged-in users
    addItemLink.style.opacity  = '1';
    addItemLink.style.cursor   = 'pointer';
    addItemLink.title           = '';
  }

  addItemLink.addEventListener('click', function (e) {
    e.preventDefault();

    if (localStorage.getItem('loggedIn') === 'true') {
      window.location.href = 'add-product.html';
    } else {
      // Redirect immediately to login; after login the user lands on add-product
      window.location.href = 'login.html?redirect=add-product.html';
    }
  });
}

/*SEARCH SUGGESTIONS */
function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

function showSuggestions(query) {
  const products    = getProducts();
  const suggestions = document.getElementById('searchSuggestions');
  const t           = window._currentLangT;
  const q           = query.toLowerCase();

  const matches = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    (p.desc  || '').toLowerCase().includes(q) ||
    (p.cat   || '').toLowerCase().includes(q) ||
    (p.badge || '').toLowerCase().includes(q)
  ).slice(0, 6); // max 6 suggestions

  if (matches.length === 0) {
    hideSuggestions();
    return;
  }

  suggestions.innerHTML = '';
  matches.forEach(p => {
    const emoji = p.emoji || CAT_EMOJI[p.cat] || '📦';
    const item  = document.createElement('div');
    item.className    = 'suggestion-item';
    item.dataset.name = p.name;
    item.innerHTML = `
      <div class="sug-emoji">${emoji}</div>
      <div class="sug-info">
        <div class="sug-name">${highlight(p.name, query)}</div>
        <div class="sug-meta">${p.cat || ''} ${p.badge ? '· ' + p.badge : ''}</div>
      </div>
      <div class="sug-price">${parseFloat(p.price) || 0} DZD</div>`;
    item.addEventListener('mousedown', e => {
      e.preventDefault();
      document.getElementById('searchInput').value = p.name;
      document.getElementById('searchClear').classList.add('visible');
      hideSuggestions();
      renderList();
    });
    suggestions.appendChild(item);
  });

  if (matches.length > 0) {
    const footer = document.createElement('div');
    footer.className   = 'suggestions-footer';
    footer.textContent = `${matches.length} result${matches.length !== 1 ? 's' : ''} — press Enter to see all`;
    suggestions.appendChild(footer);
  }

  suggestions.classList.add('open');
}

function hideSuggestions() {
  const suggestions = document.getElementById('searchSuggestions');
  if (suggestions) {
    suggestions.classList.remove('open');
    suggestions.innerHTML = '';
  }
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  const clear = document.getElementById('searchClear');
  input.value = '';
  clear.classList.remove('visible');
  hideSuggestions();
  renderList();
  input.focus();
}

/*INIT */
document.addEventListener('DOMContentLoaded', function () {
  // ENHANCED SEARCH
  const input       = document.getElementById('searchInput');
  const clearBtn    = document.getElementById('searchClear');
  const suggestions = document.getElementById('searchSuggestions');

  // show/hide clear button
  input.addEventListener('input', () => {
    const val = input.value.trim();
    clearBtn.classList.toggle('visible', val.length > 0);
    if (val.length >= 1) showSuggestions(val);
    else                 hideSuggestions();
    renderList();
  });

  // keyboard navigation in suggestions
  input.addEventListener('keydown', e => {
    const items = suggestions.querySelectorAll('.suggestion-item');
    const active = suggestions.querySelector('.suggestion-item.focused');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = active ? active.nextElementSibling : items[0];
      if (next && next.classList.contains('suggestion-item')) {
        active && active.classList.remove('focused');
        next.classList.add('focused');
        input.value = next.dataset.name;
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = active && active.previousElementSibling;
      if (prev && prev.classList.contains('suggestion-item')) {
        active.classList.remove('focused');
        prev.classList.add('focused');
        input.value = prev.dataset.name;
      }
    } else if (e.key === 'Enter') {
      hideSuggestions();
      renderList();
    } else if (e.key === 'Escape') {
      hideSuggestions();
    }
  });

  function readURLParams() {
  const params = new URLSearchParams(window.location.search);
  const q   = params.get("search");
  const cat = params.get("cat");

  // activate category FIRST
  if (cat) {
    const btn = document.querySelector(`.cat-btn[data-cat="${cat}"]`);
    if (btn) selectCatBar(btn, cat);
  }

  // then fill search (after category is set)
  if (q) {
    const input = document.getElementById("searchInput");
    if (input) {
      input.value = q;
      const clearBtn = document.getElementById("searchClear");
      if (clearBtn) clearBtn.classList.add("visible");
    }

    // also try to find category from product list if no cat param
    if (!cat) {
      const products = getProducts();
      const match = products.find(p => p.name.toLowerCase() === q.toLowerCase());
      if (match && match.cat) {
        const btn = document.querySelector(`.cat-btn[data-cat="${match.cat}"]`);
        if (btn) selectCatBar(btn, match.cat);
      }
    }
  }
}
  // close suggestions when clicking outside
  document.addEventListener('click', e => {
    if (!document.getElementById('searchWrapper').contains(e.target)) {
      hideSuggestions();
    }
  });

  // cart count on load
  updateCartCount();

  // add item link guard
  initAddItemLink();

  // apply saved language (also calls buildSidebar + renderList)
  const saved = localStorage.getItem('siteLanguage') || 'en';
  const sel   = document.getElementById('languageSelect');
  if (sel) sel.value = saved;
  readURLParams();
  applyLang(saved);
});
