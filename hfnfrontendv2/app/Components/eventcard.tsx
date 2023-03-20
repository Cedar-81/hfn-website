"use client";
import moment from "moment";
import Image from "next/image";
import { imageProps } from "../sanity-client/client";
import { eventDataType } from "../../typings/app-typings";

type PageProps = {
  data: eventDataType[0];
};

const Eventcard = ({ data }: PageProps) => {
  let date: string = "Not Set";
  if (data)
    date = moment(data.start_datetime)
      .format("MMMM Do YYYY, h:mm a")
      .toString();

  return (
    <div className="mt-10 cursor-pointer md:w-[20rem]">
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
      <div className="text-black mt-4 px-3">
        <h3 className="text-lg">{data?.title}</h3>
        <div className="text-xxs font-medium flex my-1">
          <p className="border-r-2 pr-3 border-r-green">{date}</p>
          <p className="pl-3">
            {data?.hybrid
              ? "Hybrid"
              : data?.in_person
              ? "In Person"
              : data?.virtual
              ? "Virtual"
              : "Unkown"}
          </p>
        </div>
        <p className="text-xs mt-2">{data?.details}</p>
        <button className="bg-black text-white px-10 py-3 rounded-full mt-6">
          Register now
        </button>
      </div>
    </div>
  );
};

export default Eventcard;
