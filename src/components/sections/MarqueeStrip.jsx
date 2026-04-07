import { MARQUEE_STRIP_ITEMS } from "../../data/Data.js";

export default function MarqueeStrip({
  items = MARQUEE_STRIP_ITEMS,
}) {
  const loopItems = [...items, ...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-zinc-200 bg-zinc-950 py-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]" />

      <div className="marquee-track flex w-max items-center gap-6 whitespace-nowrap will-change-transform">
        {loopItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-6 text-white/90"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] md:text-base">
              {item}
            </span>
            {/* <span className="h-1.5 w-1.5 rounded-full bg-primary" /> */}
            <img src="/images/tree-noBG.png" className="w-12" alt="" />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: nekza-marquee 26s linear infinite;
        }

        @keyframes nekza-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
