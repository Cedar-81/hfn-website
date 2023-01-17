import React from "react";
import bkgimg from "../../public/assets/blogimg1.png";

type PageProp = {
  title: string;
};

const Genhighlight = ({ title }: PageProp) => {
  const styling = {
    backgroundImage: `url(${bkgimg.src})`,
  };

  return (
    <div className="w-full mt-[6rem] md:px-[5%] md:rounded-2xl">
      <h2 className="font-semibold mx-auto text-center mb-[3rem] text-green uppercase md:text-lg">
        {title}
      </h2>
      <div
        style={styling}
        className="highlightimg relative h-[30rem] w-full bg-no-repeat bg-cover bg-center "
      >
        <div className="absolute bottom-8 px-4 text-white z-10 md:ml-[4rem] md:mb-8">
          <h2 className="text-xl md:w-[50%]">Title Goes Here</h2>
          <p className="text-clip mt-4 md:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit felis primis,
            tristique quis class sagittis sapien sociosqu proin accumsan metus,
            leo aliquet taciti cum vulputate orci velit eros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Genhighlight;
