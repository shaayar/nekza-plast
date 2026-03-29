import { useEffect, useState } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState(() => {
    if (typeof window === "undefined") return "hidden";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return reducedMotion ? "hidden" : "visible";
  });

  useEffect(() => {
    if (phase !== "visible") return;
    const hideTimer = setTimeout(() => setPhase("exiting"), 2600);
    const unmountTimer = setTimeout(() => setPhase("hidden"), 3450);
    return () => { clearTimeout(hideTimer); clearTimeout(unmountTimer); };
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <>
      <style>{`
        @keyframes bottleDraw {
          from { stroke-dashoffset: 900; opacity: 0; }
          5%   { opacity: 1; }
          to   { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes capDraw {
          from { stroke-dashoffset: 200; opacity: 0; }
          5%   { opacity: 1; }
          to   { stroke-dashoffset: 0; opacity: 1; }
        }

        @keyframes liquidRise {
          from { transform: translateY(100%); }
          to   { transform: translateY(0%); }
        }

        @keyframes waveDrift {
          0%   { d: path("M0,8 C20,2 40,14 60,8 C80,2 100,14 120,8 L120,0 L0,0 Z"); }
          50%  { d: path("M0,4 C20,12 40,0 60,6 C80,12 100,2 120,6 L120,0 L0,0 Z"); }
          100% { d: path("M0,8 C20,2 40,14 60,8 C80,2 100,14 120,8 L120,0 L0,0 Z"); }
        }

        @keyframes liquidFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes shimmerSlide {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(-110%); opacity: 0.18; }
        }

        @keyframes taglineRise {
          from { opacity: 0; transform: translateY(10px) letterSpacing(0.6em); }
          to   { opacity: 0.6; transform: translateY(0); }
        }

        @keyframes wordReveal {
          from { opacity: 0; transform: translateY(22px); clip-path: inset(0 0 100% 0); }
          to   { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0% 0); }
        }

        @keyframes accentExpand {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50%      { transform: scale(1.5); opacity: 1; }
        }

        @keyframes fadeScaleOut {
          0%   { opacity: 1; transform: scale(1); filter: blur(0px); }
          100% { opacity: 0; transform: scale(1.04); filter: blur(12px); }
        }

        @keyframes panelSlideUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }

        .preloader-wrap {
          font-family: 'Comfortaa', sans-serif;
        }

        .bottle-body {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: bottleDraw 1.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.1s;
        }

        .bottle-cap {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: capDraw 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.9s;
        }

        .liquid-group {
          animation: liquidFadeIn 0.15s ease forwards;
          animation-delay: 1.0s;
          opacity: 0;
        }

        .liquid-fill {
          animation: liquidRise 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 1.0s;
          transform: translateY(100%);
        }

        .shimmer-bar {
          animation: shimmerSlide 1.6s ease forwards;
          animation-delay: 1.5s;
        }

        .brand-tagline {
          opacity: 0;
          animation: taglineRise 0.7s ease forwards;
          animation-delay: 1.35s;
        }

        .brand-name {
          opacity: 0;
          clip-path: inset(0 0 100% 0);
          animation: wordReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 1.55s;
        }

        .accent-line {
          transform: scaleX(0);
          transform-origin: left;
          animation: accentExpand 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 1.9s;
        }

        .dot1 { animation: dotPulse 1.2s ease-in-out infinite; animation-delay: 2.05s; }
        .dot2 { animation: dotPulse 1.2s ease-in-out infinite; animation-delay: 2.2s; }
        .dot3 { animation: dotPulse 1.2s ease-in-out infinite; animation-delay: 2.35s; }

        .exit-fade {
          animation: fadeScaleOut 0.85s ease forwards;
        }
      `}</style>

      <div
        className={`preloader-wrap fixed inset-0 z-9999 flex flex-col items-center justify-center overflow-hidden ${
          phase === "exiting" ? "exit-fade" : ""
        }`}
        style={{ background: "linear-gradient(160deg, #0f0f0f 0%, #1a1612 60%, #0d0d0d 100%)" }}
      >
        {/* Subtle grain texture overlay */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        {/* Ambient glow behind bottle */}
        <div
          className="pointer-events-none absolute"
          style={{
            width: 320,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--alt-yellow) 14%, transparent) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -58%)",
          }}
        />

        {/* Main composition */}
        <div className="relative flex flex-col items-center gap-10">

          {/* Bottle SVG */}
          <div className="relative" style={{ width: 96, height: 210 }}>
            <svg
              viewBox="0 0 96 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                {/* Clip path exactly matching bottle interior */}
                <clipPath id="bottleClip">
                  <path d="M36 44 C28 48 20 57 20 72 L20 178 C20 191 30 200 43 200 L53 200 C66 200 76 191 76 178 L76 72 C76 57 68 48 60 44 Z" />
                </clipPath>

                {/* Theme shimmer gradient */}
                <linearGradient id="themeShimmer" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--alt-yellow)" stopOpacity="0" />
                  <stop offset="50%" stopColor="var(--alt-yellow)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--alt-yellow)" stopOpacity="0" />
                </linearGradient>

                {/* Theme liquid gradient */}
                <linearGradient id="themeLiquid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--alt-yellow)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="0.75" />
                </linearGradient>

                {/* Bottle stroke gradient */}
                <linearGradient id="strokeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.35)" />
                </linearGradient>
              </defs>

              {/* Liquid fill — clipped to bottle shape */}
              <g className="liquid-group" clipPath="url(#bottleClip)">
                {/* Base fill */}
                <rect
                  x="20" y="44" width="56" height="160"
                  fill="url(#themeLiquid)"
                  className="liquid-fill"
                  style={{ transformOrigin: "center bottom" }}
                />
                {/* Wave on top of liquid */}
                <g className="liquid-fill" style={{ transformOrigin: "center bottom" }}>
                  <path
                    d="M20,68 C32,60 44,76 56,68 C62,64 70,66 76,68 L76,44 L20,44 Z"
                    fill="var(--alt-yellow)"
                    opacity="0.3"
                  />
                </g>
                {/* Shimmer */}
                <rect
                  x="20" y="44" width="56" height="160"
                  fill="url(#themeShimmer)"
                  opacity="0"
                  className="shimmer-bar"
                  style={{ transformOrigin: "center" }}
                />
                {/* Highlight streak */}
                <rect x="38" y="72" width="5" height="80" rx="2.5" fill="white" opacity="0.12" />
              </g>

              {/* Bottle body outline */}
              <path
                className="bottle-body"
                d="M36 44 C28 48 20 57 20 72 L20 178 C20 191 30 200 43 200 L53 200 C66 200 76 191 76 178 L76 72 C76 57 68 48 60 44 Z"
                stroke="url(#strokeGrad)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Neck */}
              <path
                className="bottle-body"
                d="M38 44 L38 24 L58 24 L58 44"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Cap */}
              <path
                className="bottle-cap"
                d="M34 24 L34 14 C34 11 37 9 40 9 L56 9 C59 9 62 11 62 14 L62 24 Z"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="rgba(255,255,255,0.06)"
              />

              {/* Cap detail line */}
              <path
                className="bottle-cap"
                d="M34 20 L62 20"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.75"
              />

              {/* Horizontal rib lines on body */}
              {[110, 140, 168].map((y) => (
                <path
                  key={y}
                  d={`M26 ${y} Q48 ${y - 3} 70 ${y}`}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.75"
                  className="bottle-body"
                />
              ))}
            </svg>
          </div>

          {/* Brand text block */}
          <div className="flex flex-col items-center gap-3 text-center">
            {/* Tagline */}
            <p
              className="brand-tagline text-[10px] uppercase tracking-[0.5em]"
              style={{ color: "var(--accent-color)", fontWeight: 400 }}
            >
              Utility · Sealed
            </p>

            {/* Brand name */}
            <h1
              className="brand-name"
              style={{
                fontSize: "clamp(3rem, 8vw, 4.5rem)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "0.12em",
                lineHeight: 1,
              }}
            >
              NEKZA
            </h1>

            {/* Gold accent line */}
            <div
              className="accent-line"
              style={{
                height: 1,
                width: 120,
                background:
                  "linear-gradient(90deg, transparent, var(--alt-yellow), transparent)",
              }}
            />

            {/* Loading dots */}
            <div className="flex items-center gap-2 mt-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`dot${i + 1}`}
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: "var(--accent-color)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom edge line */}
        <div
          className="accent-line absolute bottom-0 left-0 right-0"
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, color-mix(in srgb, var(--alt-yellow) 35%, transparent) 30%, color-mix(in srgb, var(--alt-yellow) 35%, transparent) 70%, transparent)",
            transformOrigin: "left",
          }}
        />
      </div>
    </>
  );
}
