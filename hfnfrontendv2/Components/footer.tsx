import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { IoMdHelpCircle } from "react-icons/io";

const Footercomponent = () => {
  return (
    <div className="px-[5%] py-[5rem] text-white bg-black border-t-2 border-t-red">
      <div className="flex flex-col md:flex-row md:items-baseline">
        <p className="text-lg pr-8">Follow us</p>
        <div className="flex gap-6 mt-4">
          <div className="h-[2.6rem] w-[2.6rem] rounded-full bg-white text-green flex justify-center items-center">
            <BsFacebook className="text-xl" />
          </div>
          <div className="h-[2.6rem] w-[2.6rem] rounded-full bg-white text-green flex justify-center items-center">
            <BsTwitter className="text-xl" />
          </div>
          <div className="h-[2.6rem] w-[2.6rem] rounded-full bg-white text-green flex justify-center items-center">
            <BsInstagram className="text-xl" />
          </div>
          <div className="h-[2.6rem] w-[2.6rem] rounded-full bg-white text-green flex justify-center items-center">
            <BsYoutube className="text-xl" />
          </div>
        </div>
      </div>
      <div className="mt-[5rem] md:w-[50%] md:justify-between md:flex md:mx-auto">
        <Link href={"/"}>
          <p className="text-lg mt-4">Home</p>
        </Link>
        <Link href={"/about"}>
          <p className="text-lg mt-4">About</p>
        </Link>
        <Link href={"/blogs"}>
          <p className="text-lg mt-4">Blogs</p>
        </Link>
        <Link href={"/learn"}>
          <p className="text-lg mt-4">Learn</p>
        </Link>
        <Link href={"/events"}>
          <p className="text-lg mt-4">Events</p>
        </Link>
      </div>
      <p className="mt-[5rem] text-lg flex items-center md:justify-end">
        <IoMdHelpCircle className="text-xl mr-1" /> Help
      </p>
    </div>
  );
};

export default Footercomponent;
