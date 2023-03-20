import Image from "next/image";
import { imageProps } from "../../sanity-client/client";
import { blogDetailsDataType } from "../../../typings/app-typings";

type PageProps = {
  data: blogDetailsDataType;
};

const Blogdetbanner = ({ data }: PageProps) => {
  return (
    <div className="w-full h-max pb-6 lg:pb-0 relative border-b-2 border-green lg:flex lg:flex-row-reverse">
      {data && (
        <div className="h-[70vh] md:h-[90vh] w-full md:w-[50%] relative">
          <Image
            fill
            priority={true}
            unoptimized
            //@ts-ignore
            src={imageProps(data).src}
            //@ts-ignore
            loader={imageProps(data).loader}
            alt={data ? data?.image_alt_text : "blog image"}
            className="w-full object-cover"
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
