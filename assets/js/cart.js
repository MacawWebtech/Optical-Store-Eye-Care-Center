/**
 * VEYRA OPTICAL STORE & EYE CARE CENTER
 * Shopping Cart & Wishlist State Management
 * Features: LocalStorage reactive persistence, Cart Drawer sync, Full Cart Page,
 * Free Shipping Progress Bar ($150 threshold), Coupon Code, Wishlist Toggling.
 */

const CART_STORAGE_KEY = 'stackly-cart-v1';
const WISHLIST_STORAGE_KEY = 'stackly-wishlist-v1';
const FREE_SHIPPING_THRESHOLD = 150;

document.addEventListener('DOMContentLoaded', () => {
  initCartState();
  initWishlistState();
  initCouponHandler();
});

function getStoredCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [
      {
        id: 'prod-001',
        name: 'Avery Classic Rectangle',
        price: 145,
        image: '../assets/images/products/frame-avery.jpg',
        color: 'Onyx Black',
        lens: 'Single Vision (Anti-Reflective)',
        qty: 1
      }
    ];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartCounters();
  renderCartDrawer();
  renderCartPage();
  renderCheckoutSummary();
}

function initCartState() {
  updateCartCounters();
  renderCartDrawer();
  renderCartPage();
  renderCheckoutSummary();
}

function updateCartCounters() {
  const cart = getStoredCart();
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge-count').forEach(el => {
    el.textContent = totalCount;
  });
}

function addProductToCart(productId, customOptions = null) {
  let product = null;
  if (typeof STACKLY_PRODUCTS !== 'undefined') {
    product = STACKLY_PRODUCTS.find(p => p.id === productId);
  }

  if (!product) {
    product = {
      id: productId,
      name: 'Veyra Handcrafted Eyewear',
      price: 145,
      image: '../assets/images/products/frame-avery.jpg'
    };
  }

  const cart = getStoredCart();
  const existingIdx = cart.findIndex(i => i.id === productId && (!customOptions || i.color === customOptions.color));

  if (existingIdx > -1) {
    cart[existingIdx].qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: customOptions?.color || 'Onyx Black',
      lens: customOptions?.lens || 'Standard Single Vision',
      qty: 1
    });
  }

  saveCart(cart);
  if (window.showToast) window.showToast(`"${product.name}" added to cart!`);

  // Automatically trigger cart drawer opening
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartOverlay = document.querySelector('.cart-drawer-overlay');
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
window.addProductToCart = addProductToCart;

function updateItemQty(index, delta) {
  const cart = getStoredCart();
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart(cart);
}
window.updateItemQty = updateItemQty;

function removeCartItem(index) {
  const cart = getStoredCart();
  if (!cart[index]) return;
  const removedName = cart[index].name;
  cart.splice(index, 1);
  saveCart(cart);
  if (window.showToast) window.showToast(`Removed "${removedName}" from cart`);
}
window.removeCartItem = removeCartItem;

function renderCartDrawer() {
  const drawerItems = document.querySelector('.cart-drawer-items');
  const drawerSubtotal = document.querySelector('.drawer-subtotal-val');
  const drawerShippingBar = document.querySelector('.drawer-shipping-progress');
  const drawerShippingText = document.querySelector('.drawer-shipping-text');
  if (!drawerItems) return;

  const cart = getStoredCart();
  if (cart.length === 0) {
    drawerItems.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <i class="bi bi-bag" style="font-size: 2.5rem; display: block; margin-bottom: 12px; color: var(--color-primary);"></i>
        <h4 style="margin-bottom: 6px;">Your Cart is Empty</h4>
        <p style="font-size: 0.88rem;">Explore our curated optical and sunglass collections.</p>
        <a href="products.html" class="btn btn-sm btn-primary" style="margin-top: 16px;">Browse Frames</a>
      </div>
    `;
    if (drawerSubtotal) drawerSubtotal.textContent = '$0.00';
    if (drawerShippingBar) drawerShippingBar.style.width = '0%';
    if (drawerShippingText) drawerShippingText.textContent = `Add $${FREE_SHIPPING_THRESHOLD} for free clinical delivery`;
    return;
  }

  let subtotal = 0;
  drawerItems.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <h5 style="font-size: 0.95rem; margin-bottom: 4px;">${item.name}</h5>
            <button onclick="removeCartItem(${idx})" style="color: var(--color-muted); font-size: 0.9rem;" title="Remove">
              <i class="bi bi-trash"></i>
            </button>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">
            ${item.color} • ${item.lens}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; border: 1px solid var(--border-color); border-radius: var(--radius-sm); overflow: hidden;">
              <button onclick="updateItemQty(${idx}, -1)" style="padding: 2px 8px; font-weight: 700; background: var(--bg-surface);">-</button>
              <span style="padding: 2px 10px; font-size: 0.85rem; font-weight: 600;">${item.qty}</span>
              <button onclick="updateItemQty(${idx}, 1)" style="padding: 2px 8px; font-weight: 700; background: var(--bg-surface);">+</button>
            </div>
            <span style="font-weight: 700; font-size: 0.95rem;">$${itemTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (drawerSubtotal) drawerSubtotal.textContent = `$${subtotal.toFixed(2)}`;

  // Free shipping bar calculation
  if (drawerShippingBar && drawerShippingText) {
    const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
    drawerShippingBar.style.width = `${progress}%`;
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      drawerShippingText.innerHTML = '<span style="color: var(--color-primary); font-weight: 700;"><i class="bi bi-truck me-1"></i> You unlocked FREE Complimentary Delivery!</span>';
    } else {
      const remaining = (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2);
      drawerShippingText.textContent = `Add $${remaining} more for Free Clinical Delivery`;
    }
  }
}

function renderCartPage() {
  const tableBody = document.querySelector('#cartPageTableBody');
  const cartSummarySubtotal = document.querySelector('#cartSummarySubtotal');
  const cartSummaryTotal = document.querySelector('#cartSummaryTotal');
  const cartDiscountRow = document.querySelector('#cartDiscountRow');
  const cartDiscountVal = document.querySelector('#cartDiscountVal');
  if (!tableBody) return;

  const cart = getStoredCart();
  if (cart.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 60px 20px;">
          <i class="bi bi-bag-x" style="font-size: 3rem; color: var(--text-muted); display: block; margin-bottom: 12px;"></i>
          <h3>Your Shopping Cart is Empty</h3>
          <p style="margin-bottom: 20px;">No frames added yet. Let's find your perfect pair.</p>
          <a href="products.html" class="btn btn-primary">Shop Eyewear</a>
        </td>
      </tr>
    `;
    if (cartSummarySubtotal) cartSummarySubtotal.textContent = '$0.00';
    if (cartSummaryTotal) cartSummaryTotal.textContent = '$0.00';
    return;
  }

  let subtotal = 0;
  tableBody.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <tr>
        <td style="display: flex; align-items: center; gap: 16px;">
          <img src="${item.image}" alt="${item.name}" style="width: 75px; height: 75px; object-fit: contain; background: var(--bg-surface); border-radius: var(--radius-md); padding: 6px;" />
          <div>
            <h5 style="margin-bottom: 4px;">${item.name}</h5>
            <span style="font-size: 0.82rem; color: var(--text-muted);">${item.color} • ${item.lens}</span>
          </div>
        </td>
        <td style="font-weight: 600;">$${item.price.toFixed(2)}</td>
        <td>
          <div style="display: inline-flex; align-items: center; border: 1px solid var(--border-color); border-radius: var(--radius-sm); overflow: hidden;">
            <button onclick="updateItemQty(${idx}, -1)" style="padding: 4px 10px; font-weight: 700; background: var(--bg-surface);">-</button>
            <span style="padding: 4px 14px; font-size: 0.9rem; font-weight: 600;">${item.qty}</span>
            <button onclick="updateItemQty(${idx}, 1)" style="padding: 4px 10px; font-weight: 700; background: var(--bg-surface);">+</button>
          </div>
        </td>
        <td style="font-weight: 700; color: var(--text-main);">$${itemTotal.toFixed(2)}</td>
        <td>
          <button onclick="removeCartItem(${idx})" style="color: var(--color-muted); font-size: 1.1rem; cursor: pointer;">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // Discount calculation
  const appliedDiscount = parseFloat(sessionStorage.getItem('stackly-discount') || '0');
  const discountAmount = subtotal * appliedDiscount;
  const grandTotal = Math.max(0, subtotal - discountAmount);

  if (cartSummarySubtotal) cartSummarySubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (cartDiscountRow && cartDiscountVal) {
    if (appliedDiscount > 0) {
      cartDiscountRow.style.display = 'flex';
      cartDiscountVal.textContent = `-$${discountAmount.toFixed(2)}`;
    } else {
      cartDiscountRow.style.display = 'none';
    }
  }
  if (cartSummaryTotal) cartSummaryTotal.textContent = `$${grandTotal.toFixed(2)}`;
}

