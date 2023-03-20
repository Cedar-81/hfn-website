const Banner = () => {
  return (
    <div className="w-full flex flex-col px-[5%] relative justify-center items-center h-[45vh]">
      <h1 className="text-2xl text-center p-[5%] md:p-0  text-green font-medium md:text-h3">
        EVENTS
      </h1>
      <p className="text-center text-sm leading-snug md:text-lg md:pt-[1rem] lg:w-[60%] mx-auto">
        One of the best ways to get people together is through events. With that
        in mind we provide you with events dedicated to bringing us together to
        share knowledge and love.
      </p>
      <ul className="w-screen absolute bottom-0 border-2 border-green" />
    </div>
  );
};

export default Banner;
