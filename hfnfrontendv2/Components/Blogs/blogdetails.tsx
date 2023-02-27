import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Blogdetbanner from "./blogdetbanner";
import { ImSpinner } from "react-icons/im";
import useFetchBlogContent from "../hooks/useFetchBlogContent";

const Blogdetails = ({ url_slug }: any) => {
  const [blogcontent] = useFetchBlogContent(url_slug);

  const serializers = {
    types: {
      code: (props: any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <>
      {!blogcontent && (
        <div className="h-screen flex justify-center items-center w-full">
          <div className="flex  gap-4 ">
            <ImSpinner className="text-xl animate-spin text-orange" />
            <p className="text-lg">Loading...</p>
          </div>
        </div>
      )}

      {blogcontent && blogcontent.content == "undefined" && (
        <div className="h-screen flex justify-center items-center w-full">
          <div className="flex  gap-4 ">
            <p className="text-lg">Content Not Found.</p>
          </div>
        </div>
      )}

      {blogcontent && blogcontent.content && (
        <div className="mb-[6rem] relative">
          <Blogdetbanner data={blogcontent} />
          <div className="mt-[3rem] px-[5%] lg:mt-[8rem] lg:px-[20%]">
            <BlockContent
              className="markdown"
              blocks={blogcontent.content}
              serializers={serializers}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Blogdetails;
