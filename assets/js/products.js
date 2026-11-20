/**
 * VEYRA OPTICAL STORE & EYE CARE CENTER
 * Products Catalog & Interactive Filtering Engine
 * Supports: Search, Category, Shape, Lens Type, Material, Color, Price Range,
 * Sorting, Grid/List view toggle, Swatch switching, Quick View modal.
 */

const STACKLY_PRODUCTS = [
  {
    id: 'prod-001',
    name: 'Avery Classic Rectangle',
    category: 'eyeglasses',
    shape: 'rectangle',
    lensType: 'single',
    material: 'acetate',
    color: 'black',
    price: 145,
    oldPrice: 175,
    badge: 'Bestseller',
    badgeType: 'badge-primary',
    rating: 4.9,
    reviews: 128,
    image: '../assets/images/products/frame-avery.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Onyx Black', hex: '#111827', img: '../assets/images/products/frame-avery.jpg' },
      { name: 'Sedona Terracotta', hex: '#C2410C', img: '../assets/images/products/frame-winston.jpg' },
      { name: 'Crystal Clear', hex: '#FFFFFF', img: '../assets/images/products/frame-rowan.jpg' }
    ],
    description: 'Precision handcrafted Italian Mazzucchelli acetate with stainless steel core wire and five-barrel German hinges. Built for all-day comfort and timeless boardroom elegance.',
    dimensions: '52 - 18 - 145 mm',
    inStock: true
  },
  {
    id: 'prod-002',
    name: 'Winston Intellectual Round',
    category: 'eyeglasses',
    shape: 'round',
    lensType: 'progressive',
    material: 'acetate',
    color: 'terracotta',
    price: 155,
    oldPrice: 0,
    badge: 'Staff Pick',
    badgeType: '',
    rating: 4.8,
    reviews: 94,
    image: '../assets/images/products/frame-winston.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Sedona Terracotta', hex: '#C2410C', img: '../assets/images/products/frame-winston.jpg' },
      { name: 'Onyx Black', hex: '#111827', img: '../assets/images/products/frame-avery.jpg' }
    ],
    description: 'A scholarly silhouette inspired by 1950s literary circles. Balanced proportions with a sculpted keyhole bridge that eliminates pressure on the nasal bone.',
    dimensions: '49 - 20 - 145 mm',
    inStock: true
  },
  {
    id: 'prod-003',
    name: 'Celeste Sculpted Cat-Eye',
    category: 'eyeglasses',
    shape: 'cateye',
    lensType: 'single',
    material: 'acetate',
    color: 'terracotta',
    price: 165,
    oldPrice: 195,
    badge: 'New Arrival',
    badgeType: 'badge-primary',
    rating: 5.0,
    reviews: 62,
    image: '../assets/images/products/frame-celeste.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Sedona Terracotta', hex: '#C2410C', img: '../assets/images/products/frame-celeste.jpg' },
      { name: 'Onyx Black', hex: '#111827', img: '../assets/images/products/frame-avery.jpg' }
    ],
    description: 'Gracefully arched cat-eye with beveled browline detailing that gently lifts facial contours. Fitted with premium anti-reflective and UV400 lenses.',
    dimensions: '53 - 17 - 140 mm',
    inStock: true
  },
  {
    id: 'prod-004',
    name: 'Montauk Aviator Titanium',
    category: 'sunglasses',
    shape: 'aviator',
    lensType: 'uv',
    material: 'titanium',
    color: 'terracotta',
    price: 185,
    oldPrice: 220,
    badge: 'Titanium',
    badgeType: 'badge-primary',
    rating: 4.9,
    reviews: 140,
    image: '../assets/images/products/frame-montauk.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Sedona Terracotta', hex: '#C2410C', img: '../assets/images/products/frame-montauk.jpg' },
      { name: 'Crystal Clear', hex: '#FFFFFF', img: '../assets/images/products/frame-sora.jpg' }
    ],
    description: 'Featherweight Japanese Beta-Titanium aviator weighing only 14 grams. Corrosion-resistant with medical-grade silicone hypoallergenic nose pads.',
    dimensions: '56 - 15 - 145 mm',
    inStock: true
  },
  {
    id: 'prod-005',
    name: 'Rowan Architectural Square',
    category: 'eyeglasses',
    shape: 'square',
    lensType: 'bifocal',
    material: 'acetate',
    color: 'white',
    price: 150,
    oldPrice: 0,
    badge: 'Minimalist',
    badgeType: '',
    rating: 4.7,
    reviews: 79,
    image: '../assets/images/products/frame-rowan.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Crystal Clear', hex: '#FFFFFF', img: '../assets/images/products/frame-rowan.jpg' },
      { name: 'Onyx Black', hex: '#111827', img: '../assets/images/products/frame-avery.jpg' }
    ],
    description: 'Clean architectural lines in transparent bio-acetate that blend effortlessly across all skin tones while letting your eyes remain the centerpiece.',
    dimensions: '51 - 19 - 145 mm',
    inStock: true
  },
  {
    id: 'prod-006',
    name: 'Palmer Iconic Wayfarer',
    category: 'sunglasses',
    shape: 'wayfarer',
    lensType: 'uv',
    material: 'acetate',
    color: 'terracotta',
    price: 160,
    oldPrice: 190,
    badge: 'Iconic',
    badgeType: '',
    rating: 4.9,
    reviews: 215,
    image: '../assets/images/products/frame-palmer.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Sedona Terracotta', hex: '#C2410C', img: '../assets/images/products/frame-palmer.jpg' },
      { name: 'Onyx Black', hex: '#111827', img: '../assets/images/products/frame-solas.jpg' }
    ],
    description: 'The definitive mid-century classic rebuilt with 2026 ergonomic contours and polarized scratch-resistant sun lenses.',
    dimensions: '54 - 18 - 150 mm',
    inStock: true
  },
  {
    id: 'prod-007',
    name: 'Sora Octagonal Geometric',
    category: 'eyeglasses',
    shape: 'geometric',
    lensType: 'blue-filter',
    material: 'metal',
    color: 'white',
    price: 170,
    oldPrice: 0,
    badge: 'Lightweight',
    badgeType: '',
    rating: 4.8,
    reviews: 48,
    image: '../assets/images/products/frame-sora.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Crystal Clear', hex: '#FFFFFF', img: '../assets/images/products/frame-sora.jpg' },
      { name: 'Sedona Terracotta', hex: '#C2410C', img: '../assets/images/products/frame-montauk.jpg' }
    ],
    description: 'Geometric 8-sided frame engineered from stainless steel wire with a slender double bridge for an avant-garde artistic statement.',
    dimensions: '50 - 21 - 142 mm',
    inStock: true
  },
  {
    id: 'prod-008',
    name: 'Kanso Minimalist Rimless',
    category: 'eyeglasses',
    shape: 'rimless',
    lensType: 'single',
    material: 'titanium',
    color: 'black',
    price: 195,
    oldPrice: 240,
    badge: 'Featherweight',
    badgeType: 'badge-primary',
    rating: 4.9,
    reviews: 83,
    image: '../assets/images/products/frame-kanso.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Sedona Terracotta', hex: '#C2410C', img: '../assets/images/products/frame-kanso.jpg' }
    ],
    description: 'Zero frame obstruction. Lenses mounted directly to Swedish surgical titanium mounts. Virtually invisible on the face with unbeatable 9.8g weight.',
    dimensions: '52 - 18 - 140 mm',
    inStock: true
  },
  {
    id: 'prod-009',
    name: 'Solas Polarized Sun Noir',
    category: 'sunglasses',
    shape: 'wayfarer',
    lensType: 'uv',
    material: 'acetate',
    color: 'black',
    price: 175,
    oldPrice: 0,
    badge: 'Polarized',
    badgeType: 'badge-primary',
    rating: 5.0,
    reviews: 167,
    image: '../assets/images/products/frame-solas.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Matte Noir', hex: '#111827', img: '../assets/images/products/frame-solas.jpg' }
    ],
    description: 'High-density mineral glass polarized lenses with anti-reflective back-coating. Blocks 100% of blinding road and water glare with superior clarity.',
    dimensions: '55 - 19 - 148 mm',
    inStock: true
  },
  {
    id: 'prod-010',
    name: 'ScreenGuard 420 Pro',
    category: 'bluelight',
    shape: 'square',
    lensType: 'blue-filter',
    material: 'acetate',
    color: 'black',
    price: 135,
    oldPrice: 160,
    badge: 'ScreenGuard',
    badgeType: 'badge-primary',
    rating: 4.9,
    reviews: 310,
    image: '../assets/images/products/frame-screenguard.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Onyx Black', hex: '#111827', img: '../assets/images/products/frame-screenguard.jpg' },
      { name: 'Sedona Terracotta', hex: '#C2410C', img: '../assets/images/products/frame-avery.jpg' }
    ],
    description: 'Specifically designed for software engineers, designers, and heavy screen users. Absorbs 420nm high-energy visible blue light without yellow tint distortion.',
    dimensions: '53 - 17 - 145 mm',
    inStock: true
  },
  {
    id: 'prod-011',
    name: 'AquaPure Daily Hydrogel Lenses',
    category: 'contacts',
    shape: 'round',
    lensType: 'single',
    material: 'eco-bio',
    color: 'white',
    price: 48,
    oldPrice: 0,
    badge: 'Clinical Grade',
    badgeType: 'badge-primary',
    rating: 4.9,
    reviews: 420,
    image: '../assets/images/products/frame-aquapure.jpg',
    imageSide: '../assets/images/products/frame-aquapure.jpg',
    colors: [
      { name: 'Crystal Clear', hex: '#FFFFFF', img: '../assets/images/products/frame-aquapure.jpg' }
    ],
    description: '30-Pack single use daily contact lenses with 58% water content and HydraMatrix oxygen permeability for up to 16 hours of dew-fresh comfort.',
    dimensions: 'BC 8.5 | DIA 14.2 mm',
    inStock: true
  },
  {
    id: 'prod-012',
    name: 'Clarity Pocket Reading Glasses',
    category: 'readers',
    shape: 'rectangle',
    lensType: 'single',
    material: 'acetate',
    color: 'terracotta',
    price: 85,
    oldPrice: 110,
    badge: 'Reading +1.50 to +3.00',
    badgeType: '',
    rating: 4.8,
    reviews: 95,
    image: '../assets/images/products/frame-clarity.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Sedona Terracotta', hex: '#C2410C', img: '../assets/images/products/frame-clarity.jpg' },
      { name: 'Onyx Black', hex: '#111827', img: '../assets/images/products/frame-avery.jpg' }
    ],
    description: 'Slimline reading frames engineered with flex hinges and distortion-free aspheric magnification lenses. Includes protective leatherette pocket slip.',
    dimensions: '50 - 18 - 140 mm',
    inStock: true
  },
  {
    id: 'prod-013',
    name: 'Lumina Aspheric Progressive',
    category: 'eyeglasses',
    shape: 'round',
    lensType: 'progressive',
    material: 'acetate',
    color: 'black',
    price: 210,
    oldPrice: 250,
    badge: 'Free-Form Digital',
    badgeType: 'badge-primary',
    rating: 5.0,
    reviews: 74,
    image: '../assets/images/products/frame-lumina.jpg',
    imageSide: '../assets/images/products/frame-avery-side.jpg',
    colors: [
      { name: 'Sedona Terracotta', hex: '#C2410C', img: '../assets/images/products/frame-lumina.jpg' },
      { name: 'Onyx Black', hex: '#111827', img: '../assets/images/products/frame-avery.jpg' }
    ],
    description: 'Equipped with digital free-form progressive lenses offering seamless transition between distance, computer corridor, and close reading without corridor distortion.',
    dimensions: '51 - 20 - 145 mm',
    inStock: true
  }
];

