import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Tooltip as ReactTooltip } from "react-tooltip";
import useAuth from "../hooks/useAuth";
import Supportbtn from "./support-btn";

const Navweb = () => {
  const [handleLogin, handleLogout, session, status] = useAuth();
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
    <div className="relative h-[4rem]">
      <nav className="flex w-full border-b-2 border-b-green justify-between px-[5%] bg-white fixed top-0 z-30 py-3 items-center">
        <p className="text-xl">LOGO</p>
        <div className="hidden w-[40%] h-full lg:flex justify-between items-center ">
          <div id="home" onClick={activate} className="navitem">
            <Link href={"/"}>
              <p className="text-lg navitem">Home</p>
            </Link>
          </div>
          <div id="about" onClick={activate} className="navitem">
            <Link href={"/about"}>
              <p className="text-lg navitem">About</p>
            </Link>
          </div>
          <div id="blogs" onClick={activate} className="navitem">
            <Link href={"/blogs"}>
              <p className="text-lg navitem">Blogs</p>
            </Link>
          </div>
          {/* <div id="learn" onClick={activate} className="navitem">
            <Link href={"/learn"}>
              <p className="text-lg navitem">Learn</p>
            </Link>
          </div> */}
          <div id="events" onClick={activate} className="navitem">
            <Link href={"/events"}>
              <p className="text-lg navitem">Events</p>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Supportbtn nav={true} />
          {status == "loading" ? (
            <AiOutlineLoading3Quarters className="text-lg animate-spin ml-4 text-green" />
          ) : session && session.user && session.user.picture ? (
            <>
              <img
                src={session.user.picture}
                alt="profile image"
                id="profile"
                onClick={handleLogout}
                data-tooltip-content="Click to logout"
                className="h-[2.5rem] w-[2.5rem] border-2 border-green rounded-full ml-4 cursor-pointer"
              />
              <ReactTooltip anchorId="profile" />
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="text-black bg-none px-10 py-2 border-2 border-green text-xs  md:text-base font-medium rounded-full"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navweb;
