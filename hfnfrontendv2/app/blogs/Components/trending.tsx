"use client";
import Gencard from "../../Components/gencard";
import useFetchBlogByViews from "../../hooks/useFetchBlogByViews";
import Nocontent from "../../Components/nocontent";
import Loading from "../../Components/loading";

const Trending = () => {
  const { data, isLoading, isError } = useFetchBlogByViews();
  return (
    <div className="bg-black text-white pt-[6rem] px-[5%]">
      <h2 className="text-green mx-auto text-center pt-[4rem] md:text-lg">
        TRENDING
      </h2>
      <h3 className="text-lg lg:text-xl text-center mx-auto py-8 leading-snug md:text-3xl md:w-[60%]">
        Here are some of the most read topics currently. Check &lsquo;em out.
      </h3>

      {data && data.length < 1 && <Nocontent dark={true} />}

      <div className=" flex overflow-x-auto gap-10 pb-10 snap-x md:overflow-hidden md:justify-around">
        {isLoading && <Loading dark={true} />}
        {data?.map((blog) => (
          <Gencard key={blog._id} data={blog} schedule={false} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
