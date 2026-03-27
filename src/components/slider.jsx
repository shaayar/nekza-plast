import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    tag: "Smart Kitchen Organization",
    // title: "",
    title: "Discover Premium Water Companions",
    titleItalic: [],
    bg: "/images/slide-1.webp",
  },
  {
    tag: "Hydration Essentials",
    title: "Elegant Storage Solutions for Contemporary Living",
    titleItalic: [],
    bg: "/images/slide-2.webp",
  },
  {
    tag: "Fresh Food Preservation",
    title: "Modern Serving Solutions",
    titleItalic: [],
    bg: "/images/slide-3.webp",
  },
  {
    tag: "Meal Prep Solutions",
    // title: "Smart Lunch Containers for Work & Study",
    title: "Innovative Food Storage for Today's Households",
    titleItalic: [],
    bg: "/images/slide-4.webp",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setAnimKey((k) => k + 1);
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-black h-[40svh] lg:h-[84svh]"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={900}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={handleSlideChange}
        className="w-full! h-full!"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative overflow-hidden">

            {/* ── Background image with Ken Burns on active ── */}
            <div
              key={`bg-${animKey}-${i}`}
              className={[
                "absolute inset-0 bg-cover bg-center will-change-transform",
                activeIndex === i ? "animate-ken-burns" : "scale-[1.08]",
              ].join(" ")}
              style={{ backgroundImage: `url(${slide.bg})` }}
            />

            {/* ── Gradient overlay ── */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/10" />

            {/* ── Slide content ── */}
            <div
              key={`content-${animKey}-${i}`}
              className={[
                "relative z-10 flex flex-col justify-center h-full",
                "px-[5vw] pt-28 pb-24 md:pt-32 md:pb-28",
                "max-w-4xl",
                activeIndex === i ? "animate-slide-up" : "opacity-0",
              ].join(" ")}
            >
              {/* Tag */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="block w-7 h-0.5 bg-red-600 shrink-0" />
                <span className="text-white/60 text-[11px] md:text-[13px] font-medium tracking-[0.12em] uppercase">
                  {slide.tag}
                </span>
              </div>

              {/* Headline */}
              <h2
                className="text-white font-bold leading-[1.1] tracking-tight font-comfortaa"
                style={{
                  fontSize: "clamp(36px, 6.5vw, 88px)",
                }}
              >
                {slide.title}
                <em className="block not-italic">
                  {slide.titleItalic.map((line, j) => (
                    <span key={j} className="block italic">
                      {line}
                    </span>
                  ))}
                </em>
              </h2>

              {/* CTA */}
              <a
                href="#"
                className="group mt-8 md:mt-12 inline-flex items-center gap-3 w-fit border border-white/35 text-white text-[11px] md:text-xs font-medium tracking-[0.08em] uppercase px-6 py-3.5 transition-all duration-200 hover:bg-red-600 hover:border-red-600"
              >
                Discover Collection
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Prev / Next arrows (desktop only) ── */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center text-white bg-black/30 transition-colors duration-200 hover:bg-red-600/75 hover:border-transparent"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center text-white bg-black/30 transition-colors duration-200 hover:bg-red-600/75 hover:border-transparent"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Progress-bar pagination ── */}
      <div className="absolute bottom-5 md:bottom-10 left-[5vw] lg:left-[45vw] z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-1 overflow-hidden bg-white/25 cursor-pointer transition-all duration-300"
            style={{ width: activeIndex === i ? 60 : 32 }}
          >
            {activeIndex === i && (
              <span
                key={animKey}
                className="absolute inset-0 bg-primary origin-left animate-fill-bar"
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Slide counter (desktop only) ── */}
      <div
        className="hidden md:block absolute bottom-6 right-[3vw] z-20 text-white/60 text-lg tracking-widest font-comfortaa"
      >
        <span className="text-white/90 text-2xl font-bold">0{activeIndex + 1}</span>
        {" "}/ 0{slides.length}
      </div>
    </div>
  );
}
