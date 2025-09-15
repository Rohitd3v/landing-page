"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import from correct path
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const LogoSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay]} // Add Autoplay here
      spaceBetween={25}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      <SwiperSlide className="flex justify-center items-center">
        <img src="/images/tcs.png" alt="tcs" className="h-8 w-auto" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src="/images/meta.png" alt="meta" className="h-8 w-auto" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src="/images/Infosys.png" alt="Infosys" className="h-8 w-auto" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src="/images/tcs.png" alt="tcs" className="h-8 w-auto" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src="/images/meta.png" alt="meta" className="h-8 w-auto" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <img src="/images/Infosys.png" alt="Infosys" className="h-8 w-auto" />
      </SwiperSlide>
    </Swiper>
  );
};

export default LogoSwiper;
