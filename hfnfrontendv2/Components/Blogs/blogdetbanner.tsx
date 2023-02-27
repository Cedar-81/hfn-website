import Image from "next/image";
import React from "react";
import { imageProps } from "../client";

const Blogdetbanner = ({ data }: any) => {
  return (
    <div className="w-full h-max relative border-b-2 border-green lg:flex lg:flex-row-reverse">
      {data && (
        <div className="h-[70vh] md:h-[90vh] w-full md:w-[50%] relative">
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
            className="w-full"
          />
        </div>
      )}
      <div className="text-black md:absolute md:bottom-[4rem] md:left-8 mt-8 px-3 w-full md:max-w-[40%]">
        <h3 className="text-xl font-medium">{data?.title}</h3>
        <p className="text-sm mt-4">{data?.summary}</p>
      </div>
    </div>
  );
};

export default Blogdetbanner;
