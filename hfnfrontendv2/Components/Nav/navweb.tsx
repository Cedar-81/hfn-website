import Link from "next/link";
import React from "react";

const Navweb = () => {
  return (
    <nav className="flex w-full justify-between px-[5%] bg-white md:fixed top-0 z-40 py-3 items-center">
      <p className="text-xl">LOGO</p>
      <div className="hidden w-[40%] h-full lg:flex justify-between items-center ">
        <Link href={"/"}>
          <p className="text-lg">Home</p>
        </Link>
        <Link href={"/about"}>
          <p className="text-lg">About</p>
        </Link>
        <Link href={"/blogs"}>
          <p className="text-lg">Blogs</p>
        </Link>
        <Link href={"/learn"}>
          <p className="text-lg">Learn</p>
        </Link>
        <Link href={"/events"}>
          <p className="text-lg">Events</p>
        </Link>
      </div>
      <button className="text-white bg-red px-10 animate-pulse py-2 font-medium rounded-full">
        Support
      </button>
    </nav>
  );
};

export default Navweb;
