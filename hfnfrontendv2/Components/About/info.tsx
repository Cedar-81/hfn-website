import React from "react";

const Info = () => {
  return (
    <div className="md:flex md:items-center">
      <div className="md:w-[50%]">
        <h4 className="text-lg font-medium mt-8 md:text-2xl">
          Join the community.
        </h4>
        <p className="text-sm mt-4">
          Fusce nascetur habitasse pretium facilisi pharetra in venenatis
          suscipit aliquet curae vel neque, ultricies nec purus et class
          faucibus integer lacus donec vitae. Eget montes conubia donec
          phasellus arcu per, in nam eros scelerisque suspendisse porta morbi,
          class proin accumsan curabitur pharetra.
        </p>
        <button className="px-8 py-2 bg-red text-white rounded-full mt-4">
          Hop on in.
        </button>
      </div>

      <div className="relative h-[25rem] md:ml-10 md:w-full">
        <img
          className="absolute h-[6rem] md:h-[8rem] top-[50%] left-[50%] translate-x-[-160%] translate-y-[-90%]  lg:translate-x-[-200%]"
          alt=""
          src="/assets/moreinfoimg1.png"
        />
        <img
          className="absolute h-[4rem] md:h-[6rem] top-[50%] left-[50%] translate-x-[-100%] translate-y-[-250%] lg:translate-y-[-200%]"
          alt=""
          src="/assets/moreinfoimg2.png"
        />
        <img
          className="absolute h-[5rem] top-[50%] md:h-[6rem] left-[50%] translate-x-[90%] translate-y-[-160%] lg:translate-y-[-140%]"
          alt=""
          src="/assets/moreinfoimg3.png"
        />
        <img
          className="absolute h-[8rem] top-[50%] md:h-[10rem] left-[50%] translate-x-[-50%] translate-y-[-30%]  lg:translate-y-[-10%]"
          alt=""
          src="/assets/moreinfoimg4.png"
        />
      </div>
    </div>
  );
};

export default Info;
