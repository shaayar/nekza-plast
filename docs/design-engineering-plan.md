# Design Engineering Audit Plan (Emil-style)

## Scope
This plan audits the current UI against the design-engineering prompt in `docs/skill-prompt.md`, then lists the exact improvements to implement next.

## Audit Summary
Current UI is strong visually, but motion and interaction polish are inconsistent.

Key issues found:
- Motion tokens are not centralized; many components use ad-hoc `transition`, `duration`, and `ease` values.
- `transition-all` is used in many places where property-specific transitions would be more precise and performant.
- Most buttons/pressable elements are missing a tactile `:active` press state (`scale(0.97)` style feedback).
- Enter/exit behaviors are mostly one-way (enter only). Important UI such as toasts and menus can feel abrupt when closing.
- Frequent interactions (chips/toggles) animate similarly to occasional interactions; hierarchy of motion frequency is not enforced.
- Toast behavior is local to components instead of a single top-level system, creating overlap risk and inconsistent placement/timing.

## Priority Plan

### P0 - Foundation (Do first)

1. Add global motion tokens and timing primitives in `src/index.css`.
- Add CSS variables for easings:
  - `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`
  - `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`
  - `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1)`
- Add duration tokens:
  - `--dur-press: 120ms`
  - `--dur-fast: 180ms`
  - `--dur-base: 240ms`
  - `--dur-slow: 320ms`
- Add shared utility class (or reusable style) for press feedback (`:active { transform: scale(0.97); }`).

2. Create one app-level toast host/provider.
- Move toast rendering from local component instances to one root host (likely mounted in `src/App.jsx`).
- Keep toast enter/exit direction consistent and add subtle motion (slide + fade, ease-out, ~200ms).
- Add reduced-motion fallback.

3. Replace broad `transition-all` on high-frequency interactive controls.
- Use property-specific transitions (`color`, `background-color`, `border-color`, `transform`, `opacity`).
- Target files first:
  - `src/components/UI/Card.jsx`
  - `src/components/CategoryGrid.jsx`
  - `src/components/Testimonials.jsx`
  - `src/components/slider.jsx`
  - `src/components/layout/Footer.jsx`

### P1 - Interaction Quality

4. Add tactile active states to all primary pressables.
- Add `active:scale-[0.97]` (or equivalent) on:
  - CTA buttons
  - icon buttons
  - chip buttons
  - slider arrows and pagination controls
- Priority files:
  - `src/components/AddToCartButton.jsx`
  - `src/pages/Cart.jsx`
  - `src/components/PopularProducts.jsx`
  - `src/components/Bestsellers.jsx`
  - `src/components/NewArrivals.jsx`
  - `src/pages/ProductDetails.jsx`
  - `src/components/slider.jsx`

5. Normalize animation durations by interaction type.
- Press feedback: 100-160ms.
- hover/color transitions: ~160-220ms.
- popovers/drawers/toasts: 180-280ms.
- Adjust existing 500-800ms transitions where they feel heavy for utility UI.
- Key files:
  - `src/components/CategoryGrid.jsx` (currently 500-800ms in multiple places)
  - `src/components/slider.jsx` (retain hero cinematic motion, but tighten non-hero controls)

6. Make mobile menu motion intentional.
- `src/components/layout/Navbar.jsx` currently toggles with immediate mount/unmount.
- Add opening/closing animation with directional movement and opacity.
- Keep keyboard-triggered close responsive (no long delay).

### P2 - Visual Coherence and Hidden Polish

7. Standardize section chip interactions across Bestsellers/New Arrivals/Popular Products.
- Ensure shared chip component behavior: consistent hover, active, and pressed feedback.
- Reduce motion on frequent chip toggles; keep snappy and subtle.

8. Improve image/card hover hierarchy.
- For cards, prioritize one clear hover signal (e.g., border + slight image transform) instead of stacking multiple equal-strength effects.
- Ensure hover effects do not overpower readability on low-end/mobile.

9. Add reduced motion compliance for decorative animations.
- Disable or reduce:
  - `animate-ken-burns`
  - `animate-slide-up`
  - progress bar fill animation
- Keep functional feedback intact.

10. Clean up duplicate/legacy UI files after motion system stabilization.
- Review and archive/remove unused duplicates to avoid divergence:
  - `src/components/layout/Navbar2.jsx`
  - `src/components/layout/Navbar copy.jsx`
  - `src/components/Bestsellers.backup.jsx`
  - `src/data/Data-backup.js`

## File-by-File Change Backlog

### `src/components/UI/Toast.tsx`
- Add enter/exit animation state (not just auto-dismiss timeout).
- Add swipe/close affordance (optional P2).
- Use semantic colors with sufficient contrast (warning currently risks low readability).

### `src/pages/Cart.jsx`
- Keep click-to-toast behavior but route through global toast API.
- Add active press feedback to quantity/remove/checkout controls.
- Tighten transition properties and durations.

### `src/components/UI/Card.jsx`
- Keep add-to-cart feedback but remove local toast container.
- Add active state for add icon button.
- Replace generic `transition-all` classes with targeted transitions.

### `src/components/PopularProducts.jsx`
- Keep chip click feedback but move to global toast.
- Reduce motion weight for frequent chip toggles.

### `src/components/AddToCartButton.jsx`
- Remove unnecessary `transform`/`transition-all` breadth.
- Add explicit pressed state and property-specific transitions.
- Keep success state fast and readable.

### `src/components/CategoryGrid.jsx`
- Tone down 800ms transitions for utility interactions.
- Keep reveal animation for first entry, but prevent heavy replay loops when scrolling repeatedly.
- Replace mixed easings with tokenized curves.

### `src/components/layout/Navbar.jsx`
- Animate mobile panel in/out with proper easing and duration.
- Add pressed state to menu/search toggles.
- Correct React `class` attribute typo on menu icon to `className`.

## Implementation Order (Execution Plan)
1. Motion tokens + reduced-motion baseline (`index.css` + `tailwind.config.js` if needed).
2. App-level toast host and migration from local toasts.
3. Press feedback pass across primary controls.
4. Transition precision pass (`transition-all` removal where unnecessary).
5. Menu + drawer motion refinement.
6. Section chip/card polish and final consistency sweep.

## Success Criteria
- All major pressables provide tactile feedback (`:active`) within 100-160ms.
- No important interactive component relies on broad `transition-all` when a specific property can be used.
- Toasts come from one system, animate consistently, and do not overlap across components.
- Frequent interactions feel instant/snappy; occasional interactions can carry richer motion.
- Decorative motion respects `prefers-reduced-motion`.
