import { useMemo, useState } from "react";
import Card from "./UI/Card.jsx";
import { getNewArrivals } from "../data/Data.js";
          import { ArrowRight } from "lucide-react";


const PRODUCTS = getNewArrivals();
const DISCOVERY_CHIPS = [
  { id: "fresh", label: "Just Dropped" },
  { id: "deals", label: "Top Deals" },
  { id: "premium", label: "Premium New" },
];

const getProductMood = (title = "") => {
  const lowered = title.toLowerCase();
  if (lowered.includes("tiffin")) return "Lunch Upgrade";
  if (lowered.includes("tumbler") || lowered.includes("flask")) return "Travel Ready";
  return "Fresh Arrival";
};

const getSocialProof = (index) => {
  const labels = ["New this week", "Recently added", "Early favorite", "Just landed"];
  return labels[index % labels.length];
};

export default function NewArrivals() {
  const [activeChip, setActiveChip] = useState("fresh");

  const visibleProducts = useMemo(() => {
    const list = PRODUCTS.slice();

    if (activeChip === "deals") {
      return list.sort((a, b) => (b.off || 0) - (a.off || 0));
    }

    if (activeChip === "premium") {
      return list.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    return list;
  }, [activeChip]);

  return (
    <section className="section-shell py-5">
      <div className="mx-auto px-4 md:px-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center md:gap-3">
          <h2 className="text-4xl font-bold capitalize leading-snug lg:text-4xl">
            <span className="outline text-white">New</span> <span className="underline decoration-4 decoration-alt-yellow">Arrivals</span>
          </h2>
          <a
            href="/collections/new-arrivals"
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
                onClick={() => setActiveChip(chip.id)}
                className={`pressable rounded-full border px-3 py-1 text-xs font-semibold transition sm:text-sm ${
                  activeChip === chip.id
                    ? "border-primary bg-primary text-white"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>


        {/* Product Rail */}
        <div className="mt-4">
          <div className="flex gap-4 md:gap-6 overflow-x-hidden">
            <div className="flex gap-4 md:gap-6 min-w-max" data-cursor="Drag">
              {/* Product Cards */}
              {visibleProducts.map((product, i) => (
                <div
                  key={product.id}
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
          </div>
        </div>
      </div>
    </section>
  );
}
