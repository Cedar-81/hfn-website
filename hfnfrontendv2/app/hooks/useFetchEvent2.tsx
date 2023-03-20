import { useQuery } from "@tanstack/react-query";
import { client } from "../sanity-client/client";
import { event_query } from "../utils/data";
import { eventDataType } from "../../typings/app-typings";

const useFetchEvent2 = () => {
  const fetchEvents = () => client.fetch(event_query());

  return useQuery<eventDataType>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });
};

export default useFetchEvent2;
