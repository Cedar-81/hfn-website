import React from "react";

type PageProps = {
  img: string;
};

const Blogcard = ({ img }: PageProps) => {
  return (
    <div className="mt-10 cursor-pointer md:w-[25rem]">
      <img src={img} alt="" className="w-full" />
      <div className="text-white mt-8 px-3">
        <h3 className="text-lg">Living Healthier</h3>
        <p className="text-xs mt-4">
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
      </div>
    </div>
  );
};

export default Blogcard;
