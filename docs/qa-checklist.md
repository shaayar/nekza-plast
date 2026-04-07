# Nekza QA Checklist

Last updated: 2026-04-07

## How to Run QA

- Development pass: `npm run dev`
- Production-like pass: `npm run build && npm run preview`
- Vercel pass: run critical route tests on the deployed URL too

## Test Execution Template

Use this status key for each test:
- `[ ]` Not tested
- `[x]` Pass
- `[!]` Fail (add bug link/notes)

---

## A) Core Smoke Tests

- [ ] **A1: Home page renders**
  - Steps: Open `/`
  - Expected: No blank sections, no console errors, all homepage sections render in sequence

- [ ] **A2: No runtime console errors**
  - Steps: Open DevTools Console, navigate Home -> Products -> Product Details -> Cart
  - Expected: No red runtime errors

- [ ] **A3: Network assets load**
  - Steps: Open DevTools Network, hard refresh pages
  - Expected: No failed critical JS/CSS/image requests

---

## B) Routing and Navigation (Common Break Zone)

- [ ] **B1: Direct route load (deep links)**
  - Steps: Open these directly in address bar:
    - `/products`
    - `/collections/water-bottle`
    - `/products/water-bottle/kids-water-bottle`
    - `/pages/terms-and-conditions`
    - `/pages/privacy-policy`
  - Expected: Page loads correctly without redirect loops or blank screen

- [ ] **B2: Refresh on nested route**
  - Steps: On `/products/water-bottle/kids-water-bottle`, hit refresh
  - Expected: Route still works (validates rewrite handling in production)

- [ ] **B3: Redirect routes**
  - Steps: Visit `/popular-products`, `/bestsellers`, `/new-arrivals`
  - Expected: Correctly redirects to `/collections/*` pages

- [ ] **B4: 404 fallback**
  - Steps: Visit `/this-route-should-not-exist`
  - Expected: NotFound page appears

- [ ] **B5: Scroll reset on route change**
  - Steps: Scroll to bottom of one page, navigate to another page
  - Expected: New page opens near top (no footer-start issue)

---

## C) Responsive and Interaction

- [ ] **C1: Mobile navbar behavior**
  - Steps: Use 360px width, open/close menu, open dropdowns
  - Expected: Menu and overlays behave correctly, no stuck backdrop

- [ ] **C2: Breakpoint layout checks**
  - Steps: Verify at 360px, 768px, 1024px, 1440px
  - Expected: No clipped text, overflow, or overlapping controls

- [ ] **C3: Input modality checks**
  - Steps: Test with touchpad swipe, mouse wheel, keyboard tab
  - Expected: Scrollable sections and controls remain usable across inputs

- [ ] **C4: Keyboard accessibility sanity**
  - Steps: Tab through navbar, filters, buttons, links
  - Expected: Focus states visible, interactive elements reachable

---

## D) Homepage Section Regression

- [ ] **D1: Bestsellers presentation**
  - Steps: Open homepage on mobile + desktop
  - Expected: Distinct presentation, no broken cards/spacing

- [ ] **D2: New Arrivals horizontal behavior**
  - Steps: Scroll/swipe section on laptop touchpad and mobile
  - Expected: Horizontal behavior works smoothly; snapping feels intentional

- [ ] **D3: Popular Products section structure**
  - Steps: Open homepage and inspect section composition
  - Expected: Split/editorial layout remains intact

- [ ] **D4: Card CTA routing**
  - Steps: Click product cards and section CTAs from homepage
  - Expected: Correct Product Details or filtered Products page opens

---

## E) Product Listing and Filters

- [ ] **E1: Category filter**
  - Steps: Select/deselect one and multiple categories
  - Expected: Product grid updates correctly

- [ ] **E2: Tag filter and clear actions**
  - Steps: Apply tags, clear tags, clear categories
  - Expected: Filters apply and reset without stale state

- [ ] **E3: Price range filter**
  - Steps: Drag price slider min/max scenarios
  - Expected: Results update accurately by range

- [ ] **E4: Sorting options**
  - Steps: Test Featured, Price low/high, Name A-Z
  - Expected: Sorting behaves deterministically

- [ ] **E5: URL param category preselect**
  - Steps: Open `/products?categories=water-bottle,flask`
  - Expected: Categories preselected and grid filtered accordingly

