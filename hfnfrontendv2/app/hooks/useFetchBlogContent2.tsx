import { useQuery } from "@tanstack/react-query";
import { client } from "../sanity-client/client";
import { blog_content_query } from "../utils/data";
import { blogDetailsDataType } from "../../typings/app-typings";

const useFetchBlogContent2 = (url_slug: string) => {
  const fetchBlogContent = () => client.fetch(blog_content_query(url_slug));

  return useQuery<blogDetailsDataType>({
    queryKey: ["blogs-detail", url_slug],
    queryFn: fetchBlogContent,
  });
};

export default useFetchBlogContent2;
