import React, { useEffect, useState } from "react";
import { client } from "../client";
import { blog_content_query } from "../utils/data";

const useFetchBlogContent = (url_slug: string) => {
  const [blogcontent, setBlogcontent] = useState<any>();
  useEffect(() => {
    const blog__content__query = blog_content_query(url_slug);
    client.fetch(blog__content__query).then((data) => setBlogcontent(data));
  }, []);
  return [blogcontent];
};

export default useFetchBlogContent;
