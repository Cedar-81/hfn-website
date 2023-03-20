const Banner = () => {
  return (
    <div className="w-full flex flex-col px-[5%] relative justify-center items-center h-[45vh]">
      <h1 className="text-2xl text-center p-[5%] md:p-0  text-green font-medium md:text-h3">
        RECENT BLOGS
      </h1>
      <p className="text-center text-sm leading-snug md:text-lg md:pt-[1rem] lg:w-[60%] mx-auto">
        Dedicated to providing you with factual content that would help you
        stabilize your health, keeping you updated on tabs to help you be
        healthier, stay stronger and live longer.
      </p>
      <ul className="w-screen absolute bottom-0 border-2 border-green" />
    </div>
  );
};

export default Banner;