// Product Catalog Filter State
let currentCatalogFilter = {
  search: '',
  category: 'all',
  shape: 'all',
  lensType: 'all',
  material: 'all',
  color: 'all',
  maxPrice: 300,
  sortBy: 'featured',
  viewMode: 'grid',
  wishlistOnly: false
};

const FILTER_COLOR_HEX = { black: '#111827', white: '#ffffff', terracotta: '#c2410c' };
const FILTER_LABELS = {
  category: { eyeglasses: 'Prescription Eyeglasses', sunglasses: 'Polarized Sunglasses', bluelight: 'Blue-Light ScreenGuard', contacts: 'Contact Lenses', readers: 'Reading Glasses' },
  shape: { rectangle: 'Rectangle', round: 'Round', square: 'Square', aviator: 'Aviator', cateye: 'Cat-Eye', wayfarer: 'Wayfarer', geometric: 'Geometric', rimless: 'Rimless' },
  lensType: { single: 'Single Vision', progressive: 'Progressive', bifocal: 'Bifocal', 'blue-filter': '420nm Blue-Light Filter', uv: 'Polarized UV400' },
  material: { acetate: 'Bio-Acetate', titanium: 'Beta-Titanium', metal: 'Stainless Steel', 'eco-bio': 'Eco-Bio' },
  color: { black: 'Onyx Black', white: 'Crystal White', terracotta: 'Sedona Terracotta' }
};

