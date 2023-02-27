import Image from "next/image";
import React from "react";
import { imageProps } from "../client";

type PageProps = {
  img: string;
  data?: {
    title: string;
    summary: string;
    image_alt_text: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
};

const Blogcard = ({ img, data }: PageProps) => {
  return (
    <div className="mt-10 cursor-pointer md:w-[25rem]">
      {data && (
        <div className="h-[17rem] w-full relative">
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
      <div className="text-white mt-8 px-3">
        <h3 className="text-lg">{data?.title}</h3>
        <p className="text-xs mt-4">{data?.summary}</p>
      </div>
    </div>
  );
};

export default Blogcard;
