
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
  if (video) {
    video.addEventListener("error", spawnLeaves);
    // If video doesn't load quickly, show leaves anyway
    setTimeout(() => {
      if (video.readyState === 0) spawnLeaves();
    }, 800);
  } else {
    spawnLeaves();
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
 
  //LOGIN LINK — redirect already-logged-in users to products instead of login page
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn && localStorage.getItem("loggedIn") === "true") {
    loginBtn.href = "already-logged-in.html";
    loginBtn.textContent = "Dashboard";
  }
  const mobileLoginLink = document.querySelector('#mobileNav a[href="login.html"]');
  if (mobileLoginLink && localStorage.getItem("loggedIn") === "true") {
    mobileLoginLink.href = "already-logged-in.html";
    mobileLoginLink.textContent = "Dashboard";
  }
 
  //LANGUAGE
  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    const savedLang = localStorage.getItem("siteLanguage") || "en";
    langSelect.value = savedLang;
    applyLanguage(savedLang);
    langSelect.addEventListener("change", function () {
      const lang = this.value;
      localStorage.setItem("siteLanguage", lang);
      applyLanguage(lang);
    });
  }
 
  startCountdown(6 * 60 * 60);
 
  updateCartCount();
 
});
 
// TRANSLATIONS
const translations = {
  en: {
    // navbar
    nav_home:       "Home",
    nav_products:   "Products",
    nav_categories: "Categories",
    nav_additem:    "Add Item",
    nav_cart:       "Cart",
    nav_contact:    "Contact",
    nav_login:      "Login",
    nav_search_ph:  "Search...",      // placeholder
    nav_search_btn: "search",
 
    // hero
    hero_title:  "Welcome to",        // "koori" span is kept separately
    hero_desc:   "Your trusted place for agricultural products",
    hero_btn:    "Shop Now",
 
    // why koori
    why_organic_title: "100% Organic",
    why_organic_desc:  "All products are naturally grown with no pesticides",
    why_delivery_title:"Fast Delivery",
    why_delivery_desc: "Fresh to your door within 24 hours of harvest",
    why_quality_title: "Quality Guaranteed",
    why_quality_desc:  "Every product passes strict quality checks before shipping",
 
    // offers banner
    offers_tag:    "Limited Time",
    offers_title:  "Fresh Harvest Sale — Up to 40% Off!",
    offers_desc:   "Stock up on seasonal vegetables and fruits at unbeatable prices.",
    offers_btn:    "Grab the Deal",
    offers_ends:   "Offer ends in",
 
    // categories section
    cat_section_title: "Categories",
    cat_section_sub:   "Shop by category",
    cat_vegetables:    "Vegetables",
    cat_fruits:        "Fruits",
    cat_grains:        "Grains",
    cat_dairy:         "Dairy",
    cat_herbs:         "Herbs",
    cat_honey:         "Honey",
 
    // featured products
    feat_section_title: "Featured Products",
    feat_section_sub:   "Best fresh agricultural products",
    feat_seeall:        "See All Products →",
    badge_new:          "New",
    badge_sale:         "Sale",
    badge_popular:      "Popular",
    prod_herbs_name:    "Fresh Herbs Bundle",
    prod_herbs_desc:    "Basil, mint, parsley — freshly picked",
    prod_corn_name:     "Sweet Corn (x6)",
    prod_corn_desc:     "Farm-grown, naturally sweet",
    prod_tomato_name:   "Organic Tomatoes",
    prod_tomato_desc:   "1kg bag, vine-ripened",
    prod_onion_name:    "Red Onions",
    prod_onion_desc:    "2kg bag, rich flavour",
    prod_egg_name:      "Eggplant",
    prod_egg_desc:      "Fresh, firm & deep purple",
    prod_carrot_name:   "Baby Carrots",
    prod_carrot_desc:   "500g pack, washed & ready",
    add_cart:           "Add to Cart",
 
    // how it works
    how_section_title: "How It Works",
    how_section_sub:   "3 simple steps",
    how1_title: "Browse & Choose",
    how1_desc:  "Explore our fresh products and pick what you need",
    how2_title: "Place Your Order",
    how2_desc:  "Add to cart and checkout in seconds",
    how3_title: "Fast Delivery",
    how3_desc:  "Receive fresh products right at your doorstep",
 
    // testimonials
    testi_section_title: "What Our Customers Say",
    testi_section_sub:   "Customer reviews",
    testi1_text:   "Amazing quality! The vegetables were so fresh, I could tell the difference immediately.",
    testi1_author: "Sara M.",
    testi1_loc:    "Algiers",
    testi2_text:   "Fast delivery and great prices. koori is my go-to for all farm products now!",
    testi2_author: "Karim B.",
    testi2_loc:    "Oran",
    testi3_text:   "Love the variety of products. The herbs bundle is especially great for cooking!",
    testi3_author: "Lina T.",
    testi3_loc:    "Constantine",
 
    // newsletter
    news_title:   "Get Exclusive Offers",
    news_desc:    "Subscribe and be the first to know about fresh arrivals and weekly deals",
    news_ph:      "your@email.com",
    news_btn:     "Subscribe",
 
    // footer
    footer_desc:       "Your trusted place for fresh agricultural products, delivered with care.",
    footer_quick:      "Quick Links",
    footer_help:       "Help",
    footer_contact:    "Contact",
    footer_faq:        "FAQ",
    footer_shipping:   "Shipping Policy",
    footer_returns:    "Returns",
    footer_contactus:  "Contact Us",
    footer_copy:       "© 2026 koori. All rights reserved."
  },
 
  fr: {
    nav_home:       "Accueil",
    nav_products:   "Produits",
    nav_categories: "Catégories",
    nav_additem:    "Ajouter",
    nav_cart:       "Panier",
    nav_contact:    "Contact",
    nav_login:      "Connexion",
    nav_search_ph:  "Rechercher...",
    nav_search_btn: "chercher",
 
    hero_title: "Bienvenue sur",
    hero_desc:  "Votre endroit fiable pour les produits agricoles",
    hero_btn:   "Acheter",
 
    why_organic_title: "100% Bio",
    why_organic_desc:  "Tous les produits sont cultivés naturellement sans pesticides",
    why_delivery_title:"Livraison Rapide",
    why_delivery_desc: "Frais à votre porte dans les 24h après la récolte",
    why_quality_title: "Qualité Garantie",
    why_quality_desc:  "Chaque produit passe des contrôles qualité stricts avant expédition",
 
    offers_tag:    "Durée Limitée",
    offers_title:  "Soldes de Récolte — Jusqu'à 40% de remise !",
    offers_desc:   "Faites le plein de légumes et fruits de saison à prix imbattables.",
    offers_btn:    "Profiter de l'offre",
    offers_ends:   "L'offre se termine dans",
 
    cat_section_title: "Catégories",
    cat_section_sub:   "Acheter par catégorie",
    cat_vegetables: "Légumes",
    cat_fruits:     "Fruits",
    cat_grains:     "Céréales",
    cat_dairy:      "Laitier",
    cat_herbs:      "Herbes",
    cat_honey:      "Miel",
 
    feat_section_title: "Produits Vedettes",
    feat_section_sub:   "Les meilleurs produits agricoles frais",
    feat_seeall:        "Voir tous les produits →",
    badge_new:          "Nouveau",
    badge_sale:         "Promo",
    badge_popular:      "Populaire",
    prod_herbs_name:    "Bouquet d'herbes fraîches",
    prod_herbs_desc:    "Basilic, menthe, persil — fraîchement cueillis",
    prod_corn_name:     "Maïs doux (x6)",
    prod_corn_desc:     "Cultivé à la ferme, naturellement sucré",
    prod_tomato_name:   "Tomates biologiques",
    prod_tomato_desc:   "Sac 1 kg, mûri sur la vigne",
    prod_onion_name:    "Oignons rouges",
    prod_onion_desc:    "Sac 2 kg, saveur riche",
    prod_egg_name:      "Aubergine",
    prod_egg_desc:      "Fraîche, ferme et violet profond",
    prod_carrot_name:   "Mini carottes",
    prod_carrot_desc:   "Pack 500g, lavées et prêtes",
    add_cart:           "Ajouter au panier",
 
    how_section_title: "Comment ça marche",
    how_section_sub:   "3 étapes simples",
    how1_title: "Parcourir & Choisir",
    how1_desc:  "Explorez nos produits frais et choisissez ce dont vous avez besoin",
    how2_title: "Passer commande",
    how2_desc:  "Ajoutez au panier et validez en quelques secondes",
    how3_title: "Livraison Rapide",
    how3_desc:  "Recevez des produits frais directement chez vous",
 
    testi_section_title: "Ce que disent nos clients",
    testi_section_sub:   "Avis clients",
    testi1_text:   "Qualité incroyable ! Les légumes étaient tellement frais, j'ai vu la différence immédiatement.",
    testi1_author: "Sara M.",
    testi1_loc:    "Alger",
    testi2_text:   "Livraison rapide et bons prix. koori est désormais mon référence pour tous les produits agricoles !",
    testi2_author: "Karim B.",
    testi2_loc:    "Oran",
    testi3_text:   "J'adore la variété des produits. Le bouquet d'herbes est particulièrement parfait pour cuisiner !",
    testi3_author: "Lina T.",
    testi3_loc:    "Constantine",
 
    news_title: "Offres Exclusives",
    news_desc:  "Abonnez-vous et soyez le premier informé des nouveautés et deals hebdomadaires",
    news_ph:    "votre@email.com",
    news_btn:   "S'abonner",
 
    footer_desc:      "Votre endroit fiable pour des produits agricoles frais, livrés avec soin.",
    footer_quick:     "Liens rapides",
    footer_help:      "Aide",
    footer_contact:   "Contact",
    footer_faq:       "FAQ",
    footer_shipping:  "Politique de livraison",
    footer_returns:   "Retours",
    footer_contactus: "Contactez-nous",
    footer_copy:      "© 2025 koori. Tous droits réservés."
  },
 
  ar: {
    nav_home:       "الرئيسية",
    nav_products:   "المنتجات",
    nav_categories: "الأصناف",
    nav_additem:    "إضافة منتج",
    nav_cart:       "السلة",
    nav_contact:    "اتصل بنا",
    nav_login:      "تسجيل الدخول",
    nav_search_ph:  "بحث...",
    nav_search_btn: "بحث",
 
    hero_title: "مرحبًا بك في",
    hero_desc:  "مكانك الموثوق للمنتجات الزراعية",
    hero_btn:   "تسوق الآن",
 
    why_organic_title: "طبيعي 100%",
    why_organic_desc:  "جميع المنتجات مزروعة طبيعيًا دون مبيدات",
    why_delivery_title:"توصيل سريع",
    why_delivery_desc: "طازج إلى بابك خلال 24 ساعة من الحصاد",
    why_quality_title: "جودة مضمونة",
    why_quality_desc:  "كل منتج يمر بفحوصات جودة صارمة قبل الشحن",
 
    offers_tag:    "لفترة محدودة",
    offers_title:  "تخفيضات موسم الحصاد — خصم حتى 40%!",
    offers_desc:   "تزوّد بالخضروات والفواكه الموسمية بأسعار لا تُقاوم.",
    offers_btn:    "اغتنم العرض",
    offers_ends:   "ينتهي العرض خلال",
 
    cat_section_title: "الأصناف",
    cat_section_sub:   "تسوق حسب التصنيف",
    cat_vegetables: "خضروات",
    cat_fruits:     "فواكه",
    cat_grains:     "حبوب",
    cat_dairy:      "ألبان",
    cat_herbs:      "أعشاب",
    cat_honey:      "عسل",
 
    feat_section_title: "منتجات مميزة",
    feat_section_sub:   "أفضل المنتجات الزراعية الطازجة",
    feat_seeall:        "عرض جميع المنتجات ←",
    badge_new:          "جديد",
    badge_sale:         "خصم",
    badge_popular:      "الأكثر طلبًا",
    prod_herbs_name:    "باقة أعشاب طازجة",
    prod_herbs_desc:    "ريحان، نعناع، بقدونس — طازج",
    prod_corn_name:     "ذرة حلوة (×6)",
    prod_corn_desc:     "مزروعة في المزرعة، حلوة طبيعيًا",
    prod_tomato_name:   "طماطم عضوية",
    prod_tomato_desc:   "كيس 1 كغ، نضجت على العريش",
    prod_onion_name:    "بصل أحمر",
    prod_onion_desc:    "كيس 2 كغ، نكهة غنية",
    prod_egg_name:      "باذنجان",
    prod_egg_desc:      "طازج، متماسك، أرجواني عميق",
    prod_carrot_name:   "جزر صغير",
    prod_carrot_desc:   "عبوة 500 غ، مغسول وجاهز",
    add_cart:           "أضف إلى السلة",
 
    how_section_title: "كيف يعمل",
    how_section_sub:   "3 خطوات بسيطة",
    how1_title: "تصفح واختر",
    how1_desc:  "استكشف منتجاتنا الطازجة واختر ما تحتاجه",
    how2_title: "اطلب الآن",
    how2_desc:  "أضف إلى السلة وأتمم الطلب في ثوانٍ",
    how3_title: "توصيل سريع",
    how3_desc:  "استلم منتجات طازجة مباشرة أمام بابك",
 
    testi_section_title: "آراء عملائنا",
    testi_section_sub:   "تقييمات العملاء",
    testi1_text:   "جودة رائعة! الخضروات كانت طازجة جدًا، لاحظت الفرق فورًا.",
    testi1_author: "سارة م.",
    testi1_loc:    "الجزائر العاصمة",
    testi2_text:   "توصيل سريع وأسعار ممتازة. koori أصبح وجهتي الأولى للمنتجات الزراعية!",
    testi2_author: "كريم ب.",
    testi2_loc:    "وهران",
    testi3_text:   "أحب تنوع المنتجات. باقة الأعشاب رائعة بشكل خاص في الطبخ!",
    testi3_author: "لينا ت.",
    testi3_loc:    "قسنطينة",
 
    news_title: "عروض حصرية",
    news_desc:  "اشترك وكن أول من يعلم بالوصولات الجديدة والصفقات الأسبوعية",
    news_ph:    "بريدك@example.com",
    news_btn:   "اشترك",
 
    footer_desc:      "مكانك الموثوق للمنتجات الزراعية الطازجة، نوصّلها بعناية.",
    footer_quick:     "روابط سريعة",
    footer_help:      "المساعدة",
    footer_contact:   "التواصل",
    footer_faq:       "أسئلة شائعة",
    footer_shipping:  "سياسة الشحن",
    footer_returns:   "الإرجاع",
    footer_contactus: "اتصل بنا",
    footer_copy:      "© 2025 koori. جميع الحقوق محفوظة."
  },
 
  it: {
    nav_home:       "Home",
    nav_products:   "Prodotti",
    nav_categories: "Categorie",
    nav_additem:    "Aggiungi",
    nav_cart:       "Carrello",
    nav_contact:    "Contatti",
    nav_login:      "Accedi",
    nav_search_ph:  "Cerca...",
    nav_search_btn: "cerca",
 
    hero_title: "Benvenuto su",
    hero_desc:  "Il tuo posto affidabile per prodotti agricoli",
    hero_btn:   "Acquista ora",
 
    why_organic_title: "100% Biologico",
    why_organic_desc:  "Tutti i prodotti sono coltivati naturalmente senza pesticidi",
    why_delivery_title:"Consegna Veloce",
    why_delivery_desc: "Fresco a casa tua entro 24 ore dal raccolto",
    why_quality_title: "Qualità Garantita",
    why_quality_desc:  "Ogni prodotto supera controlli qualità severi prima della spedizione",
 
    offers_tag:    "Tempo Limitato",
    offers_title:  "Saldi del Raccolto — Fino al 40% di sconto!",
    offers_desc:   "Fai scorta di verdure e frutta di stagione a prezzi imbattibili.",
    offers_btn:    "Approfitta dell'offerta",
    offers_ends:   "L'offerta termina tra",
 
    cat_section_title: "Categorie",
    cat_section_sub:   "Acquista per categoria",
    cat_vegetables: "Verdure",
    cat_fruits:     "Frutta",
    cat_grains:     "Cereali",
    cat_dairy:      "Latticini",
    cat_herbs:      "Erbe",
    cat_honey:      "Miele",
 
    feat_section_title: "Prodotti in Evidenza",
    feat_section_sub:   "I migliori prodotti agricoli freschi",
    feat_seeall:        "Vedi tutti i prodotti →",
    badge_new:          "Nuovo",
    badge_sale:         "Offerta",
    badge_popular:      "Popolare",
    prod_herbs_name:    "Bundle erbe fresche",
    prod_herbs_desc:    "Basilico, menta, prezzemolo — appena raccolti",
    prod_corn_name:     "Mais dolce (x6)",
    prod_corn_desc:     "Coltivato in fattoria, naturalmente dolce",
    prod_tomato_name:   "Pomodori biologici",
    prod_tomato_desc:   "Sacchetto 1 kg, maturati sulla vite",
    prod_onion_name:    "Cipolle rosse",
    prod_onion_desc:    "Sacchetto 2 kg, sapore intenso",
    prod_egg_name:      "Melanzana",
    prod_egg_desc:      "Fresca, soda e viola intenso",
    prod_carrot_name:   "Carote baby",
    prod_carrot_desc:   "Pack 500g, lavate e pronte",
    add_cart:           "Aggiungi al carrello",
 
    how_section_title: "Come Funziona",
    how_section_sub:   "3 semplici passi",
    how1_title: "Sfoglia & Scegli",
    how1_desc:  "Esplora i nostri prodotti freschi e scegli ciò che ti serve",
    how2_title: "Effettua l'Ordine",
    how2_desc:  "Aggiungi al carrello e concludi in pochi secondi",
    how3_title: "Consegna Veloce",
    how3_desc:  "Ricevi prodotti freschi direttamente a casa tua",
 
    testi_section_title: "Cosa dicono i nostri clienti",
    testi_section_sub:   "Recensioni clienti",
    testi1_text:   "Qualità fantastica! Le verdure erano così fresche, ho notato la differenza subito.",
    testi1_author: "Sara M.",
    testi1_loc:    "Algeri",
    testi2_text:   "Consegna rapida e ottimi prezzi. koori è ora il mio punto di riferimento per i prodotti agricoli!",
    testi2_author: "Karim B.",
    testi2_loc:    "Orano",
    testi3_text:   "Adoro la varietà dei prodotti. Il bundle di erbe è ottimo per cucinare!",
    testi3_author: "Lina T.",
    testi3_loc:    "Costantina",
 
    news_title: "Offerte Esclusive",
    news_desc:  "Iscriviti e sii il primo a sapere di nuovi arrivi e offerte settimanali",
    news_ph:    "tua@email.com",
    news_btn:   "Iscriviti",
 
    footer_desc:      "Il tuo posto affidabile per prodotti agricoli freschi, consegnati con cura.",
    footer_quick:     "Link rapidi",
    footer_help:      "Aiuto",
    footer_contact:   "Contatti",
    footer_faq:       "FAQ",
    footer_shipping:  "Politica di spedizione",
    footer_returns:   "Resi",
    footer_contactus: "Contattaci",
    footer_copy:      "© 2025 koori. Tutti i diritti riservati."
  }
};
 
