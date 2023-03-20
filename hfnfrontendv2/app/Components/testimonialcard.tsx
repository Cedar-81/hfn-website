import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonialcard = () => {
  return (
    <div className="border-2 border-green min-w-[20rem] snap-center mt-10 text-white rounded-3xl p-7">
      <FaQuoteLeft className="text-xl mb-6" />
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipiscing elit inceptos
        suscipit eros, sagittis nunc lobortis fermentum. Urna ultrices fames
        vulputate erat porta luctus libero, pretium parturient morbi per
        pharetra. Ac integer phasellus nulla taciti ridiculus pellentesque
        nullam, condimentum montes dapibus venenatis et tristique at, pharetra
        diam non magna laoreet vulputate. Morbi netus gravida cum sed augue
        porttitor dictumst vivamus faucibus, vel duis condimentum dis risus
        sapien dui aliquam sollicitudin, turpis quis parturient tincidunt
        blandit ante viverra etiam.
      </p>
      <p className="text-lg mt-6">Alan Spencer Smith</p>
      <p className="text-sm mt-1">Enugu</p>
    </div>
  );
};

export default Testimonialcard;
