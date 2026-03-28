import { useState, useRef } from "react";
import { productDetail as PRODUCT, relatedProducts as RELATED } from "../data/Data";
import AddToCartButton from "../components/AddToCartButton.jsx";

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
const CartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
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
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="pressable absolute right-3 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center
                     rounded-full bg-white shadow-md text-gray-600 hover:text-red-600 transition-colors"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`pressable shrink-0 size-16 md:size-[72px] rounded-lg overflow-hidden border-2 transition-colors duration-200
                        ${active === i ? "border-red-600" : "border-gray-200 hover:border-gray-400"}`}
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
          className="pressable inline-block pb-1 text-base font-bold text-gray-900 relative"
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
      >
        {TAB_KEYS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pressable shrink-0 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-150 relative
                        ${active === tab ? "text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
          >
            {tab}
            {active === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="pt-5 space-y-3">
        <p className="text-sm font-bold text-gray-900">{tabs[active].heading}</p>
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

function RelatedCard({ product }) {
  return (
    <div className="flex flex-col gap-2 group shadow-2xl rounded-xl">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.img}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>


      <div className="px-3 pb-2 flex flex-col justify-between h-[100px]">
        <div>
          {/* Title */}
          <p className="text-xs md:text-sm font-medium text-gray-900 leading-snug line-clamp-2">
            {product.title}
          </p>
          {/* Price */}
          <div className="flex items-center gap-2 flex-wrap">
            {product.price ? (
              <>
                <span className="text-sm font-bold text-gray-900">₹{product.price}/pc</span>
                <span className="text-xs text-gray-400 line-through">MRP ₹{product.mrp}</span>
                {product.off && (
                  <span className="text-xs font-medium text-green-600">{product.off}% off</span>
                )}
              </>
            ) : (
              <span className="text-xs text-gray-500">MRP ₹{product.mrp}</span>
            )}
          </div>
        </div>
        {/* CTA */}
        <button className="pressable flex items-center justify-between w-full mt-auto pt-2 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors border-t border-gray-100">
          <span>View Details</span>
          <span className="flex size-7 items-center justify-center rounded-full border border-current relative">
            <CartIcon />
            <span className="absolute -top-1 -right-1 size-3.5 flex items-center justify-center rounded-full bg-red-600 text-[8px] text-white font-bold">0</span>
          </span>
        </button>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProductDetail() {
  const [size, setSize]         = useState(0);
  const [qty, setQty]           = useState(1);
  const [pincode, setPincode]   = useState("");

  // Create product object for cart
  const productForCart = {
    id: 1,
    title: PRODUCT.title,
    price: PRODUCT.price,
    mrp: PRODUCT.mrp,
    image: PRODUCT.images[0],
  };

  const discount = Math.round(((PRODUCT.mrp - PRODUCT.price) / PRODUCT.mrp) * 100);
  return (
    <div className="bg-white min-h-screen">
      <div className="container-box container-main px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-10 max-w-7xl mx-auto">

        {/* ══ Top Product Section ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">

          {/* ── Left: Image Gallery ── */}
          <div className="w-full">
            <ImageGallery images={PRODUCT.images} />
          </div>

          {/* ── Right: Product Info ── */}
          <div className="flex flex-col gap-5">

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
              {PRODUCT.title}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xl md:text-2xl font-bold text-gray-900">₹{PRODUCT.price}</span>
              <span className="text-sm text-gray-400 line-through">MRP ₹{PRODUCT.mrp}</span>
              <span className="text-sm font-semibold text-green-600">{discount}% off</span>
            </div>


            {/* Size */}
            <SizeSelector sizes={PRODUCT.sizes} selected={size} onChange={setSize} />

            {/* Quantity */}
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-900">Quantity</p>
              <QuantitySelector qty={qty} onChange={setQty} />
            </div>

            {/* Add to Cart Button */}
            <AddToCartButton 
              product={productForCart}
              selectedSize={PRODUCT.sizes[size]}
              quantity={qty}
              className="w-full"
            />

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
                <button className="pressable flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors pb-2">
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
          <h2
            className="mb-6 text-center text-2xl md:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            You May Also Like
          </h2>

          {/* Mobile: 2-col grid  |  Desktop: 4-col grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {RELATED.map((p, i) => (
              <RelatedCard key={i} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
