import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart.jsx";
import { useToast } from "../../hooks/useToast.jsx";
import { ShoppingBag } from "lucide-react";
import BuyNowButton from "../BuyNowButton.jsx";

export default function Card({ product, slug, badges = [] }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const result = addToCart({
      id: product.id || product.title,
      title: product.title,
      price: product.price,
      mrp: product.mrp,
      image: product.img,
    });

    if (result?.wasLimited) {
      showToast({
        message: "You can add up to 10 units of a single product.",
        type: "warning",
      });
      return;
    }

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
    <div className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
      {/* Badges */}
      {badges.length > 0 && (
        <div className="pointer-events-none absolute left-3 top-3 z-30 flex flex-col gap-1">
          {badges
            .filter((badge) => badge?.text)
            .map((badge, idx) => (
              <span
                key={`${badge.text}-${idx}`}
                className={
                  badge.tone === "dark"
                    ? "rounded-full bg-zinc-950/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white"
                    : "rounded-full border border-zinc-200 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-700 shadow-sm"
                }
              >
                {badge.text}
              </span>
            ))}
        </div>
      )}

      {/* Glow */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-38 w-38 rounded-full group-hover:bg-primary/20 blur-xl transition-opacity duration-300 group-hover:opacity-80" />

      {/* Image */}
      <div className="relative z-10 overflow-hidden rounded-t-[1.5rem] bg-zinc-50">
        <Link
          to={productPath}
          className="relative flex aspect-[4/4.8] w-full items-center justify-center overflow-hidden px-3 py-4 sm:px-4 sm:py-5"
          data-cursor="View"
        >
          <img
            src={product.img}
            alt={product.title}
            width={250}
            height={300}
            loading="lazy"
            className="h-full w-full object-contain mix-blend-darken transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-0"
          />

          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.title} hover`}
              width={250}
              height={300}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain px-3 py-4 sm:px-4 sm:py-5 mix-blend-darken opacity-0 transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
            />
          )}
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col space-y-3 p-3 sm:p-4">
        {/* Title */}
        <Link
          to={productPath}
          className="rounded transition-colors duration-200"
          data-cursor="View"
        >
          <h3 className="line-clamp-2 text-xl md:text-xl font-semibold leading-5">
            {product.title}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-lg md:text-xl font-semibold text-ink sm:text-xl">
            {product.price ? `₹${product.price}` : "Price Unavailable"}
          </span>

          {product.mrp && (
            <span className="text-sm text-zinc-400 line-through">
              ₹{product.mrp}
            </span>
          )}

          {product.off && (
            <span className="rounded-full bg-ink-soft px-2 py-0.5 text-[11px] font-medium text-cream">
              {product.off}% off
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center gap-2 pt-1">
          <BuyNowButton
            product={productForCart}
            quantity={1}
            stopPropagation
            className="pressable relative z-10 flex-1 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            Buy Now
          </BuyNowButton>

          <button
            type="button"
            aria-label="Add to cart"
            onClick={handleAddToCart}
            className="pressable inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 transition-colors duration-200 hover:border-zinc-300 hover:bg-zinc-50"
            data-cursor="Shop"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
