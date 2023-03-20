import Image from "next/image";

const About = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row px-[5%]  mt-[5rem]">
      <div className="mt-[3rem] md:mt-[9rem]">
        <h2 className="text-xl md:text-3xl font-medium text-red">About Us.</h2>
        <p className="text-sm mt-3 ">
          Young With Haemophilia is a community founded by Divinewisdom Ugwuanyi
          to connect and support young people with haemophilia in Nigeria. As
          someone who has experienced firsthand the challenges and isolation
          that can come with living with haemophilia, Divinewisdom was inspired
          to create a community that would foster a sense of belonging and
          provide resources and support for young people like himself.
          <br />
          <br />
          Young With Haemophilia aims to provide a safe and inclusive space
          where young people with haemophilia can connect, share their
          experiences, and learn from each other.
        </p>
        <div className="flex mt-8 ">
          <button className="px-8 py-2 md:px-[3.5rem] md:my-[2rem] md:text-lg bg-red rounded-full text-white font-medium">
            Join
          </button>
          <button className="px-8 py-2 ml-4 md:px-[3.5rem] md:my-[2rem] md:text-lg border-2 border-red rounded-full text-red font-medium">
            Read More
          </button>
        </div>
      </div>

      <div className="relative w-full md:h-[30rem] md:min-w-[60%] h-[20rem] overflow-x-hidden">
        <Image
          src="/assets/abtimg1.png"
          width={200}
          height={100}
          priority={true}
          unoptimized
          alt=""
          className="absolute w-[8rem] md:w-[13rem] top-[50%] left-[50%] translate-x-[-130%] md:translate-x-[-160%] translate-y-[-158%] z-10"
        />
        <Image
          src="/assets/abtimg2.png"
          width={200}
          height={100}
          priority={true}
          unoptimized
          alt=""
          className="absolute w-[17rem] md:w-[28rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <Image
          src="/assets/abtimg3.png"
          width={200}
          height={100}
          priority={true}
          unoptimized
          alt=""
          className="absolute w-[8rem] md:w-[13rem] top-[50%] left-[50%] translate-x-[30%] md:translate-x-[60%] translate-y-[58%]"
        />
      </div>
    </div>
  );
};

export default About;
