"use client";
import { useFlutterPay } from "../hooks/useFlutterPay";

type PageProps = {
  nav: boolean;
};

const Supportbtn = ({ nav }: PageProps) => {
  const [makePayment] = useFlutterPay();

  const supportStyles = {
    nav: "text-white bg-red px-10 text-xs md:text-base animate-pulse py-2 font-medium rounded-full",
    banner:
      "px-8 py-2 md:px-[3.5rem] md:my-[2rem] md:text-lg border-2 rounded-full text-red bg-white animate-bounce font-medium",
  };

  return (
    <button
      onClick={makePayment}
      className={nav ? supportStyles.nav : supportStyles.banner}
    >
      Support
    </button>
  );
};

export default Supportbtn;
