"use client";
import React, { useState } from "react";
import Info from "./info";

const Moreinfo = () => {
  const [active, setActive] = useState("1");

  const activate = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    const elements = document.querySelectorAll(".topics");
    elements.forEach((element) => {
      element.classList.remove("border-b-2", "border-b-red");
    });
    const target = e.target as Element;
    setActive(target.id);
    target.classList.add("border-b-2", "border-b-red");
  };

  return (
    <div className="mt-[6rem] px-[5%]">
      <h2 className="text-2xl text-center font-medium text-red md:text-3xl">
        How We Help.
      </h2>

      <div className="slide-show">
        <div className="flex justify-center">
          <div className="flex max-w-full mt-8 mb-8">
            <h3
              onClick={activate}
              id="1"
              className="cursor-pointer topics font-medium px-4 py-2 border-b-2 border-b-red"
            >
              Community
            </h3>
            <h3
              onClick={activate}
              id="2"
              className="cursor-pointer topics font-medium px-4 py-2"
            >
              Treatment
            </h3>
            <h3
              onClick={activate}
              id="3"
              className="cursor-pointer topics font-medium px-4 py-2"
            >
              Education
            </h3>
          </div>
        </div>

        <div className="mt-[4rem]">
          {active == "1" && (
            <Info title={"Join the community."} buttonText={"Hop on in."} />
          )}
          {active == "2" && (
            <Info title={"Verified treatment."} buttonText={"Read about it."} />
          )}
          {active == "3" && (
            <Info title={"Stay ahead."} buttonText={"Explore research."} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Moreinfo;
