import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function ProductCarousel({
  items,
  renderSlide,
  getItemKey = (_, index) => index,
  className = "",
  slideClassName = "",
  breakpoints = {},
  slidesPerView = 1.2,
  spaceBetween = 12,
  freeMode = false,
  grabCursor = true,
}) {
  const modules = freeMode ? [A11y, FreeMode] : [A11y];

  return (
    <Swiper
      modules={modules}
      className={`product-carousel ${className}`.trim()}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      freeMode={
        freeMode
          ? {
              enabled: true,
              momentum: true,
              momentumBounce: false,
            }
          : false
      }
      grabCursor={grabCursor}
      watchSlidesProgress
      observeParents
      observer
      a11y={{ enabled: true }}
      data-cursor="Drag"
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={getItemKey(item, index)}
          className={`!h-auto ${slideClassName}`.trim()}
        >
          {renderSlide(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
