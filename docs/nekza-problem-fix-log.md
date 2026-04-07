# Nekza Problem/**Fix** Log

This document captures the issues we faced during implementation, what **Cause**d them, and how we **Fix**ed them.

## 1) Repetitive homepage product sections
- **Situation**: `Bestsellers`, `New Arrivals`, and `Popular Products` looked too similar (same rail-like structure).
- **Cause** snippet:
```jsx
<div className="... overflow-x-auto ..." data-cursor="Drag">
  {visibleProducts.map(...)}
</div>
```
- **Fix**:
  - `Bestsellers`: converted to responsive grid (2 cols mobile, 3/4 desktop).
  - `New Arrivals`: kept horizontal rail with improved spacing/snap behavior.
  - `Popular Products`: changed to editorial split layout (left content + right compact cards).

## 2) `ChooseYourRoutine` had invalid Tailwind token classes
- **Situation**: styling inconsistencies / classes not applying.
- **Cause** snippet:
```jsx
className="border-(--cream-dark) bg-(--primary-color) text-(--ink-soft)"
```
- **Fix snippet**:
```jsx
className="border-cream-dark bg-primary text-ink-soft"
```
- Also fixed:
```jsx
bg-size-[40px_40px] -> [background-size:40px_40px]
```

## 3) `ChooseYourRoutine` mobile scrollbar CSS leaked globally
- **Situation**: unrelated horizontal areas were affected.
- **Cause** snippet:
```css
.overflow-x-auto::-webkit-scrollbar { display: none; }
```
- Fix:
  - Scoped to local class:
```css
.routine-mobile-tabs::-webkit-scrollbar { display: none; }
```

## 4) Horizontal rails were not mouse-draggable
- **Situation**: touchpad swipe worked, mouse click-and-drag did not.
- **Cause**:
  - Native `overflow-x-auto` without drag logic.
  - `data-cursor="Drag"` only changed cursor label, not behavior.
- Fix:
  - Added reusable hook:
    - `src/hooks/useHorizontalDragScroll.jsx`
  - Wired to:
    - `Bestsellers`, `NewArrivals`, `PopularProducts`
  - Added styles:
    - `.drag-scroll-rail`, `.is-dragging` in `src/index.css`

## 5) `ProductDetails` hook/order and memo errors (reported lines around 232/278)
- **Situation**: rules-of-hooks and memo/dependency lint errors.
- **Cause**:
  - Hooks called after early return path.
  - fragile memo/effect sequence.
- Fix:
  - Reworked variant/size computations to stable non-problematic flow.
  - Removed problematic effect-based size reset.
  - Used safe clamped index:
```js
const safeSizeIndex = Math.max(0, Math.min(size, derivedSizes.length - 1));
```

## 6) Terms/Privacy sidebars not sticking
- **Situation**: aside looked static.
- **Causes**s:
  - ancestor overflow behavior and sticky breakpoint setup.
  - grid/sidebar setup made sticky less reliable.
- Fix:
  - changed root overflow to horizontal-only where needed.
  - made 2-column layout start at `md`.
  - sticky moved to `md:sticky md:top-... md:self-start`.

## 7) Privacy sections 7/8/9 icon mapping issues
- **Situation**: new sections didn’t show intended icons.
- **Cause**:
  - icon keys mismatched or not mapped.
- Fix:
  - Data keys updated:
    - `handshake`, `refresh-ccw`, `phone-call`
  - Added icon map/imports in `PrivacyPolicy.tsx`.

## 8) `general` filter/tag cleanup
- **Situation**: requested removal of generic filter concept.
- **Cause**:
  - `Products.jsx` depended on `getGeneralProducts`.
  - `Data.js` had many `"general"` tags.
- Fix:
  - Removed `getGeneralProducts` usage and helper.
  - `Products` now falls back to `ALL_PRODUCTS`.
  - Removed `"general"` from product tags in `Data.js`.