function renderCheckoutSummary() {
  const checkoutItemsContainer = document.querySelector('#checkoutOrderItems');
  const checkoutSubtotal = document.querySelector('#checkoutSubtotal');
  const checkoutTotal = document.querySelector('#checkoutTotal');
  if (!checkoutItemsContainer) return;

  const cart = getStoredCart();
  let subtotal = 0;

  checkoutItemsContainer.innerHTML = cart.map(item => {
    const total = item.price * item.qty;
    subtotal += total;
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; font-size: 0.9rem;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${item.image}" alt="${item.name}" style="width: 46px; height: 46px; object-fit: contain; border-radius: var(--radius-sm); background: var(--bg-surface); padding: 4px;" />
          <div>
            <div style="font-weight: 600;">${item.name} <span style="color: var(--color-primary); font-size: 0.8rem;">x${item.qty}</span></div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${item.color}</div>
          </div>
        </div>
        <span style="font-weight: 700;">$${total.toFixed(2)}</span>
      </div>
    `;
  }).join('');

  if (checkoutSubtotal) checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (checkoutTotal) checkoutTotal.textContent = `$${subtotal.toFixed(2)}`;
}

/* Coupon handler */
function initCouponHandler() {
  const couponForm = document.querySelector('#cartCouponForm');
  if (!couponForm) return;

  couponForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = couponForm.querySelector('input[name="coupon"]');
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (code === 'VEYRA10') {
      sessionStorage.setItem('stackly-discount', '0.10');
      renderCartPage();
      if (window.showToast) window.showToast('Promo code "VEYRA10" applied! 10% discount added.');
    } else {
      if (window.showToast) window.showToast('Invalid coupon code. Try VEYRA10');
    }
  });
}

/* ===================================================================
   WISHLIST STATE
   =================================================================== */
function getStoredWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : ['prod-001', 'prod-004'];
  } catch (e) {
    return [];
  }
}

function initWishlistState() {
  updateWishlistCounters();
  syncWishlistButtons();
}

function updateWishlistCounters() {
  const wishlist = getStoredWishlist();
  document.querySelectorAll('.wishlist-badge-count').forEach(el => {
    el.textContent = wishlist.length;
  });
}

function syncWishlistButtons() {
  const wishlist = getStoredWishlist();
  document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
    const id = btn.getAttribute('data-id');
    const icon = btn.querySelector('i');
    if (wishlist.includes(id)) {
      btn.classList.add('wishlist-active');
      if (icon) icon.className = 'bi bi-heart-fill';
    } else {
      btn.classList.remove('wishlist-active');
      if (icon) icon.className = 'bi bi-heart';
    }
  });
}

function toggleWishlist(productId, buttonElem = null) {
  let wishlist = getStoredWishlist();
  const index = wishlist.indexOf(productId);
  let added = false;

  if (index > -1) {
    wishlist.splice(index, 1);
    added = false;
  } else {
    wishlist.push(productId);
    added = true;
  }

  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  updateWishlistCounters();
  syncWishlistButtons();

  if (window.showToast) {
    window.showToast(added ? 'Saved to your Wishlist!' : 'Removed from Wishlist');
  }
}
window.toggleWishlist = toggleWishlist;
window.syncWishlistButtons = syncWishlistButtons;