---

## F) Product Details and Cart Flows

- [ ] **F1: Product details render**
  - Steps: Open multiple product detail URLs
  - Expected: Gallery, price, variants, tabs, related products render

- [ ] **F2: Add to cart from listing/details**
  - Steps: Add items from both listing and detail pages
  - Expected: Cart updates and persisted items appear correctly

- [ ] **F3: Quantity max guard (10 units)**
  - Steps: Increase same product quantity beyond 10
  - Expected: Quantity is capped at 10 and warning toast appears

- [ ] **F4: Cart remove/update totals**
  - Steps: Change quantity, remove line item, verify totals
  - Expected: Subtotal/MRP/savings/shipping recalculate correctly

---

## G) Policy/Static Pages

- [ ] **G1: Terms sidebar stickiness**
  - Steps: Open `/pages/terms-and-conditions`, scroll on desktop
  - Expected: "On This Page" sidebar remains sticky

- [ ] **G2: Privacy sidebar stickiness**
  - Steps: Open `/pages/privacy-policy`, scroll on desktop
  - Expected: "On This Page" sidebar remains sticky

- [ ] **G3: FAQ accordion behavior**
  - Steps: Expand/collapse multiple FAQ items
  - Expected: Toggle animations and content states are stable

---

## H) SVG Replacement Verification (Separate Icon Audit)

Goal: verify every replaced icon is visible and not regressed in size/alignment.

- [ ] **H1: Navbar mobile menu icon (`Menu`)**
  - File: `src/components/layout/Navbar.jsx`
  - Location: top-left mobile toggle
  - Expected: Hamburger icon appears when menu is closed; `X` appears when open

- [ ] **H2: Footer external-link icon (`ExternalLink`)**
  - File: `src/components/layout/Footer.jsx`
  - Location: external footer links
  - Expected: Small external-link icon appears and aligns with link text

- [ ] **H3: Footer accordion chevron (`ChevronDown`)**
  - File: `src/components/layout/Footer.jsx`
  - Location: mobile footer section headers
  - Expected: Chevron rotates on expand/collapse

- [ ] **H4: Hero CTA arrow (`ArrowRight`)**
  - File: `src/components/slider.jsx`
  - Location: "Discover Collection" CTA
  - Expected: Arrow visible and translates slightly on hover

- [ ] **H5: Hero nav arrows (`ChevronLeft` / `ChevronRight`)**
  - File: `src/components/slider.jsx`
  - Location: desktop slide controls
  - Expected: Left/right controls render and function

- [ ] **H6: Life With Nekza CTA arrow (`ArrowRight`)**
  - File: `src/components/LifeWithNekza.jsx`
  - Location: "Shop now" card CTA
  - Expected: Arrow visible and hover motion preserved

- [ ] **H7: Products filter checkmark (`Check`)**
  - File: `src/pages/Products.jsx`
  - Location: selected Category/Tag checkbox
  - Expected: White checkmark visible on selected state

- [ ] **H8: Products mobile filters icon (`SlidersHorizontal`)**
  - File: `src/pages/Products.jsx`
  - Location: mobile "Filters" button
  - Expected: Sliders icon visible and aligned with button text

- [ ] **H9: Product details gallery arrows (`ChevronLeft` / `ChevronRight`)**
  - File: `src/pages/ProductDetails.jsx`
  - Location: gallery previous/next controls
  - Expected: Both arrows visible and navigation works

- [ ] **H10: Product details availability check icon (`Check`)**
  - File: `src/pages/ProductDetails.jsx`
  - Location: "Check Availability" row button
  - Expected: Check icon visible before "Check" label

Quick debug tip:
- In DevTools Elements, Lucide icons render as SVGs with classes like `lucide` and `lucide-*`.

---

## I) Cross-Browser Final Gate

- [ ] **I1: Chrome (desktop + mobile emulation)**
- [ ] **I2: Firefox (desktop)**
- [ ] **I3: Safari (macOS/iOS if available)**
- [ ] **I4: Edge (desktop)**

Expected for all: no layout breaks, no route failures, no interaction dead zones.

---

## Sign-off

- QA Date:
- Environment: Local / Preview / Vercel
- Tester:
- Result: Pass / Fail
- Notes:
