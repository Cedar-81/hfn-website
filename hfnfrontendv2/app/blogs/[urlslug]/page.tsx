"use client";
import React from "react";
import Blogdetails from "@/Components/Blogs/blogdetails";

type PageProps = {
  params: {
    urlslug: string;
  };
};

const Blog = ({ params: { urlslug } }: PageProps) => {
  return <Blogdetails url_slug={urlslug} />;
};

export default Blog;
