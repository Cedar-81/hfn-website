"use client";
import React from "react";
import { Instagram } from "react-content-loader";

type PageParams = {
  dark: boolean;
};

const Loading = ({ dark }: PageParams) => {
  const styles = {
    dark: "md:h-[25rem] md:w-[25rem] opacity-25",
    light: "md:h-[25rem] md:w-[25rem]",
  };
  return <Instagram className={dark ? styles.dark : styles.light} />;
};

export default Loading;
