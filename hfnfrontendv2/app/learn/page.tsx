"use client";
import React from "react";
import Genbanner from "../../Components/Generic/genbanner";
import Genhighlight from "../../Components/Generic/genhighlight";
import Important from "../../Components/Research/important";
import Concluded from "../../Components/Research/concluded";
import useFetchLearn from "@/Components/hooks/useFetchLearn";

const Learn = () => {
  const [learn, loadamt, loadedall] = useFetchLearn(false);
  return (
    <div>
      <Genbanner title={"Learn"} />
      <Genhighlight title={"Learn"} data={learn} />
      <Important />
      <Concluded />
    </div>
  );
};

export default Learn;
