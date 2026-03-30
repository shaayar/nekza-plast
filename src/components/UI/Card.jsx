import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext.jsx";
import { useToast } from "../../contexts/ToastContext.jsx";
import { ShoppingBag } from "lucide-react";
import BuyNowButton from "../BuyNowButton.jsx";

export default function Card({ product, slug, badges = [] }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

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

    showToast({
      message: `${product.title} added to your cart.`,
      type: "success",
    });
  };

  const productPath = slug
    ? `/products/${slug}/${product.slug || product.title.toLowerCase().replace(/\s+/g, "-")}`
    : product.href;

  const productForCart = {
    id: product.id || product.title,
    title: product.title,
    price: product.price,
    mrp: product.mrp,
    image: product.img,
  };

  return (
    <div className="group relative flex h-full w-full min-w-0 flex-col gap-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      {badges.length > 0 && (
        <div className="pointer-events-none absolute left-3 top-3 z-30 flex flex-col gap-1">
          {badges
            .filter((badge) => badge?.text)
            .map((badge, idx) => (
              <span
                key={`${badge.text}-${idx}`}
                className={
                  badge.tone === "dark"
                    ? "rounded-full bg-black/80 px-2 py-0.5 text-[10px] font-semibold text-white"
                    : "rounded-full border border-primary/25 bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary shadow-sm"
                }
              >
                {badge.text}
              </span>
            ))}
        </div>
      )}

      {/* Glow */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-primary/10 opacity-60 blur-xl transition-opacity duration-300 group-hover:opacity-80" />

      {/* Image */}
      <div className="relative z-10 overflow-hidden rounded-xl bg-zinc-50">
        <Link
          to={productPath}
          className="relative flex aspect-4/5 w-full items-center justify-center overflow-hidden rounded-xl"
          data-cursor="View"
        >
          <img
            src={product.img}
            alt={product.title}
            width={250}
            height={300}
            loading="lazy"
            className="h-full w-full object-contain p-6 mix-blend-darken opacity-100 transition-opacity duration-300 group-hover:opacity-0"
          />

          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.title} hover`}
              width={250}
              height={300}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain p-6 mix-blend-darken opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </Link>
      </div>

      {/* Title */}
      <Link
        to={productPath}
        className="relative z-10 rounded transition-colors duration-200"
        data-cursor="View"
      >
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-zinc-900 sm:text-base lg:text-lg">
          {product.title}
        </h3>
      </Link>

      {/* Price */}
      <div className="relative z-10 flex flex-wrap items-center gap-2 text-black md:gap-3">
        <span className="text-sm font-bold leading-snug transition-colors group-hover:text-primary sm:text-base lg:text-xl">
          {product.price ? `₹${product.price}` : "₹"}
        </span>

        <span className="text-xs leading-snug text-zinc-600 sm:text-sm">
          MRP{" "}
          <span className="line-through">
            {product.mrp ? `₹${product.mrp}` : "₹"}
          </span>
        </span>

        {product.off && (
          <span className="inline-block rounded bg-primary px-1.5 py-0.5 text-[10px] leading-snug text-white md:text-xs">
            {product.off}% off
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-auto flex items-center justify-between pt-1">
        <Link
          to={productPath}
          className="text-sm font-medium text-gray-800 transition-colors group-hover:text-primary sm:text-base"
          data-cursor="View"
        >
          View Details
        </Link>

        <button
          type="button"
          aria-label="Add to cart"
          onClick={handleAddToCart}
          className="pressable inline-flex items-center justify-center rounded outline-none transition-colors duration-200"
          data-cursor="Shop"
        >
          <span className="relative flex size-7 items-center justify-center">
            <ShoppingBag size={20} />
          </span>
        </button>
      </div>
      <BuyNowButton
        product={productForCart}
        quantity={1}
        stopPropagation
        className="pressable relative z-10 mt-1 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
      >
        Buy Now
      </BuyNowButton>
    </div>
  );
}
