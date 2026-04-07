# Nekza E-Commerce — Full Design Improvement Checklist

> Generated from complete design audit across desktop + mobile screens.
> Work through this file top to bottom. High-priority items are listed first within each section.

---

## Legend
- 🔴 **High Priority** — Fix immediately, highest visual/UX impact
- 🟡 **Medium Priority** — Fix in next pass
- 🟢 **Low Priority** — Polish pass, do last
- ✅ Done
- 🗑️ Remove entirely
- 🔀 Merge with another section

---

## 1. Color System

### CSS Variables — Replace your current root with this

```css
:root {
  --primary-color: #EA343A;       /* Red — CTA buttons ONLY */
  --primary-dark: #C42027;        /* Red hover state */
  --primary-pale: #FFF0F0;        /* Red tinted backgrounds */
  --primary-light: #FDDCDC;       /* Red subtle fills */

  --accent-color: #71717A;        /* Muted text, labels */
  --alt-yellow: #F9F312;          /* ONLY on dark/ink backgrounds */
  --yellow-dark: #C4BC00;         /* Yellow hover on dark bg */

  --ink: #1A1A1A;                 /* Replace pure #000000 with this */
  --ink-soft: #3D3D3D;            /* Secondary text */
  --muted: #71717A;               /* Tertiary text, captions */

  --warm-bg: #FAF7F4;             /* Primary page background — NOT white */
  --cream: #F5EFE8;               /* Alternate section background */
  --cream-dark: #EDE5DA;          /* Borders on cream sections */

  --border: rgba(26,26,26,0.10);
  --border-strong: rgba(26,26,26,0.18);
}
```

### Color Usage Rules

- [ ] 🔴 **Strip red from ALL non-CTA uses.** Remove red from: badge backgrounds, section heading accents, price highlights, icon tints, the scrolling ticker, section label text. Red must appear ONLY on primary action buttons (Buy Now, Shop Now, Add to Cart).
- [ ] 🔴 **Replace pure white `#FFFFFF` page background** with `--warm-bg: #FAF7F4`. This single change makes the entire page feel more premium immediately.
- [ ] 🔴 **Never use `--alt-yellow` on white or cream backgrounds.** It fails contrast (WCAG AA). Yellow is only for use on dark `--ink` backgrounds.
- [ ] 🟡 **Alternate section backgrounds** between `--warm-bg` and `--cream` to create visual rhythm between sections without redesigning content.
- [ ] 🟡 **Replace pure black text** (`#000000`) with `--ink: #1A1A1A` everywhere. Softer and more premium.
- [ ] 🟢 **Footer background:** Switch from brand red to `--ink: #1A1A1A`. Red footer is harsh and visually noisy. Near-black is immediately more premium.

### Contrast Checks (Pass / Fail)

| Combination | Result |
|---|---|
| White text on `#EA343A` red | ✅ Pass |
| `--ink` text on `--warm-bg` | ✅ Pass |
| Yellow `#F9F312` on `--ink` dark bg | ✅ Pass |
| Yellow `#F9F312` on white / cream | ❌ FAIL — never use |
| Red text on white | ✅ Pass (but avoid — reserve red for buttons only) |

---

## 2. Section Order

Current order has issues — recommended order below:

```
1.  Hero
2.  Everyday life with Nekza   ← moved up from bottom ✅ (already done)
3.  Category icons row
4.  Bestsellers (tabbed — merge all 3 product grids here)
5.  Brand story — "A brand designed with intention"
6.  Utility looks different in every routine
7.  Build Your Kit
8.  UGC — "Nekza in Real Kitchens"
9.  Material Matters
10. Gifting, Made Easy
11. Loved by Nekza Customers (testimonials)
12. Footer
```

- [ ] 🔴 **Merge Bestsellers + Popular Products + New Arrivals into one tabbed component** at position 4. All three are currently standalone sections with identical card layouts — this is the single biggest structural problem on the page.
- [ ] 🟡 **Remove "Our Popular Products" as a standalone section** (becomes a tab).
- [ ] 🟡 **Remove "New Arrivals" as a standalone section** (becomes a tab).

---

## 3. Hero Section

**Current verdict: Fix**

