import React from "react";
import Banner from "../../Components/About/banner";
import Abtinfo from "../../Components/About/abtinfo";
import Moreinfo from "../../Components/About/moreinfo";
import Opportunity from "../../Components/About/opportunity";
import Testimonial from "../../Components/Home/testimonial";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Banner />
      <Abtinfo />
      <Moreinfo />
      <Opportunity />
      <Testimonial />
    </div>
  );
};

export default About;
