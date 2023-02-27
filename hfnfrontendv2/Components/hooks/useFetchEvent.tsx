"use client";
import React, { useEffect, useState } from "react";
import { client } from "../client";
import { event_query } from "../utils/data";

type data = {
  data?: {
    title: string;
    details: string;
    image_alt_text: string;
    in_person: boolean;
    virtual: boolean;
    hybrid: boolean;
    start_datetime: Date;
    end_datetime: Date;
    image: {
      asset: {
        url: string;
      };
    };
  };
};

const useFetchEvent = (): [Array<data> | null, () => void, boolean] => {
  const [events, setEvents] = useState<Array<data> | null>(null);
  const [loadamt, setLoadamt] = useState(3);
  const [loadedall, setLoadedAll] = useState(true);
  useEffect(() => {
    const query = event_query();
    client.fetch(query).then((data) => {
      if (data.length == 0 || loadamt >= data.length) setLoadedAll(true);
      if (data.length > 0 && loadamt <= data.length) setLoadedAll(false);
      if (data.length > 0) {
        return setEvents(data?.slice(0, loadamt));
      }
    });
  }, []);
  return [events, () => setLoadamt((prev) => prev + 3), loadedall];
};

export default useFetchEvent;
