import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="h-screen overflow-y-hidden overflow-x-hidden relative">
        <div className="relative h-full">
          <Image
            width={200}
            height={100}
            priority={true}
            unoptimized
            src="/assets/bnrimg1.png"
            alt=""
            className="w-[10rem] md:w-[20rem] absolute top-[3rem] left-[-1.2rem]"
          />
          <Image
            width={200}
            height={100}
            priority={true}
            unoptimized
            src="/assets/bnrimg2.png"
            alt=""
            className="w-[10rem] md:w-[20rem] absolute top-[50%] right-0 translate-x-[1.5rem] translate-y-[-50%]"
          />
          <Image
            width={200}
            height={100}
            priority={true}
            unoptimized
            src="/assets/bnrimg3.png"
            alt=""
            className="w-[10rem] md:w-[20rem] absolute bottom-[-1rem] left-[3rem]"
          />
        </div>
        <div className="absolute z-20 w-[90%] text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-65%] md:translate-y-[-40%]">
          <h1 className="text-black md:text-h2 font-medium text-2xl leading-snug ">
            Helping People with <br />
            <span className="text-red">Haemophilia</span> in Nigeria
          </h1>
          <p className="text-black lg:w-[60%] md:text-lg mx-auto leading-snug text-sm mt-4 font-medium">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, platea
            aenean elementum dignissim in duis et, metus habitasse pharetra
            potenti molestie gravida, torquent congue volutpat felis curae
            porta.
          </p>
          <div className="mt-8 flex justify-evenly md:w-[45%] md:mx-auto">
            <button className="px-8 py-2 md:px-[3.5rem] md:my-[2rem] md:text-lg bg-red rounded-full text-white font-medium">
              Enquire
            </button>
            <button className="px-8 py-2 md:px-[3.5rem] md:my-[2rem] md:text-lg border-2 rounded-full text-red bg-white animate-bounce font-medium">
              Support
            </button>
          </div>
        </div>
      </div>
      <ul className="border-2 border-green" />
    </div>
  );
};

export default Banner;
