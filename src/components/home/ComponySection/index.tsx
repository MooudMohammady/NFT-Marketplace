'use client'

import Image from "next/image";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { SwiperSlide,Swiper } from "swiper/react";

export default function ComponySection() {
  return (
    <section className="flex justify-between items-center my-16" data-aos="zoom-in-up" data-aos-once>
      <Swiper
        style={{
          // @ts-ignore
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={50}
        // navigation={true}
        slidesPerView={'auto'}
        wrapperClass="linear-swiper"
        speed={4000}
        autoplay={{ delay: 0,disableOnInteraction:true }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          830: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        centeredSlides={true}
        modules={[Autoplay,FreeMode]}
        className="w-full items-center justify-between">
        <SwiperSlide>
          <Image
            src={"/images/Amazon Logo.png"}
            alt="Amazon Logo"
            width={150}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/Slack Logo.png"}
            alt="Slack Logo"
            width={150}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/Paradigm Logo.png"}
            alt="Paradigmn Logo"
            width={150}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/Chase Logo.png"}
            alt="Chase Logo"
            width={150}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/Binance Logo.png"}
            alt="Binance Logo"
            width={150}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/Slack Logo.png"}
            alt="Slack Logo"
            width={150}
            height={100}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
