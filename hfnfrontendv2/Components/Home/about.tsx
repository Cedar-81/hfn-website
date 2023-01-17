import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row px-[5%]  mt-[5rem]">
      <div className="mt-[3rem] md:mt-[9rem]">
        <h2 className="text-xl md:text-3xl font-medium text-red">About Us.</h2>
        <p className="text-sm mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos
          integer leo, maecenas ac vulputate blandit id eros sem elementum
          euismod eget, nunc accumsan dictumst tempus et mi sapien congue
          hendrerit. Venenatis orci euismod sem quam morbi parturient aliquam,
          dignissim volutpat inceptos senectus ultricies fermentum.
          <br />
          <br />
          Diam ut auctor interdum vitae pharetra cubilia maecenas felis dapibus,
          malesuada integer iaculis viverra luctus ridiculus tempus tortor,
          himenaeos dis quisque hac massa gravida class sociis.
        </p>
      </div>

      <div className="relative w-full md:h-[30rem] md:min-w-[60%] h-[20rem] overflow-x-hidden">
        <Image
          src="/assets/abtimg1.png"
          width={200}
          height={100}
          priority={true}
          unoptimized
          alt=""
          className="absolute w-[8rem] md:w-[13rem] top-[50%] left-[50%] translate-x-[-130%] md:translate-x-[-160%] translate-y-[-158%] z-10"
        />
        <Image
          src="/assets/abtimg2.png"
          width={200}
          height={100}
          priority={true}
          unoptimized
          alt=""
          className="absolute w-[17rem] md:w-[28rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <Image
          src="/assets/abtimg3.png"
          width={200}
          height={100}
          priority={true}
          unoptimized
          alt=""
          className="absolute w-[8rem] md:w-[13rem] top-[50%] left-[50%] translate-x-[30%] md:translate-x-[60%] translate-y-[58%]"
        />
      </div>
    </div>
  );
};

export default About;
