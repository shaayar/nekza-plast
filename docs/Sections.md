# Sections, Sitemap, and SVG Audit

Last updated: 2026-04-07

## 1) Sitemap (Current App Routing)

### Global Layout
- Persistent shell: `Navbar` + `Footer` (all routes)
- Global utilities: `ScrollToTop`, `CustomCursor`, `CartDrawer`
- Source: `src/App.jsx`

### Route Map
- `/` -> Home (`src/pages/Home.jsx`)
- `/about` -> About (`src/pages/About.jsx`)
- `/contact` -> Contact (`src/pages/Contact.jsx`)
- `/products` -> Products listing (`src/pages/Products.jsx`)
- `/products/*` -> Product Details fallback (`src/pages/ProductDetails.jsx`)
- `/products/:categorySlug/:productSlug` -> Product Details (`src/pages/ProductDetails.jsx`)
- `/collections/:collectionSlug` -> Products listing by collection (`src/pages/Products.jsx`)
- `/popular-products` -> redirect to `/collections/popular`
- `/bestsellers` -> redirect to `/collections/bestseller`
- `/new-arrivals` -> redirect to `/collections/new-arrivals`
- `/pages/terms-and-conditions` -> Terms & Conditions (`src/pages/TermsConditions.jsx`)
- `/pages/privacy-policy` -> Privacy Policy (`src/pages/PrivacyPolicy.tsx`)
- `/pages/faq` -> FAQ (`src/pages/FAQ.jsx`)
- `/cart` -> Cart (`src/pages/Cart.jsx`)
- `/account` -> My Account (`src/pages/MyAccount.jsx`)
- `/whyus` -> Why Us (`src/pages/WhyUsPage.tsx`)
- `*` -> 404 Not Found (`src/pages/NotFound.jsx`)

### Home Page Section Order (`/`)
Source: `src/pages/Home.jsx`
- `ImageSwiper`
- `CategoryGrid`
- `LifeWithNekza`
- `Bestsellers`
- `MarqueeStrip`
- `WhyNekza`
- `ChooseYourRoutine`
- `PopularProducts`
- `UsageMomentsStrip`
- `NewArrivals`
- `Testimonials`

### Key Section Blocks by Major Page
- About (`/about`): Hero, Intro, Mission & Vision, Values, Company Information, Beyond the Ordinary, Owner's Note, Timeline, Awards Intro
- Contact (`/contact`): Hero, Contact Form, Contact Info Cards, Response-time CTA card
- Products (`/products`, `/collections/:collectionSlug`): Hero header, Filter sidebar (Sort/Category/Tags/Price), Product grid
- Product Details (`/products/:...`): Gallery, Pricing/variant selection, quantity, tabs, related products
- Terms (`/pages/terms-and-conditions`): Hero, sticky in-page nav, sectioned policy cards
- Privacy (`/pages/privacy-policy`): Hero, sticky in-page nav, sectioned policy cards
- FAQ (`/pages/faq`): Hero, grouped accordion FAQs, support CTA
- Why Us (`/whyus`): Hero, statement block, reasons grid, closing CTA
- Cart (`/cart`): Empty-state or cart list + sticky order summary
- My Account (`/account`): Hero/profile card, shortcuts, recent orders, sidebar widgets

### Navigation/Link Data Sources (for sitemap maintenance)
- Navbar IA: `navbarItems` in `src/data/Data.js`
- Footer IA: `footerSections` in `src/data/Data.js`

---

## 2) SVGs in Use + Lucide Alternatives

### Inline/Custom SVG Usage Audit

| File | Current SVG/Icon | Where Used | Lucide Alternative | Recommendation |
|---|---|---|---|---|
| `src/components/LifeWithNekza.jsx` | custom right-arrow SVG | "Shop now" CTA | `ArrowRight` | Safe to replace with Lucide for consistency |
| `src/components/slider.jsx` | custom arrow SVG (CTA) | Hero "Discover Collection" button | `ArrowRight` | Safe to replace |
| `src/components/slider.jsx` | custom chevron-left/right SVG | Hero prev/next controls | `ChevronLeft`, `ChevronRight` | Safe to replace |
| `src/components/layout/Footer.jsx` | `ExternalIcon` custom SVG | external links | `ExternalLink` | Safe to replace |
| `src/components/layout/Footer.jsx` | `ChevronIcon` custom SVG | mobile accordion toggle | `ChevronDown` | Safe to replace |
| `src/components/layout/Footer.jsx` | `FacebookIcon` custom SVG | social link | no official Lucide brand icon | Keep custom SVG (Lucide intentionally avoids brand sets) |
| `src/components/layout/Footer.jsx` | `InstagramIcon` custom SVG | social link | no official Lucide brand icon | Keep custom SVG |
| `src/pages/Products.jsx` | custom checkmark SVG | active checkbox in filters | `Check` | Safe to replace |
| `src/pages/Products.jsx` | custom filter-lines SVG | mobile filters button | `SlidersHorizontal` | Safe to replace |
| `src/pages/ProductDetails.jsx` | local `ChevronLeft` SVG | gallery previous | `ChevronLeft` | Safe to replace |
| `src/pages/ProductDetails.jsx` | local `ChevronRight` SVG | gallery next | `ChevronRight` | Safe to replace |
| `src/pages/ProductDetails.jsx` | local `CheckIcon` SVG | check row/marker | `Check` | Safe to replace |
| `src/data/Data.js` (`WHY_US_REASONS`) | icon HTML strings (4 inline SVGs) | "Why Us reasons" data-driven icons | closest: `Package`, `Shapes`, `Star`, `Truck` (or `ArrowRightFromLine`) | Better to migrate from HTML-string SVGs to icon keys + Lucide components |
| `src/components/UI/Pre-Loader.jsx` | complex animated SVG illustration | preloader visual | none (too custom) | Keep custom SVG animation |
| `src/components/layout/Navbar.jsx` | Remix icon class `ri-menu-4-fill` | mobile menu button | `Menu` | Prefer Lucide `Menu` to remove Remix dependency |

### Static SVG Assets
- `src/assets/react.svg` and `src/assets/vite.svg` are build/template assets, not UI icon-system primitives.
- No Lucide replacement required unless these assets are used in production UI.

### Notes for Implementation Consistency
- Prefer one icon system in app UI (`lucide-react`) for sizing/stroke consistency.
- Keep custom SVG only for:
  - Brand/social logos (Facebook/Instagram)
  - Rich animated or bespoke illustrations (Preloader)
- For data-driven icons (`WHY_US_REASONS`), use icon keys in data and map them to Lucide components in rendering layer.
