import { ArrowRight } from "lucide-react";
import Card from "./UI/Card.jsx";
import { getBestsellers } from "../data/Data.js";

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS = getBestsellers();


// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product }) {
  return (
    <Card product={product} />
  );
}

// ─── Bestsellers section ──────────────────────────────────────────────────────

export default function Bestsellers() {
  return (
    <section className="container-box container-main flex flex-col items-center gap-6 py-5 sm:py-7  lg:gap-8 lg:py-10">

      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center w-100 md:gap-3">
        <h2 className="text-2xl font-bold capitalize leading-snug text-primary sm:text-3xl lg:text-4xl">
          <span className="outline text-white">Our</span> Bestsellers
        </h2>
        <a
          href="/collections/bestseller-nw"
          className=" group flex items-center justify-center rounded text-base text-black hover:underline underline-offset-2 transition-all duration-200 sm:text-lg lg:text-xl"
        >
          Explore More
          <ArrowRight />
        </a>
      </div>

      {/* Horizontal scroll row — hides scrollbar */}
      <div
        className="mx-auto flex max-w-full gap-4 overflow-x-auto md:gap-6 ps-4 md:ps-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {PRODUCTS.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>

    </section>
  );
}