function productHasColor(p, color) {
  const hex = FILTER_COLOR_HEX[color];
  if (!hex) return true;
  return p.color === color || (p.colors || []).some(c => c.hex.toLowerCase() === hex);
}

function getWishlistIds() {
  try { return JSON.parse(localStorage.getItem('stackly-wishlist-v1')) || []; } catch (e) { return []; }
}

document.addEventListener('DOMContentLoaded', () => {
  initProductCatalog();
  initQuickViewModal();
});

function initProductCatalog() {
  const container = document.querySelector('#productGridContainer');
  if (!container) return;

  applyUrlFilters();
  setupFilterEventListeners();
  syncFilterUI();
  renderCatalog();
}

/* Read ?cat= ?shape= ?material= ?lens= ?color= ?search= ?view=wishlist from the URL */
function applyUrlFilters() {
  const q = new URLSearchParams(window.location.search);
  const f = currentCatalogFilter;
  const cat = q.get('cat');
  if (cat && FILTER_LABELS.category[cat]) f.category = cat;
  const shape = q.get('shape');
  if (shape) {
    if (FILTER_LABELS.shape[shape]) f.shape = shape;
    else if (FILTER_LABELS.material[shape]) f.material = shape; // e.g. ?shape=titanium
  }
  const mat = q.get('material');
  if (mat && FILTER_LABELS.material[mat]) f.material = mat;
  const lens = q.get('lens');
  if (lens && FILTER_LABELS.lensType[lens]) f.lensType = lens;
  const color = q.get('color');
  if (color && FILTER_LABELS.color[color]) f.color = color;
  const search = q.get('search') || q.get('q');
  if (search) f.search = search.trim();
  if (q.get('view') === 'wishlist') f.wishlistOnly = true;
}

