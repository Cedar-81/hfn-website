import React, { useEffect, useState } from "react";
import { client } from "../client";
import { learn_query, learn_query_by_importance } from "../utils/data";

type data = {
  title: string;
  summary: string;
  image_alt_text: string;
  important: boolean;
  image: {
    asset: {
      url: string;
    };
  };
};

const useFetchLearn = (
  mostread = false,
  important = false
): [Array<data> | null, () => void, boolean] => {
  const [learn, setLearn] = useState<Array<data> | null>(null);
  const [loadamt, setLoadamt] = useState(3);
  const [loadedall, setLoadedAll] = useState(false);

  useEffect(() => {
    if (!mostread) {
      const query = learn_query();
      client.fetch(query).then((data: any) => {
        if (data.length == 0 || loadamt >= data.length) setLoadedAll(true);
        if (data.length > 0) {
          return setLearn(data?.slice(0, loadamt));
        }
      });
    }

    if (important) {
      const query = learn_query_by_importance();
      client
        .fetch(query)
        .then((most_important: Array<data>) => setLearn(most_important));
    }
  }, [loadamt]);
  return [learn, () => setLoadamt((prev) => prev + 3), loadedall];
};

export default useFetchLearn;
