import React from "react";
import Gencard from "../Generic/gencard";
import useFetchLearn from "../hooks/useFetchLearn";

const Important = () => {
  const [articles, loadmore, loadedall] = useFetchLearn(true, true);
  return (
    <div className="bg-black text-white pt-[6rem] px-[5%] md:mt-[8rem]">
      <h2 className="text-green mx-auto text-center pt-[4rem] md:text-lg">
        IMPORTANT TOPICS
      </h2>
      <h3 className="text-xl text-center mx-auto py-8 leading-snug md:text-3xl md:w-[60%]">
        Here are some pretty important topics we think you should know about.
      </h3>

      <div className=" flex overflow-x-scroll gap-10 pb-10 snap-x lg:overflow-hidden lg:flex-wrap lg:gap-[5rem] lg:justify-evenly ">
        {articles?.map((article: any, index) => (
          <Gencard key={index} data={article} schedule={false} />
        ))}
      </div>
    </div>
  );
};

export default Important;
