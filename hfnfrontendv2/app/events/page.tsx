import React from "react";
import Schedule from "../../Components/Events/schedule";
import Genhighlight from "../../Components/Generic/genhighlight";
import Genbanner from "../../Components/Generic/genbanner";

const Events = () => {
  return (
    <div>
      <Genbanner title={"EVENTS"} />
      <Genhighlight title={"UPCOMING EVENTS"} />
      <Schedule />
    </div>
  );
};

export default Events;
