import React from "react";
import { ArrowRight } from "lucide-react";
import { LIFE_WITH_NEKZA_CARDS } from "../data/Data.js";

export default function LifeWithNekza() {
  return (
    <section className="section-shell my-5 md:py-10">
      <div className="max-w-350 mx-auto px-4 md:px-6 flex flex-col items-center gap-6">
        
        {/* Heading */}
        <div className="flex flex-col gap-2 text-center max-w-3xl">
          <h1 className=" text-4xl lg:text-5xl font-bold leading-tight">
            Everyday life with <span className="text-primary underline decoration-4 decoration-alt-yellow">Nekza</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-neutral-600 font-light">
            Be inspired by our recipes, tips, and tricks from culinary experts.
          </p>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="flex max-w-full gap-4 overflow-x-auto no-scrollbar md:gap-6 pb-2" data-cursor="Drag">
          {LIFE_WITH_NEKZA_CARDS.map((card, index) => (
            <div
              key={index}
              className="flex aspect-9/16 w-[58vw] max-w-90 min-w-65 shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-sm md:w-[36vw] lg:w-[25vw] xl:w-[calc((100vw-296px)/4)]"
            >
              {/* Video */}
              <div className="relative w-full h-full overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="none"
                >
                  <source src={card.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* CTA */}
              <a
                href={card.href}
                className="pressable group flex items-center justify-between bg-red-600 px-4 py-3 text-white text-base md:text-lg font-medium transition-colors duration-200 hover:bg-red-700"
                data-cursor="Shop"
              >
                <span>Shop now</span>
                <ArrowRight
                  size={20}
                  strokeWidth={1.9}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
