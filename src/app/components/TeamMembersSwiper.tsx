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
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        // when window width is >= 320px (mobile)
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 640px (tablet)
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        // when window width is >= 1024px (desktop)
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 1280px (large desktop)
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {founders.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col p-4 text-center">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={400}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold text-black">{item.name}</h3>
            <p className="text-black">{item.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
