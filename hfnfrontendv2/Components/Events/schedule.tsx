"use client";
import React from "react";
import useFetchEvent from "../hooks/useFetchEvent";
import Eventcard from "./eventcard";

const Schedule = () => {
  const [allevents, loadmore, loadedall] = useFetchEvent();
  return (
    <div className="bg-black text-white pt-[6rem] px-[5%] md:mt-[8rem]">
      <h2 className="text-green mx-auto text-center md:text-lg pt-[4rem]">
        SCHEDULE FOR LATER
      </h2>

      <div className=" flex overflow-x-auto gap-10 pb-10 snap-x md:flex-wrap md:justify-evenly md:mt-[4rem]">
        {allevents?.map((event: any, index) => (
          <Eventcard key={index} data={event} />
        ))}
      </div>

      <div className="w-full flex justify-center">
        {!loadedall && (
          <button
            onClick={loadmore}
            className="text-white bg-green px-10 mx-auto py-3 font-medium rounded-full mt-12 mb-8"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Schedule;