/* Push the current filter state into every sidebar control */
function syncFilterUI() {
  const f = currentCatalogFilter;
  const searchInput = document.querySelector('#catalogSearchInput');
  if (searchInput) searchInput.value = f.search;

  document.querySelectorAll('[data-filter-category]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-filter-category') === f.category);
  });
  [['filter-shape', f.shape], ['filter-lens', f.lensType], ['filter-material', f.material]].forEach(([name, val]) => {
    document.querySelectorAll('input[name="' + name + '"]').forEach(r => { r.checked = (r.value === val); });
  });
  document.querySelectorAll('.filter-color-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-color') === f.color);
  });

  const slider = document.querySelector('#priceRangeSlider');
  const disp = document.querySelector('#priceRangeDisplay');
  if (slider) slider.value = f.maxPrice;
  if (disp) disp.textContent = '$' + f.maxPrice;

  const sort = document.querySelector('#catalogSortSelect');
  if (sort) sort.value = f.sortBy;

  const gridBtn = document.querySelector('#viewGridBtn');
  const listBtn = document.querySelector('#viewListBtn');
  if (gridBtn && listBtn) {
    gridBtn.classList.toggle('active', f.viewMode === 'grid');
    listBtn.classList.toggle('active', f.viewMode === 'list');
  }
  const wl = document.querySelector('#wishlistOnlyToggle');
  if (wl) wl.checked = f.wishlistOnly;
}

