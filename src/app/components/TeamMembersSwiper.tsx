"use client";

import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";

interface Founder {
  image: string;
  name: string;
  role: string;
}

export default function TeamMembers() {
  const founders: Founder[] = [
    {
      image: "/images/founders/1.jpg",
      name: "Kimberly Handen",
      role: "Senior Consultant",
    },
    {
      image: "/images/founders/2.jpg",
      name: "Kimberly Handen",
      role: "Senior Consultant",
    },
    {
      image: "/images/founders/3.jpg",
      name: "Kimberly Handen",
      role: "Senior Consultant",
    },
    {
      image: "/images/founders/1.jpg",
      name: "Kimberly Handen",
      role: "Senior Consultant",
    },
    {
      image: "/images/founders/1.jpg",
      name: "Kimberly Handen",
      role: "Senior Consultant",
    },
    {
      image: "/images/founders/2.jpg",
      name: "Kimberly Handen",
      role: "Senior Consultant",
    },
    {
      image: "/images/founders/3.jpg",
      name: "Kimberly Handen",
      role: "Senior Consultant",
    },
    {
      image: "/images/founders/1.jpg",
      name: "Kimberly Handen",
      role: "Senior Consultant",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {founders.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col p-4">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={400}
              className="w-100 h-80 rounded-lg"
            />
            <h3 className="mt-4 font-bold text-black">{item.name}</h3>
            <p className="text-black">{item.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
