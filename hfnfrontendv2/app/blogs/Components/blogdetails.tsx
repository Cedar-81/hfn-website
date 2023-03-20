import BlockContent from "@sanity/block-content-to-react";
import Blogdetbanner from "./blogdetbanner";
import { ImSpinner } from "react-icons/im";
import useFetchBlogContent2 from "../../hooks/useFetchBlogContent2";

const Blogdetails = ({ url_slug }: any) => {
  const { data, isLoading, isError } = useFetchBlogContent2(url_slug);

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
      {isLoading && (
        <div className="h-screen flex justify-center items-center w-full">
          <div className="flex  gap-4 ">
            <ImSpinner className="text-xl animate-spin text-orange" />
            <p className="text-lg">Loading...</p>
          </div>
        </div>
      )}

      {data && !data.content && (
        <div className="h-screen flex justify-center items-center w-full">
          <div className="flex  gap-4 ">
            <p className="text-lg">Content Not Found.</p>
          </div>
        </div>
      )}

      {data && data.content && (
        <div className="mb-[6rem] relative">
          <Blogdetbanner data={data} />
          <div className="mt-[3rem] px-[5%] lg:mt-[8rem] lg:px-[20%]">
            <BlockContent
              className="prose prose-a:text-green prose-a:underline"
              blocks={data.content}
              serializers={serializers}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Blogdetails;
