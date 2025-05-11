import React from "react";
import { carousel } from "../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[500px] md:min-h-[550px] bg-gray-100 flex-center duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-secondary/40 absolute -top-2/3 right-0 rounded-3xl rotate-45 z-1"></div>
      {/* carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        className="z-991"
        spaceBetween={12}
        slidesPerView={1}
        draggable={true}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {carousel.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="container mx-auto px-5 mb-10">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full items-center justify-center gap-4">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 relative sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {item.title}
                    </h1>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
                      {item.subtitle}
                    </h2>
                    <p className="text-gray-800 mt-2 mb-4">
                      {item.description}
                    </p>
                    <div>
                      <button className="bg-gradient-to-l from-primary to-[#215cbc] text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                        Check Now
                      </button>
                    </div>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={item.image}
                        alt=""
                        className="w-[300px] sm:w-[450] sm:scale-125 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
