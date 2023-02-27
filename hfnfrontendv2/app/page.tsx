"use client";
import React from "react";
import Banner from "../Components/Home/banner";
import About from "../Components/Home/about";
import Beaware from "../Components/Home/beaware";
import Blogs from "../Components/Home/blogs";
import Swelling from "../Components/Home/swelling";
import Events from "../Components/Home/events";
import Testimonial from "../Components/Home/testimonial";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Banner />
      <About />
      <Beaware />
      <Blogs />
      <Swelling />
      <Events />
      <Testimonial />
    </div>
  );
};

export default Home;
