const Abtinfo = () => {
  return (
    <div className="md:flex md:items-center md:mt-[6rem]">
      <div className="min-h-[27rem] w-full md:min-w-[45%] overflow-hidden md:h-[37rem] relative ">
        <img
          alt=""
          src="/assets/abtinfoimg1.png"
          className="absolute h-[6rem] md:h-[10rem] top-[50%] left-[50%] z-10 translate-x-[-30%] translate-y-[-170%] "
        />
        <img
          alt=""
          src="/assets/abtinfoimg2.png"
          className="absolute h-[8rem] md:h-[10rem] top-[50%] left-[50%] translate-x-[-100%] translate-y-[-40%] "
        />
        <img
          alt=""
          src="/assets/abtinfoimg3.png"
          className="absolute h-[10rem] md:h-[13rem] top-[50%] left-[50%] translate-x-[-40%] translate-y-[0%] "
        />
        <img
          alt=""
          src="/assets/abtinfoimg4.png"
          className="absolute h-[9rem] md:h-[12rem] top-[50%] left-[50%] translate-x-[70%] translate-y-[-60%] "
        />
      </div>

      <div className="px-[5%]">
        <p className=" text-sm md:text-base">
          <span className="text-xl font-md md:2xl text-green font-semibold">
            Y
          </span>
          oung With Haemophilia is a community founded by Divinewisdom Ugwuanyi
          to connect and support young people with haemophilia in Nigeria. As
          someone who has experienced firsthand the challenges and isolation
          that can come with living with haemophilia, Divinewisdom was inspired
          to create a community that would foster a sense of belonging and
          provide resources and support for young people like himself.
          <br />
          <br />
          Young With Haemophilia aims to provide a safe and inclusive space
          where young people with haemophilia can connect, share their
          experiences, and learn from each other. Our community is geared
          towards the younger generation and focuses on empowering young people
          with haemophilia to take an active role in managing their condition
          and advocating for their needs.
          <br />
          <br />
          We believe that by raising awareness about haemophilia and reducing
          stigma surrounding the condition, we can create a more supportive and
          inclusive environment for those living with haemophilia.
          <br />
          <br />
          Join our community today to connect with others, access resources and
          information, and make a difference in the lives of young people with
          haemophilia in Nigeria.
        </p>
        <a href="https://discord.gg/FSgqCAEnQp" target="_blank"> 
          <button className="px-8 py-2 bg-green text-white rounded-full mt-4">
            Join the community.
          </button>
        </a>
      </div>
    </div>
  );
};

export default Abtinfo;
