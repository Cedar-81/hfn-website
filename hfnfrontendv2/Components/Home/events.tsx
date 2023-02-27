import React, { use, useState } from "react";
import useFetchEvent from "../hooks/useFetchEvent";
import Eventcard from "./eventcard";

const Events = () => {
  const [allevents, loadmore, loadedall] = useFetchEvent();
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
        {allevents?.map((event) => (
          <Eventcard data={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