## 9) Cart quantity needed hard cap + warnings
- **Situation**: users could exceed desired per-item quantity.
- Requirement: max 10 units + toast warning when exceeding.
- **Fix**:
  - Added central cap in `CartContext`:
```js
export const MAX_ITEM_QUANTITY = 10;
```
  - `addToCart` / `updateQuantity` clamp and return status:
```js
return { wasLimited, maxQuantity: MAX_ITEM_QUANTITY };
```
  - Warning toasts wired in:
    - `Card`, `AddToCartButton`, `BuyNowButton`, `ProductShowcase`, `Cart`, `CartDrawer`.

## 10) `ChooseYourRoutine` navigation behavior
- **Situation**:
  - cards were not opening product details.
  - routine CTA needed filtered product listing.
- **Fix**:
  - cards converted to `Link` using product `href`.
  - CTA now builds query route:
```js
/products?categories=water-bottle,lunch-box
```
  - `Products.jsx` now reads `categories` query param and pre-applies category filter.

## 11) Navigation sometimes opened destination near footer
- **Situation**: after redirects, page could appear near bottom.
- **Fix layers** layers:
  - Global hardened scroll reset in `App.jsx`:
    - `history.scrollRestoration = "manual"`
    - multi-pass top reset (`immediate + requestAnimationFrame + timeout`)
    - reset `scrollingElement`, `documentElement`, `body`.
  - Added per-page fallback top reset in:
    - `Products.jsx`
    - `ProductDetails.jsx`

## 12) Vercel production routes returned 404 on refresh/direct URL access
- **Situation**: app worked locally, but on Vercel, opening nested routes directly (or refreshing) failed.
- **Cause**:
  - SPA routing (`react-router`) needs all unknown paths to serve `index.html`.
  - Vercel tried to resolve those paths as static files instead.
- **Fix**:
  - Added rewrite rule in `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```
  - This ensures every route is rewritten to the app entry and client-side routing handles the path.

## 13) Horizontal rails not scrollable on mobile
- **Situation**: after adding mouse drag-to-scroll, mobile touch swipe stopped working.
- **Cause**:
  - `touch-action: none` was applied unconditionally to the scroll container.
  - This CSS property disables native touch scrolling (swipe gestures) on all devices.
- **Fix**:
  - Modified hook to detect device pointer type:
```js
if (window.matchMedia("(pointer: fine)").matches) {
  rail.style.touchAction = "none";
}
```
  - Only applies `touch-action: none` on mouse/fine pointer devices.
  - Touch devices retain native swipe behavior.

## 14) TermsConditions sidebar scroll not working
- **Situation**: clicking sidebar links didn't scroll to sections.
- **Cause**:
  - Used `<a href="#id">` which conflicted with scroll restoration in App.jsx.
  - Hash navigation triggered browser behavior that was overridden.
- **Fix**:
  - Changed to `<button onClick={scrollToSection(id)}>` for JS-based scrolling.
  - Added 150px offset to account for fixed header visibility.
  - Added filter to remove empty sections from `TERMS_SECTIONS` before rendering.

---

## Chronological Changelog

### Log format
```text
[YYYY-MM-DD HH:mm IST] [hash-style-id]
Change:
Files:
Notes:
```

### Entries

[2026-04-07 10:05 IST] [nekza-001-home-sections]
Change:
- Refactored homepage product sections so each has a distinct layout and hierarchy.
Files:
- src/components/Bestsellers.jsx
- src/components/NewArrivals.jsx
- src/components/PopularProducts.jsx
Notes:
- Layout/presentation only; product logic/data preserved.

[2026-04-07 10:32 IST] [nekza-002-routine-data-wire]
Change:
- Switched `ChooseYourRoutine` from local static product array to `ALL_PRODUCTS`.
Files:
- src/components/sections/ChooseYourRoutine.jsx
Notes:
- Routine-to-product mapping derived from collection/category logic.