/* Chips showing every active filter, each removable */
function renderActiveChips() {
  const box = document.querySelector('#activeFilterChips');
  if (!box) return;
  const f = currentCatalogFilter;
  const chips = [];
  if (f.search) chips.push(['search', 'Search: "' + f.search + '"']);
  if (f.category !== 'all') chips.push(['category', FILTER_LABELS.category[f.category]]);
  if (f.shape !== 'all') chips.push(['shape', FILTER_LABELS.shape[f.shape]]);
  if (f.lensType !== 'all') chips.push(['lensType', FILTER_LABELS.lensType[f.lensType]]);
  if (f.material !== 'all') chips.push(['material', FILTER_LABELS.material[f.material]]);
  if (f.color !== 'all') chips.push(['color', FILTER_LABELS.color[f.color]]);
  if (f.maxPrice < 300) chips.push(['maxPrice', 'Up to $' + f.maxPrice]);
  if (f.wishlistOnly) chips.push(['wishlistOnly', 'Wishlist only']);
  box.innerHTML = chips.map(([k, label]) =>
    '<button type="button" class="filter-chip" data-clear="' + k + '">' + label + ' <i class="bi bi-x"></i><span class="chip-x" aria-hidden="true">&times;</span></button>'
  ).join('') + (chips.length > 1 ? '<button type="button" class="filter-chip filter-chip-clear" data-clear="all">Clear all</button>' : '');
  box.style.display = chips.length ? 'flex' : 'none';

  const n = document.querySelector('#activeFilterCount');
  if (n) { n.textContent = chips.length; n.style.display = chips.length ? 'inline-flex' : 'none'; }
}

function clearFilter(key) {
  const f = currentCatalogFilter;
  if (key === 'all') return resetAllFilters();
  if (key === 'search') f.search = '';
  else if (key === 'maxPrice') f.maxPrice = 300;
  else if (key === 'wishlistOnly') f.wishlistOnly = false;
  else f[key] = 'all';
  syncFilterUI();
  renderCatalog();
}

