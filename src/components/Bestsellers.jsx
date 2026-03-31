
import { useMemo, useState } from "react";
import Card from "./UI/Card.jsx";
import { getBestsellers, DISCOVERY_CHIPS } from "../data/Data.js";
import { ArrowRight } from "lucide-react";


// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS = getBestsellers();

const getProductMood = (title = "") => {
  const lowered = title.toLowerCase();
  if (lowered.includes("kids")) return "Kids Pick";
  if (lowered.includes("travel") || lowered.includes("mug")) return "Commute Hero";
  if (lowered.includes("flask")) return "Hot Seller";
  return "Daily Essential";
};

const getSocialProof = (index) => {
  const labels = ["23 bought today", "Low stock", "Back in demand", "Fast moving"];
  return labels[index % labels.length];
};

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product, badges }) {
  return (
    <Card product={product} badges={badges} />
  );
}

// ─── Bestsellers section ──────────────────────────────────────────────────────

export default function Bestsellers() {
  const [activeChip, setActiveChip] = useState("for-you");

  const visibleProducts = useMemo(() => {
    const scored = PRODUCTS.slice().map((item) => {
      const title = item.title.toLowerCase();
      const intentScore = title.includes("flask") || title.includes("bottle") ? 2 : 1;
      return { ...item, __intentScore: intentScore };
    });

    if (activeChip === "under-500") {
      return scored.filter((item) => Number(item.price) <= 500);
    }

    if (activeChip === "trending") {
      return scored.sort((a, b) => (b.off || 0) - (a.off || 0));
    }

    return scored.sort((a, b) => {
      if (b.__intentScore !== a.__intentScore) return b.__intentScore - a.__intentScore;
      return (b.off || 0) - (a.off || 0);
    });
  }, [activeChip]);

  return (
    <section className="section-shell flex flex-col items-center gap-6 py-5 sm:py-7 lg:py-10 lg:gap-8">

      {/* Header */}
      <div className="flex w-full flex-col items-center gap-2 text-center md:gap-3">
        <h2 className="font-bold text-black text-3xl lg:text-5xl">
          Our <span className="focus text-primary underline decoration-4 decoration-alt-yellow">Bestseller Products</span>
        </h2>
        <a
          href="/collections/bestseller"
          className="pressable group flex items-center justify-center rounded text-base text-black hover:underline underline-offset-2 transition-colors duration-200 sm:text-lg lg:text-xl"
          data-cursor="Shop"
        >
          Explore More
          <ArrowRight />
        </a>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          {DISCOVERY_CHIPS.bestsellers.map((chip) => (
            <button
              key={chip.id}
              type="button"
              onClick={() => setActiveChip(chip.id)}
              className={`pressable rounded-full border px-3 py-1 text-xs font-semibold transition sm:text-sm ${activeChip === chip.id
                  ? "border-primary bg-primary text-white"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-primary/50 hover:text-primary"
                }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal scroll row — hides scrollbar */}
      <div
        className="mx-auto flex max-w-full items-stretch gap-4 overflow-x-auto md:gap-6 ps-4 md:ps-10 md:pt-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        data-cursor="Drag"
      >
        {visibleProducts.map((product, i) => (
          <div
            key={product.id || i}
            className="relative flex h-full w-[78vw] min-w-65 max-w-90 shrink-0 animate-slide-up sm:w-[46vw] lg:w-[30vw] xl:w-[23vw]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <ProductCard
              product={product}
              badges={[
                { tone: "light", text: getProductMood(product.title) },
                { tone: "dark", text: getSocialProof(i) },
              ]}
            />
          </div>
        ))}
      </div>

    </section>
  );
}
