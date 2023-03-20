"use client";
import useFetchEvent2 from "../hooks/useFetchEvent2";
import Eventcard from "./eventcard";
import Nocontent from "./nocontent";
import Loading from "./loading";

const Events = () => {
  const { data, isLoading, isError } = useFetchEvent2();

  return (
    <div className="px-[5%] pt-[4rem] pb-[6rem] ">
      <div className="text-center mt-[5rem]">
        <h2 className="text-xl text-green font-medium md:text-3xl">Events.</h2>
        <p className="text-sm leading-snug mt-2 md:text-base mx-auto lg:w-[60%]">
          Stay up-to-date with our latest events and join us in building a
          supportive community for those living with haemophilia.
        </p>
      </div>

      {data && data.length < 1 && <Nocontent dark={false} />}

      <div className="mt-[4rem] md:grid md:grid-cols-3 md:justify-items-center">
        {isLoading && (
          <div className="md:grid md:grid-cols-2 space-y-6 w-full md:justify-items-center">
            <Loading />
            <Loading />
          </div>
        )}
        {data?.map((event) => (
          <Eventcard key={event._id} data={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
