import React from "react";
import Gencard from "../Generic/gencard";

const Allblogs = () => {
  return (
    <div className="bg-black text-white pt-[4rem] px-[5%] md:w-full">
      <h2 className="text-green mx-auto text-center pt-[4rem] md:text-lg">
        ALL BLOGS
      </h2>
      <h3 className="text-xl text-center mx-auto py-8 leading-snug md:text-3xl md:w-[60%]">
        Here are some other great topics. It’s definitely worth a read.
      </h3>

      <div className=" flex flex-col justify-evenly gap-10 md:flex-wrap md:flex-row">
        <Gencard img={"/assets/blogimg4.png"} />
        <Gencard img={"/assets/blogimg4.png"} />
        <Gencard img={"/assets/blogimg4.png"} />
      </div>

      <div className="w-full flex justify-center">
        <button className="text-white md:mx-auto bg-green px-10 mx-auto py-3 font-medium rounded-full mt-12 mb-8">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Allblogs;