- [ ] 🔴 **Add a human presence.** The hero currently shows products on a surface — no person, no lifestyle scene. Add a lifestyle photo with a real person using a Nekza product. This is the single biggest missed emotional connection point.
- [ ] 🟡 **Replace generic CTA text.** "Shop Now" says nothing distinctive. Change to something specific: "Shop Bestsellers", "Find Your Bottle", or "Explore the Range".
- [ ] 🟡 **Strengthen the headline.** "Discover Premium Water Companions" is decent but passive. Consider: *"Hydration, Designed for Real Life"* or *"Built for Every Routine."*
- [ ] 🟡 **Ensure hero image is sharp and well-lit** on both desktop and mobile. Do not use a compressed or low-res image in the hero.

---

## 4. Category Icons Row

**Current verdict: Fix**

- [ ] 🔴 **Limit to 4 visible items on mobile** with horizontal scroll for the rest. Currently 6+ items are crammed in one row — icons become too small to read or tap.
- [ ] 🟡 **Standardise image quality and style.** Some category thumbnails look sharper than others. Use consistent square-cropped images with identical background treatment across all categories.
- [ ] 🟡 **Increase minimum tap target.** Each category item should be at least 44×44px tappable area on mobile.
- [ ] 🟢 **Consider icon labels at 13px minimum** — current label text is too small to read comfortably on mobile.

---

## 5. Everyday Life with Nekza

**Current verdict: Keep — placement is now correct ✅**

- [ ] 🟡 **Fix mobile grid layout.** The 4-column photo grid collapses to very small tiles on mobile. Change to 2-column grid on mobile, or a full-width swipe slider.
- [ ] 🟢 **Ensure all photos are consistent aspect ratio** — currently some look portrait, some landscape, which makes the grid uneven.

---

## 6. Product Sections — Bestsellers / Popular Products / New Arrivals

**Current verdict: Merge all three → 🔀**

- [ ] 🔴 **Merge into one tabbed component.** Tabs: `Bestsellers | New Arrivals | Popular`. This eliminates 2 full sections of section fatigue.
- [ ] 🔴 **Switch to horizontal scroll rail on mobile.** Single-column vertical stacking creates enormous scroll debt. Show 2 cards visible, swipe horizontally for more.
- [ ] 🔴 **Remove dual action buttons per card.** Currently each card has "Buy Now" button + a cart icon. Pick ONE: the Buy Now button. Move the cart/wishlist icon to the top-right corner of the card image.
- [ ] 🟡 **Increase product image size within cards.** Images are too small relative to the card size — product desirability suffers.
- [ ] 🟡 **Simplify price display.** Strikethrough MRP + offer price + badge all competing visually. Format as: offer price (large, red), MRP (small, strikethrough, grey). Remove the separate badge if the price difference is already shown.
- [ ] 🟡 **Add whitespace inside cards.** Content is too close to card edges — increase internal padding to at least 12px on all sides.
- [ ] 🟢 **Consider showing a "use case" label on each product card** (e.g. "For school", "For gym", "For office") — helps users identify the right product faster.

---

## 7. Scrolling Ticker Strip

**Current verdict: Fix or Remove**

- [ ] 🟡 **Increase font size to minimum 13px.** Currently nearly unreadable on mobile.
- [ ] 🟡 **Remove red background from ticker.** Use `--ink` dark background with white text, or `--cream` background with `--ink` text. Red background makes it feel like a warning/alert, not a trust signal.
- [ ] 🟢 **Option to remove entirely** if font size increase makes it feel too large — it should not take up more than 36px height.

---

## 8. Brand Story — "A brand designed with intention"

**Current verdict: Fix**

- [ ] 🟡 **Change background from pale pink/red to `--cream: #F5EFE8`.** The current pinkish tint feels accidental. Warm cream reads as intentional and premium.
- [ ] 🟡 **Replace the 4-icon grid layout** with 2 bold statements in large type + a lifestyle image. The current icon grid is the most templated-looking section on the page.
- [ ] 🟡 **Increase heading size.** "A brand designed with intention" deserves to be the dominant typographic element in this section — at least 32px on desktop.
- [ ] 🟢 **Remove or consolidate the sub-features** (Modern + Functional Design, Trusted by Real Customers, Fast Support & Delivery). Pick the 2 most important. Three small icons with short labels reads as generic.

---

## 9. "Utility looks different in every routine"

**Current verdict: Fix**

