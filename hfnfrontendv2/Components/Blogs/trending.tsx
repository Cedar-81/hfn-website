import React from "react";
import Gencard from "../Generic/gencard";

const Trending = () => {
  return (
    <div className="bg-black text-white pt-[6rem] px-[5%] md:mt-[8rem]">
      <h2 className="text-green mx-auto text-center pt-[4rem] md:text-lg">
        TRENDING
      </h2>
      <h3 className="text-xl text-center mx-auto py-8 leading-snug md:text-3xl md:w-[60%]">
        Here are some of the most read topics currently. Check &lsquo;em out.
      </h3>

      <div className=" flex overflow-x-auto gap-10 pb-10 snap-x md:overflow-hidden md:justify-around">
        <Gencard schedule={false} img={"/assets/blogimg4.png"} />
        <Gencard schedule={false} img={"/assets/blogimg4.png"} />
        <Gencard schedule={false} img={"/assets/blogimg4.png"} />
      </div>
    </div>
  );
};

export default Trending;
