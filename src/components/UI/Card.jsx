import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext.jsx";
import { useToast } from "../../contexts/ToastContext.jsx";
import { ShoppingBag } from 'lucide-react';

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

    const productPath = slug ? `/products/${slug}/${product.slug || product.title.toLowerCase().replace(/\s+/g, '-')}` : product.href;

    return (
            <div className="group relative flex h-full w-[50vw] max-w-95 shrink-0 flex-col gap-2 overflow-hidden rounded-xl border border-gray-300 px-2 pb-2 transition-colors duration-300 hover:border-primary/30 md:w-[50vw] md:gap-3 lg:w-[25vw]">
                {badges.length > 0 && (
                    <div className="pointer-events-none absolute left-3 top-3 z-30 flex flex-col gap-1">
                        {badges.filter((badge) => badge?.text).map((badge, idx) => (
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
                {/* Hover Gradient Left */}
                {/* <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100 group-hover:bg-primary/20" /> */}
                {/* Hover Gradient Right */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-30 w-30 rounded-full bg-primary/10 opacity-60 blur-xl transition-opacity duration-300 group-hover:opacity-80" />

                {/* ── Image card ── */}
                <div className="relative z-10 flex flex-col overflow-hidden rounded-md bg-white-off md:rounded-lg">

                    {/* Image + personalize badge */}
                    <Link
                        to={productPath}
                        className="group relative flex aspect-350/400 w-full items-center justify-center overflow-hidden rounded bg-white-off transition-opacity duration-200"
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

                    </Link>
                </div>

                {/* ── Title ── */}
                <Link to={productPath} className="relative z-10 flex items-center justify-start rounded transition-colors duration-200">
                    <h3 className="font-aspekta line-clamp-2 text-wrap text-sm capitalize leading-snug sm:text-base lg:text-xl font-bold">
                        {product.title}
                    </h3>
                </Link>

                {/* ── Price ── */}
                <div className="relative z-10 flex flex-wrap items-center gap-2 text-black md:gap-3">
                    <span className="text-sm font-bold capitalize leading-snug sm:text-base lg:text-xl group-hover:text-primary transition-colors">
                        ₹{product.price}
                    </span>
                    <span className="text-xs capitalize leading-snug sm:text-sm">
                        MRP <span className="line-through">₹{product.mrp}</span>
                    </span>
                    {product.off && (
                        <span className="text-white bg-primary inline-block rounded bg-white-off px-1 py-0.5 text-[10px] leading-snug md:text-xs">
                            {product.off}% off
                        </span>
                    )}
                </div>

                {/* ── Footer row ── */}
                <div className="relative z-10 mt-auto flex h-8 items-center justify-between pe-2 md:h-10">
                    <Link
                        to={productPath}
                        className="flex items-center justify-between w-full font-medium text-gray-800 group-hover:text-red-600 transition-colors"
                    >
                        <span>View Details</span>

                        <button
                            type="button"
                            aria-label="Add to cart"
                            onClick={handleAddToCart}
                            className="pressable inline-flex items-center justify-center rounded outline-none transition-colors duration-200"
                        >
                            <span className="flex size-7 items-center justify-center relative">
                                <ShoppingBag />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
    );
}
