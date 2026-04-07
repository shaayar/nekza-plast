import { useState } from "react";
import { GraduationCap, Plane, Home, Briefcase, ArrowRight } from "lucide-react";
import { ALL_PRODUCTS, ROUTINE_OPTIONS, ROUTINE_COLLECTION_MAP } from "../../data/Data.js";

const ROUTINE_ICON_MAP = {
  school: GraduationCap,
  travel: Plane,
  home: Home,
  office: Briefcase,
};

const getRoutineProducts = (routineId) => {
  const targetCollections = ROUTINE_COLLECTION_MAP[routineId] || [];
  const products = ALL_PRODUCTS.filter((product) =>
    product.collections?.some((collection) => targetCollections.includes(collection))
  );

  return products.slice(0, 6).map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.img,
  }));
};

export default function ChooseYourRoutine() {
  const [activeRoutine, setActiveRoutine] = useState(ROUTINE_OPTIONS[0]);
  const activeRoutineProducts = getRoutineProducts(activeRoutine.id);

  return (
    <section className="relative overflow-hidden px-4 py-16 bg-white">

      <div className="relative mx-auto max-w-7xl rounded-[2rem] md:border border-zinc-200 bg-white/80 md:p-5 shadow-[0_20px_80px_rgba(0,0,0,0.05)] backdrop-blur md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* Left */}
          <div className="flex flex-col justify-between rounded-[2rem] border border-zinc-200 bg-zinc-50/80 p-6 md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Choose Your Routine
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                Utility looks different in every routine.
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600 md:text-base">
                Pick a setting and explore essentials designed for the rhythm of everyday life.
              </p>
            </div>

            {/* Tabs */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {ROUTINE_OPTIONS.map((routine) => {
                const Icon = ROUTINE_ICON_MAP[routine.iconKey] || GraduationCap;
                const isActive = activeRoutine.id === routine.id;

                return (
                  <button
                    key={routine.id}
                    onClick={() => setActiveRoutine(routine)}
                    data-cursor="Open"
                    className={`group rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${isActive
                      ? "border-zinc-900 bg-zinc-950 text-white shadow-lg"
                      : "border-zinc-200 bg-white text-zinc-800 hover:border-zinc-300 hover:bg-zinc-100"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${isActive ? "bg-white/10 text-white" : "bg-zinc-100 text-zinc-900"
                          }`}
                      >
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">{routine.label}</p>
                        <p
                          className={`text-xs ${isActive ? "text-white/70" : "text-zinc-500"
                            }`}
                        >
                          {routine.chip}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            {/* Dynamic accent glow */}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${activeRoutine.accent}`}
            />

            <div
              key={activeRoutine.id}
              className="relative z-10 animate-routineFade"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {activeRoutine.eyebrow}
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                {activeRoutine.title}
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
                {activeRoutine.description}
              </p>

              {/* Products */}
              <div className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-3">
                {activeRoutineProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group rounded-[1.5rem] border border-zinc-200 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex aspect-[4/4.4] items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-50 p-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="mt-4">
                      <h4 className="line-clamp-2 text-sm font-semibold leading-5 text-zinc-900 md:text-base">
                        {product.title}
                      </h4>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-base font-semibold text-zinc-950 md:text-lg">
                          ₹{product.price}
                        </span>

                        <button
                          className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:text-primary"
                          data-cursor="Open"
                        >
                          View <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                  data-cursor="Shop"
                >
                  Explore {activeRoutine.label}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
  @keyframes routineFade {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-routineFade {
    animation: routineFade 0.45s ease-out;
  }
`}</style>
    </section>
  );
}
