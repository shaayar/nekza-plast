import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Check, SlidersHorizontal } from "lucide-react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Card from "../components/UI/Card.jsx";
import {
  ALL_PRODUCTS,
  getProductsByCategory,
  getProductsByCollection,
  PRODUCT_LISTING_TITLE_MAP,
} from "../data/Data.js";

const formatLabel = (value = "") =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");

function FilterSidebar({
  categoryOptions,
  activeCategories,
  toggleCategory,
  clearCategories,
  tagOptions,
  activeTags,
  toggleTag,
  clearTags,
  priceRange,
  setPriceRange,
  maxPrice,
  sortBy,
  setSortBy,
}) {
  return (
    <aside className="w-full md:w-60 lg:w-64 shrink-0">
      <div className="mb-4 border-b border-zinc-100 pb-4">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-900">
          Sort
        </h3>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none focus:ring-2 focus:ring-zinc-300"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A-Z</option>
        </select>
      </div>

      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
            Category
          </h3>
          <button
            onClick={clearCategories}
            className="text-xs text-zinc-400 transition-colors hover:text-zinc-600"
            data-cursor="Open"
          >
            Clear
          </button>
        </div>

        {categoryOptions.length > 0 ? (
          <div className="space-y-2">
            {categoryOptions.map(({ category, count }) => (
              <label
                key={category}
                className="group flex cursor-pointer items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => toggleCategory(category)}
                    className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${activeCategories.includes(category)
                      ? "border-zinc-900 bg-zinc-900"
                      : "border-zinc-300 group-hover:border-zinc-500"
                      }`}
                  >
                    {activeCategories.includes(category) && (
                      <Check size={10} strokeWidth={2.5} className="text-white" />
                    )}
                  </div>

                  <span
                    onClick={() => toggleCategory(category)}
                    className="text-sm text-zinc-700 transition-colors group-hover:text-zinc-900"
                  >
                    {formatLabel(category)}
                  </span>
                </div>
                <span className="text-xs text-zinc-400">{count}</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="text-xs text-zinc-400">No categories available.</p>
        )}
      </div>

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
                    className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${activeTags.includes(tag)
                        ? "border-zinc-900 bg-zinc-900"
                        : "border-zinc-300 group-hover:border-zinc-500"
                      }`}
                  >
                    {activeTags.includes(tag) && (
                      <Check size={10} strokeWidth={2.5} className="text-white" />
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
        {/* <p className="mb-3 text-xs text-zinc-400">
          Highest priced item: ₹{maxPrice.toLocaleString()}
        </p> */}

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
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const requestedSlug = collectionSlug || categorySlug || slug;
  const requestedCategoriesParam = searchParams.get("categories") || "";

  const { sampleProducts, hasDirectMatch } = useMemo(() => {
    if (collectionSlug) {
      const collectionProducts = getProductsByCollection(collectionSlug);
      return {
        sampleProducts:
          collectionProducts.length > 0 ? collectionProducts : ALL_PRODUCTS,
        hasDirectMatch: collectionProducts.length > 0,
      };
    }

    if (categorySlug) {
      const categoryProducts = getProductsByCategory(categorySlug);
      return {
        sampleProducts:
          categoryProducts.length > 0 ? categoryProducts : ALL_PRODUCTS,
        hasDirectMatch: categoryProducts.length > 0,
      };
    }

    return {
      sampleProducts: ALL_PRODUCTS,
      hasDirectMatch: true,
    };
  }, [collectionSlug, categorySlug]);

  const maxPrice = useMemo(() => {
    const numericPrices = sampleProducts
      .map((product) => product.price)
      .filter((price) => typeof price === "number");

    return numericPrices.length > 0 ? Math.max(...numericPrices) : 0;
  }, [sampleProducts]);

  const requestedCategories = useMemo(() => {
    return requestedCategoriesParam
      .split(",")
      .map((category) => category.trim())
      .filter(Boolean);
  }, [requestedCategoriesParam]);

  const [sortBy, setSortBy] = useState("featured");
  const [activeCategories, setActiveCategories] = useState(requestedCategories);
  const [activeTags, setActiveTags] = useState([]);
  const [priceRange, setPriceRange] = useState([0, maxPrice]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setActiveCategories(requestedCategories);
  }, [requestedCategories]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }, [location.pathname, location.search, location.hash]);

  const categoryOptions = useMemo(() => {
    const counts = new Map();

    sampleProducts.forEach((product) => {
      if (!product?.category) return;
      counts.set(product.category, (counts.get(product.category) || 0) + 1);
    });

    return [...counts.entries()]
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);
  }, [sampleProducts]);

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

  // const hasRequestedContext = Boolean(requestedSlug);

  const activeSlug = hasDirectMatch ? requestedSlug : null;
  const headingSource = activeSlug || requestedSlug || "";
  const headingText = PRODUCT_LISTING_TITLE_MAP[headingSource]
    || (activeSlug ? activeSlug.replace(/-/g, " ") : "All Products");
  const [firstHeadingWord, ...restHeadingWords] = headingText.trim().split(/\s+/);
  const remainingHeadingText = restHeadingWords.join(" ");

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const categoryMatch =
        activeCategories.length === 0 ||
        activeCategories.includes(product.category);

      const tagMatch =
        activeTags.length === 0 ||
        activeTags.some((tag) => (Array.isArray(product.tags) ? product.tags.includes(tag) : false));

      const price = product.price;
      const priceMatch =
        typeof price !== "number" || (price >= priceRange[0] && price <= priceRange[1]);

      return categoryMatch && tagMatch && priceMatch;
    });
  }, [sampleProducts, activeCategories, activeTags, priceRange]);

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

  const toggleCategory = (category) => {
    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const clearCategories = () => setActiveCategories([]);
  const clearTags = () => setActiveTags([]);

  return (
    <section className="section-shell container-box container-main relative min-h-screen overflow-hidden bg-white px-4 py-8 sm:px-6 md:px-8 md:py-12 lg:px-10">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-104 w-104 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-size-[42px_42px] opacity-[0.16]" />
      </div>

      <div className="relative z-10">
        {/* Hero Header */}
        <div className="mb-10 rounded-4xl border border-zinc-200 bg-white/75 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-primary">
              Nekza Collection
            </span>

            {(activeCategories.length > 0 || activeTags.length > 0) && (
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
                {activeCategories.length + activeTags.length} Active Filter{activeCategories.length + activeTags.length > 1 ? "s" : ""}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold capitalize tracking-tight text-black lg:text-5xl">
                <span>{firstHeadingWord}</span>
                {remainingHeadingText ? " " : ""}
                {remainingHeadingText ? (
                  <span className="focus text-primary underline decoration-4 decoration-alt-yellow">
                    {remainingHeadingText}
                  </span>
                ) : null}
              </h1>


              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
                Explore durable everyday essentials designed for home, school,
                travel, and utility. Built for repeated use, made to feel effortless.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700 shadow-sm">
                {sortedProducts.length} Products
              </div>

              <button
                onClick={() => setSidebarOpen((open) => !open)}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 md:hidden"
                data-cursor="Open"
              >
                <SlidersHorizontal size={16} />
                Filters
                {(activeCategories.length > 0 || activeTags.length > 0) && (
                  <span className="rounded-full bg-zinc-900 px-1.5 py-0.5 text-xs leading-none text-white">
                    {activeCategories.length + activeTags.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex items-start gap-8">
          <>
            {sidebarOpen && (
              <div
                className="fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px] md:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            <div
              className={`
            fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto bg-white px-5 py-6 shadow-xl transition-transform duration-300
            md:sticky md:top-28 md:z-auto md:h-fit md:w-64 md:shrink-0 md:translate-x-0 md:overflow-visible md:rounded-4xl md:border md:border-zinc-200 md:bg-white/75 md:px-5 md:py-5 md:shadow-[0_18px_60px_rgba(0,0,0,0.04)] md:backdrop-blur
            lg:w-72
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

              <div className="mb-5 hidden md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Refine Selection
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Filter by purpose, style and price.
                </p>
              </div>

              <FilterSidebar
                categoryOptions={categoryOptions}
                activeCategories={activeCategories}
                toggleCategory={toggleCategory}
                clearCategories={clearCategories}
                tagOptions={tagOptions}
                activeTags={activeTags}
                toggleTag={toggleTag}
                clearTags={clearTags}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                maxPrice={maxPrice}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
          </>

          {/* Product Gallery */}
          <div className="min-w-0 flex-1">
            {sortedProducts.length > 0 ? (
              <>
                {/* Active tags row */}
                {(activeCategories.length > 0 || activeTags.length > 0) && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {activeCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1.5 text-xs font-medium capitalize text-zinc-700 transition hover:bg-zinc-900 hover:text-white"
                        data-cursor="Open"
                      >
                        {category.replace(/-/g, " ")} ×
                      </button>
                    ))}
                    {activeTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium capitalize text-primary transition hover:bg-primary hover:text-white"
                        data-cursor="Open"
                      >
                        {tag.replace(/-/g, " ")} ×
                      </button>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-2 items-stretch gap-5 xl:grid-cols-3 2xl:grid-cols-4">
                  {sortedProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="h-full transition-transform duration-500"
                    >
                      <Card product={product} slug={activeSlug} data-index={index} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-4xl border border-dashed border-zinc-300 bg-white/80 px-6 py-20 text-center shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  No Match Found
                </p>
                <h1 className="text-3xl font-semibold text-zinc-900">
                  Nothing fits this filter set
                </h1>
                <p className="mx-auto mt-3 max-w-md text-zinc-600">
                  Try changing tags, adjusting price range, or clearing filters to
                  reveal more products.
                </p>

                <button
                  onClick={clearTags}
                  className="mt-6 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
                  data-cursor="Open"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
