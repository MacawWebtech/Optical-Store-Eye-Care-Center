/**
 * VEYRA OPTICAL STORE & EYE CARE CENTER
 * Global Main Application Scripts
 * Features: Dark/Light Mode, RTL Layout, Navigation Drawer, Cart Drawer,
 * Toast Notifications, Virtual Try-On Modal, and Smooth Animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initMobileNav();
  initCartDrawer();
  initSearchModal();
  initTryOnModal();
  initNewsletterForms();
  initScrollAnimations();
});

/* ===================================================================
   1. THEME SWITCHER (Dark / Light with System Detection & LocalStorage)
   =================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('stackly-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  // Attach to all theme toggle buttons across desktop header & mobile drawer
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(newTheme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled');
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('stackly-theme', theme);
  
  // Update toggle icons
  const icons = document.querySelectorAll('.theme-toggle-btn i');
  icons.forEach(icon => {
    if (theme === 'dark') {
      icon.className = 'bi bi-sun-fill';
    } else {
      icon.className = 'bi bi-moon-stars-fill';
    }
  });
}

/* ===================================================================
   2. RTL LAYOUT TOGGLE (LTR / RTL with LocalStorage)
   =================================================================== */
function initRTL() {
  const savedRTL = localStorage.getItem('stackly-rtl');
  const isRTL = savedRTL === 'true';

  applyRTL(isRTL);

  const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentRTL = document.documentElement.getAttribute('dir') === 'rtl';
      const newRTL = !currentRTL;
      applyRTL(newRTL);
      showToast(newRTL ? 'RTL layout enabled' : 'LTR layout restored');
    });
  });
}

function applyRTL(isRTL) {
  if (isRTL) {
    document.documentElement.setAttribute('dir', 'rtl');
    localStorage.setItem('stackly-rtl', 'true');
  } else {
    document.documentElement.removeAttribute('dir');
    localStorage.setItem('stackly-rtl', 'false');
  }

  // Update text label on buttons
  const rtlLabels = document.querySelectorAll('.rtl-btn-text');
  rtlLabels.forEach(lbl => {
    lbl.textContent = isRTL ? 'LTR' : 'RTL';
  });
}

/* ===================================================================
   3. MOBILE NAVIGATION DRAWER
   =================================================================== */
function initMobileNav() {
  const mobileToggles = document.querySelectorAll('.mobile-toggle-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileOverlay = document.querySelector('.mobile-drawer-overlay');
  const mobileClose = document.querySelector('.mobile-nav-close');

  if (!mobileDrawer) return;

  function openMenu(e) {
    if (e) e.preventDefault();
    mobileDrawer.classList.add('active');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu(e) {
    if (e) e.preventDefault();
    mobileDrawer.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileToggles.forEach(btn => {
    btn.addEventListener('click', openMenu);
  });

  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

  // Center active item in the horizontal mobile menu bar on load
  const activeMenuPill = document.querySelector('.mobile-menu-bar .mobile-menu-item.active');
  const menuBar = document.querySelector('.mobile-menu-bar');
  if (activeMenuPill && menuBar) {
    setTimeout(() => {
      const pillLeft = activeMenuPill.offsetLeft;
      const pillWidth = activeMenuPill.offsetWidth;
      const barWidth = menuBar.offsetWidth;
      menuBar.scrollLeft = pillLeft - (barWidth / 2) + (pillWidth / 2);
    }, 120);
  }
}

/* ===================================================================
   4. CART DRAWER TOGGLE
   =================================================================== */
function initCartDrawer() {
  const cartToggles = document.querySelectorAll('.cart-toggle-btn');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartOverlay = document.querySelector('.cart-drawer-overlay');
  const cartClose = document.querySelector('.cart-drawer-close');

  if (!cartDrawer) return;

  function openCart() {
    cartDrawer.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  cartToggles.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  }));

  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
}

/* ===================================================================
   5. SEARCH MODAL
   =================================================================== */
function initSearchModal() {
  const searchToggles = document.querySelectorAll('.search-toggle-btn');
  const searchModal = document.querySelector('#searchModal');
  const searchClose = document.querySelector('.search-modal-close');
  const searchInput = document.querySelector('.search-modal-input');

  if (!searchModal) return;

  function openSearch() {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (searchInput) setTimeout(() => searchInput.focus(), 100);
  }

  function closeSearch() {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  searchToggles.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  }));

  if (searchClose) searchClose.addEventListener('click', closeSearch);
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });
}

/* ===================================================================
   6. VIRTUAL TRY-ON MODAL & SIMULATED AR INTERACTION
   =================================================================== */
