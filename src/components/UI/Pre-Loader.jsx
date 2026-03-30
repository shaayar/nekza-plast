import { useEffect, useState } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState(() => {
    if (typeof window === "undefined") return "hidden";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // const alreadyShown = sessionStorage.getItem("nekza-preloader-shown");

    if (reducedMotion) return "hidden";
    return "visible";
  });

  useEffect(() => {
    if (phase !== "visible") return;

    // sessionStorage.setItem("nekza-preloader-shown", "true");

    const hideTimer = setTimeout(() => setPhase("exiting"), 2400);
    const unmountTimer = setTimeout(() => setPhase("hidden"), 3250);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <>
      <style>{`
        @keyframes bottleDraw {
          from {
            stroke-dashoffset: 900;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes capDraw {
          from {
            stroke-dashoffset: 200;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes liquidRise {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0%);
          }
        }

        @keyframes shimmerSlide {
          from {
            transform: translateY(110%);
            opacity: 0;
          }
          to {
            transform: translateY(-110%);
            opacity: 0.18;
          }
        }

        @keyframes taglineRise {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 0.7;
            transform: translateY(0);
          }
        }

        @keyframes wordReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
            clip-path: inset(0 0 100% 0);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            clip-path: inset(0 0 0% 0);
          }
        }

        @keyframes accentExpand {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        @keyframes fadeScaleOut {
          0% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: scale(1.03);
            filter: blur(10px);
          }
        }

        .preloader-wrap {
          font-family: 'Montserrat', system-ui, sans-serif;
        }

        .bottle-body {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: bottleDraw 1.05s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.08s;
        }

        .bottle-cap {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: capDraw 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.85s;
        }

        .liquid-group {
          opacity: 0;
          animation: fadeInLiquid 0.2s ease forwards;
          animation-delay: 0.95s;
        }

        @keyframes fadeInLiquid {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .liquid-fill {
          animation: liquidRise 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.95s;
          transform: translateY(100%);
        }

        .shimmer-bar {
          animation: shimmerSlide 1.5s ease forwards;
          animation-delay: 1.35s;
        }

        .brand-tagline {
          opacity: 0;
          animation: taglineRise 0.65s ease forwards;
          animation-delay: 1.15s;
        }

        .brand-name {
          opacity: 0;
          clip-path: inset(0 0 100% 0);
          animation: wordReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 1.35s;
        }

        .accent-line {
          transform: scaleX(0);
          transform-origin: left;
          animation: accentExpand 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 1.75s;
        }

        .dot1 { animation: dotPulse 1.2s ease-in-out infinite; animation-delay: 1.95s; }
        .dot2 { animation: dotPulse 1.2s ease-in-out infinite; animation-delay: 2.1s; }
        .dot3 { animation: dotPulse 1.2s ease-in-out infinite; animation-delay: 2.25s; }

        .exit-fade {
          animation: fadeScaleOut 0.85s ease forwards;
        }
      `}</style>

      <div
        className={`preloader-wrap fixed inset-0 z-9998 flex flex-col items-center justify-center overflow-hidden bg-black ${
          phase === "exiting" ? "exit-fade" : ""
        }`}
      >
        {/* subtle grain */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-104 w-104 -translate-x-1/2 -translate-y-[58%] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />
        </div>

        {/* main content */}
        <div className="relative z-10 flex flex-col items-center gap-10">
          {/* Bottle */}
          <div className="relative h-52.5 w-24">
            <svg
              viewBox="0 0 96 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <clipPath id="bottleClip">
                  <path d="M36 44 C28 48 20 57 20 72 L20 178 C20 191 30 200 43 200 L53 200 C66 200 76 191 76 178 L76 72 C76 57 68 48 60 44 Z" />
                </clipPath>

                <linearGradient id="liquidGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(234, 52, 58, 0.65)" />
                  <stop offset="100%" stopColor="rgba(234, 52, 58, 0.95)" />
                </linearGradient>

                <linearGradient id="shimmerGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(234, 52, 58, 0)" />
                  <stop offset="50%" stopColor="rgba(234, 52, 58, 0.95)" />
                  <stop offset="100%" stopColor="rgba(234, 52, 58, 0)" />
                </linearGradient>

                <linearGradient id="strokeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.45)" />
                </linearGradient>
              </defs>

              {/* liquid */}
              <g className="liquid-group" clipPath="url(#bottleClip)">
                <rect
                  x="20"
                  y="44"
                  width="56"
                  height="160"
                  fill="url(#liquidGradient)"
                  className="liquid-fill"
                  style={{ transformOrigin: "center bottom" }}
                />

                {/* fake wave top */}
                <g
                  className="liquid-fill"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <path
                    d="M20,68 C32,60 44,76 56,68 C62,64 70,66 76,68 L76,44 L20,44 Z"
                    fill="rgba(234, 52, 58,0.45)"
                  />
                </g>

                {/* shimmer */}
                <rect
                  x="20"
                  y="44"
                  width="56"
                  height="160"
                  fill="url(#shimmerGradient)"
                  opacity="0"
                  className="shimmer-bar"
                />

                {/* highlight */}
                <rect
                  x="38"
                  y="72"
                  width="5"
                  height="80"
                  rx="2.5"
                  fill="white"
                  opacity="0.12"
                />
              </g>

              {/* body */}
              <path
                className="bottle-body"
                d="M36 44 C28 48 20 57 20 72 L20 178 C20 191 30 200 43 200 L53 200 C66 200 76 191 76 178 L76 72 C76 57 68 48 60 44 Z"
                stroke="url(#strokeGrad)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* neck */}
              <path
                className="bottle-body"
                d="M38 44 L38 24 L58 24 L58 44"
                stroke="rgba(255,255,255,0.65)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* cap */}
              <path
                className="bottle-cap"
                d="M34 24 L34 14 C34 11 37 9 40 9 L56 9 C59 9 62 11 62 14 L62 24 Z"
                stroke="rgba(255, 255, 255, 0.9)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="rgba(255,255,255,0.08)"
              />

              <path
                className="bottle-cap"
                d="M34 20 L62 20"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="0.75"
              />

              {/* subtle body ribs */}
              {[110, 140, 168].map((y) => (
                <path
                  key={y}
                  d={`M26 ${y} Q48 ${y - 3} 70 ${y}`}
                  stroke="rgba(234, 52, 58, 0.1)"
                  strokeWidth="0.75"
                  className="bottle-body"
                />
              ))}
            </svg>
          </div>

          {/* brand text */}
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="brand-tagline text-[10px] font-medium uppercase tracking-[0.5em] text-primary/75">
              Utility · Sealed
            </p>

            <h1 className="font-comfortaa text-primary text-5xl font-bold"> NEKZA </h1>

            <div className="accent-line h-1 w-60 bg-linear-to-r from-transparent via-primary to-transparent" />

            <div className="mt-1 flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`dot${i + 1} h-0.75 w-0.75 rounded-full bg-white/80`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="accent-line absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
      </div>
    </>
  );
}