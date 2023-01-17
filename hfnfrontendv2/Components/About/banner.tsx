import React from "react";

const Banner = () => {
  return (
    <div className="min-h-[27rem] flex items-center font-medium relative w-screen">
      <h1 className="text-2xl text-center p-[5%] mx-auto md:text-h3 lg:w-[80%]">
        Committed to finding and helping people with{" "}
        <span className="text-red">bleeding</span> disorders.
      </h1>
      <ul className="w-screen absolute bottom-0 border-2 border-green" />
    </div>
  );
};

export default Banner;