function renderCatalog() {
  const container = document.querySelector('#productGridContainer');
  const countBadge = document.querySelector('#productCountBadge');
  if (!container) return;

  // Filter products
  let filtered = STACKLY_PRODUCTS.filter(p => {
    // Search
    if (currentCatalogFilter.search) {
      const q = currentCatalogFilter.search.toLowerCase();
      const hay = [p.name, p.category, (FILTER_LABELS.category[p.category] || ''), p.shape, (FILTER_LABELS.shape[p.shape] || ''),
                   p.material, (FILTER_LABELS.material[p.material] || ''), p.lensType, (FILTER_LABELS.lensType[p.lensType] || ''),
                   p.color, p.badge || '', p.description].join(' ').toLowerCase();
      if (!q.split(/\s+/).every(w => hay.includes(w))) return false;
    }

    // Category
    if (currentCatalogFilter.category !== 'all' && p.category !== currentCatalogFilter.category) {
      return false;
    }

    // Shape
    if (currentCatalogFilter.shape !== 'all' && p.shape !== currentCatalogFilter.shape) {
      return false;
    }

    // Lens Type
    if (currentCatalogFilter.lensType !== 'all' && p.lensType !== currentCatalogFilter.lensType) {
      return false;
    }

    // Material
    if (currentCatalogFilter.material !== 'all' && p.material !== currentCatalogFilter.material) {
      return false;
    }

    // Color
    if (currentCatalogFilter.color !== 'all' && !productHasColor(p, currentCatalogFilter.color)) {
      return false;
    }

    // Wishlist only
    if (currentCatalogFilter.wishlistOnly && !getWishlistIds().includes(p.id)) {
      return false;
    }

    // Price
    if (p.price > currentCatalogFilter.maxPrice) {
      return false;
    }

    return true;
  });

  // Sort products
  if (currentCatalogFilter.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentCatalogFilter.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentCatalogFilter.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentCatalogFilter.sortBy === 'newest') {
    filtered.sort((a, b) => ((b.badge === 'New Arrival' ? 1 : 0) - (a.badge === 'New Arrival' ? 1 : 0)) || b.id.localeCompare(a.id));
  }

  renderActiveChips();

  // Update count badge
  if (countBadge) {
    countBadge.textContent = `Showing ${filtered.length} of ${STACKLY_PRODUCTS.length} Eyewear Models`;
  }

  // Render cards
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="bi bi-search" style="font-size: 3rem; color: var(--color-muted); display: block; margin-bottom: 16px;"></i>
        <h3 style="margin-bottom: 10px;">No Eyewear Found</h3>
        <p style="margin-bottom: 24px;">${currentCatalogFilter.wishlistOnly && !getWishlistIds().length ? 'Your wishlist is empty. Tap the heart on any frame to save it here.' : "We couldn't find any frames matching your active filter criteria."}</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    renderActiveChips();
    return;
  }

  container.className = `product-grid ${currentCatalogFilter.viewMode === 'list' ? 'list-view' : ''}`;

  container.innerHTML = filtered.map(product => {
    const wantHex = FILTER_COLOR_HEX[currentCatalogFilter.color];
    const foundIdx = wantHex ? product.colors.findIndex(c => c.hex.toLowerCase() === wantHex) : -1;
    const activeIdx = foundIdx > 0 ? foundIdx : 0;
    return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-media">
          <div class="product-badge-wrap">
            ${product.badge ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` : ''}
          </div>

          <div class="product-floating-actions">
            <button class="card-action-btn btn-wishlist-toggle" data-id="${product.id}" title="Add to Wishlist">
              <i class="bi bi-heart"></i>
            </button>
            <button class="card-action-btn btn-quick-view-trigger" data-id="${product.id}" title="Quick View">
              <i class="bi bi-eye"></i>
            </button>
          </div>

          <img src="${product.colors[activeIdx].img}" alt="${product.name}" class="product-img main-product-img" loading="lazy" />

          <button class="product-tryon-btn btn-trigger-tryon" data-frame="${product.name}" data-img="${product.image}">
            <i class="bi bi-camera"></i> Virtual Try-On
          </button>
        </div>

        <div class="product-body">
          <div>
            <div class="product-meta">
              <span class="product-category">${product.category} • ${product.shape}</span>
              <span class="product-rating"><i class="bi bi-star-fill" style="color: var(--color-primary);"></i> ${product.rating}</span>
            </div>
            
            <h3 class="product-title">
              <a href="product-details.html?id=${product.id}">${product.name}</a>
            </h3>

            <div class="product-color-swatches">
              ${product.colors.map((c, idx) => `
                <span class="color-swatch ${idx === activeIdx ? 'active' : ''}" 
                      style="background-color: ${c.hex};" 
                      title="${c.name}"
                      data-img="${c.img}"
                      onclick="changeProductCardImage(this, '${c.img}')">
                </span>
              `).join('')}
            </div>
          </div>

          <div class="product-footer">
            <div class="product-price">
              <span class="price-current">$${product.price}</span>
              ${product.oldPrice > 0 ? `<span class="price-old">$${product.oldPrice}</span>` : ''}
            </div>
            <button class="btn-add-cart" onclick="addProductToCart('${product.id}')">
              <i class="bi bi-bag-plus me-1"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.syncWishlistButtons) window.syncWishlistButtons();

  // Attach Try-On listeners
  document.querySelectorAll('.btn-trigger-tryon').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const frameName = btn.getAttribute('data-frame');
      const frameImg = btn.getAttribute('data-img');
      if (window.launchVirtualTryOn) window.launchVirtualTryOn(frameName, frameImg);
    });
  });

  // Attach Wishlist listeners
  document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      if (window.toggleWishlist) window.toggleWishlist(id, btn);
      if (currentCatalogFilter.wishlistOnly) renderCatalog();
    });
  });

  // Attach Quick View listeners
  document.querySelectorAll('.btn-quick-view-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      openQuickView(id);
    });
  });
}

function changeProductCardImage(swatchElem, newImgUrl) {
  const card = swatchElem.closest('.product-card');
  if (!card) return;
  const swatches = card.querySelectorAll('.color-swatch');
  swatches.forEach(s => s.classList.remove('active'));
  swatchElem.classList.add('active');

  const mainImg = card.querySelector('.main-product-img');
  if (mainImg) {
    mainImg.src = newImgUrl;
  }
}
window.changeProductCardImage = changeProductCardImage;

function setupFilterEventListeners() {
  // Search bar input
  const searchInput = document.querySelector('#catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentCatalogFilter.search = e.target.value.trim();
      renderCatalog();
    });
  }

  // Category filter links / radios
  document.querySelectorAll('[data-filter-category]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('[data-filter-category]').forEach(i => i.classList.remove('active'));
      el.classList.add('active');
      currentCatalogFilter.category = el.getAttribute('data-filter-category');
      renderCatalog();
    });
  });

  // Frame shape filters
  document.querySelectorAll('input[name="filter-shape"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentCatalogFilter.shape = e.target.value;
      renderCatalog();
    });
  });

  // Lens type filters
  document.querySelectorAll('input[name="filter-lens"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentCatalogFilter.lensType = e.target.value;
      renderCatalog();
    });
  });

  // Material filters
  document.querySelectorAll('input[name="filter-material"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentCatalogFilter.material = e.target.value;
      renderCatalog();
    });
  });

  // Color filters
  document.querySelectorAll('.filter-color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.filter-color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCatalogFilter.color = btn.getAttribute('data-color');
      renderCatalog();
    });
  });

  // Price range slider
  const priceSlider = document.querySelector('#priceRangeSlider');
  const priceDisplay = document.querySelector('#priceRangeDisplay');
  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener('input', (e) => {
      currentCatalogFilter.maxPrice = parseInt(e.target.value, 10);
      priceDisplay.textContent = `$${currentCatalogFilter.maxPrice}`;
      renderCatalog();
    });
  }

  // Sort dropdown
  const sortSelect = document.querySelector('#catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentCatalogFilter.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Active-filter chips (event delegation)
  const chipBox = document.querySelector('#activeFilterChips');
  if (chipBox) chipBox.addEventListener('click', (e) => {
    const b = e.target.closest('[data-clear]');
    if (b) clearFilter(b.getAttribute('data-clear'));
  });

  // Wishlist-only switch
  const wl = document.querySelector('#wishlistOnlyToggle');
  if (wl) wl.addEventListener('change', () => { currentCatalogFilter.wishlistOnly = wl.checked; renderCatalog(); });

  // Mobile / tablet: show or hide the filter panel
  const panel = document.querySelector('#catalogFilters');
  const toggle = document.querySelector('#filterToggleBtn');
  if (panel && toggle) {
    toggle.addEventListener('click', () => {
      const open = panel.classList.toggle('filters-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    const apply = document.querySelector('#filterApplyBtn');
    if (apply) apply.addEventListener('click', () => {
      panel.classList.remove('filters-open');
      toggle.setAttribute('aria-expanded', 'false');
      const grid = document.querySelector('#productGridContainer');
      if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Grid/List toggle buttons
  const gridBtn = document.querySelector('#viewGridBtn');
  const listBtn = document.querySelector('#viewListBtn');
  if (gridBtn && listBtn) {
    gridBtn.addEventListener('click', () => {
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
      currentCatalogFilter.viewMode = 'grid';
      renderCatalog();
    });

    listBtn.addEventListener('click', () => {
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
      currentCatalogFilter.viewMode = 'list';
      renderCatalog();
    });
  }
}

function resetAllFilters() {
  currentCatalogFilter = {
    search: '',
    category: 'all',
    shape: 'all',
    lensType: 'all',
    material: 'all',
    color: 'all',
    maxPrice: 300,
    sortBy: 'featured',
    viewMode: 'grid',
    wishlistOnly: false
  };
  syncFilterUI();
  if (window.history && history.replaceState && window.location.search) {
    history.replaceState(null, '', window.location.pathname);
  }
  renderCatalog();
  if (window.showToast) window.showToast('Filters reset to default');
}
window.resetAllFilters = resetAllFilters;

/* Quick View Modal Interaction */
function initQuickViewModal() {
  const modal = document.querySelector('#quickViewModal');
  const closeBtn = document.querySelector('.quickview-modal-close');
  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

function openQuickView(productId) {
  const modal = document.querySelector('#quickViewModal');
  const product = STACKLY_PRODUCTS.find(p => p.id === productId);
  if (!modal || !product) return;

  const contentBox = modal.querySelector('#quickViewContent');
  if (contentBox) {
    contentBox.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; padding: 30px;">
        <div style="background-color: var(--bg-surface); border-radius: var(--radius-md); padding: 20px; display: flex; align-items: center; justify-content: center;">
          <img src="${product.image}" alt="${product.name}" id="qvMainImg" style="width: 100%; object-fit: contain;" />
        </div>
        <div>
          <span style="color: var(--color-primary); font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em;">
            ${product.category} • ${product.shape}
          </span>
          <h2 style="font-size: 1.8rem; margin: 6px 0 12px;">${product.name}</h2>
          <div style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-bottom: 16px;">
            $${product.price} ${product.oldPrice > 0 ? `<span style="font-size: 1rem; color: var(--text-muted); text-decoration: line-through; margin-left: 8px;">$${product.oldPrice}</span>` : ''}
          </div>
          <p style="font-size: 0.95rem; margin-bottom: 20px;">${product.description}</p>
          
          <div style="margin-bottom: 20px;">
            <label style="font-weight: 600; font-size: 0.85rem; display: block; margin-bottom: 8px;">Frame Dimensions</label>
            <span style="display: inline-block; padding: 6px 14px; background-color: var(--bg-surface); border-radius: var(--radius-sm); font-size: 0.9rem; font-weight: 600;">
              ${product.dimensions}
            </span>
          </div>

          <div style="display: flex; gap: 12px; margin-top: 30px;">
            <button class="btn btn-primary" style="flex: 1;" onclick="addProductToCart('${product.id}')">
              <i class="bi bi-bag-plus me-1"></i> Add to Cart
            </button>
            <button class="btn btn-outline" onclick="window.launchVirtualTryOn('${product.name}', '${product.image}')">
              <i class="bi bi-camera me-1"></i> Try On
            </button>
          </div>
          <div style="margin-top: 14px; text-align: center;">
            <a href="product-details.html?id=${product.id}" style="font-size: 0.88rem; color: var(--color-primary); font-weight: 600;">
              View Full Lens Customizer &amp; Specifications →
            </a>
          </div>
        </div>
      </div>
    `;
  }

  modal.classList.add('active');
}
