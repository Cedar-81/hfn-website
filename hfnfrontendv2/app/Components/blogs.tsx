"use client";
import Link from "next/link";
import useFetchBlog2 from "../hooks/useFetchBlog2";
import Blogcard from "./blogcard";
import Nocontent from "./nocontent";
import Loading from "./loading";

const Blogs = () => {
  const { data, isLoading, isError } = useFetchBlog2();

  return (
    <div className="px-[5%] bg-black py-[5rem] md:py-[10rem] mt-[5rem]">
      <div className="text-center text-white">
        <h2 className="text-xl font-medium md:text-3xl">Blogs.</h2>
        <p className="text-sm leading-snug mt-2 md:text-base lg:w-[60%] mx-auto">
          Explore our blog for informative articles, personal stories, and
          helpful tips on living with haemophilia.
        </p>
      </div>

      {data && data.length < 1 && <Nocontent dark={false} />}

      <div className="mt-[4rem] md:flex md:gap-[5rem] md:flex-wrap md:justify-evenly">
        {isLoading && (
          <div className="md:grid md:grid-cols-2 space-y-6 w-full md:justify-items-center">
            <Loading dark={true} />
            <Loading dark={true} />
          </div>
        )}
        {data?.slice(0, 4).map((data) => (
          <Link key={data._id} href={"blogs/" + data.url_slug.current}>
            <Blogcard data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