// APPLY LANGUAGE
function applyLanguage(lang) {
  const t = translations[lang] || translations.en;
 
  // direction
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  const navbar = document.querySelector(".navbar");
  if (navbar) navbar.dir = "ltr";                // navbar always LTR
  const kooriLogo = document.querySelector(".koori-logo");
  if (kooriLogo) kooriLogo.dir = "ltr";
 
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) heroContent.dir = lang === "ar" ? "rtl" : "ltr";
 
  // helper: set text by selector (skips if element missing)
  function setText(sel, key) {
    const el = document.querySelector(sel);
    if (el && t[key] !== undefined) el.textContent = t[key];
  }
  function setHTML(sel, key) {
    const el = document.querySelector(sel);
    if (el && t[key] !== undefined) el.innerHTML = t[key];
  }
  function setAttr(sel, attr, key) {
    const el = document.querySelector(sel);
    if (el && t[key] !== undefined) el.setAttribute(attr, t[key]);
  }
 
  //NAVBAR
  setText(".nav-links li:nth-child(1) a",  "nav_home");
  setText(".nav-links li:nth-child(2) a",  "nav_products");
  setText(".nav-links li:nth-child(3) a",  "nav_categories");
  setText(".nav-links li:nth-child(4) a",  "nav_additem");
  setText(".nav-links li:nth-child(5) a",  "nav_cart");
  setText(".nav-links li:nth-child(6) a",  "nav_contact");
  setText(".login-btn",                    "nav_login");
  setText(".search-btn",                   "nav_search_btn");
  setAttr(".search-input", "placeholder",  "nav_search_ph");
 
  // HERO
  const h1 = document.querySelector(".hero-content h1");
  if (h1) {
    const kooriSpan = h1.querySelector(".koori") || document.createElement("span");
    kooriSpan.className = "koori";
    kooriSpan.textContent = "koori";
    h1.textContent = "";
    if (lang === "ar") {
      h1.appendChild(document.createTextNode(t.hero_title + " "));
      h1.appendChild(kooriSpan);
    } else {
      h1.appendChild(document.createTextNode(t.hero_title + " "));
      h1.appendChild(kooriSpan);
    }
  }
  setText(".hero-content p", "hero_desc");
  setText(".hero-btn",       "hero_btn");
 
  //WHY KOORI
  const whyCards = document.querySelectorAll(".why-card");
  if (whyCards[0]) {
    whyCards[0].querySelector("h3").textContent = t.why_organic_title;
    whyCards[0].querySelector("p").textContent  = t.why_organic_desc;
  }
  if (whyCards[1]) {
    whyCards[1].querySelector("h3").textContent = t.why_delivery_title;
    whyCards[1].querySelector("p").textContent  = t.why_delivery_desc;
  }
  if (whyCards[2]) {
    whyCards[2].querySelector("h3").textContent = t.why_quality_title;
    whyCards[2].querySelector("p").textContent  = t.why_quality_desc;
  }
 
  setText(".offers-tag",        "offers_tag");
  setText(".offers-text h2",    "offers_title");
  setText(".offers-text p",     "offers_desc");
  setText(".offers-btn",        "offers_btn");
  setText(".countdown-label",   "offers_ends");
 
  //CATEGORIES
  const catTitles = document.querySelectorAll(".section-title");
  const catSection = document.querySelector(".categories-section");
  if (catSection) {
    const title = catSection.querySelector(".section-title");
    if (title) {
      title.innerHTML =
        `<span class="title-line"></span>${t.cat_section_title}<span class="title-line"></span>`;
    }
    const sub = catSection.querySelector(".section-sub");
    if (sub) sub.textContent = t.cat_section_sub;
  }
  const catCards = document.querySelectorAll(".cat-card span");
  const catKeys  = ["cat_vegetables","cat_fruits","cat_grains","cat_dairy","cat_herbs","cat_honey"];
  catCards.forEach((el, i) => { if (t[catKeys[i]]) el.textContent = t[catKeys[i]]; });
 
  // ── FEATURED PRODUCTS ──
  const featSection = document.querySelector(".featured");
  if (featSection) {
    const title = featSection.querySelector(".section-title");
    if (title) title.innerHTML =
      `<span class="title-line"></span>${t.feat_section_title}<span class="title-line"></span>`;
    const sub = featSection.querySelector(".section-sub");
    if (sub) sub.textContent = t.feat_section_sub;
  }
  setText(".see-all-btn", "feat_seeall");
 
  // product cards
  const prodData = [
    { name: "prod_herbs_name",  desc: "prod_herbs_desc"  },
    { name: "prod_corn_name",   desc: "prod_corn_desc"   },
    { name: "prod_tomato_name", desc: "prod_tomato_desc" },
    { name: "prod_onion_name",  desc: "prod_onion_desc"  },
    { name: "prod_egg_name",    desc: "prod_egg_desc"    },
    { name: "prod_carrot_name", desc: "prod_carrot_desc" }
  ];
  document.querySelectorAll(".product-card").forEach((card, i) => {
    if (!prodData[i]) return;
    const nameEl = card.querySelector(".product-name");
    const descEl = card.querySelector(".product-desc");
    const btnEl  = card.querySelector(".btn-text");
    if (nameEl) nameEl.textContent = t[prodData[i].name] || nameEl.textContent;
    if (descEl) descEl.textContent = t[prodData[i].desc] || descEl.textContent;
    if (btnEl)  btnEl.textContent  = t.add_cart;
  });
 
  // badges
  document.querySelectorAll(".product-badge:not(.sale)").forEach(b => {
    if (b.textContent.trim() === "New"     || b.textContent.trim() === translations.en.badge_new     || ["Nouveau","جديد","Nuovo"].includes(b.textContent.trim())) b.textContent = t.badge_new;
    if (b.textContent.trim() === "Popular" || b.textContent.trim() === translations.en.badge_popular || ["Populaire","الأكثر طلبًا","Popolare"].includes(b.textContent.trim())) b.textContent = t.badge_popular;
  });
  document.querySelectorAll(".product-badge.sale").forEach(b => { b.textContent = t.badge_sale; });
 
  //HOW IT WORKS
  const howSection = document.querySelector(".how-section");
  if (howSection) {
    const title = howSection.querySelector(".section-title");
    if (title) title.innerHTML =
      `<span class="title-line"></span>${t.how_section_title}<span class="title-line"></span>`;
    const sub = howSection.querySelector(".section-sub");
    if (sub) sub.textContent = t.how_section_sub;
  }
  const howSteps = document.querySelectorAll(".how-step");
  const howData = [
    { title: "how1_title", desc: "how1_desc" },
    { title: "how2_title", desc: "how2_desc" },
    { title: "how3_title", desc: "how3_desc" }
  ];
  howSteps.forEach((step, i) => {
    if (!howData[i]) return;
    const h3 = step.querySelector("h3");
    const p  = step.querySelector("p");
    if (h3) h3.textContent = t[howData[i].title];
    if (p)  p.textContent  = t[howData[i].desc];
  });
 
  //TESTIMONIALS
  const testiSection = document.querySelector(".testimonials-section");
  if (testiSection) {
    const title = testiSection.querySelector(".section-title");
    if (title) title.innerHTML =
      `<span class="title-line"></span>${t.testi_section_title}<span class="title-line"></span>`;
    const sub = testiSection.querySelector(".section-sub");
    if (sub) sub.textContent = t.testi_section_sub;
  }
  const testiData = [
    { text: "testi1_text", author: "testi1_author", loc: "testi1_loc" },
    { text: "testi2_text", author: "testi2_author", loc: "testi2_loc" },
    { text: "testi3_text", author: "testi3_author", loc: "testi3_loc" }
  ];
  document.querySelectorAll(".testi-card").forEach((card, i) => {
    if (!testiData[i]) return;
    const textEl   = card.querySelector(".testi-text");
    const authorEl = card.querySelector(".testi-author strong");
    const locEl    = card.querySelector(".testi-author span");
    if (textEl)   textEl.textContent   = `"${t[testiData[i].text]}"`;
    if (authorEl) authorEl.textContent = t[testiData[i].author];
    if (locEl)    locEl.textContent    = t[testiData[i].loc];
  });
 
  //NEWSLETTER
  setText(".newsletter-box h2",  "news_title");
  setText(".newsletter-box > p", "news_desc");
  setText(".newsletter-btn",     "news_btn");
  setAttr(".newsletter-input", "placeholder", "news_ph");
 
  //FOOTER 
  setText(".footer-brand p",          "footer_desc");
  const footerCols = document.querySelectorAll(".footer-links-col");
  if (footerCols[0]) {
    footerCols[0].querySelector("h4").textContent = t.footer_quick;
    const links = footerCols[0].querySelectorAll("li a");
    if (links[0]) links[0].textContent = t.nav_home;
    if (links[1]) links[1].textContent = t.nav_products;
    if (links[2]) links[2].textContent = t.nav_categories;
    if (links[3]) links[3].textContent = t.nav_cart;
  }
  if (footerCols[1]) {
    footerCols[1].querySelector("h4").textContent = t.footer_help;
    const links = footerCols[1].querySelectorAll("li a");
    if (links[0]) links[0].textContent = t.footer_contactus;
    if (links[1]) links[1].textContent = t.footer_faq;
    if (links[2]) links[2].textContent = t.footer_shipping;
    if (links[3]) links[3].textContent = t.footer_returns;
  }
  if (footerCols[2]) {
    footerCols[2].querySelector("h4").textContent = t.footer_contact;
  }
  setText(".footer-bottom p", "footer_copy");
}
 
