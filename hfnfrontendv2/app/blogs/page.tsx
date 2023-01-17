import React from "react";
import Genbanner from "../../Components/Generic/genbanner";
import Genhighlight from "../../Components/Generic/genhighlight";
import Trending from "../../Components/Blogs/trending";
import Allblogs from "../../Components/Blogs/allblogs";

const Blogs = () => {
  return (
    <div>
      <Genbanner title={"BLOGS"} />
      <Genhighlight title={"RECENT BLOGS"} />
      <Trending />
      <Allblogs />
    </div>
  );
};

export default Blogs;
