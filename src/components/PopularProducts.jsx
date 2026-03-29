import { useMemo, useState } from "react";
import Card from "../components/UI/Card.jsx";
import { useToast } from "../contexts/ToastContext.jsx";
import { getPopularProducts } from "../data/Data.js";
import { ArrowRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS = getPopularProducts();
const DISCOVERY_CHIPS = [
  { id: "community", label: "Community Picks" },
  { id: "value", label: "Best Value" },
  { id: "premium", label: "Premium Picks" },
];

const getProductMood = (title = "") => {
  const lowered = title.toLowerCase();
  if (lowered.includes("kids")) return "Family Favorite";
  if (lowered.includes("travel") || lowered.includes("mug")) return "On-The-Go";
  if (lowered.includes("flask")) return "Top Choice";
  return "Most Chosen";
};

const getSocialProof = (index) => {
  const labels = ["Popular this week", "Shoppers' pick", "Hot right now", "Selling fast"];
  return labels[index % labels.length];
};

// ─── Popular Products section ──────────────────────────────────────────────────────

export default function PopularProducts() {
  const [activeChip, setActiveChip] = useState("community");
  const { showToast } = useToast();

  const handleChipClick = (chip) => {
    setActiveChip(chip.id);
    showToast({
      message: `Showing ${chip.label} in Popular Products.`,
      type: "info",
    });
  };

  const visibleProducts = useMemo(() => {
    const list = PRODUCTS.slice();

    if (activeChip === "value") {
      return list.sort((a, b) => (b.off || 0) - (a.off || 0));
    }

    if (activeChip === "premium") {
      return list.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    return list.sort((a, b) => (b.off || 0) - (a.off || 0));
  }, [activeChip]);

  return (
    <section className="section-shell flex flex-col items-center gap-6 py-5 sm:py-7 lg:gap-8 lg:py-10">

      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center md:gap-3">
        <h2 className="font-bold capitalize leading-snug text-3xl lg:text-4xl" >
          <span className="outline text-white">Our</span> <span className="underline decoration-4 decoration-alt-yellow">Popular Products</span>
        </h2>
        <a
          href="/collections/bestseller-nw"
          className="pressable group flex items-center justify-center rounded text-base text-black hover:underline underline-offset-2 transition-colors duration-200 sm:text-lg lg:text-xl"
          data-cursor="Shop"
        >
          Explore More
          <ArrowRight />
        </a>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          {DISCOVERY_CHIPS.map((chip) => (
            <button
              key={chip.id}
              type="button"
              onClick={() => handleChipClick(chip)}
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
        className="mx-auto flex max-w-full items-stretch gap-4 overflow-x-auto md:gap-6 ps-4 md:ps-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        data-cursor="Drag"
      >
        {visibleProducts.map((product, i) => (
          <div
            key={product.id || i}
            className="relative flex h-full w-[78vw] min-w-[260px] max-w-[360px] shrink-0 animate-slide-up sm:w-[46vw] lg:w-[30vw] xl:w-[23vw]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Card
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
