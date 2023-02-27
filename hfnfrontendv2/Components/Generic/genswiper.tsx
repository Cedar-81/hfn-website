"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Genswiper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      modules={[Navigation, EffectFade]}
      navigation
      effect={"fade"}
      speed={800}
      slidesPerView={1}
    >
      {children}
    </Swiper>
  );
};

export default Genswiper;
