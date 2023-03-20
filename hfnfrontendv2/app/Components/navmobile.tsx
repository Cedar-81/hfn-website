import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { BiCalendarEvent, BiSpreadsheet, BiBookReader } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";
import Link from "next/link";

const Navmobile = () => {
  const [opensidebar, setOpensidebar] = useState(false);

  const handleSidebar = () => {
    setOpensidebar((prev) => !prev);
  };

  return (
    <nav className="lg:hidden z-30 fixed bottom-0 text-black w-screen border-t-2 border-t-green bg-white">
      {opensidebar && (
        <div className="h-screen animate-slide_in w-[75%] pl-8 pt-10 left-0 fixed z-40 bg-white top-0">
          <Link
            onClick={handleSidebar}
            href="/about"
            className="flex items-center mb-8"
          >
            <BiBookReader className="text-2xl mr-3" />
            <p className="text-lg font-medium">About</p>
          </Link>
          <Link
            onClick={handleSidebar}
            href="/events"
            className="flex items-center mb-8"
          >
            <BiCalendarEvent className="text-2xl mr-3" />
            <p className="text-lg font-medium">Events</p>
          </Link>
          {/* <Link
            onClick={handleSidebar}
            href="/learn"
            className="flex items-center mb-8"
          >
            <SiSololearn className="text-2xl mr-3" />
            <p className="text-lg font-medium">Learn</p>
          </Link> */}
        </div>
      )}
      <div className="flex px-[5%] h-[4.2rem] justify-between items-center">
        <Link href="/blogs" className="flex flex-col items-center">
          <BiSpreadsheet className="text-3xl" />
          <p className="text-xs mt-2">Blog</p>
        </Link>
        <Link href="/" className="flex flex-col items-center">
          <FiHome className="text-3xl" />
          <p className="text-xs mt-2">Home</p>
        </Link>
        <div className="flex flex-col items-center">
          {opensidebar && (
            <AiOutlineMenuUnfold onClick={handleSidebar} className="text-3xl" />
          )}
          {!opensidebar && (
            <AiOutlineMenu onClick={handleSidebar} className="text-3xl" />
          )}
          {opensidebar && <p className="text-xs mt-2">Hide</p>}
          {!opensidebar && <p className="text-xs mt-2">Menu</p>}
        </div>
      </div>
    </nav>
  );
};

export default Navmobile;
