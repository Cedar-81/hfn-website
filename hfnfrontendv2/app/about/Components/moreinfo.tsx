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

  const texts = {
    community:
      "Join our Young With Haemophilia community and connect with others who understand the unique challenges of living with this condition. As a member, you'll have access to a wealth of resources, including educational materials, peer support, and social events. Our community is geared towards the younger generation, but all are welcome to join. By joining us, you'll be helping to build awareness and reduce the stigma surrounding haemophilia. Together, we can make a difference and create a supportive environment where everyone can thrive. Don't go through this alone - join our community today!",
    treatment:
      "At Young With Haemophilia, we understand that proper treatment is crucial in managing haemophilia. That's why we're committed to working closely with qualified doctors and the Haemophilia Foundation of Nigeria to provide you with insightful information on medication and treatment options. We believe that education is key, and we strive to empower our community with knowledge and resources to make informed decisions about their health. Whether you're just starting your treatment journey or looking to explore different options, we're here to support you every step of the way. Together, we can ensure that everyone living with haemophilia has access to the best possible care.",
    education:
      "At Young With Haemophilia, we believe that education is a crucial component of managing haemophilia. That's why we're committed to providing our community with access to the latest information on this condition, as well as resources and tools to help you navigate the challenges of living with haemophilia. By working together with the Haemophilia Foundation of Nigeria and our peers, we can better convey information, share experiences and support each other on this journey. Our community is geared towards the younger generation, but we welcome all who want to learn and grow with us. Join us today and let's learn together.",
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
            <Info
              title={"Join the community."}
              text={texts.community}
              buttonText={"Hop on in."}
            />
          )}
          {active == "2" && (
            <Info
              title={"Verified treatment."}
              text={texts.treatment}
              buttonText={"Read about it."}
            />
          )}
          {active == "3" && (
            <Info
              title={"Stay ahead."}
              text={texts.education}
              buttonText={"Explore articles."}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Moreinfo;
