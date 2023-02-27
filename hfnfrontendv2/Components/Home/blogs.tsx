import Link from "next/link";
import React from "react";
import useFetchBlog from "../hooks/useFetchBlog";
import Blogcard from "./blogcard";

const Blogs = () => {
  const [allblogs, loadmore, loadedall, allblogdata] = useFetchBlog(false);
  return (
    <div className="px-[5%] bg-black py-[5rem] md:py-[10rem] mt-[5rem]">
      <div className="text-center text-white">
        <h2 className="text-xl font-medium md:text-3xl">Blogs.</h2>
        <p className="text-sm leading-snug mt-2 md:text-base lg:w-[60%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, quisque sem
          dapibus accumsan ac praesent, magnis faucibus eros nisl orci non.
        </p>
      </div>

      <div className="mt-[4rem] md:flex md:gap-[5rem] md:flex-wrap md:justify-evenly">
        {allblogdata?.map((data: any, index) => (
          <Link key={index} href={"blogs/" + data.url_slug.current}>
            <Blogcard img="something" data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
