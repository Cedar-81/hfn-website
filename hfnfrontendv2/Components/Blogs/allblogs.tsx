"use client";
import React from "react";
import Gencard from "../Generic/gencard";
import useFetchBlog from "../hooks/useFetchBlog";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Allblogs = () => {
  const [allblogs, loadmore, loadedall, allblogdata, status] =
    useFetchBlog(false);

  return (
    <div className="bg-black text-white pt-[4rem] px-[5%] md:w-full">
      <h2 className="text-green mx-auto text-center pt-[4rem] md:text-lg">
        ALL BLOGS
      </h2>
      <h3 className="text-xl text-center mx-auto py-8 leading-snug md:text-3xl md:w-[60%]">
        Here are some other great topics. It&lsquo;s definitely worth a read.
      </h3>

      <div className=" flex flex-col justify-evenly gap-10 md:flex-wrap md:flex-row">
        {status === "loading" && (
          <AiOutlineLoading3Quarters className="animate-spin" />
        )}
        {status === "loaded" &&
          allblogs?.map((blog: any) => (
            <Gencard data={blog} schedule={false} />
          ))}
      </div>

      <div className="w-full flex justify-center pt-12 pb-8">
        {status === "loaded" && !loadedall && (
          <button
            onClick={loadmore}
            className="text-white md:mx-auto bg-green px-10 mx-auto py-3 font-medium rounded-full "
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Allblogs;
