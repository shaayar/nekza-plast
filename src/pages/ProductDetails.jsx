import { useEffect, useMemo, useRef, useState } from "react";
import { ALL_PRODUCTS } from "../data/Data";
import { useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton.jsx";
import BuyNowButton from "../components/BuyNowButton.jsx";
import Card from "../components/UI/Card.jsx";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ChevronLeft = ({ cls = "" }) => (
  <svg className={cls} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = ({ cls = "" }) => (
  <svg className={cls} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

function ImageGallery({ images }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-xl bg-gray-50 aspect-square w-full">
        <img
          key={active}
          src={images[active]}
          alt="Product"
          className="h-full w-full object-contain p-6 transition-opacity duration-300"
        />
        {/* Arrows */}
        <button
          onClick={prev}
          className="pressable absolute left-3 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center
                     rounded-full bg-white shadow-md text-gray-600 hover:text-red-600 transition-colors"
          data-cursor="Open"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="pressable absolute right-3 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center
                     rounded-full bg-white shadow-md text-gray-600 hover:text-red-600 transition-colors"
          data-cursor="Open"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" data-cursor="Drag">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`pressable shrink-0 size-16 md:size-18 rounded-lg overflow-hidden border-2 transition-colors duration-200
                        ${active === i ? "border-red-600" : "border-gray-200 hover:border-gray-400"}`}
            data-cursor="View"
          >
            <img src={img} alt={`Thumb ${i + 1}`} className="h-full w-full object-contain p-1 bg-gray-50" />
          </button>
        ))}
      </div>
    </div>
  );
}


function SizeSelector({ sizes, selected, onChange }) {
  return (
    <div className="space-y-1.5">
      {sizes.map((s, i) => (
        <button
          key={s}
          onClick={() => onChange(i)}
          className="pressable inline-block pb-1 me-2 text-base font-bold text-gray-900 relative"
          data-cursor="Open"
        >
          {s}
          {selected === i && (
            <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-red-600 rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}

function QuantitySelector({ qty, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onChange(Math.max(1, qty - 1))}
        className="pressable flex size-8 items-center justify-center rounded-full border border-gray-300
                   text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors text-lg leading-none"
        data-cursor="Shop"
      >
        −
      </button>
      <span className="w-8 text-center text-base font-semibold text-gray-900 border-b border-red-600 pb-0.5">
        {qty}
      </span>
      <button
        onClick={() => onChange(qty + 1)}
        className="pressable flex size-8 items-center justify-center rounded-full border border-gray-300
                   text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors text-lg leading-none"
        data-cursor="Shop"
      >
        +
      </button>
    </div>
  );
}

function TabSection({ tabs }) {
  const TAB_KEYS = Object.keys(tabs);
  const [active, setActive] = useState(TAB_KEYS[0]);
  const scrollRef = useRef(null);

  return (
    <div className="border-t border-gray-200 pt-4">
      {/* Tab bar */}
      <div
        ref={scrollRef}
        className="flex gap-0 overflow-x-auto border-b border-gray-200 scrollbar-hide"
        data-cursor="Drag"
      >
        {TAB_KEYS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pressable shrink-0 px-4 py-3 text-lg font-medium whitespace-nowrap transition-colors duration-150 relative
                        ${active === tab ? "text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
            data-cursor="Open"
          >
            {tab}
            {active === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="pt-5 space-y-3">
        <p className="text-lg font-bold text-gray-900">{tabs[active].heading}</p>
        <ul className="space-y-1.5">
          {tabs[active].bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
              <span className="mt-1.5 size-1.5 rounded-full bg-gray-400 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProductDetail() {
  const { productSlug } = useParams();
  const [size, setSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState("");

  const activeSlug = productSlug
    || (typeof window !== "undefined"
      ? window.location.pathname.split("/").filter(Boolean).pop()
      : "");

  const activeProduct = useMemo(() => {
    return (
      ALL_PRODUCTS.find((item) => item.slug === activeSlug || item.id === activeSlug)
      || ALL_PRODUCTS[0]
      || null
    );
  }, [activeSlug]);

  const productGalleryImages = useMemo(() => {
    if (!activeProduct) return [];
    const extraImages = Array.isArray(activeProduct.images) ? activeProduct.images : [];
    const merged = [activeProduct.img, activeProduct.hoverImage, ...extraImages].filter(Boolean);
    return [...new Set(merged)];
  }, [activeProduct]);

  const RELATED = useMemo(() => {
    if (!activeProduct) return [];
    return ALL_PRODUCTS
      .filter((p) => p.slug !== activeProduct.slug && p.category === activeProduct.category)
      .slice(0, 4);
  }, [activeProduct]);

  if (!activeProduct) {
    return (
      <section className="section-shell min-h-screen bg-white px-4 py-10">
        <div className="mx-auto max-w-450">
          <p className="text-lg text-zinc-700">Product not found.</p>
        </div>
      </section>
    );
  }

  const sizeMap = {
    "water-bottle": ["750ml", "900ml", "1200ml", "1500ml"],
    flask: ["600ml", "800ml", "1700ml"],
    "water-jug": ["2L", "5L", "10L", "20L"],
    "lunch-box": ["Small", "Medium", "Large"],
    casserole: ["1200ml", "2200ml", "3200ml"],
    "combo-set": ["Standard Set"],
    "pencil-box": ["Single Size"],
    "kitchen-product": ["Standard"],
  };

  const variantList = Array.isArray(activeProduct.variants) ? activeProduct.variants : [];
  const derivedSizes = variantList.length > 0
    ? variantList.map((variant) => variant.size)
    : (sizeMap[activeProduct.category] || ["Standard"]);

  useEffect(() => {
    setSize(0);
  }, [activeProduct.id]);

  const selectedSize = derivedSizes[size] || derivedSizes[0] || "Standard";
  const selectedVariant = variantList.find((variant) => variant.size === selectedSize);

  const activePrice = selectedVariant?.price ?? activeProduct.price ?? null;
  const activeMrp = selectedVariant?.mrp ?? activeProduct.mrp ?? null;
  const activeOff = selectedVariant?.off
    ?? (activePrice && activeMrp ? Math.round(((activeMrp - activePrice) / activeMrp) * 100) : null);

  const PRODUCT = {
    title: activeProduct.title,
    price: activePrice,
    mrp: activeMrp,
    off: activeOff,
    sizes: derivedSizes,
    images: productGalleryImages,
    tabs: {
      About: {
        heading: "About This Product",
        bullets: [
          `Designed by ${activeProduct.vendor || "Nekza"} for everyday utility.`,
          "Built for home, travel, school, and regular use routines.",
          "Practical design focused on durability and daily convenience.",
        ],
      },
      Specs: {
        heading: "Specifications",
        bullets: [
          `Category: ${activeProduct.category.replace(/-/g, " ")}`,
          `Brand: ${activeProduct.vendor || "Nekza"}`,
          `Collections: ${Array.isArray(activeProduct.collections) ? activeProduct.collections.join(", ") : "N/A"}`,
        ],
      },
      "Return Policy": {
        heading: "Return Policy",
        bullets: [
          "Returns accepted within 7 days of delivery.",
          "Item must be unused and in original packaging.",
          "Report damaged or defective items at delivery.",
        ],
      },
      Reviews: {
        heading: "Customer Reviews",
        bullets: [
          "★★★★★ — Useful and sturdy for daily use.",
          "★★★★☆ — Good quality and practical design.",
          "★★★★☆ — Value for regular family use.",
        ],
      },
      "Additional Info": {
        heading: "Additional Information",
        bullets: [
          "Country of Origin: India",
          "Manufacturer: Nekza Plast",
          `Product Slug: ${activeProduct.slug}`,
        ],
      },
    },
    terms: [
      "Products are subject to availability",
      "Color and finish may slightly vary from product images",
      "Please check product details before placing the order",
    ],
  };

  const productForCart = {
    id: activeProduct.id,
    title: PRODUCT.title,
    price: PRODUCT.price ?? activeProduct.price ?? 0,
    mrp: PRODUCT.mrp ?? PRODUCT.price ?? activeProduct.mrp ?? activeProduct.price ?? 0,
    image: PRODUCT.images[0],
  };

  const discount = PRODUCT.off;

  return (
    <section className="section-shell min-h-screen bg-white px-4 py-6 sm:px-6 md:px-8 md:py-10 lg:px-10">
      <div className="mx-auto max-w-450">

        {/* ══ Top Product Section ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">

          {/* ── Left: Image Gallery ── */}
          <div className="w-full">
            <ImageGallery images={PRODUCT.images} />
          </div>

          {/* ── Right: Product Info ── */}
          <div className="flex flex-col gap-5">

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold leading-snug text-primary">
              {PRODUCT.title}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xl md:text-3xl font-bold text-gray-900">
                {PRODUCT.price ? (
                  <>
                    ₹{PRODUCT.price} <span className="text-gray-500">/ piece</span>
                  </>
                ) : ( "Price on request" )}
              </span>
              {PRODUCT.mrp && (
                <span className="text-md text-gray-400 line-through">MRP ₹{PRODUCT.mrp}</span>
              )}
              {discount && (
                <span className="text-md font-semibold text-white bg-primary rounded p-1">{discount}% off</span>
              )}
            </div>


            {/* Size */}
            <SizeSelector sizes={PRODUCT.sizes} selected={size} onChange={setSize} />

            {/* Quantity */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-900">Quantity</p>
              <QuantitySelector qty={qty} onChange={setQty} />
            </div>

            {/* Add to Cart + Buy Now */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <AddToCartButton
                product={productForCart}
                selectedSize={selectedSize}
                quantity={qty}
                className="w-full"
              />
              <BuyNowButton
                product={productForCart}
                selectedSize={selectedSize}
                quantity={qty}
                className="pressable w-full rounded-full bg-primary px-8 py-4 font-medium text-white "
              >
                Buy Now
              </BuyNowButton>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Check Availability */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-900">Check Availability</p>
              <div className="flex items-center border-b border-gray-300 focus-within:border-gray-700 transition-colors">
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter pin code"
                  className="flex-1 py-2 text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                />
                <button className="pressable flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors pb-2" data-cursor="Open">
                  <CheckIcon /> Check
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-900">Terms and Conditions</p>
              <ul className="space-y-1">
                {PRODUCT.terms.map((t, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="mt-2 size-1.5 rounded-full bg-gray-400 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ══ Tabs ══════════════════════════════════════════════════════════ */}
        <div className="mt-10 md:mt-14">
          <TabSection tabs={PRODUCT.tabs} />
        </div>

        {/* ══ You May Also Like ════════════════════════════════════════════ */}
        <div className="mt-12 md:mt-16">
          <h2 className="mb-6 text-center text-2xl md:text-3xl font-bold text-gray-900">
            You May Also Like
          </h2>

          {/* Mobile: 2-col grid  |  Desktop: 4-col grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {RELATED.map((p) => (
              <Card key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
