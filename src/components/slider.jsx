import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { HERO_SLIDES } from "../data/Data.js";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setAnimKey((k) => k + 1);
  };

  return (
    <section
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
        data-cursor="Drag"
      >
        {HERO_SLIDES.map((slide, i) => (
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
                "px-[5vw] pt-20 pb-24 md:pt-32 md:pb-28",
                "max-w-4xl",
                activeIndex === i ? "animate-slide-up" : "opacity-0",
              ].join(" ")}
            >
              {/* Tag */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="block w-7 h-0.5 bg-primary shrink-0" />
                <span className="text-white/60 text-[11px] md:text-[13px] font-medium tracking-[0.12em] uppercase">
                  {slide.tag}
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-white font-bold leading-[1.1] tracking-tight font-comfortaa"
                style={{
                  fontSize: "clamp(36px, 6.5vw, 88px)",
                }}
              >
                {slide.title}
              </h1>

              {/* CTA */}
              <a
                href={slide.url}
                className="pressable group mt-8 md:mt-12 inline-flex items-center gap-3 w-fit border border-white/35 text-white text-[11px] md:text-xs font-medium tracking-[0.08em] uppercase px-6 py-3.5 transition-colors duration-200 hover:bg-primary hover:border-primary"
                data-cursor="Shop"
              >
                Discover Collection
                <ArrowRight
                  size={16}
                  strokeWidth={1.6}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Prev / Next arrows (desktop only) ── */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="pressable hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center text-white bg-black/30 transition-colors duration-200 hover:bg-primary/80 hover:border-transparent"
        data-cursor="Open"
      >
        <ChevronLeft size={18} strokeWidth={1.6} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="pressable hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center text-white bg-black/30 transition-colors duration-200 hover:bg-primary/80 hover:border-transparent"
        data-cursor="Open"
      >
        <ChevronRight size={18} strokeWidth={1.6} />
      </button>

      {/* ── Progress-bar pagination ── */}
      <div className="absolute bottom-5 md:bottom-10 left-[5vw] lg:left-[45vw] z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="pressable relative h-1 overflow-hidden bg-white/25 cursor-pointer transition-[width,background-color] duration-300"
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
        {" "}/ 0{HERO_SLIDES.length}
      </div>
    </section>
  );
}
