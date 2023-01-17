import React from "react";
import Testimonialcard from "./testimonialcard";

const Testimonial = () => {
  return (
    <div className="bg-black text-white px-[5%] py-[5rem] md:flex">
      <div className="md:min-w-[50%] pr-[3rem]">
        <ul className="border-2 border-green w-20 mb-2" />
        <h3 className="text-xl font-medium mb-8 md:text-3xl">
          Unheard Voices.
        </h3>
        <p className="text-xs md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipiscing, elit sodales
          ultricies turpis sociis, praesent donec diam eleifend magnis.
          Vestibulum tempus eu inceptos duis scelerisque integer, turpis nulla
          habitasse magna mattis quis, feugiat rutrum quisque nisi tincidunt.
          Integer cras mi sociosqu quam nullam erat facilisi sociis cubilia,
          scelerisque pretium class sollicitudin hac et donec. Luctus tempus
          penatibus platea sem cubilia lacus tempor etiam morbi taciti, massa
          conubia tincidunt tristique volutpat hac himenaeos lobortis urna sed,
          rutrum suscipit varius fermentum ullamcorper orci curae fringilla
          primis.
        </p>
      </div>

      <div className="mt-12 flex overflow-x-scroll gap-10 snap-x md:mt-0">
        <Testimonialcard />
        <Testimonialcard />
        <Testimonialcard />
      </div>
    </div>
  );
};

export default Testimonial;