// COUNTDOWN
function startCountdown(totalSeconds) {
  const hEl = document.getElementById("cd-h");
  const mEl = document.getElementById("cd-m");
  const sEl = document.getElementById("cd-s");
  if (!hEl || !mEl || !sEl) return;
 
  const key = "kooriCountdownEnd";
  let endTime = parseInt(localStorage.getItem(key));
  if (!endTime || endTime < Date.now()) {
    endTime = Date.now() + totalSeconds * 1000;
    localStorage.setItem(key, endTime);
  }
 
  function tick() {
    const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    const h = Math.floor(remaining / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = remaining % 60;
    hEl.textContent = String(h).padStart(2, "0");
    mEl.textContent = String(m).padStart(2, "0");
    sEl.textContent = String(s).padStart(2, "0");
    if (remaining > 0) setTimeout(tick, 1000);
  }
  tick();
}
 
// CART
function addToCart(btn, productName) {
  const cart = JSON.parse(localStorage.getItem("kooriCart") || "[]");
  const existing = cart.find(i => i.name === productName);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: productName, qty: 1 });
  }
  localStorage.setItem("kooriCart", JSON.stringify(cart));
 
  const btnText = btn.querySelector(".btn-text");
  const original = btnText.textContent;
  btnText.textContent = "Added ✓";
  btn.style.background = "#3a7d44";
  setTimeout(() => {
    btnText.textContent = original;
    btn.style.background = "";
  }, 1500);
 
  showToast(`"${productName}" added to cart!`);
  updateCartCount();
}
 
function showToast(msg) {
  const toast = document.getElementById("cartToast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}
 
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("kooriCart") || "[]");
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cartCount");
  if (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? "inline-block" : "none";
  }
}
 
// NEWSLETTER
function subscribeNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value.trim();
  const msg   = document.getElementById("newsletterMsg");
  if (!email) return;
 
  const subs = JSON.parse(localStorage.getItem("kooriNewsletterSubs") || "[]");
  if (subs.includes(email)) {
    msg.textContent = "You are already subscribed!";
    msg.style.color = "#fde98a";
  } else {
    subs.push(email);
    localStorage.setItem("kooriNewsletterSubs", JSON.stringify(subs));
    msg.textContent = "Thanks for subscribing! 🎉";
    msg.style.color = "#a8e063";
    document.getElementById("newsletterEmail").value = "";
  }
  setTimeout(() => { msg.textContent = ""; }, 4000);
}
