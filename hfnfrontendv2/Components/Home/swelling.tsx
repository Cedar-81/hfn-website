import React from "react";

const Swelling = () => {
  return (
    <div className="px-[5%]">
      <div className="px-[5%] text-center mt-[5rem]">
        <h2 className="text-xl text-green font-medium md:text-3xl">
          Swelling?
        </h2>
        <p className="text-sm leading-snug mt-2 md:text-base mx-auto lg:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quisque sem
          dapibus accumsan ac praesent, magnis faucibus eros nisl orci non.
        </p>
      </div>

      <div className="md:flex md:mt-[4rem]">
        <div className="flex flex-col text-center">
          <div className="text-green font-medium text-center text-xl md:text-3xl w-[7rem] h-[7rem] flex justify-center items-center mt-10 mb-4 mx-auto p-10 rounded-full shadow-lg">
            R
          </div>
          <p className="text-base mx-auto mt-4 md:text-lg">Rest</p>
          <p className="text-xs mt-2 w-[80%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit felis primis,
            tristique quis class sagittis sapien sociosqu proin accumsan metus,
            leo aliquet taciti cum vulputate orci velit eros.
          </p>
        </div>

        <div className="flex flex-col text-center">
          <div className="text-green font-medium text-center text-xl md:text-3xl w-[7rem] h-[7rem] flex justify-center items-center mt-10 mb-4 mx-auto rounded-full shadow-lg">
            I
          </div>
          <p className="text-base mx-auto mt-4 md:text-lg">Ice</p>
          <p className="text-xs mt-2 w-[80%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit felis primis,
            tristique quis class sagittis sapien sociosqu proin accumsan metus,
            leo aliquet taciti cum vulputate orci velit eros.
          </p>
        </div>

        <div className="flex flex-col text-center">
          <div className="text-green font-medium text-center text-xl md:text-3xl w-[7rem] h-[7rem] flex justify-center items-center mt-10 mb-4 mx-auto rounded-full shadow-lg">
            C
          </div>
          <p className="text-base mx-auto mt-4 md:text-lg">Compress</p>
          <p className="text-xs mt-2 w-[80%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit felis primis,
            tristique quis class sagittis sapien sociosqu proin accumsan metus,
            leo aliquet taciti cum vulputate orci velit eros.
          </p>
        </div>

        <div className="flex flex-col text-center">
          <div className="text-green font-medium text-center text-xl md:text-3xl w-[7rem] h-[7rem] flex justify-center items-center mt-10 mb-4 mx-auto rounded-full shadow-lg">
            E
          </div>
          <p className="text-base mx-auto mt-4 md:text-lg">Elevate</p>
          <p className="text-xs mt-2 w-[80%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit felis primis,
            tristique quis class sagittis sapien sociosqu proin accumsan metus,
            leo aliquet taciti cum vulputate orci velit eros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Swelling;
