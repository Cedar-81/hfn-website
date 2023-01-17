import React from "react";
import Genbanner from "../../Components/Generic/genbanner";
import Genhighlight from "../../Components/Generic/genhighlight";
import Important from "../../Components/Research/important";
import Concluded from "../../Components/Research/concluded";

const Learn = () => {
  return (
    <div>
      <Genbanner title={"Learn"} />
      <Genhighlight title={"Learn"} />
      <Important />
      <Concluded />
    </div>
  );
};

export default Learn;
