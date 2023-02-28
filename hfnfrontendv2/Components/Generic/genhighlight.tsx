import Image from "next/image";
import React, { useEffect, useState } from "react";
import bkgimg from "../../public/assets/blogimg1.png";
import { imageProps } from "../client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { indexing_v3 } from "googleapis";

type PageProp = {
  title: string;
  data?: [
    {
      title: string;
      summary: string;
      image_alt_text: string;
      details?: string;
      image: {
        asset: {
          url: string;
        };
      };
    }
  ];
};

const Genhighlight = ({ title, data }: any) => {
  const blogs = data?.map((item: any, index: any) => (
    <SwiperSlide key={index}>
      <div className="highlightimg relative h-[30rem] w-full bg-no-repeat bg-cover bg-center ">
        {data && (
          <div className="h-full relative">
            <Image
              fill
              objectFit="cover"
              priority={true}
              unoptimized
              //@ts-ignore
              src={imageProps(item).src}
              //@ts-ignore
              loader={imageProps(item).loader}
              alt={item ? item?.image_alt_text : "blog image"}
              className="w-full md:rounded-3xl z-0"
            />
          </div>
        )}
        <div className="absolute bottom-8 px-4 text-white z-10 md:ml-[4rem] md:mb-8">
          <h2 className=" md:text-xl text-lg md:w-[50%]">{item?.title}</h2>
          <p className="mt-4 text-sm md:text-base md:w-[70%]">
            {item?.summary
              ? item?.summary.slice(0, 300) + "..."
              : item.details?.slice(0, 300) + "..."}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className="w-full mt-[6rem] md:px-[5%] md:rounded-2xl">
      <h2 className="font-semibold mx-auto text-center mb-[3rem] text-green uppercase md:text-lg">
        {title}
      </h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        pagination={true}
        navigation={true}
        className="swiper"
      >
        {blogs}
      </Swiper>
    </div>
  );
};

export default Genhighlight;
