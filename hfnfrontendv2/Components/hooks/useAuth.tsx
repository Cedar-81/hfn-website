import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { client } from "../client";

const useAuth = (): any => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    const { email, name, picture, sub }: any = session?.user;

    //@ts-ignore
    if (session.refresh_token && email && name && picture) {
      const userInfo = {
        _id: sub,
        _type: "user",
        name: name,
        email: email,
        image: picture,
        //@ts-ignore
        token: session.refresh_token,
      };
      client.createOrReplace(userInfo);

      //@ts-ignore
      session.refresh_token = null;
    }
  }

  return [() => signIn(), () => signOut(), session, status];
};

export default useAuth;
