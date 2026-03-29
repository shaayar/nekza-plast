import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/UI/Card.jsx";
import {
  getGeneralProducts,
  getProductsByCategory,
  getProductsByCollection,
} from "../data/Data.js";

const formatLabel = (value = "") =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");

function FilterSidebar({
  tagOptions,
  activeTags,
  toggleTag,
  clearTags,
  priceRange,
  setPriceRange,
  maxPrice,
}) {
  return (
    <aside className="w-full md:w-60 lg:w-64 shrink-0">
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
            Tags
          </h3>
          <button
            onClick={clearTags}
            className="text-xs text-zinc-400 transition-colors hover:text-zinc-600"
            data-cursor="Open"
          >
            Clear
          </button>
        </div>

        {tagOptions.length > 0 ? (
          <div className="space-y-2">
            {tagOptions.map(({ tag, count }) => (
              <label
                key={tag}
                className="group flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => toggleTag(tag)}
                    className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                      activeTags.includes(tag)
                        ? "border-zinc-900 bg-zinc-900"
                        : "border-zinc-300 group-hover:border-zinc-500"
                    }`}
                  >
                    {activeTags.includes(tag) && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4l2.5 2.5L9 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <span
                    onClick={() => toggleTag(tag)}
                    className="text-sm text-zinc-700 transition-colors group-hover:text-zinc-900"
                  >
                    {formatLabel(tag)}
                  </span>
                </div>
                <span className="text-xs text-zinc-400">{count}</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="text-xs text-zinc-400">No tags available.</p>
        )}
      </div>

      <div className="border-t border-zinc-100 py-4">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-900">
          Price
        </h3>
        <p className="mb-3 text-xs text-zinc-400">
          Highest priced item: ₹{maxPrice.toLocaleString()}
        </p>

        <input
          type="range"
          min={0}
          max={maxPrice}
          step={50}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="h-1 w-full cursor-pointer accent-zinc-900"
        />

        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-700">
            ₹ {priceRange[0]}
          </div>
          <span className="text-zinc-300">—</span>
          <div className="flex-1 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-700">
            ₹ {priceRange[1].toLocaleString()}
          </div>
        </div>
      </div>
    </aside>
  );
}

function Products() {
  const { collectionSlug, categorySlug, slug } = useParams();
  const requestedSlug = collectionSlug || categorySlug || slug;

  const sampleProducts = useMemo(() => {
    if (collectionSlug) {
      const collectionProducts = getProductsByCollection(collectionSlug);
      return collectionProducts.length > 0
        ? collectionProducts
        : getGeneralProducts();
    }

    if (categorySlug) {
      const categoryProducts = getProductsByCategory(categorySlug);
      return categoryProducts.length > 0 ? categoryProducts : getGeneralProducts();
    }

    return getGeneralProducts();
  }, [collectionSlug, categorySlug]);

  const maxPrice = useMemo(() => {
    const numericPrices = sampleProducts
      .map((product) => product.price)
      .filter((price) => typeof price === "number");

    return numericPrices.length > 0 ? Math.max(...numericPrices) : 0;
  }, [sampleProducts]);

  const [sortBy, setSortBy] = useState("featured");
  const [activeTags, setActiveTags] = useState([]);
  const [priceRange, setPriceRange] = useState([0, maxPrice]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tagOptions = useMemo(() => {
    const counts = new Map();

    sampleProducts.forEach((product) => {
      const tags = Array.isArray(product.tags) ? product.tags : [];
      tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1));
    });

    return [...counts.entries()]
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  }, [sampleProducts]);

  const hasRequestedContext = Boolean(requestedSlug);
  const hasDirectMatch = hasRequestedContext
    ? sampleProducts.some(
        (product) =>
          product.category === requestedSlug ||
          (Array.isArray(product.collections) &&
            product.collections.includes(requestedSlug))
      )
    : true;

  const activeSlug = hasDirectMatch ? requestedSlug : null;
  const headingText = activeSlug ? activeSlug.replace(/-/g, " ") : "All Products";

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const tagMatch =
        activeTags.length === 0 ||
        activeTags.some((tag) => (Array.isArray(product.tags) ? product.tags.includes(tag) : false));

      const price = product.price;
      const priceMatch =
        typeof price !== "number" || (price >= priceRange[0] && price <= priceRange[1]);

      return tagMatch && priceMatch;
    });
  }, [sampleProducts, activeTags, priceRange]);

  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];

    switch (sortBy) {
      case "price-low":
        return products.sort((a, b) => (a.price ?? Number.POSITIVE_INFINITY) - (b.price ?? Number.POSITIVE_INFINITY));
      case "price-high":
        return products.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      case "name":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return products;
    }
  }, [filteredProducts, sortBy]);

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  const clearTags = () => setActiveTags([]);

  return (
    <section className="section-shell container-box container-main min-h-screen bg-white px-4 py-6 sm:px-6 md:px-8 md:py-10 lg:px-10">
      <div className="mb-8">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent">
          Nekza Collection
        </p>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold capitalize tracking-tight text-primary md:text-5xl underline decoration-2 decoration-alt-yellow">
              {headingText}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600 md:text-base">
              Explore durable everyday essentials designed for home, school,
              travel, and utility.
            </p>
          </div>

          <div className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700">
            {sortedProducts.length} Products
          </div>
        </div>
      </div>

      <div className="sticky top-20 z-20 mb-6 flex items-center justify-between rounded-2xl border border-zinc-200 bg-white/80 p-3 backdrop-blur md:p-4">
        <button
          onClick={() => setSidebarOpen((open) => !open)}
          className="flex items-center gap-2 rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50 md:hidden"
          data-cursor="Open"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 4h12M4 8h8M6 12h4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Filters
          {activeTags.length > 0 && (
            <span className="rounded-full bg-zinc-900 px-1.5 py-0.5 text-xs leading-none text-white">
              {activeTags.length}
            </span>
          )}
        </button>

        <div className="hidden flex-wrap gap-2 md:flex">
          {activeTags.length === 0 ? (
            <span className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-500">
              {activeSlug ? activeSlug.replace(/-/g, " ") : "All"}
            </span>
          ) : (
            activeTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className="flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-700"
                data-cursor="Open"
              >
                {formatLabel(tag)}
                <span className="opacity-70">×</span>
              </button>
            ))
          )}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <label htmlFor="sort" className="hidden text-sm text-zinc-600 sm:block">
            Sort by
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none focus:ring-2 focus:ring-zinc-300"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>
      </div>

      <div className="flex items-start gap-8">
        <>
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/30 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <div
            className={`
              fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto bg-white px-5 py-6 shadow-xl transition-transform duration-300
              md:static md:z-auto md:w-60 md:shrink-0 md:translate-x-0 md:overflow-visible md:bg-transparent md:px-0 md:py-0 md:shadow-none lg:w-64
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div className="mb-4 flex items-center justify-between md:hidden">
              <span className="text-sm font-semibold text-zinc-900">Filters</span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-lg leading-none text-zinc-500 hover:text-zinc-800"
                data-cursor="Open"
              >
                ×
              </button>
            </div>

            <FilterSidebar
              tagOptions={tagOptions}
              activeTags={activeTags}
              toggleTag={toggleTag}
              clearTags={clearTags}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              maxPrice={maxPrice}
            />
          </div>
        </>

        <div className="min-w-0 flex-1">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
              {sortedProducts.map((product) => (
                <Card key={product.id} product={product} slug={activeSlug} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-zinc-300 px-6 py-20 text-center">
              <h2 className="text-2xl font-semibold text-zinc-900">
                No products found
              </h2>
              <p className="mt-2 text-zinc-600">
                Try changing tags or price range to see more products.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
