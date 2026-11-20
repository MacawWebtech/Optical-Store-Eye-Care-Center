# VEYRA HTML TEMPLATE — OPTICAL STORE & EYE CARE CENTER

**Veyra Optique** is a modern, responsive HTML5 website template combining high-end editorial eyewear commerce (inspired by *Warby Parker*) with practical optical retail discovery and clinical eye-care appointments (inspired by *Lenskart*).

Designed for optical retailers, boutique opticians, sunglasses brands, optometrists, ophthalmology clinics, and eye-health centers.

---

## 🌟 Key Features

- **Strict Three-Color Rule:**
  - Black (`#111827`)
  - White (`#FFFFFF`)
  - Unique Primary Brand Color: Precision Sedona Terracotta (`#C2410C`) across both Light and Dark Modes.
  - Zero unrelated 4th or 5th colors; all borders, subtle fills, badges, and glows are mathematically derived.
- **Strict Two-Font Rule:**
  - Headings: `'Playfair Display', serif` (Editorial, luxury, timeless prestige)
  - Interface & Body: `'Plus Jakarta Sans', sans-serif` (Modern, tech-forward, high-acuity legibility)
- **Mandatory 30px Global Layout Spacing:**
  - Full-width expansive layout with **exactly 30px horizontal padding on both left and right sides** across ALL THREE views (Desktop, Tablet, and Mobile).
- **Tablet & Mobile Dual Menu Bar System:**
  - Top Horizontal Category Menu Bar with smooth touch momentum scrolling directly beneath the header.
  - Bottom App Navigation Bar with instant access to Home, Catalog, Book Exam, Cart Drawer, and Menu.
- **Full Right-to-Left (RTL) Layout Mirroring:**
  - Comprehensive structural mirroring with dedicated `rtl.css`. Flips navigation, sidebars, drawers, icons, and notifications.
- **Dark & Light Mode:**
  - Automatic system detection (`prefers-color-scheme`) with persistent `localStorage` toggling.
- **7-Step Interactive Eye Test Appointment Stepper:**
  - Step 1: Exam Type Selection
  - Step 2: Clinic Location Selection
  - Step 3: Interactive 14-Day Calendar Date Picker
  - Step 4: Available Morning & Afternoon Time Slots
  - Step 5: Patient Legal Details & Vision Insurance
  - Step 6: Live Summary Card
  - Step 7: Generated Appointment Reference Receipt (`#STK-84920`) with Print and Calendar Add triggers.
- **Virtual Try-On AR Simulation:**
  - Interactive modal featuring live webcam permissions request (`navigator.mediaDevices.getUserMedia`), simulated studio facial tracking, and PD measurement HUD.
- **Interactive Product Catalog (`products.js`):**
  - Full-text search, categories, frame shapes (rectangle, round, aviator, etc.), lens types, materials, color swatches, price slider, and grid/list view toggle.
- **Reactive Shopping Cart & Wishlist (`cart.js`):**
  - Slide-in side drawer, persistent `localStorage`, free shipping threshold progress bar ($150 target), coupon promo code (`VEYRA10`), and multi-step checkout.
- **No Admin or Customer Dashboard:**
  - Strictly streamlined for customer discovery, appointment booking, and guest checkout without bloated dashboard files.

---

## 📁 Directory Structure

