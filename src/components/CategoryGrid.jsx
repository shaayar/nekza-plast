import { useEffect, useRef, useState } from "react";
import { GRID_TILES } from "../data/Data.js";

// ─── Data ────────────────────────────────────────────────────────────

const MOBILE_ROWS = GRID_TILES.mobile.rows;
const DESKTOP_ROW1 = GRID_TILES.desktop.rows[0];
const DESKTOP_ROW2 = GRID_TILES.desktop.rows[1];

// ─── Animation helpers ────────────────────────────────────────────────────────

function getInitStyle(animate) {
  switch (animate) {
    case "slideRight":
      return { transform: "translateX(60px)", opacity: 0 };
    case "slideLeft":
      return { transform: "translateX(-60px)", opacity: 0 };
    case "slideUp":
      return { transform: "translateY(60px)", opacity: 0 };
    default:
      return { transform: "translateX(0)", opacity: 1 };
  }
}

const ENTERED_STYLE = { transform: "translate(0, 0)", opacity: 1 };

// ─── Tile ─────────────────────────────────────────────────────────────────────

function Tile({ tile, index, hoveredIndex, setHoveredIndex, className = "", delay = 0 }) {
  const innerRef = useRef(null);
  const [entered, setEntered] = useState(tile.animate === "none");
  const hasAnimated = useRef(tile.animate === "none");

  useEffect(() => {
    if (tile.animate === "none") return;

    const el = innerRef.current;
    if (!el) return;
    let timeoutId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasAnimated.current) return;
          setEntered(false);
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            setEntered(true);
            hasAnimated.current = true;
          }, delay);
          return;
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [tile.animate, delay]);

  const isActive = hoveredIndex === index;
  const isInactive = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`
        group relative flex overflow-hidden rounded-lg md:rounded-xl
        shadow-[4px_4px_24px_0px_#00000040_inset]
        will-change-transform
        transition-[transform,opacity,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${className}
        ${isActive ? "z-30 scale-[1.04] shadow-xl" : "z-0"}
        ${isInactive ? "opacity-60 scale-[0.98]" : ""}
      `}
    >
      <div
        ref={innerRef}
        style={{
          width: "100%",
          height: "100%",
          transition:
            "transform 360ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 320ms ease",
          ...(entered ? ENTERED_STYLE : getInitStyle(tile.animate)),
        }}
        className="relative"
      >
        {/* Mobile image */}
        <a
          href={tile.href}
          className="flex size-full items-center justify-center rounded transition-opacity duration-200 md:hidden"
          data-cursor="Shop"
        >
          <img
            alt={tile.title}
            loading="lazy"
            width={180}
            height={200}
            className="h-full w-full object-cover opacity-100 transition-transform duration-500 ease-out group-hover:scale-110 md:hidden"
            srcSet={`${tile.images.mobile[0]} 1x, ${tile.images.mobile[1]} 2x`}
            src={tile.images.mobile[1]}
          />
        </a>

        {/* Desktop image */}
        <a
          href={tile.href}
          className="flex size-full items-center justify-center rounded transition-opacity duration-200"
          data-cursor="Shop"
        >
          <img
            alt={tile.title}
            loading="lazy"
            width={300}
            height={300}
            className="h-full w-full object-cover opacity-100 transition-transform duration-500 ease-out group-hover:scale-110"
            srcSet={`${tile.images.desktop[0]} 1x, ${tile.images.desktop[1]} 2x`}
            src={tile.images.desktop[1]}
          />
        </a>

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Text content */}
        <div className="pointer-events-none absolute bottom-4 left-4 z-10 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-2px]">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/80 md:text-xs">
            {tile.label}
          </p>
          <h3 className="mt-1 text-lg font-semibold leading-tight md:text-xl">
            {tile.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CategoryGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="section-shell relative">
      {hoveredIndex !== null && (
        <div className="pointer-events-none fixed inset-0 z-10 hidden bg-black/20 backdrop-blur-sm backdrop-saturate-150 transition-opacity duration-300 md:block" />
      )}

      <div className="relative z-20 w-full px-4 py-5 sm:py-7 md:px-9 lg:py-10">
        {/* MOBILE */}
        <div className="grid gap-3 md:hidden">
          <div
            className="grid gap-3"
            style={{ aspectRatio: "354/166", gridTemplateColumns: "calc(61% - 8px) 1fr" }}
          >
            {MOBILE_ROWS[0].map((tile, i) => (
              <Tile
                key={i}
                tile={tile}
                index={`m1-${i}`}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                delay={i * 100}
              />
            ))}
          </div>

          <div
            className="grid gap-3"
            style={{ aspectRatio: "354/168", gridTemplateColumns: "calc(50% - 8px) 1fr" }}
          >
            {MOBILE_ROWS[1].map((tile, i) => (
              <Tile
                key={i}
                tile={tile}
                index={`m2-${i}`}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                delay={i * 100}
              />
            ))}
          </div>

          <div
            className="grid gap-3"
            style={{
              aspectRatio: "354/222",
              gridTemplateColumns: "calc(43.5% - 8px) 1fr",
              gridTemplateRows: "1fr 1fr",
            }}
          >
            {MOBILE_ROWS[2].map((tile, i) => (
              <Tile
                key={i}
                tile={tile}
                index={`m3-${i}`}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                className={i === 0 ? "row-span-2" : ""}
                delay={i * 100}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden gap-5 md:grid">
          <div
            className="grid gap-5"
            style={{
              aspectRatio: "1376/294",
              gridTemplateColumns:
                "calc(26.45% - 14px) calc(20.5% - 14px) calc(29.65% - 14px) 1fr",
            }}
          >
            {DESKTOP_ROW1.map((tile, i) => (
              <Tile
                key={i}
                tile={tile}
                index={`d1-${i}`}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                delay={i * 80}
              />
            ))}
          </div>

          <div
            className="grid gap-5"
            style={{
              aspectRatio: "1376/186",
              gridTemplateColumns: "calc(39% - 14px) calc(32% - 14px) 1fr",
            }}
          >
            {DESKTOP_ROW2.map((tile, i) => (
              <Tile
                key={i}
                tile={tile}
                index={`d2-${i}`}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
