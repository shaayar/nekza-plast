import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlidersHorizontal, X, Star, ShoppingCart } from "lucide-react";
import { ALL_PRODUCTS } from "../data/Data.js";
import { useCart } from "../hooks/useCart.jsx";
import { useToast } from "../hooks/useToast.jsx";
import BuyNowButton from "../components/BuyNowButton.jsx";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Discount", value: "discount-desc" },
];

function formatPrice(value) {
  return `₹${value}`;
}

function ProductCard({ product, itemInCart, onAddToCart, onOpenProduct }) {
  const [img, setImg] = useState(product.img);
  const productPath = product.href;

  return (
    <div
      className="group flex h-auto w-full cursor-pointer flex-col gap-2 overflow-hidden rounded-xl border border-gray-300 bg-white px-2 pb-2 transition-[box-shadow,border-color] duration-200 hover:shadow-md md:gap-3"
      onClick={() => onOpenProduct(productPath)}
      data-cursor="View"
    >
      <div className="flex flex-col overflow-hidden rounded-md bg-white-off md:rounded-lg">
        <div className="group relative flex aspect-350/400 w-full items-center justify-center overflow-hidden rounded bg-white-off transition-opacity duration-200">
          <img
            src={img}
            alt={product.title}
            onMouseEnter={() => setImg(product.hoverImage || product.img)}
            onMouseLeave={() => setImg(product.img)}
            width={250}
            height={300}
            loading="lazy"
            className="aspect-350/400 h-auto w-full rounded-md object-contain pt-8 mix-blend-darken opacity-100 transition-opacity duration-300 group-hover:opacity-0 md:rounded-lg"
          />
          {product.hoverImage ? (
            <img
              src={product.hoverImage}
              alt={`${product.title} hover`}
              width={250}
              height={300}
              loading="lazy"
              className="absolute inset-0 aspect-350/400 h-auto w-full rounded-md object-contain pt-8 mix-blend-darken opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:rounded-lg"
            />
          ) : null}
          {product.off ? <span className="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-semibold text-white">{product.off}% off</span> : null}
        </div>
      </div>

      <div className="flex items-center justify-start rounded transition-colors duration-200">
        <h3 className="line-clamp-2 text-wrap text-sm capitalize leading-snug sm:text-base lg:text-lg">
          {product.title}
        </h3>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-black md:gap-3">
        <span className="text-sm font-bold capitalize leading-snug sm:text-base lg:text-lg">
          {formatPrice(product.price)}
        </span>
        {product.mrp ? (
          <span className="text-xs capitalize leading-snug sm:text-sm lg:text-base">
            MRP <span className="line-through">{formatPrice(product.mrp)}</span>
          </span>
        ) : null}
        {product.off ? (
          <span className="inline-block rounded bg-white-off px-1 py-0.5 text-[10px] leading-snug md:text-xs">
            {product.off}% off
          </span>
        ) : null}
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 pe-1">
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className={`pressable inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors duration-200 ${
              itemInCart
                ? "border-green-600 bg-green-50 text-green-700"
                : "border-zinc-300 text-zinc-700 hover:border-primary hover:text-primary"
            }`}
            aria-label="Add to cart"
            title="Add to cart"
            data-cursor="Shop"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
          <BuyNowButton
            product={{
              id: product.id,
              title: product.title,
              price: product.price,
              mrp: product.mrp,
              image: product.img,
            }}
            quantity={1}
            stopPropagation
            className="pressable h-9 rounded-md bg-primary px-3 text-xs font-semibold text-white transition-opacity duration-200 hover:opacity-90 md:text-sm"
          >
            Buy Now
          </BuyNowButton>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const { showToast } = useToast();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeVendor, setActiveVendor] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = useMemo(() => {
    return ["all", ...new Set(ALL_PRODUCTS.map((p) => p.category).filter(Boolean))];
  }, []);

  const vendors = useMemo(() => {
    return ["all", ...new Set(ALL_PRODUCTS.map((p) => p.vendor).filter(Boolean))];
  }, []);

  const filteredProducts = useMemo(() => {
    const filtered = ALL_PRODUCTS.filter((product) => {
      const categoryMatch = activeCategory === "all" || product.category === activeCategory;
      const vendorMatch = activeVendor === "all" || product.vendor === activeVendor;
      return categoryMatch && vendorMatch;
    });

    const sorted = [...filtered];

    if (sortBy === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "discount-desc") {
      sorted.sort((a, b) => (b.off || 0) - (a.off || 0));
    }

    return sorted;
  }, [activeCategory, activeVendor, sortBy]);

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveVendor("all");
    setSortBy("featured");
  };

  const handleAddToCart = (product) => {
    const result = addToCart(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        mrp: product.mrp,
        image: product.img,
      },
      { quantity: 1 }
    );

    if (result?.wasLimited) {
      showToast({
        message: "You can add up to 10 units of a single product.",
        type: "warning",
      });
      return;
    }

    showToast({ message: `${product.title} added to cart.`, type: "success" });
  };

  const handleOpenProduct = (productPath) => {
    navigate(productPath);
  };

  return (
    <section className="section-shell min-h-screen bg-zinc-50 text-zinc-900">
      
      <div className="border-b border-zinc-200/80 bg-white px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="pressable inline-flex items-center gap-2 rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors duration-200 hover:border-primary/50 hover:bg-primary/5 lg:hidden"
              data-cursor="Open"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>

            {activeCategory !== "all" ? (
              <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs text-zinc-700 sm:text-sm">
                Category: {activeCategory}
              </span>
            ) : null}

            {activeVendor !== "all" ? (
              <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs text-zinc-700 sm:text-sm">
                Vendor: {activeVendor}
              </span>
            ) : null}
          </div>

          <div className="w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 outline-none transition hover:border-primary/50 focus:border-primary sm:w-auto"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  Sort by: {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex">
        <aside className="hidden w-[270px] shrink-0 border-r border-zinc-200 bg-white lg:block">
          <div className="sticky top-0 p-5">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-bold tracking-wide">FILTERS</h2>
              <button onClick={clearFilters} className="pressable text-xs font-semibold text-primary transition-opacity duration-200 hover:opacity-90" data-cursor="Open">
                CLEAR ALL
              </button>
            </div>

            <div className="border-t border-zinc-200 py-5 first:border-t-0 first:pt-0">
              <h3 className="mb-4 text-sm font-semibold">CATEGORY</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <label key={category} className="flex cursor-pointer items-center gap-3 text-sm text-zinc-700">
                    <input
                      type="radio"
                      checked={activeCategory === category}
                      onChange={() => setActiveCategory(category)}
                      className="h-4 w-4 border-zinc-300 text-primary focus:ring-primary"
                    />
                    <span className="capitalize">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-200 py-5">
              <h3 className="mb-4 text-sm font-semibold">VENDOR</h3>
              <div className="space-y-3">
                {vendors.map((vendor) => (
                  <label key={vendor} className="flex cursor-pointer items-center gap-3 text-sm text-zinc-700">
                    <input
                      type="radio"
                      checked={activeVendor === vendor}
                      onChange={() => setActiveVendor(vendor)}
                      className="h-4 w-4 border-zinc-300 text-primary focus:ring-primary"
                    />
                    <span>{vendor === "all" ? "All" : vendor}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-200 py-5">
              <h3 className="mb-4 text-sm font-semibold">QUALITY</h3>
              <div className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm text-zinc-700">
                <Star className="h-4 w-4 text-primary" />
                Curated by Nekza
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                itemInCart={isInCart(product.id)}
                onAddToCart={handleAddToCart}
                onOpenProduct={handleOpenProduct}
              />
            ))}
          </div>
        </main>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />

          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white shadow-xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-4">
              <h2 className="text-base font-semibold">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="pressable rounded-md p-2 transition-colors duration-200 hover:bg-primary/5" data-cursor="Open">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="border-b border-zinc-200 py-5">
                <h3 className="mb-4 text-sm font-semibold">CATEGORY</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category} className="flex cursor-pointer items-center gap-3 text-sm text-zinc-700">
                      <input
                        type="radio"
                        checked={activeCategory === category}
                        onChange={() => setActiveCategory(category)}
                        className="h-4 w-4 border-zinc-300 text-primary focus:ring-primary"
                      />
                      <span className="capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-zinc-200 py-5">
                <h3 className="mb-4 text-sm font-semibold">VENDOR</h3>
                <div className="space-y-3">
                  {vendors.map((vendor) => (
                    <label key={vendor} className="flex cursor-pointer items-center gap-3 text-sm text-zinc-700">
                      <input
                        type="radio"
                        checked={activeVendor === vendor}
                        onChange={() => setActiveVendor(vendor)}
                        className="h-4 w-4 border-zinc-300 text-primary focus:ring-primary"
                      />
                      <span>{vendor === "all" ? "All" : vendor}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={clearFilters}
                  className="pressable flex-1 rounded-md border border-zinc-300 px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-zinc-50"
                  data-cursor="Open"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="pressable flex-1 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                  data-cursor="Open"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
