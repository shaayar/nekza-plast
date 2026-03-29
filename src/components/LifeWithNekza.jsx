import React from "react";

const lifeCards = [
  {
    video:
      "/images/p-bottle-1.mp4",
    href: "#",
  },
  {
    video:
      "/images/p-jug.mp4",
    href: "#",
  },
  {
    video:
      "/images/p-combo.mp4",
    href: "#",
  },
  {
    video:
      "/images/p-jug-2.mp4",
    href: "#",
  },
  // {
  //   video:
  //     "/images/p-jug-3.mp4",
  //   href: "#",
  // },

];

export default function LifeWithNekza() {
  return (
    <section className="section-shell my-5 py-10 sm:my-7 lg:my-10">
      <div className="max-w-350 mx-auto px-4 md:px-6 flex flex-col items-center gap-6">
        
        {/* Heading */}
        <div className="flex flex-col gap-2 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Everyday life with <span className="text-primary underline decoration-4 decoration-alt-yellow">Nekza</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-neutral-600 font-light">
            Be inspired by our recipes, tips, and tricks from culinary experts.
          </p>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="flex max-w-full gap-4 overflow-x-auto no-scrollbar md:gap-6 pb-2" data-cursor="Drag">
          {lifeCards.map((card, index) => (
            <div
              key={index}
              className="flex aspect-9/16 w-[58vw] max-w-[360px] min-w-[260px] shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-sm md:w-[36vw] lg:w-[25vw] xl:w-[calc((100vw-296px)/4)]"
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M0.5 9.49997H13.793L6.293 17L7 17.707L15.707 8.99997L7 0.292969L6.293 0.999969L13.793 8.49997H0.5V9.49997Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
