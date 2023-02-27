"use client";
import React from "react";
import Schedule from "../../Components/Events/schedule";
import Genhighlight from "../../Components/Generic/genhighlight";
import Genbanner from "../../Components/Generic/genbanner";
import useFetchEvent from "@/Components/hooks/useFetchEvent";

const Events = () => {
  const [events, loadamt, loadedall] = useFetchEvent();
  return (
    <div>
      <Genbanner title={"EVENTS"} />
      <Genhighlight title={"UPCOMING EVENTS"} data={events} />
      <Schedule />
    </div>
  );
};

export default Events;
