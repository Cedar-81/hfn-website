const Opportunity = () => {
  return (
    <div className="mt-[6rem] py-[4rem] md:py-[8rem] px-[5%] bg-black flex flex-col justify-center ">
      <div className="text-white">
        <h2 className="text-2xl leading-snug text-center mb-4 md:text-3xl">
          Equal Opportunities for Everyone.
        </h2>
        <p className="text-sm text-left mb-10 md:mb-[6rem] md:text-base lg:w-[60%] mx-auto">
          At Young With Haemophilia, we believe that everyone deserves equal
          opportunities, regardless of their condition. That's why we're
          committed to creating a community that is open, welcoming, and
          inclusive of all individuals living with haemophilia. We recognize
          that this condition can be isolating, and our goal is to provide a
          space where people can connect with others who understand what they're
          going through. We also understand that people with haemophilia face
          unique challenges in their daily lives, and we strive to advocate for
          equal access to healthcare, education, and other resources that can
          improve their quality of life. <br />
          <br />
          We're committed to creating a safe and supportive environment where
          everyone can feel valued and empowered. Whether you're newly diagnosed
          or have been living with haemophilia for years, we welcome you to join
          our community and share your experiences with us. Together, we can
          work towards a more inclusive future for people with haemophilia.
        </p>
      </div>
      <img className="w-full" alt="" src="/assets/oppimg.png" />
      <button className="px-8 py-2 md:w-max mx-auto md:px-[7rem] md:text-lg bg-green text-white rounded-full mt-8">
        Support.
      </button>
    </div>
  );
};

export default Opportunity;
