import React from "react";
import Gencard from "../Generic/gencard";

const Concluded = () => {
  return (
    <div className="bg-black text-white pt-[4rem] px-[5%]">
      <h2 className="text-green mx-auto text-center pt-[4rem] md:text-lg">
        CONCLUDED RESEARCH
      </h2>
      <h3 className="text-xl text-center mx-auto py-8 leading-snug md:text-3xl md:w-[60%]">
        We’ve been fortunate enough to wrap up some of our research.
      </h3>

      <div className=" flex flex-col justify-evenly gap-10 md:flex-row md:flex-wrap">
        <Gencard schedule={false} img={"/assets/blogimg4.png"} />
        <Gencard schedule={false} img={"/assets/blogimg4.png"} />
        <Gencard schedule={false} img={"/assets/blogimg4.png"} />
      </div>

      <div className="w-full flex justify-center">
        <button className="text-white bg-green px-10 mx-auto py-3 font-medium rounded-full mt-12 mb-8">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Concluded;
