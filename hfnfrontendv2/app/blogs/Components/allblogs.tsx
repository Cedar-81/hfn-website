"use client";
import Gencard from "../../Components/gencard";
import useFetchBlog2 from "../../hooks/useFetchBlog2";
import useLoadMore from "../../hooks/useLoadMore";
import Nocontent from "../../Components/nocontent";
import Loading from "@/app/Components/loading";

const Allblogs = () => {
  const { data, isLoading, isError } = useFetchBlog2();
  const [slicedData, loadMore] = useLoadMore(data);

  return (
    <div className="bg-black text-white pt-[4rem] px-[5%] md:w-full">
      <h2 className="text-green mx-auto text-center pt-[4rem] md:text-lg">
        ALL BLOGS
      </h2>
      <h3 className="text-lg lg:text-xl text-center mx-auto py-8 leading-snug md:text-3xl md:w-[60%]">
        Here are some other great topics. It&lsquo;s definitely worth a read.
      </h3>

      {data && data.length < 1 && <Nocontent dark={true} />}

      <div className=" flex flex-col justify-evenly gap-10 md:flex-wrap md:flex-row">
        {isLoading && (
          <div className="md:grid md:grid-cols-2 space-y-6 w-full md:justify-items-center">
            <Loading dark={true} />
            <Loading dark={true} />
          </div>
        )}
        {slicedData?.map((blog) => (
          <Gencard key={blog._id} data={blog} schedule={false} />
        ))}
      </div>

      <div className="w-full flex justify-center pt-12 pb-8">
        {data && slicedData && slicedData.length < data.length && (
          <button
            onClick={loadMore}
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