- [ ] 🔴 **Stack to 1-column on mobile.** Three columns of small text side-by-side on mobile is unreadable.
- [ ] 🟡 **Increase body text to minimum 14px.** Current paragraph text under each column is too small — most users will skip it entirely.
- [ ] 🟡 **Reduce copy density.** Each column should have a maximum of 2 sentences. Long paragraphs in a 3-column layout never get read.
- [ ] 🟢 **Consider replacing text columns with icon + headline + 1-sentence format** — scannable and visually cleaner.

---

## 10. Build Your Kit ("Packed for school mornings")

**Current verdict: Fix**

- [ ] 🔴 **Increase mini product card height.** Cards inside this section are too small to tap comfortably on mobile. Minimum 44px tap target height per card item.
- [ ] 🟡 **Rename section to "Build Your Kit"** — "Packed for school mornings" is too specific. The section serves multiple personas (student, office, family, fitness). The title should reflect that.
- [ ] 🟡 **On mobile: show 2 products maximum** with a "See full kit" CTA. Currently the small cards are cramped and hard to interact with.
- [ ] 🟡 **Add persona selector tabs** (Student / Office / Family / Fitness) at the top of the section, dynamically loading the relevant product set. Reference the interactive prototype built earlier in this project.
- [ ] 🟢 **Add a bundle price** showing total kit value vs. buying individually — increases perceived value and encourages multi-product purchase.

---

## 11. UGC — "Nekza in Real Kitchens" *(New section to add)*

- [ ] 🟡 **Implement the masonry photo grid** with filter tabs: All / Bottles / Lunch Boxes / Kitchen / Gifting.
- [ ] 🟡 **Each card must show:** product photo, product name tag, customer name, city, star rating, short review (1 sentence max), and a "Shop this →" link.
- [ ] 🟡 **Use real customer-submitted photos** — not studio shots. Authenticity is the entire point of this section.
- [ ] 🟢 **Add a "Submit your photo" CTA** at the bottom of the section to grow the UGC content base over time.
- [ ] 🟢 **On mobile: 2-column masonry grid.** Limit to 6 cards shown, "Load more" below.

---

## 12. Material Matters *(New section to add)*

- [ ] 🟡 **Add section with 4 material cards:** 18/8 Stainless Steel, Borosilicate Glass, BPA-Free PP Plastic, Pure Copper.
- [ ] 🟡 **Each card must include:** material name, grade/certification badge, 2-sentence description of why it matters, and 3 property tags (e.g. Rust-proof, Taste-neutral, Dishwasher safe).
- [ ] 🟡 **Use `--cream` background** for this section to distinguish it from adjacent sections.
- [ ] 🟢 **Link each material card** to a filtered collection page showing only products made from that material.

---

## 13. Gifting, Made Easy *(New section to add)*

- [ ] 🟡 **Add 4 occasion tiles:** Birthday / House Warming / Kids' Tiffin / Corporate.
- [ ] 🟡 **Each occasion loads 2 curated gift bundles** with: bundle name, included products, offer price, MRP strikethrough, savings badge, and Add to Cart button.
- [ ] 🟡 **Use `--ink` dark background** for this section — creates strong contrast against warm-bg sections on either side.
- [ ] 🟡 **Add "Free gift wrapping" note** below bundles — this is a high-value trust signal for gifting use cases.
- [ ] 🟢 **Corporate tile should link to a bulk enquiry form** rather than a standard cart — corporate gifting requires custom pricing.

---

## 14. Testimonials — "Loved by Nekza Customers"

**Current verdict: Fix**

- [ ] 🟡 **Reduce from 5 small cards to 3 large cards.** Quality of social proof matters more than quantity. Nobody reads 5 testimonials.
- [ ] 🟡 **Make star rating the most prominent element** — large, gold stars above the quote text.
- [ ] 🟡 **Each testimonial: 1-2 sentences maximum.** Long testimonials don't get read on mobile.
- [ ] 🟡 **Add customer photo** where available. Initials-only avatars feel anonymous and reduce trust impact.
- [ ] 🟢 **Add verified purchase badge** on each testimonial — "Verified Buyer" label increases credibility significantly.
- [ ] 🟢 **On mobile: swipe carousel** showing 1 card at a time — not a vertical stack of 5.

---

## 15. Footer

**Current verdict: Fix**

