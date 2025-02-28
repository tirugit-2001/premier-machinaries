import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

import "./carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

interface CarouselProps {
  type: string;
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ type, children }) => {
  const breakpoints =
    type === "banner"
      ? {
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        } // No breakpoints needed, 1 slide for all devices
      : {
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        };
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        navigation={type === "banner"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={breakpoints}
        modules={
          type === "banner"
            ? [Navigation, Autoplay]
            : [Pagination, Navigation, Autoplay]
        }
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
};

export default Carousel;