```text
optical-store/
├── assets/
│   ├── css/
│   │   ├── style.css             # Core design system & components
│   │   ├── dark-mode.css         # Midnight theme overrides & high contrast
│   │   ├── rtl.css               # Right-to-Left structural layout mirroring
│   │   └── responsive.css        # Breakpoints & strict 30px padding rules
│   ├── js/
│   │   ├── main.js               # Theme, RTL, mobile drawer, toasts, Try-On
│   │   ├── products.js           # Catalog dataset, filtering, quick view
│   │   ├── cart.js               # LocalStorage cart, wishlist, coupon
│   │   └── booking.js            # 7-step appointment booking engine
│   ├── images/                   # High-resolution vector SVG graphics
│   │   ├── home/                 # Hero visual compositions & promos
│   │   ├── products/             # Optical frames, sunglasses, lenses
│   │   ├── collections/          # 8 Frame shapes (rectangle, aviator, etc.)
│   │   ├── categories/           # Category card icons
│   │   ├── about/                # Opticians & craftsmanship visuals
│   │   ├── store/                # Boutique facades & vector map embed
│   │   └── blog/                 # Editorial journal thumbnails
├── pages/
│   ├── index.html                # Home 1: Optical Store & Eyewear Collections
│   ├── index-2.html              # Home 2: Haute Eye Care Boutique Atelier
│   ├── about.html                # Heritage, opticians, Italian bio-acetate
│   ├── products.html             # Eyewear catalog with live sidebar filters
│   ├── product-details.html      # Gallery, color swatches, lens customizer
│   ├── eye-test.html             # 7-step interactive exam booking engine
│   ├── store-locator.html        # Interactive boutique directory & vector map
│   ├── lens-guide.html           # 7-layer technology, quiz & comparison table
│   ├── blog.html                 # Optical journal & trend reports
│   ├── blog-details.html         # Editorial article layout & TOC
│   ├── contact.html              # Concierge inquiry form & operating hours
│   ├── login.html                # Standalone sign in (guest checkout option)
│   ├── register.html             # Standalone registration
│   ├── forgot-password.html      # Password recovery email request
│   ├── cart.html                 # Full shopping bag, quantities, coupon
│   ├── checkout.html             # Guest checkout flow & payment tabs
│   ├── coming-soon.html          # Live countdown timer & early access form
│   ├── maintenance.html          # Lab optimization & emergency phone
│   └── 404.html                  # "Vision Out of Focus" error page
├── documentation/
│   └── index.html                # Comprehensive developer documentation
├── sitemap.xml                   # Search engine index
├── robots.txt                    # Bot crawler permissions
└── README.md
```

---

## 🎨 Color Customization

To change the primary brand color, open `assets/css/style.css` and modify lines 14–22:

```css
:root {
  --color-primary: #C2410C;         /* Precision Sedona Terracotta */
  --color-primary-rgb: 194, 65, 12; /* Match RGB equivalent */
  --color-primary-hover: #9A3412;   /* Darker espresso sienna hover shade */
}
```

Dark mode automatically adopts this color and maintains proper WCAG 2.1 AA text contrast.

---

## 📄 Page Inventory

1. `index.html`: Home Page 1 — 17 required sections balancing shopping and clinical health.
2. `index-2.html`: Home Page 2 — Distinct Haute Optique boutique atelier aesthetic.
3. `about.html`: Brand story, craftsmanship, and optometry team.
4. `products.html`: Interactive catalog with multi-filter sidebar.
5. `product-details.html`: Lens customization stepper, dimension specs, gallery.
6. `eye-test.html`: 7-step interactive eye-test booking workflow.
7. `store-locator.html`: Filterable boutique list with interactive vector map.
8. `lens-guide.html`: Interactive quiz, comparison matrix, prescription decoder.
9. `blog.html`: Optical journal with category filters and search.
10. `blog-details.html`: Editorial layout with table of contents and social share.
11. `contact.html`: Validated concierge contact form.
12. `cart.html`: Full shopping bag with promo discount support.
13. `checkout.html`: Step-by-step guest checkout.
14. `login.html`: Standalone login interface.
15. `register.html`: Standalone client registration.
16. `forgot-password.html`: Password recovery form.
17. `coming-soon.html`: Interactive countdown timer and notify form.
18. `maintenance.html`: Scheduled diagnostic suite maintenance notice.
19. `404.html`: Custom optical 404 error page.

---

## ⚖️ License & Commercial Marketplace Usage

Built with semantic HTML5, CSS3 Custom Properties, and vanilla ES6+ JavaScript. No build step (Webpack/Vite) required — works directly out of the box in any web browser or hosting server.

- **Fonts:** Google Fonts (*Playfair Display* & *Plus Jakarta Sans*) under SIL Open Font License.
- **Icons:** Bootstrap Icons v1.11.3 under MIT License.
- **Graphics:** Proprietary vector SVGs designed specifically for Veyra Optique.

© 2026 Veyra Optique. All rights reserved.
