import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "[data-cursor], a, button, [role='button'], select, label[for]";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      !window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });

  useEffect(() => {
    if (!enabled) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let prevX = mouseX;
    let prevY = mouseY;

    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;

    let velX = 0;
    let velY = 0;

    let isHovering = false;
    let activeEl = null;
    let isDown = false;
    let rafId;

    const root = document.documentElement;
    const body = document.body;
    root.classList.add("cursor-enabled");
    body.classList.add("cursor-enabled");

    const lerp = (a, b, t) => a + (b - a) * t;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

    const onMove = (e) => {
      prevX = mouseX;
      prevY = mouseY;

      mouseX = e.clientX;
      mouseY = e.clientY;

      velX = mouseX - prevX;
      velY = mouseY - prevY;

      root.classList.remove("cursor-hidden");
    };

    const onLeave = () => root.classList.add("cursor-hidden");
    const onEnter = () => root.classList.remove("cursor-hidden");

    const onDown = () => {
      isDown = true;
      root.classList.add("cursor-clicking");
    };

    const onUp = () => {
      isDown = false;
      root.classList.remove("cursor-clicking");
    };

    const getInteractive = (node) =>
      node instanceof Element ? node.closest(INTERACTIVE_SELECTOR) : null;

    const setActive = (el) => {
      activeEl = el;
      isHovering = Boolean(el);
      if (isHovering) {
        root.classList.add("cursor-active");
        body.classList.add("cursor-active");
        const label =
          el.getAttribute("data-cursor") ||
          (el.tagName === "A" ? "Open" : null) ||
          (el.tagName === "BUTTON" ? "Shop" : null) ||
          "View";
        if (labelRef.current) labelRef.current.textContent = label;
      } else {
        root.classList.remove("cursor-active");
        body.classList.remove("cursor-active");
      }
    };

    const onOver = (e) => {
      const el = getInteractive(e.target);
      if (!el) return;
      if (activeEl === el) return;
      setActive(el);
    };

    const onOut = (e) => {
      if (!activeEl) return;
      const related = getInteractive(e.relatedTarget);
      if (related && activeEl.contains(related)) return;
      if (related === activeEl) return;
      setActive(null);
    };

    const animate = () => {
      // Dot (fast follow)
      dotX = lerp(dotX, mouseX, 0.9);
      dotY = lerp(dotY, mouseY, 0.9);

      // Ring (lag)
      const lerpT = isHovering ? 0.1 : 0.14;
      ringX = lerp(ringX, mouseX, lerpT);
      ringY = lerp(ringY, mouseY, lerpT);

      // Velocity stretch
      const speed = Math.sqrt(velX * velX + velY * velY);
      const stretch = clamp(speed * 0.045, 0, 0.35);
      const angle = Math.atan2(velY, velX) * (180 / Math.PI);

      const baseScale = isHovering ? 2.2 : 1;
      const clickScale = isDown ? 0.8 : 1;

      const scaleX = baseScale * clickScale * (1 + stretch);
      const scaleY = baseScale * clickScale * (1 - stretch * 0.5);

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate(${ringX}px, ${ringY}px)
          translate(-50%, -50%)
          rotate(${angle}deg)
          scale(${scaleX}, ${scaleY})
        `;
      }

      if (dotRef.current) {
        const dotScale = isDown ? 0.6 : 1;
        dotRef.current.style.transform = `
          translate(${dotX}px, ${dotY}px)
          translate(-50%, -50%)
          scale(${dotScale})
        `;
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `
          translate(${ringX}px, ${ringY}px)
          translate(-50%, -50%)
        `;
      }

      velX *= 0.75;
      velY *= 0.75;

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      root.classList.remove(
        "cursor-enabled",
        "cursor-hidden",
        "cursor-active",
        "cursor-clicking"
      );
      body.classList.remove(
        "cursor-enabled",
        "cursor-hidden",
        "cursor-active",
        "cursor-clicking"
      );
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        .cursor-enabled,
        .cursor-enabled body {
          cursor: none;
        }

        .cursor-wrap {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999;
        }

        .cursor-dot,
        .cursor-ring,
        .cursor-label {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        .cursor-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: var(--primary-color);
          mix-blend-mode: difference;
        }

        .cursor-ring {
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          border: 1.5px solid var(--primary-color);
          background: rgba(255,255,255,0.06);
          transition: border 0.2s ease, background 0.2s ease;
        }

        .cursor-label {
          font-size: 10px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 9999px;
          background: var(--primary-color);
          color: white;
          opacity: 0;
          transition: opacity 0.2s ease;
          white-space: nowrap;
        }

        .cursor-active .cursor-label {
          opacity: 1;
        }

        .cursor-clicking .cursor-ring {
          background: rgba(255,255,255,0.15);
        }

        .cursor-hidden .cursor-dot,
        .cursor-hidden .cursor-ring,
        .cursor-hidden .cursor-label {
          opacity: 0;
        }

        @media (pointer: coarse) {
          html, body {
            cursor: auto !important;
          }
        }
      `}</style>

      <div className="cursor-wrap" aria-hidden="true">
        <div ref={dotRef} className="cursor-dot" />
        <div ref={ringRef} className="cursor-ring" />
        <div ref={labelRef} className="cursor-label">View</div>
      </div>
    </>
  );
}
