import { useMemo, useState } from "react";
import Card from "./UI/Card.jsx";
import { getNewArrivals, DISCOVERY_CHIPS } from "../data/Data.js";
import { ArrowRight } from "lucide-react";
import useHorizontalDragScroll from "../hooks/useHorizontalDragScroll.jsx";


const PRODUCTS = getNewArrivals();

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
  const railRef = useHorizontalDragScroll(true);

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
    <section className="section-shell py-5 sm:py-7 lg:py-10">
      <div className="mx-auto px-4 md:px-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center md:gap-3">
          <h2 className="text-4xl font-bold capitalize leading-snug lg:text-5xl">
            New <span className="text-primary underline decoration-4 decoration-alt-yellow rounded-xl">Arrivals</span>
          </h2>
          <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
            Fresh drop energy with the latest additions. Swipe through what just landed.
          </p>
          <a
            href="/collections/new-arrivals"
            className="pressable group flex items-center justify-center rounded text-base text-black hover:underline underline-offset-2 transition-colors duration-200 sm:text-lg lg:text-xl"
            data-cursor="Shop"
          >
            Explore More
            <ArrowRight />
          </a>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            {DISCOVERY_CHIPS.newArrivals.map((chip) => (
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
        <div className="mt-5 rounded-3xl border border-zinc-200/80 bg-white/65 p-3 sm:p-4">
          <div
            ref={railRef}
            className="snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            data-cursor="Drag"
          >
            <div className="flex min-w-max gap-3 pr-2 sm:gap-4 md:gap-5">
              {/* Product Cards */}
              {visibleProducts.map((product, i) => (
                <div
                  key={product.id}
                  className="relative flex h-full w-[70vw] min-w-56 max-w-80 shrink-0 snap-start snap-always animate-slide-up sm:w-[44vw] md:w-[34vw] lg:w-[27vw] xl:w-[21vw]"
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
