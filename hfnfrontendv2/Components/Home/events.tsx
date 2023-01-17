import React from "react";
import Eventcard from "./eventcard";

const Events = () => {
  return (
    <div className="px-[5%] pt-[4rem] pb-[6rem] ">
      <div className="text-center mt-[5rem]">
        <h2 className="text-xl text-green font-medium md:text-3xl">Events.</h2>
        <p className="text-sm leading-snug mt-2 md:text-base mx-auto lg:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quisque sem
          dapibus accumsan ac praesent, magnis faucibus eros nisl orci non.
        </p>
      </div>

      <div className="mt-[4rem] md:flex md:gap-[5rem] md:flex-wrap md:justify-evenly">
        <Eventcard img={"/assets/eventimg1.png"} />
        <Eventcard img={"/assets/eventimg2.png"} />
        <Eventcard img={"/assets/eventimg3.png"} />
        <Eventcard img={"/assets/eventimg4.png"} />
      </div>
    </div>
  );
};

export default Events;
