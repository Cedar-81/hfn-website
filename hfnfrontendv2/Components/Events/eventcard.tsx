"use client";
import Image from "next/image";
import React from "react";
import { imageProps } from "../client";
import moment from "moment";
import useCreateEvent from "../hooks/useCreateEvent";

type PageProps = {
  data?: {
    title: string;
    details: string;
    image_alt_text: string;
    in_person: boolean;
    virtual: boolean;
    hybrid: boolean;
    start_datetime: Date;
    end_datetime: Date;
    location: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
};

const eventcard = ({ data }: PageProps) => {
  const [createEvent] = useCreateEvent();
  let date: string = "Not Set";
  if (data)
    date = moment(data.start_datetime)
      .format("MMMM Do YYYY, h:mm a")
      .toString();
  return (
    <div className="mt-10 cursor-pointer md:w-[25rem]">
      {data && (
        <div className="h-[13rem] relative">
          <Image
            fill // layout="fill" prior to Next 13.0.0
            objectFit="cover"
            priority={true}
            unoptimized
            //@ts-ignore
            src={imageProps(data).src}
            //@ts-ignore
            loader={imageProps(data).loader}
            alt={data ? data?.image_alt_text : "event image"}
            className="w-full rounded-3xl"
          />
        </div>
      )}
      <div className="text-white mt-4 px-3">
        <h3 className="text-lg md:text-xl">{data?.title}</h3>
        <div className="text-xxs font-medium flex my-1">
          <p className="border-r-2 pr-3 border-r-green md:text-sm">{date}</p>
          <p className="pl-3 md:text-sm">
            {data?.hybrid
              ? "Hybrid"
              : data?.in_person
              ? "In Person"
              : data?.virtual
              ? "Virtual"
              : "Unkown"}
          </p>
        </div>
        <p className="text-xs mt-2 md:text-lg">{data?.details}</p>
        <button
          onClick={() => createEvent(data)}
          className="text-white bg-green px-10 py-2 font-medium rounded-full mt-4 md:text-sm"
        >
          Schedule
        </button>
      </div>
    </div>
  );
};

export default eventcard;
