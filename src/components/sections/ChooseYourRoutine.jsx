import { useState } from "react";
import { GraduationCap, Plane, Home, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ALL_PRODUCTS } from "../../data/Data.js";

const routines = [
    {
        id: "school",
        label: "School",
        icon: GraduationCap,
        eyebrow: "Built for School Days",
        title: "Packed for school mornings",
        description:
            "Lunch boxes, bottles, and everyday carry essentials designed for busy school routines.",
        chip: "Daily Carry",
    },
    {
        id: "travel",
        label: "Travel",
        icon: Plane,
        eyebrow: "Built for Movement",
        title: "Ready for life on the move",
        description:
            "Carry-friendly utility products made for travel, movement, and everyday convenience.",
        chip: "Travel Ready",
    },
    {
        id: "home",
        label: "Home",
        icon: Home,
        eyebrow: "Built for Home Utility",
        title: "Essentials for everyday home life",
        description:
            "Practical products designed to fit naturally into kitchen counters, storage, and everyday routines.",
        chip: "Kitchen Utility",
    },
    {
        id: "office",
        label: "Office",
        icon: Briefcase,
        eyebrow: "Built for Work Days",
        title: "Desk-to-day essentials",
        description:
            "Clean, practical utility for work setups, commutes, and everyday office life.",
        chip: "Work Friendly",
    },
];

const ROUTINE_COLLECTION_MAP = {
    school: ["kidzbee", "tiffin-boxes"],
    travel: ["insulated-water-bottle", "water-bottle"],
    home: ["kitchen", "casseroles", "water-jug"],
    office: ["insulated-water-bottle", "tiffin-boxes", "water-bottle"],
};

const getRoutineProducts = (routineId) => {
    const targetCollections = ROUTINE_COLLECTION_MAP[routineId] || [];
    const products = ALL_PRODUCTS.filter((p) =>
        p.collections?.some((c) => targetCollections.includes(c))
    );
    return products.slice(0, 6).map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        image: p.img,
        href: p.href,
        category: p.category,
    }));
};

const buildRoutineProductsPath = (routineId) => {
    const routineProducts = getRoutineProducts(routineId);
    const categories = [...new Set(routineProducts.map((product) => product.category).filter(Boolean))];
    const params = new URLSearchParams();
    if (categories.length > 0) {
        params.set("categories", categories.join(","));
    }
    const query = params.toString();
    return query ? `/products?${query}` : "/products";
};

const scrollToPageTop = () => {
    if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
};

