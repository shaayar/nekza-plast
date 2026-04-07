import { GraduationCap, Plane, Home, Briefcase } from "lucide-react";
import { USAGE_MOMENTS } from "../../data/Data.js";

const MOMENT_ICON_MAP = {
  school: GraduationCap,
  travel: Plane,
  home: Home,
  office: Briefcase,
};

export default function UsageMomentsStrip() {
  return (
    <section className="section-shell overflow-hidden px-4 py-8 md:px-8 md:py-12 bg-cream">
      <div>
        {/* Heading */}
        <div className="mb-10 md:text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Built For Everyday Moments
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Utility that <span className="decoration-3 underline decoration-alt-yellow text-primary">belongs in real life.</span>
          </h1>
          <p className="mt-4 text-sm leading-7 text-zinc-600 md:text-base">
            Nekza products are designed around the moments where essentials matter most.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
          {USAGE_MOMENTS.map((item) => {
            const Icon = MOMENT_ICON_MAP[item.iconKey] || GraduationCap;

            return (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-4xl border border-zinc-200 bg-white/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg `}
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/10" />


                {/* Text */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.accent} text-zinc-900`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