function initTryOnModal() {
  const tryOnModal = document.querySelector('#tryOnModal');
  const closeBtn = document.querySelector('.tryon-modal-close');
  const triggers = document.querySelectorAll('.btn-trigger-tryon');
  const cameraBtn = document.querySelector('#btnStartCamera');
  const videoFeed = document.querySelector('#tryonVideoFeed');
  const simulatedFeed = document.querySelector('#simulatedModelFeed');
  const statusPill = document.querySelector('#tryonStatusText');
  const frameSelectorImgs = document.querySelectorAll('.tryon-frame-thumb');
  const overlayFrame = document.querySelector('#tryonOverlayGlasses');

  if (!tryOnModal) return;

  function openTryOn(frameName = 'Avery Acetate') {
    tryOnModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const titleElem = document.querySelector('#tryonProductTitle');
    if (titleElem) titleElem.textContent = frameName;
  }

  function closeTryOn() {
    tryOnModal.classList.remove('active');
    document.body.style.overflow = '';
    stopCamera();
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const frameName = btn.getAttribute('data-frame') || 'Avery Acetate';
      openTryOn(frameName);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeTryOn);
  tryOnModal.addEventListener('click', (e) => {
    if (e.target === tryOnModal) closeTryOn();
  });

  // Camera integration request
  let activeStream = null;
  if (cameraBtn) {
    cameraBtn.addEventListener('click', async () => {
      if (activeStream) {
        stopCamera();
        cameraBtn.innerHTML = '<i class="bi bi-camera-video me-1"></i> Enable Camera';
        if (statusPill) statusPill.textContent = 'Demo Studio Mode';
        return;
      }

      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          activeStream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
          if (videoFeed) {
            videoFeed.srcObject = activeStream;
            videoFeed.style.display = 'block';
            if (simulatedFeed) simulatedFeed.style.display = 'none';
          }
          cameraBtn.innerHTML = '<i class="bi bi-camera-video-off me-1"></i> Disable Camera';
          if (statusPill) statusPill.textContent = 'Live Camera AR Tracking';
          showToast('Live camera connected successfully');
        } else {
          showToast('Camera access not supported by browser. Continuing in Studio Mode.');
        }
      } catch (err) {
        console.warn('Camera access denied or unavailable:', err);
        showToast('Camera permission denied. Using high-definition 3D studio preview.');
        if (statusPill) statusPill.textContent = 'Virtual Studio Mode';
      }
    });
  }

  function stopCamera() {
    if (activeStream) {
      activeStream.getTracks().forEach(track => track.stop());
      activeStream = null;
    }
    if (videoFeed) {
      videoFeed.srcObject = null;
      videoFeed.style.display = 'none';
    }
    if (simulatedFeed) simulatedFeed.style.display = 'block';
  }

  // Frame selector inside Try-On
  frameSelectorImgs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      frameSelectorImgs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const newSrc = thumb.getAttribute('data-frame-img');
      const newTitle = thumb.getAttribute('data-frame-title');
      if (overlayFrame && newSrc) overlayFrame.src = newSrc;
      const titleElem = document.querySelector('#tryonProductTitle');
      if (titleElem && newTitle) titleElem.textContent = newTitle;
    });
  });
}

// Global hook to launch Virtual Try-On for any product
window.launchVirtualTryOn = function(productName, frameImgUrl) {
  const tryOnModal = document.querySelector('#tryOnModal');
  if (!tryOnModal) return;
  const titleElem = document.querySelector('#tryonProductTitle');
  const overlayFrame = document.querySelector('#tryonOverlayGlasses');
  if (titleElem && productName) titleElem.textContent = productName;
  if (overlayFrame && frameImgUrl) overlayFrame.src = frameImgUrl;
  tryOnModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

/* ===================================================================
   7. TOAST NOTIFICATIONS
   =================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<i class="bi bi-check-circle-fill" style="color: var(--color-primary)"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
window.showToast = showToast;

/* ===================================================================
   8. NEWSLETTER SUBSCRIPTION FORMS
   =================================================================== */
function initNewsletterForms() {
  const forms = document.querySelectorAll('.footer-newsletter-form, .newsletter-inline-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        showToast(`Thank you! ${input.value.trim()} is now subscribed to Veyra Optique.`);
        input.value = '';
      }
    });
  });
}

/* ===================================================================
   9. SCROLL REVEAL ANIMATIONS
   =================================================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-fade-up, .product-card, .blog-card, .category-card').forEach(el => {
    observer.observe(el);
  });
}

/* ===================================================================
   CENTER A LONE LAST-ROW CARD (tablet only, 640px-1023px)
   If a card grid ends with exactly one card on its own row, that card
   is centered under the cards above it. Re-runs on resize and when
   products are filtered/re-rendered.
   =================================================================== */
(function initCenterOrphanCard() {
  const GRIDS = '.grid-2-col, .grid-3-col, .grid-4-col, .product-grid:not(.list-view), .blog-grid, .shapes-grid, .category-grid, .booking-option-grid';
  const RESET = ['gridColumn', 'justifySelf', 'width', 'maxWidth'];

  function looksLikeCard(el) {
    const cs = getComputedStyle(el);
    return /card/i.test(el.className) || parseFloat(cs.borderTopWidth) > 0 || cs.boxShadow !== 'none';
  }

  function apply() {
    const tablet = window.matchMedia('(min-width: 640px) and (max-width: 1023px)').matches;
    document.querySelectorAll(GRIDS).forEach(grid => {
      const kids = Array.from(grid.children);
      kids.forEach(k => { if (k.dataset.orphanCentered) { RESET.forEach(p => k.style[p] = ''); delete k.dataset.orphanCentered; } });
      if (!tablet) return;
      const cs = getComputedStyle(grid);
      if (cs.display !== 'grid') return;
      const cols = cs.gridTemplateColumns.split(' ').length;
      const items = kids.filter(k => getComputedStyle(k).display !== 'none');
      if (cols < 2 || items.length <= cols || items.length % cols !== 1) return;
      const last = items[items.length - 1];
      if (!looksLikeCard(last)) return;
      const gap = parseFloat(cs.columnGap) || 0;
      last.dataset.orphanCentered = '1';
      last.style.gridColumn = '1 / -1';
      last.style.justifySelf = 'center';
      last.style.width = 'calc((100% - ' + ((cols - 1) * gap) + 'px) / ' + cols + ')';
      last.style.maxWidth = '100%';
    });
  }

  let t;
  const schedule = () => { clearTimeout(t); t = setTimeout(apply, 60); };
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);
    document.querySelectorAll(GRIDS).forEach(g => new MutationObserver(schedule).observe(g, { childList: true }));
  });
})();
