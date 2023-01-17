import React from "react";

type PageProp = {
  img: string;
  schedule: boolean;
};

const Gencard = ({ img, schedule }: PageProp) => {
  return (
    <div className="mt-10 min-w-[20rem] pb-8 md:max-w-[20rem] h-max snap-center bg-[#00000074] rounded-3xl">
      <img src={img} alt="" className="w-full" />
      <div className="text-white mt-8 px-7">
        <h3 className="text-lg">Living Healthier</h3>
        <p className="text-xs mt-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit felis primis,
          tristique quis class sagittis sapien sociosqu proin accumsan metus,
          leo aliquet taciti cum vulputate orci velit eros. Montes quis suscipit
          curae est eu netus, non habitasse ullamcorper porta fusce, dapibus
          nulla dis primis platea. Maecenas suspendisse ultrices gravida ante
          purus magna ultricies dapibus vitae eget, leo nascetur iaculis cursus
          lacinia elementum primis justo penatibus, dictumst facilisis congue
          sem ligula netus curabitur pellentesque eleifend.
        </p>
      </div>

      {schedule && (
        <button className="text-white bg-green px-10 py-2 font-medium rounded-full mt-4 mx-7 md:text-sm">
          Schedule
        </button>
      )}
    </div>
  );
};

export default Gencard;
