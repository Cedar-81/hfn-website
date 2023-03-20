"use client";
import useFetchEvent2 from "../../hooks/useFetchEvent2";
import Eventcard from "./eventcard";
import useLoadMore from "../../hooks/useLoadMore";
import Nocontent from "../../Components/nocontent";
import Loading from "@/app/Components/loading";

const Schedule = () => {
  const { data, isLoading, isError } = useFetchEvent2();
  const [slicedData, loadMore] = useLoadMore(data);

  return (
    <div className="bg-black text-white pt-[6rem] px-[5%] md:mt-[8rem]">
      <h2 className="text-green mx-auto text-center md:text-lg pt-[4rem]">
        SCHEDULE FOR LATER
      </h2>

      {data && data.length < 1 && <Nocontent dark={true} />}

      <div className="md:grid md:grid-cols-3 md:justify-items-center gap-10 pb-10 md:mt-[4rem]">
        {isLoading && (
          <div className="md:grid md:grid-cols-2 space-y-6 w-full md:justify-items-center">
            <Loading dark={true} />
            <Loading dark={true} />
          </div>
        )}
        {slicedData?.map((event) => (
          <Eventcard key={event._id} data={event} />
        ))}
      </div>

      <div className="w-full flex justify-center">
        {data && slicedData && slicedData.length < data.length && (
          <button
            onClick={loadMore}
            className="text-white bg-green px-10 mx-auto py-3 font-medium rounded-full mt-12 mb-8"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Schedule;