export default function ChooseYourRoutine() {
    const [activeRoutine, setActiveRoutine] = useState(routines[0]);
    const activeRoutineProducts = getRoutineProducts(activeRoutine.id);

    return (
        <section className="section-shell overflow-hidden px-4 py-8 lg:py-16 md:px-10 bg-cream">

            <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-center">
                What's <span className="text-primary underline decoration-3 decoration-alt-yellow">Your Day</span> like?
            </h1>

            {/* Outer card */}
            <div className="rounded-2xl border border-cream-dark">

                {/* Inner grid — stacked on mobile, side-by-side on lg */}
                <div className="flex flex-col lg:grid lg:grid-cols-[0.8fr_1.1fr]">

                    {/* ── LEFT PANEL ── */}
                    <div className="flex flex-col gap-5 rounded-xl p-6 md:p-8 lg:rounded-r-none lg:rounded-l-3xl bg-white">

                        {/* Header */}
                        <div>
                            <h2 className="mt-3 text-2xl font-semibold leading-[1.15] tracking-tight text-ink md:text-3xl">
                                Utility looks different in every routine.
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-accent-color md:text-base">
                                Pick a setting and explore essentials designed for the rhythm of everyday life.
                            </p>
                        </div>

                        {/* Active context chip — bridges header to tabs */}
                        <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-cream-dark bg-cream px-3 py-1.5 text-sm font-semibold text-ink-soft">
                            {(() => { const Icon = activeRoutine.icon; return <Icon size={12} />; })()}
                            {activeRoutine.chip} · {activeRoutineProducts.length} products
                        </div>

                        {/* Mobile: horizontal scrollable pill tabs */}
                        <div className="flex gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] lg:hidden">
                            {routines.map((routine) => {
                                const Icon = routine.icon;
                                const isActive = activeRoutine.id === routine.id;
                                return (
                                    <button
                                        key={routine.id}
                                        onClick={() => setActiveRoutine(routine)}
                                        className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-md font-semibold transition-all duration-300 ${isActive
                                            ? "border-ink bg-ink text-white shadow-md"
                                            : "border-cream-dark bg-white text-ink-soft hover:border-zinc-300 hover:bg-cream"
                                            }`}
                                    >
                                        <Icon size={13} />
                                        {routine.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Desktop: 2×2 tab grid — pushes to bottom naturally */}
                        <div className="hidden grid-cols-2 gap-2.5 lg:grid lg:items-end">
                            {routines.map((routine) => {
                                const Icon = routine.icon;
                                const isActive = activeRoutine.id === routine.id;
                                return (
                                    <button
                                        key={routine.id}
                                        onClick={() => setActiveRoutine(routine)}
                                        className={`group flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${isActive
                                            ? "border-ink bg-ink shadow-lg"
                                            : "border-cream-dark bg-white hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm"
                                            }`}
                                    >
                                        <div
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${isActive
                                                ? "bg-white/10 text-white"
                                                : "bg-cream text-ink-soft group-hover:bg-cream-dark"
                                                }`}
                                        >
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <p className={`text-md font-semibold ${isActive ? "text-white" : "text-ink"}`}>
                                                {routine.label}
                                            </p>
                                            <p className={`mt-0.5 text-sm ${isActive ? "text-white/50" : "text-accent-color"}`}>
                                                {routine.chip}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── RIGHT PANEL ── */}
                    <div className="relative overflow-hidden rounded-3xl border-t border-cream-dark p-6 md:p-8 lg:rounded-l-none lg:rounded-r-3xl lg:border-t-0 lg:border-l bg-warm-bg">

                        {/* Very subtle top accent line */}
                        <div className="absolute inset-x-0 top-0 h-0.75 rounded-tr-3xl bg-primary-color lg:rounded-tl-none" />

                        <div key={activeRoutine.id} className="animate-routineFade">

                            {/* Eyebrow + title */}
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                                {activeRoutine.eyebrow}
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
                                {activeRoutine.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-accent-color md:text-base">
                                {activeRoutine.description}
                            </p>

                            {/* Count divider */}
                            <div className="mt-5 flex items-center gap-3">
                                <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-widest text-accent-color">
                                    {activeRoutineProducts.length} essentials
                                </span>
                                <div className="h-px flex-1 bg-cream-dark" />
                            </div>

                            {/* Product grid */}
                            <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-3">
                                {activeRoutineProducts.map((product, index) => (
                                    <Link
                                        key={product.id}
                                        to={product.href}
                                        onClick={scrollToPageTop}
                                        className="group relative rounded-2xl border border-cream-dark bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-4"
                                        data-cursor="View"
                                    >
                                        {/* Top pick — only on first card */}
                                        {index === 0 && (
                                            <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                                                Top Pick
                                            </span>
                                        )}

                                        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="mt-3">
                                            <h4 className="line-clamp-2 text-[13px] font-semibold leading-snug text-ink md:text-sm">
                                                {product.title}
                                            </h4>
                                            <div className="mt-2.5 flex items-center justify-between gap-1">
                                                <span className="text-sm font-bold text-ink md:text-base">
                                                    ₹{product.price}
                                                </span>
                                                <span className="inline-flex items-center gap-1 rounded-full border border-cream-dark bg-warm-bg px-2.5 py-1 text-[11px] font-semibold text-ink-soft transition-all duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                                                    View <ArrowRight size={10} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-cream-dark pt-5">
                                <Link
                                    to={buildRoutineProductsPath(activeRoutine.id)}
                                    onClick={scrollToPageTop}
                                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5"
                                    data-cursor="Shop"
                                >
                                    Explore {activeRoutine.label}
                                    <ArrowRight size={14} />
                                </Link>
                                <span className="text-xs text-accent">
                                    Free delivery above ₹499
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes routineFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-routineFade { animation: routineFade 0.4s ease-out; }
      `}</style>
        </section>
    );
}
