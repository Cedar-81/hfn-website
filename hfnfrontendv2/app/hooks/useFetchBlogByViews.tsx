import { useQuery } from "@tanstack/react-query";
import { client } from "../sanity-client/client";
import { blog_query, blog_query_by_views } from "../utils/data";
import { blogDataType } from "../../typings/app-typings";

const useFetchBlog2 = () => {
  const fetchBlogsByViews = () => client.fetch(blog_query_by_views());
  return useQuery<blogDataType>({
    queryKey: ["blogs by views"],
    queryFn: fetchBlogsByViews,
  });
};

export default useFetchBlog2;