- [ ] 🟡 **Change footer background from brand red to `--ink: #1A1A1A`.** Red footer reads as harsh and visually noisy. Near-black is immediately more premium and easier to read.
- [ ] 🟡 **Standardise column spacing.** Currently the left column has different internal padding than the right columns — use consistent `gap` values across all footer columns.
- [ ] 🟢 **Increase footer link font size** to minimum 13px — currently links are too small to tap comfortably on mobile.
- [ ] 🟢 **Add a "Back to top" link** at the bottom of the footer — small but appreciated UX detail.

---

## 16. Mobile UX — Global Fixes

*These apply across the entire site, not to any single section.*

- [ ] 🔴 **Horizontal scroll rails for ALL product sections on mobile.** Every product row that currently stacks vertically must become a horizontal swipe rail. Show 2 cards, swipe for more. This is the single biggest mobile UX improvement available.
- [ ] 🔴 **Minimum 44px tap target** on all interactive elements — buttons, cards, icons, category tiles.
- [ ] 🔴 **Minimum 16px horizontal padding** on all sections — some sections currently have content touching screen edges.
- [ ] 🟡 **Minimum 14px body text size** across all sections on mobile. Several sections drop to 12px which is too small.
- [ ] 🟡 **Test all 3-column layouts on mobile** — they almost universally need to become 1-column stacks.
- [ ] 🟢 **Add a sticky "Add to Cart" bar** that appears when scrolling past the hero — significantly improves conversion without cluttering the page.
- [ ] 🟢 **Reduce vertical spacing between sections on mobile** — desktop section padding (e.g. 80px top/bottom) should reduce to 40px on mobile to avoid the page feeling endlessly long.

---

## 17. Typography

- [ ] 🟡 **Establish a clear type scale and stick to it:**

| Role | Desktop | Mobile |
|---|---|---|
| Hero H1 | 48–56px | 32–36px |
| Section heading H2 | 32–36px | 24–28px |
| Card title | 16px | 15px |
| Body / description | 15–16px | 14px |
| Labels / captions | 12–13px | 12px |
| Micro (badges, tags) | 10–11px | 10px |

- [ ] 🟡 **Remove or reduce the script/cursive "Our" heading treatment.** It's decorative but weak at small sizes and overused across multiple section headings. Use it in maximum 1–2 places.
- [ ] 🟡 **Ensure heading weights are consistent.** Headings should be one weight heavier than body — don't mix bold and semi-bold headings within the same section.
- [ ] 🟢 **Consider a display serif font for section headings** to add editorial character — e.g. DM Serif Display or Playfair Display paired with your current sans-serif for body text.

---

## 18. Product Cards — Global Standards

*Apply these rules to every product card across all sections.*

- [ ] 🔴 **One primary CTA per card.** Choose: "Buy Now" button. Move cart/wishlist to top-right corner of image as an icon. Remove the second button.
- [ ] 🟡 **Minimum card padding: 12px all sides.**
- [ ] 🟡 **Product image must fill at least 60% of card height.**
- [ ] 🟡 **Price format:** Offer price (large, `--primary-color`), MRP strikethrough (small, `--muted`). No additional badge needed if the price difference is shown.
- [ ] 🟡 **Product name: maximum 2 lines.** Use `overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2;` to truncate.
- [ ] 🟢 **Add a subtle hover state on desktop** — slight scale (1.02) or border highlight on hover increases perceived interactivity.
- [ ] 🟢 **Consider a "use case" micro-label** on each card (e.g. "For school · 500ml") to help users quickly identify fit.

---

## Summary — Top 10 Changes by Impact

| # | Change | Impact | Effort |
|---|---|---|---|
| 1 | Merge 3 product grids into 1 tabbed component | 🔴 Highest | Medium |
| 2 | Horizontal scroll rails on mobile for all product rows | 🔴 Highest | Low |
| 3 | Strip red from all non-CTA elements | 🔴 Highest | Low |
| 4 | Replace white background with `--warm-bg: #FAF7F4` | 🔴 High | Low |
| 5 | Add human presence to hero | 🔴 High | Low (photo swap) |
| 6 | Footer from red to `--ink` dark background | 🟡 High | Low |
| 7 | Stack all 3-column layouts to 1-column on mobile | 🟡 High | Low |
| 8 | Reduce testimonials from 5 small to 3 large cards | 🟡 Medium | Low |
| 9 | Add Build Your Kit persona selector | 🟡 Medium | Medium |
| 10 | Add UGC Mosaic + Gifting sections | 🟡 Medium | High |

---

*Last updated: Based on full design audit of desktop + mobile Nekza screenshots, April 2026.*
