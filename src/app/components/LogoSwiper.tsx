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
        <Image src="/images/tcs.png" alt="tcs" width={100} height={32} className="h-8 w-auto" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Image src="/images/meta.png" alt="meta" width={100} height={32} className="h-8 w-auto" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Image src="/images/Infosys.png" alt="Infosys" width={100} height={32} className="h-8 w-auto" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Image src="/images/tcs.png" alt="tcs" width={100} height={32} className="h-8 w-auto" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Image src="/images/meta.png" alt="meta" width={100} height={32} className="h-8 w-auto" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <Image src="/images/Infosys.png" alt="Infosys" width={100} height={32} className="h-8 w-auto" />
      </SwiperSlide>
    </Swiper>
  );
};

export default LogoSwiper;
