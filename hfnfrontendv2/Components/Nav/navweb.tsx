"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Navweb = () => {
  const router = useRouter();
  let path = usePathname();
  useEffect(() => {
    if (path == "/") path = "/home";
    if (path !== null) {
      document
        .getElementById(path?.substring(1))
        ?.classList.add("text-green", "font-medium");
    }
  }, []);

  const activate = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    const elements = document.querySelectorAll(".navitem");
    elements.forEach((element) => {
      element.classList.remove("text-green", "font-medium");
    });
    const target = e.target as Element;
    target.classList.add("text-green", "font-medium");
  };

  return (
    <nav className="flex w-full justify-between px-[5%] bg-white md:fixed top-0 z-40 py-3 items-center">
      <p className="text-xl">LOGO</p>
      <div className="hidden w-[40%] h-full lg:flex justify-between items-center ">
        <div id="home" onClick={activate} className="navitem">
          <Link href={"/"}>
            <p className="text-lg">Home</p>
          </Link>
        </div>
        <div id="about" onClick={activate} className="navitem">
          <Link href={"/about"}>
            <p className="text-lg">About</p>
          </Link>
        </div>
        <div id="blogs" onClick={activate} className="navitem">
          <Link href={"/blogs"}>
            <p className="text-lg">Blogs</p>
          </Link>
        </div>
        <div id="learn" onClick={activate} className="navitem">
          <Link href={"/learn"}>
            <p className="text-lg">Learn</p>
          </Link>
        </div>
        <div id="events" onClick={activate} className="navitem">
          <Link href={"/events"}>
            <p className="text-lg">Events</p>
          </Link>
        </div>
      </div>
      <button className="text-white bg-red px-10 animate-pulse py-2 font-medium rounded-full">
        Support
      </button>
    </nav>
  );
};

export default Navweb;
