"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { use } from "react";
import { client } from "../client";
import { user_query } from "../utils/data";

const useCreateEvent = () => {
  const { data: session, status } = useSession();
  const createEvent = (req_data: any) => {
    if (status == "authenticated") {
      //@ts-ignore
      const val = session.user?.sub;
      const query = user_query(val);
      client.fetch(query).then((data: any) => {
        fetch("http://localhost:3000/api/calendar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...req_data, token: data[0].token }),
        });
      });
    }
  };

  return [(data: any) => createEvent(data)];
};

export default useCreateEvent;
