import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";

// ─── Icons ────────────────────────────────────────────────────────────────────

const CartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8 md:size-10">
    <g clipPath="url(#cart-body)">
      <path d="M17.297 23.423c2.782 0 5.045-2.263 5.045-5.045v-3.603h-1.441v3.603c0 1.987-1.617 3.603-3.604 3.603-1.986 0-3.603-1.616-3.603-3.603v-3.603h-1.441v3.603c0 2.782 2.263 5.045 5.044 5.045z" fill="#0E0303" />
      <path d="M2.883 34.234c0 1.586 1.297 2.883 2.883 2.883H28.83c1.585 0 2.882-1.297 2.882-2.883V8.288H2.883v25.946zm1.441-24.504H30.27v24.504c0 .795-.646 1.441-1.441 1.441H5.766c-.795 0-1.441-.646-1.441-1.441V9.73z" fill="#0E0303" />
    </g>
    <circle cx="31.351" cy="8.649" r="8.649" fill="#DD1E24" />
    <g clipPath="url(#cart-plus)">
      <path d="M31.832 4.805h-.961v3.363h-3.363v.961h3.363v3.363h.96v-3.363h3.364v-.961h-3.363V4.805z" fill="white" />
    </g>
    <defs>
      <clipPath id="cart-body"><rect width="34.595" height="34.595" fill="white" transform="translate(0 5.405)" /></clipPath>
      <clipPath id="cart-plus"><rect width="11.531" height="11.531" fill="white" transform="translate(25.586 2.883)" /></clipPath>
    </defs>
  </svg>
);

const ExploreArrow = () => (
  <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="0.2" stroke="currentColor" className="ml-1.5 size-4 transition group-hover:translate-x-1 md:size-5">
    <path d="M0.5 9.5H13.793L6.293 17 7 17.707 15.707 9 7 .293 6.293 1 13.793 8.5H0.5V9.5Z" fill="currentColor" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    title: "Duro Kent Thermosteel Flask",
    href: "/products/duro-kent-flask-nw",
    price: 765,
    mrp: 949,
    off: 19,
    img: `/images/p-bottle-1.webp`,
    hoverImage: `/images/p-bottle-2.webp`,
  },
  {
    title: "Puro Steel-X Neo 900 Insulated Water Bottle, 720ml",
    href: "/products/puro-steel-x-neo-900-nw",
    price: 329,
    mrp: 528,
    off: 38,
    img: `/images/p2-bottle-3.webp`,
    hoverImage: `/images/p2-bottle-1.webp`,
  },
  {
    title: "Nomad Vacuum Insulated Travel Mug",
    href: "/products/nomad-travel-flask-nw",
    price: 1099,
    mrp: 1599,
    off: 31,
    img: `/images/p2-bottle-1.webp`,
    hoverImage: `/images/p2-bottle-2.webp`,
  },
  {
    title: "Era 3D Design Insulated Kids Water Bottle, 400ml",
    href: "/products/era-kids-water-bottle-kidzbee-nw",
    price: 329,
    mrp: 479,
    off: 31,
    img: `/images/p2-bottle-2.webp`,
    hoverImage: `/images/p2-bottle-3.webp`,
  },
];


// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id || product.title,
      title: product.title,
      price: product.price,
      mrp: product.mrp,
      image: product.img,
    });
  };

  return (
    <div className="flex h-auto w-[50vw] max-w-[380px] shrink-0 flex-col gap-2 overflow-hidden border border-gray-300 rounded-xl px-2 pb-2 md:w-[50vw] md:gap-3 lg:w-[25vw]">

      {/* ── Image card ── */}
      <div className="flex flex-col overflow-hidden rounded-md bg-white-off md:rounded-lg">

        {/* Image + personalize badge */}
        <a
          href={product.href}
          className="group relative flex aspect-350/400 w-full items-center justify-center overflow-hidden rounded bg-white-off transition-all duration-200"
        >
          <img
            src={product.img}
            alt={product.title}
            width={250}
            height={300}
            loading="lazy"
            className="aspect-350/400 h-auto w-full rounded-md object-contain pt-8 mix-blend-darken opacity-100 transition-opacity duration-300 group-hover:opacity-0 md:rounded-lg"
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.title} hover`}
              width={250}
              height={300}
              loading="lazy"
              className="absolute inset-0 aspect-350/400 h-auto w-full rounded-md object-contain pt-8 mix-blend-darken opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:rounded-lg"
            />
          )}

        </a>
      </div>

      {/* ── Title ── */}
      <a href={product.href} className=" flex items-center rounded transition-all duration-200 justify-start">
        <h3 className="font-aspekta line-clamp-2 text-wrap text-sm capitalize leading-snug sm:text-base lg:text-lg">
          {product.title}
        </h3>
      </a>

      {/* ── Price ── */}
      <div className="flex flex-wrap items-center gap-2 text-black md:gap-3">
        <span className=" text-sm font-bold capitalize leading-snug sm:text-base lg:text-lg">
          ₹{product.price}
        </span>
        <span className=" text-xs capitalize leading-snug sm:text-sm lg:text-base">
          MRP <span className="line-through">₹{product.mrp}</span>
        </span>
        {product.off && (
          <span className="font-aspekta inline-block rounded bg-white-off px-1 py-0.5 text-[10px] leading-snug md:text-xs">
            {product.off}% off
          </span>
        )}
      </div>

      {/* ── Footer row ── */}
      <div className="mt-auto flex h-8 items-center justify-between md:h-10 pe-2">
        <Link
          to={product.href}
          className="flex items-center justify-between w-full font-medium text-gray-800 hover:text-red-600 transition-colors"
        >
          <span>View Details</span>

          <button
            type="button"
            aria-label="Add to cart"
            onClick={handleAddToCart}
            className="inline-flex items-center justify-center rounded outline-none transition-all duration-200"
          >
            <span className="flex size-7 items-center justify-center relative">
              <CartIcon />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

// ─── Bestsellers section ──────────────────────────────────────────────────────

export default function PopularProducts() {
  return (
    <section className="container-box container-main flex flex-col items-center gap-6 py-5 sm:py-7  lg:gap-8 lg:py-10">

      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center md:gap-3">
        <h2 className="text-2xl font-bold capitalize leading-snug text-primary sm:text-3xl lg:text-4xl">
          Our Popular Products
        </h2>
        <a
          href="/collections/bestseller-nw"
          className=" group flex items-center justify-center rounded text-base text-black hover:underline underline-offset-2 transition-all duration-200 sm:text-lg lg:text-xl"
        >
          Explore More
          <ExploreArrow />
        </a>
      </div>

      {/* Horizontal scroll row — hides scrollbar */}
      <div
        className="mx-auto flex max-w-full gap-4 overflow-x-auto md:gap-6 ps-4 md:ps-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {PRODUCTS.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>

    </section>
  );
}
