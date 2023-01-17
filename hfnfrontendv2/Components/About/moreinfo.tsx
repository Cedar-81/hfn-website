import React from "react";
import Info from "./info";

const Moreinfo = () => {
  return (
    <div className="mt-[6rem] px-[5%]">
      <h2 className="text-2xl text-center font-medium text-red md:text-3xl">
        How We Help.
      </h2>

      <div className="slide-show">
        <div className="flex justify-center">
          <div className="flex max-w-full mt-8 mb-8">
            <h3 className="cursor-pointer font-medium px-4 py-2 border-b-2 border-b-red">
              Community
            </h3>
            <h3 className="cursor-pointer font-medium px-4 py-2">Treatment</h3>
            <h3 className="cursor-pointer font-medium px-4 py-2">Education</h3>
          </div>
        </div>

        <div className="mt-[4rem]">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Moreinfo;
