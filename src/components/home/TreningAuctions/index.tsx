"use client";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide} from "swiper/react";

export default function TreningAuctions() {
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [swiper, setSwiper] = useState<SwiperClass>();
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-5xl" data-aos="fade-right" data-aos-once>Trening Auctions</h2>
      <div className="flex justify-between items-stretch max-md:flex-col">
        <p className="text-white/70 max-w-lg" data-aos="fade-right" data-aos-delay='50' data-aos-once>
          Lorem ipsum dolor sit amet, consectetur adipisc elit amet. Consectetu
          at it lrorem ipsum dolor sit amet.
        </p>
        <div className="flex gap-3 text-xl font-bold max-md:w-full max-md:mt-2" data-aos="fade-left" data-aos-delay='50' data-aos-once>
          <button className="border rounded-sm px-4 grid place-items-center hover:bg-white/20 active:bg-white/10 max-md:w-full max-md:py-3" onClick={handlePrev}>
            {"<"}
          </button>
          <button
            className="border rounded-sm px-4 grid place-items-center hover:bg-white/20 active:bg-white/10 max-md:w-full max-md:py-3"
            onClick={handleNext}>
            {">"}
          </button>
        </div>
      </div>
      <Swiper
        style={{
          height:550,
          // @ts-ignore
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        ref={sliderRef}
        spaceBetween={50}
        speed={1000}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          830: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSwiper={setSwiper}
        onSlideChange={(s)=>{
          setActiveSlide(s.activeIndex)
        }}
        centeredSlides={true}
        modules={[Navigation, Autoplay]}
        className="w-full items-center">
        {activeSlide}
        <SwiperSlide>
          <div className={`flex flex-col gap-2 p-5 border rounded w-96 max-w-[350px] ${activeSlide === 0 ? 'border-white' : 'border-white/50'}`}>
            <div className="flex justify-between">
              <h4 className="text-2xl">Verualy Art</h4>
              <span className="text-white/70 text-sm">@nftsart</span>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/images/image1.png"}
                alt="nft2"
                width={350}
                height={600}
                className={`${activeSlide === 0 ? 'w-64':'w-full'} transition-all duration-500`}
              />
              <div className={`flex flex-col items-center gap-3 justify-around overflow-hidden transition-all duration-500 ${activeSlide === 0 ? 'w-20' : 'w-0'}`}>
                <Image
                  src={"/images/fakeUser1.png"}
                  alt="fakeUser"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col gap-1">
                  <Image
                    src={"/images/heartIcon.png"}
                    alt="heartIcon"
                    width={50}
                    height={50}
                  />
                  45.5K
                </div>
                <div className="flex flex-col gap-1">
                  <Image
                    src={"/images/networkIcon.png"}
                    alt="networkIcon"
                    width={50}
                    height={50}
                  />
                  25.6K
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xl">
              <span>15h : 05m : 26s</span>
              <span>20.25 ETH</span>
            </div>
            <div className="flex justify-between text-white/70 text-sm">
              <span>Remaining Time</span>
              <span>Highest bid</span>
            </div>
            <button className={`bg-white text-black text-center rounded transition-all hover:bg-white/20 hover:text-white border overflow-hidden ${activeSlide === 0 ? 'h-full py-2 opacity-100': 'h-0 py-0 opacity-0'}`}>
              Place a Bid
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex flex-col gap-2 p-5 border rounded w-96 max-w-[350px] ${activeSlide === 1 ? 'border-white' : 'border-white/50'}`}>
            <div className="flex justify-between">
              <h4 className="text-2xl">CAT ICON ART</h4>
              <span className="text-white/70 text-sm">@nftsart</span>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/images/image2.png"}
                alt="nft2"
                width={400}
                height={600}
                className="w-full"
              />
              <div className={`flex flex-col items-center gap-3 justify-around overflow-hidden transition-all duration-500 ${activeSlide === 1 ? 'w-20' : 'w-0'}`}>
                <Image
                  src={"/images/fakeUser1.png"}
                  alt="fakeUser"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col gap-1">
                  <Image
                    src={"/images/heartIcon.png"}
                    alt="heartIcon"
                    width={50}
                    height={50}
                  />
                  45.5K
                </div>
                <div className="flex flex-col gap-1">
                  <Image
                    src={"/images/networkIcon.png"}
                    alt="networkIcon"
                    width={50}
                    height={50}
                  />
                  25.6K
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xl">
              <span>15h : 05m : 26s</span>
              <span>20.25 ETH</span>
            </div>
            <div className="flex justify-between text-white/70 text-sm">
              <span>Remaining Time</span>
              <span>Highest bid</span>
            </div>
            <button className={`bg-white text-black text-center rounded transition-all hover:bg-white/20 hover:text-white border overflow-hidden ${activeSlide === 1 ? 'h-full py-2 opacity-100': 'h-0 py-0 opacity-0'}`}>
              Place a Bid
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex flex-col gap-2 p-5 border rounded w-96 max-w-[350px] ${activeSlide === 2 ? 'border-white' : 'border-white/50'}`}>
            <div className="flex justify-between">
              <h4 className="text-2xl">DOG ICON ART</h4>
              <span className="text-white/70 text-sm">@nftsart</span>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/images/image3.png"}
                alt="nft2"
                width={350}
                height={600}
                className={`${activeSlide === 2 ? 'w-64':'w-full'} transition-all duration-500`}
              />
              <div className={`flex flex-col items-center gap-3 justify-around overflow-hidden transition-all duration-500 ${activeSlide === 2 ? 'w-20' : 'w-0'}`}>
                <Image
                  src={"/images/fakeUser1.png"}
                  alt="fakeUser"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col gap-1">
                  <Image
                    src={"/images/heartIcon.png"}
                    alt="heartIcon"
                    width={50}
                    height={50}
                  />
                  45.5K
                </div>
                <div className="flex flex-col gap-1">
                  <Image
                    src={"/images/networkIcon.png"}
                    alt="networkIcon"
                    width={50}
                    height={50}
                  />
                  25.6K
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xl">
              <span>15h : 05m : 26s</span>
              <span>20.25 ETH</span>
            </div>
            <div className="flex justify-between text-white/70 text-sm">
              <span>Remaining Time</span>
              <span>Highest bid</span>
            </div>
            <button className={`bg-white text-black text-center rounded transition-all hover:bg-white/20 hover:text-white border overflow-hidden ${activeSlide === 2 ? 'h-full py-2 opacity-100': 'h-0 py-0 opacity-0'}`}>
              Place a Bid
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`flex flex-col gap-2 p-5 border rounded w-96 max-w-[350px] ${activeSlide === 3 ? 'border-white' : 'border-white/50'}`}>
            <div className="flex justify-between">
              <h4 className="text-2xl">Verualy Art</h4>
              <span className="text-white/70 text-sm">@nftsart</span>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/images/c4-1.png"}
                alt="nft2"
                width={350}
                height={600}
                className={`${activeSlide === 3 ? 'w-64':'w-full'} transition-all duration-500`}
              />
              <div className={`flex flex-col items-center gap-3 justify-around overflow-hidden transition-all duration-500 ${activeSlide === 3 ? 'w-20' : 'w-0'}`}>
                <Image
                  src={"/images/fakeUser1.png"}
                  alt="fakeUser"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col gap-1">
                  <Image
                    src={"/images/heartIcon.png"}
                    alt="heartIcon"
                    width={50}
                    height={50}
                  />
                  45.5K
                </div>
                <div className="flex flex-col gap-1">
                  <Image
                    src={"/images/networkIcon.png"}
                    alt="networkIcon"
                    width={50}
                    height={50}
                  />
                  25.6K
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xl">
              <span>15h : 05m : 26s</span>
              <span>20.25 ETH</span>
            </div>
            <div className="flex justify-between text-white/70 text-sm">
              <span>Remaining Time</span>
              <span>Highest bid</span>
            </div>
            <button className={`bg-white text-black text-center rounded transition-all hover:bg-white/20 hover:text-white border overflow-hidden ${activeSlide === 3 ? 'h-full py-2 opacity-100': 'h-0 py-0 opacity-0'}`}>
              Place a Bid
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
