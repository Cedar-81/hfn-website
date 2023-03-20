import { useQuery } from "@tanstack/react-query";
import { client } from "../sanity-client/client";
import { learn_query, learn_query_by_importance } from "../utils/data";
import { blogDetailsDataType } from "../../typings/app-typings";

const useFetchLearn2 = (url_slug: string) => {
  const fetchResearchContent = () => client.fetch(learn_query());
  const fetchResearchContentByImportance = () => client.fetch(learn_query());

  //   return useQuery<blogDetailsDataType>({
  //     queryKey: ["research", url_slug],
  //     queryFn: fetchBlogContent,
  //   });
};

export default useFetchLearn2;
