import React from "react";

type PageProps = {
  img: string;
};

const Eventcard = ({ img }: PageProps) => {
  return (
    <div className="mt-10 cursor-pointer md:w-[25rem]">
      <img src={img} alt="" className="w-full" />
      <div className="text-black mt-4 px-3">
        <h3 className="text-lg">Living Healthier</h3>
        <div className="text-xxs font-medium flex my-1">
          <p className="border-r-2 pr-3 border-r-green">13 December</p>
          <p className="pl-3">Virtual & In-person</p>
        </div>
        <p className="text-xs mt-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit felis primis,
          tristique quis class sagittis sapien sociosqu proin accumsan metus,
          leo aliquet taciti cum vulputate orci velit eros. Montes quis suscipit
          curae est eu netus, non habitasse ullamcorper porta fusce, dapibus
          nulla dis primis platea. Maecenas suspendisse ultrices gravida ante
          purus magna ultricies dapibus vitae eget, leo nascetur iaculis cursus
          lacinia elementum primis justo penatibus, dictumst facilisis congue
          sem ligula netus curabitur pellentesque eleifend. Fusce nascetur
          habitasse pretium facilisi pharetra in venenatis suscipit aliquet
          curae vel neque, ultricies nec purus et class faucibus integer lacus
          donec vitae. Eget montes conubia donec phasellus arcu per, in nam eros
          scelerisque suspendisse porta morbi, class proin accumsan curabitur
          pharetra.
        </p>
        <button className="bg-black text-white px-10 py-3 rounded-full mt-6">
          Register now
        </button>
      </div>
    </div>
  );
};

export default Eventcard;