[2026-04-07 10:55 IST] [nekza-003-drag-scroll]
Change:
- Added mouse drag-to-scroll support for horizontal rails.
Files:
- src/hooks/useHorizontalDragScroll.jsx
- src/components/Bestsellers.jsx
- src/components/NewArrivals.jsx
- src/components/PopularProducts.jsx
- src/index.css
Notes:
- Touchpad swipe retained; mouse drag now supported.

[2026-04-07 11:15 IST] [nekza-004-routine-tailwind-cleanup]
Change:
- Fixed invalid Tailwind utility syntax and aligned to design tokens.
Files:
- src/components/sections/ChooseYourRoutine.jsx
Notes:
- Replaced `border-(--x)` style patterns with configured token classes.

[2026-04-07 11:30 IST] [nekza-005-productdetails-hooks-fix]
Change:
- Resolved `ProductDetails` hook-order and memoization issues.
Files:
- src/pages/ProductDetails.jsx
Notes:
- Removed problematic hook flow and stabilized variant/size calculation.

[2026-04-07 11:48 IST] [nekza-006-legal-sticky-aside]
Change:
- Made Terms and Privacy sidebar asides sticky and stable in responsive layout.
Files:
- src/pages/TermsConditions.jsx
- src/pages/PrivacyPolicy.tsx
Notes:
- Included overflow and breakpoint/grid adjustments.

[2026-04-07 12:02 IST] [nekza-007-privacy-icons-789]
Change:
- Added explicit icons for privacy sections 7/8/9.
Files:
- src/data/Data.js
- src/pages/PrivacyPolicy.tsx
Notes:
- Added/fixed iconKey mappings and imports.

[2026-04-07 12:18 IST] [nekza-008-remove-general-filter]
Change:
- Removed `general` filter concept from products flow and tags.
Files:
- src/data/Data.js
- src/pages/Products.jsx
Notes:
- Products fallback now uses `ALL_PRODUCTS`.

[2026-04-07 12:32 IST] [nekza-009-cart-max-10]
Change:
- Enforced max quantity `10` per line item and added warning toasts on exceed.
Files:
- src/contexts/CartContext.jsx
- src/components/UI/Card.jsx
- src/components/AddToCartButton.jsx
- src/components/BuyNowButton.jsx
- src/pages/ProductShowcase.jsx
- src/pages/Cart.jsx
- src/components/CartDrawer.jsx
Notes:
- Central cap enforced in cart context, UI handlers show user feedback.

[2026-04-07 12:45 IST] [nekza-010-routine-navigation]
Change:
- Routine cards now open product detail pages; routine CTA opens `/products` with pre-applied category query.
Files:
- src/components/sections/ChooseYourRoutine.jsx
- src/pages/Products.jsx
Notes:
- Added `categories` query parsing in products page.

[2026-04-07 13:10 IST] [nekza-011-scroll-reset-hardening]
Change:
- Hardened route scroll reset to prevent destination opening near footer.
Files:
- src/App.jsx
- src/pages/Products.jsx
- src/pages/ProductDetails.jsx
- src/components/sections/ChooseYourRoutine.jsx
Notes:
- Added multi-pass top reset and page-level fallback resets.

[2026-04-07 13:25 IST] [nekza-012-vercel-spa-rewrite]
Change:
- Added Vercel rewrite for SPA routes.
Files:
- vercel.json
Notes:
- Prevents 404 on direct nested route access / refresh in production.

[2026-04-07 10:27 IST] [nekza-013-mobile-scroll-fix]
Change:
- Fixed mobile touch scroll being blocked after adding mouse drag-to-scroll.
Files:
- src/hooks/useHorizontalDragScroll.jsx
Notes:
- Only applies touch-action: none on fine pointer (mouse) devices.

[2026-04-07 11:05 IST] [nekza-014-terms-sidebar-scroll]
Change:
- Fixed sidebar navigation not scrolling to sections.
Files:
- src/pages/TermsConditions.jsx
Notes:
- Converted anchor links to button onClick handlers.
- Added 150px offset for header clearance.
- Filtered empty sections from TERMS_SECTIONS.

