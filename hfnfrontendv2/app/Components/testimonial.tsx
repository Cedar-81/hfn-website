"use client";
import Testimonialcard from "./testimonialcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Nocontent from "./nocontent";

const Testimonial = () => {
  return (
    <div className="bg-black text-white px-[5%] py-[5rem] md:flex md:justify-evenly">
      <div className="md:w-[45%] pr-[3rem]">
        <ul className="border-2 border-green w-20 mb-2" />
        <h3 className="text-xl font-medium mb-8 md:text-3xl">
          Unheard Voices.
        </h3>
        <p className="text-xs md:text-sm">
          As an organization, Young With Haemophilia aims to positively
          influence and educate less knowledgeable youngsters with Haemophilia,
          as well as society at large, to have the right attitude towards people
          living with this condition. A major aspect of this mission is to give
          voice to the unheard stories of our youth.
          <br />
          <br />
          That's why we have compiled a collection of stories from our
          youngsters, which range from experiences of being beaten by longer
          bleeds to tales of survival and triumph. These stories are a testament
          to the resilience and strength of our youth, and they acknowledge that
          the journey with Haemophilia may not be easy or straightforward.
          However, with the trials they've faced, our young people have gained
          valuable knowledge that can help them live better lives in the future.{" "}
          <br />
          <br />
          Through these stories, we hope to shed more light on what is possible
          for those living with Haemophilia, and how they can overcome the
          challenges that come with it. We believe that by sharing these
          stories, we can raise awareness, understanding, and empathy towards
          those living with this condition, and ultimately help to create a more
          inclusive and supportive society.
        </p>
      </div>

      <div className="mt-12 md:mt-0 md:w-[30rem]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          pagination={true}
          navigation={true}
          className="swiper"
        >
          <SwiperSlide>
            <div className="border-2 border-green min-w-[20rem] snap-center mt-10 text-white rounded-3xl p-7">
              <Nocontent dark={true} />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <Testimonialcard />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonialcard />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonialcard />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
