// ColumnSlider.jsx
//
// Desktop (md+): 4 equal columns side-by-side, each 63vh tall,
//               background image cycles through active column on hover.
// Mobile (<md):  Swiper full-width slider with pagination dots.
//
// Dependencies:  npm install swiper
// Swiper CSS imported below — add to your main CSS or import here.

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { COLUMN_SLIDER_SLIDES } from "../data/Data.js";

// ─── Shared caption ──────────────────────────────────────────────────────────

function SlideCaption({ slide }) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
      <h5 className="text-sm font-bold uppercase tracking-[0.12em] text-white sm:text-base lg:text-lg">
        {slide.title.split("\n").map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </h5>
      <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
        {slide.desc}
        <br />
        <u><strong>Buy Now</strong></u>
      </p>
    </div>
  );
}

// ─── Desktop column ───────────────────────────────────────────────────────────

function DesktopColumn({ slide, active, onEnter, onLeave }) {
  return (
    <a
      href={slide.href}
      className="relative flex-1 overflow-hidden cursor-pointer group"
      style={{ height: "63vh" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      data-cursor="Shop"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${slide.bg})` }}
      />

      {/* Overlay — slightly darker on hover */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          active ? "opacity-20" : "opacity-40"
        }`}
      />

      {/* Bottom accent line on active */}
      <div
        className={`absolute bottom-0 left-0 h-[3px] bg-white transition-all duration-500 ${
          active ? "w-full" : "w-0"
        }`}
      />

      <SlideCaption slide={slide} />
    </a>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ColumnSlider() {
  const [activeCol, setActiveCol] = useState(null);

  return (
    <div className="w-full">

      {/* ── Desktop: 4 columns ── */}
      <div className="hidden md:flex">
        {COLUMN_SLIDER_SLIDES.map((slide, i) => (
          <DesktopColumn
            key={i}
            slide={slide}
            active={activeCol === i}
            onEnter={() => setActiveCol(i)}
            onLeave={() => setActiveCol(null)}
          />
        ))}
      </div>

      {/* ── Mobile: Swiper ── */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full [&_.swiper-pagination-bullet-active]:bg-white [&_.swiper-pagination-bullet]:bg-white/60"
          style={{ height: "63vh" }}
          data-cursor="Drag"
        >
          {COLUMN_SLIDER_SLIDES.map((slide, i) => (
            <SwiperSlide key={i} className="relative overflow-hidden">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bg})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />
              {/* Link */}
              <a href={slide.href} className="absolute inset-0 z-20" aria-label={slide.title} data-cursor="Shop" />
              <SlideCaption slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
