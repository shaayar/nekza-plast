import { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const MOBILE_ROW1 = [
  {
    mobile:  { href: "/collections/hydration", img1x: "/images/c-bottle-mobile.webp",    img2x: "/images/c-bottle-mobile.webp"    },
    desktop: { href: "/collections/hydration", img1x: "/images/c-bottle.webp", img2x: "/images/c-bottle.webp" },
    animate: "slideLeft",
  },
  {
    mobile:  { href: "/collections/kitchen",   img1x: "/images/c-cookware-mobile.webp",     img2x: "/images/c-cookware-mobile.webp"     },
    desktop: { href: "/collections/cookware-1",img1x: "/images/c-cookware.webp",       img2x: "/images/c-cookware.webp"       },
    animate: "slideRight",
  },
];

const MOBILE_ROW2 = [
  {
    mobile:  { href: "/collections/tableware",  img1x: "/images/c-tableware-mobile.webp",  img2x: "/images/c-tableware-mobile.webp"   },
    desktop: { href: "/collections/tableware",  img1x: "/images/c-tableware.webp", img2x: "/images/c-tableware.webp" },
    animate: "slideLeft",
  },
  {
    mobile:  { href: "/collections/cookware-1", img1x: "/images/c-cookware-mobile-1.webp",   img2x: "/images/c-cookware-mobile-1.webp"    }, //change this
    desktop: { href: "/collections/tiffin-boxes", img1x: "/images/c-tiffin.webp", img2x: "/images/c-tiffin.webp" },
    animate: "slideRight",
  },
];

const MOBILE_ROW3 = [
  {
    mobile:  { href: "/collections/kidzbee",      img1x: "/images/c-kids-mobile.webp",        img2x: "/images/c-kids-mobile.webp"        },
    desktop: { href: "/collections/kitchen",      img1x: "/images/c-kitchen.webp",               img2x: "/images/c-kitchen.webp"               },
    animate: "slideRight",
    tall: true,
  },
  {
    mobile:  { href: "/collections/tiffin-boxes", img1x: "/images/c-tiffin-mobile.webp",    img2x: "/images/c-tiffin-mobile.webp"     },
    desktop: { href: "/collections/appliances",   img1x: "/images/c-apps.webp", img2x: "/images/c-apps.webp" },
    animate: "slideUp",
  },
  {
    mobile:  { href: "/collections/appliances",  img1x: "/images/c-apps-mobile.webp", img2x: "/images/c-apps-mobile.webp"  },
    desktop: { href: "/collections/kidzbee",     img1x: "/images/c-kids.webp",  img2x: "/images/c-kids.webp"   },
    animate: "slideLeft",
  },
];

const DESKTOP_ROW1 = [MOBILE_ROW1[0], MOBILE_ROW1[1], MOBILE_ROW2[0], MOBILE_ROW2[1]];
const DESKTOP_ROW2 = MOBILE_ROW3;

// ─── Animation helpers ────────────────────────────────────────────────────────

function getInitStyle(animate) {
  switch (animate) {
    case "slideRight": return { transform: "translateX(60px)", opacity: 0 };
    case "slideLeft":  return { transform: "translateX(-60px)", opacity: 0 };
    case "slideUp":    return { transform: "translateY(60px)", opacity: 0 };
    default:           return { transform: "translateX(0)", opacity: 1 };
  }
}

const ENTERED_STYLE = { transform: "translate(0, 0)", opacity: 1 };

// ─── Tile ─────────────────────────────────────────────────────────────────────

function Tile({ tile, className = "", delay = 0 }) {
  const innerRef = useRef(null);
  const [entered, setEntered] = useState(tile.animate === "none");

  useEffect(() => {
    if (tile.animate === "none") return;

    const el = innerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setEntered(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [tile.animate, delay]);

  return (
    <div
      className={`flex overflow-hidden rounded-lg shadow-[4px_4px_24px_0px_#00000040_inset] md:rounded-xl ${className}`}
    >
      <div
        ref={innerRef}
        style={{
          width: "100%",
          height: "100%",
          transition: "transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 800ms ease",
          ...(entered ? ENTERED_STYLE : getInitStyle(tile.animate)),
        }}
      >
        {/* Mobile image */}
        <a
          href={tile.mobile.href}
          className="font-eudoxus flex size-full items-center justify-center rounded transition-all duration-200 md:hidden"
        >
          <img
            alt=""
            loading="lazy"
            width={180}
            height={200}
            className="h-full w-full object-cover opacity-100 transition duration-300 hover:scale-105 md:hidden"
            srcSet={`${tile.mobile.img1x} 1x, ${tile.mobile.img2x} 2x`}
            src={tile.mobile.img2x}
          />
        </a>

        {/* Desktop image */}
        <a
          href={tile.desktop.href}
          className="font-eudoxus hidden size-full items-center justify-center rounded transition-all duration-200 md:flex"
        >
          <img
            alt=""
            loading="lazy"
            width={300}
            height={300}
            className="h-full w-full object-cover opacity-100 transition duration-300 hover:scale-105"
            srcSet={`${tile.desktop.img1x} 1x, ${tile.desktop.img2x} 2x`}
            src={tile.desktop.img2x}
          />
        </a>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProductGrid() {
  return (
    <section className="w-full py-5 px-4 md:px-9 container-box container-main sm:py-7 lg:py-10">

      {/* ══════════════════════════════════════
          MOBILE LAYOUT  (hidden on md+)
          ══════════════════════════════════════ */}
      <div className="grid gap-3 md:hidden">

        {/* Row 1 — 61% / 39%  aspect 354:166 */}
        <div
          className="grid gap-3"
          style={{ aspectRatio: "354/166", gridTemplateColumns: "calc(61% - 8px) 1fr" }}
        >
          {MOBILE_ROW1.map((tile, i) => (
            <Tile key={i} tile={tile} delay={i * 100} />
          ))}
        </div>

        {/* Row 2 — 50% / 50%  aspect 354:168 */}
        <div
          className="grid gap-3"
          style={{ aspectRatio: "354/168", gridTemplateColumns: "calc(50% - 8px) 1fr" }}
        >
          {MOBILE_ROW2.map((tile, i) => (
            <Tile key={i} tile={tile} delay={i * 100} />
          ))}
        </div>

        {/* Row 3 — 43.5% / 56.5%  aspect 354:222 */}
        <div
          className="grid gap-3"
          style={{
            aspectRatio: "354/222",
            gridTemplateColumns: "calc(43.5% - 8px) 1fr",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          <Tile tile={MOBILE_ROW3[0]} className="row-span-2" delay={0} />
          <Tile tile={MOBILE_ROW3[1]} delay={100} />
          <Tile tile={MOBILE_ROW3[2]} delay={200} />
        </div>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md)
          ══════════════════════════════════════ */}
      <div className="hidden gap-5 md:grid">

        {/* Desktop Row 1 — 4 cols  aspect 1376:294 */}
        <div
          className="grid gap-5"
          style={{
            aspectRatio: "1376/294",
            gridTemplateColumns: "calc(26.45% - 14px) calc(20.5% - 14px) calc(29.65% - 14px) 1fr",
          }}
        >
          {DESKTOP_ROW1.map((tile, i) => (
            <Tile key={i} tile={tile} delay={i * 80} />
          ))}
        </div>

        {/* Desktop Row 2 — 3 cols  aspect 1376:186 */}
        <div
          className="grid gap-5"
          style={{
            aspectRatio: "1376/186",
            gridTemplateColumns: "calc(39% - 14px) calc(32% - 14px) 1fr",
          }}
        >
          {DESKTOP_ROW2.map((tile, i) => (
            <Tile key={i} tile={tile} delay={i * 100} />
          ))}
        </div>
      </div>

    </section>
  );
}