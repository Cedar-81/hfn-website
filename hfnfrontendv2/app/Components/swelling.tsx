import React from "react";

const Swelling = () => {
  return (
    <div className="px-[5%]">
      <div className="px-[5%] text-center mt-[5rem]">
        <h2 className="text-xl text-green font-medium md:text-3xl">
          Swelling?
        </h2>
        <p className="text-sm leading-snug mt-2 md:text-base mx-auto lg:w-[60%]">
          If you have hemophilia and get hurt, using R.I.C.E. can help you feel
          better and prevent more bleeding. Here's what each letter means:{" "}
          <br />{" "}
          <span className="text-xs text-red font-medium">
            <i>
              Remember to ask an adult for help and to contact your doctor if
              you have any concerns.
            </i>
          </span>
        </p>
      </div>

      <div className="md:grid md:grid-cols-4">
        <div className="flex flex-col text-center">
          <div className="text-green font-medium text-center text-xl md:text-3xl w-[7rem] h-[7rem] flex justify-center items-center mt-10 mb-4 mx-auto p-10 rounded-full shadow-lg">
            R
          </div>
          <p className="text-base mx-auto mt-4 md:text-lg">Rest</p>
          <p className="text-xs mt-2 w-[80%] mx-auto">
            Rest is an important part of managing swelling in the joint of a
            person with Haemophilia. When a joint is swollen, it can be painful
            to move or put pressure on. Resting means taking a break and not
            using the affected joint to allow it to heal and recover. This can
            help reduce pain and inflammation, and prevent further damage to the
            joint.
          </p>
        </div>

        <div className="flex flex-col text-center">
          <div className="text-green font-medium text-center text-xl md:text-3xl w-[7rem] h-[7rem] flex justify-center items-center mt-10 mb-4 mx-auto rounded-full shadow-lg">
            I
          </div>
          <p className="text-base mx-auto mt-4 md:text-lg">Ice</p>
          <p className="text-xs mt-2 w-[80%] mx-auto">
            "Ice" refers to the use of a cold compress on a joint that is
            swollen due to Haemophilia. This can help to alleviate pain and
            reduce inflammation. It is important to use a cloth or towel to
            protect the skin when applying the cold compress.
          </p>
        </div>

        <div className="flex flex-col text-center">
          <div className="text-green font-medium text-center text-xl md:text-3xl w-[7rem] h-[7rem] flex justify-center items-center mt-10 mb-4 mx-auto rounded-full shadow-lg">
            C
          </div>
          <p className="text-base mx-auto mt-4 md:text-lg">Compress</p>
          <p className="text-xs mt-2 w-[80%] mx-auto">
            "Compression" is a method used to reduce swelling in a joint of a
            person with Haemophilia. It involves wrapping the affected area with
            an elastic bandage to decrease blood flow and swelling. However, it
            is important to wrap the bandage snugly without cutting off
            circulation. This can help ease pain and inflammation, promoting
            faster joint healing.
          </p>
        </div>

        <div className="flex flex-col text-center">
          <div className="text-green font-medium text-center text-xl md:text-3xl w-[7rem] h-[7rem] flex justify-center items-center mt-10 mb-4 mx-auto rounded-full shadow-lg">
            E
          </div>
          <p className="text-base mx-auto mt-4 md:text-lg">Elevate</p>
          <p className="text-xs mt-2 w-[80%] mx-auto">
            "Elevation" refers to raising the affected area above the heart to
            help reduce swelling in a joint of a person with Haemophilia.
            Elevating the affected area above the heart helps reduce swelling in
            a joint for people with Haemophilia. Use a pillow or cushion to keep
            the limb elevated above heart level. Gravity reduces blood flow to
            the area, reducing swelling, pain, and inflammation. This can help
            the joint to heal faster. Remember to maintain the elevation as
            needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Swelling;
