"use client";
import React, { useEffect, useState } from "react";
import { client } from "../client";
import { blog_query, blog_query_by_views } from "../utils/data";

type data = {
  title: string;
  summary: string;
  image_alt_text: string;
  image: {
    asset: {
      url: string;
    };
  };
};

const useFetchBlog = (
  mostread = false
): [Array<data> | null, () => void, boolean, Array<data> | null, String] => {
  const [blogs, setBlogs] = useState<Array<data> | null>(null);
  const [blogdata, setBlogdata] = useState<Array<data> | []>([]);
  const [mostreaddata, setMostreaddata] = useState<Array<data> | []>([]);
  const [loadamt, setLoadamt] = useState(3);
  const [status, setStatus] = useState<String>("loading");
  const [loadedall, setLoadedAll] = useState(true);

  useEffect(() => {
    setStatus("loading");
    const blog__query = blog_query();
    const mostread__query = blog_query_by_views();
    client.fetch(blog__query).then((data) => setBlogdata(data));
    client.fetch(mostread__query).then((data) => setMostreaddata(data));
    setStatus("loaded");
  }, []);

  useEffect(() => {
    if (!mostread) {
      if (blogdata.length == 0 || loadamt >= blogdata.length)
        setLoadedAll(true);
      if (blogdata.length > 0 && loadamt <= blogdata.length)
        setLoadedAll(false);
      if (blogdata.length > 0) {
        return setBlogs(blogdata.slice(0, loadamt));
      }
    }

    if (mostread) {
      setBlogs(mostreaddata);
    }
  }, [loadamt, blogdata, mostreaddata]);

  return [
    blogs,
    () => setLoadamt((prev) => prev + 3),
    loadedall,
    blogdata,
    status,
  ];
};

export default useFetchBlog;
