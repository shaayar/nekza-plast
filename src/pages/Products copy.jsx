import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/UI/Card.jsx";
import {
  getGeneralProducts,
  getProductsByCategory,
  getProductsByCollection,
} from "../data/Data.js";

function Products() {
  const { collectionSlug, categorySlug, slug } = useParams();
  const requestedSlug = collectionSlug || categorySlug || slug;

  const [sortBy, setSortBy] = useState("featured");

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

  const sortedProducts = useMemo(() => {
    const products = [...sampleProducts];

    switch (sortBy) {
      case "price-low":
        return products.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      case "price-high":
        return products.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      case "name":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return products;
    }
  }, [sampleProducts, sortBy]);

  return (
    <section className="section-shell container-box container-main min-h-screen bg-white px-4 py-6 sm:px-6 md:px-8 md:py-10 lg:px-10">
      {/* Header */}
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

      {/* Filter / Sort Bar */}
      <div className="sticky top-20 z-20 mb-8 flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white/80 p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700">
            {activeSlug ? activeSlug.replace(/-/g, " ") : "All"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm text-zinc-600">
            Sort by
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-800 outline-none focus:ring-2 focus:ring-zinc-300"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div>
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
              We couldn’t find products for this category or collection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
