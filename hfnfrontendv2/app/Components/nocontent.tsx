import { FaRunning } from "react-icons/fa";

type PageParams = {
  dark: boolean;
};

const Nocontent = ({ dark }: PageParams) => {
  const styles = {
    dark: "w-full mt-[4rem] flex flex-col items-center text-white/50",
    light: "w-full mt-[4rem] flex flex-col items-center text-black/50",
  };
  console.log("dark", dark);
  return (
    <div className={dark ? styles.dark : styles.light}>
      <FaRunning className="h-[5rem] w-[5rem]" />
      <p className="text-base font-semibold lg:w-[60%] text-center mt-6">
        We working around the clock to get this content to you. Sit back, relax
        and check back in later for new content.
      </p>
    </div>
  );
};

export default Nocontent;
