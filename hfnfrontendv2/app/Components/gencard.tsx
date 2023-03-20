"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imageProps } from "../sanity-client/client";
import { blogDataType } from "../../typings/app-typings";

type PageProp = {
  data: blogDataType[0];
  schedule: boolean;
};

const Gencard = ({ data, schedule }: PageProp) => {
  return (
    <Link href={"blogs/" + data?.url_slug.current}>
      <div className="mt-10 min-w-[20rem] pb-8 md:max-w-[20rem] h-max snap-center bg-[#00000074] rounded-3xl">
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
              alt={data ? data?.image_alt_text : "blog image"}
              className="w-full rounded-3xl"
            />
          </div>
        )}
        <div className="text-white mt-8 px-7">
          <h3 className="text-lg">{data?.title}</h3>
          <p className="text-xs mt-4">{data?.summary}</p>
        </div>

        {schedule && (
          <button className="text-white bg-green px-10 py-2 font-medium rounded-full mt-4 mx-7 md:text-sm">
            Schedule
          </button>
        )}
      </div>
    </Link>
  );
};

export default Gencard;
