"use client";
import Genbanner from "../../Components/Generic/genbanner";
import Genhighlight from "../../Components/Generic/genhighlight";
import Trending from "../../Components/Blogs/trending";
import Allblogs from "../../Components/Blogs/allblogs";
import useFetchBlog from "@/Components/hooks/useFetchBlog";

const Blogs = () => {
  const [blogs, loadamt, loadedall] = useFetchBlog(false);

  return (
    <div>
      <Genbanner title={"BLOGS"} />
      <Genhighlight title={"RECENT BLOGS"} data={blogs} />
      <Trending />
      <Allblogs />
    </div>
  );
};

export default Blogs;
