"use client";
import { useState, useEffect } from "react";

function useLoadMore<T>(data: T[] | undefined): [T[] | undefined, () => void] {
  const [length, setLength] = useState(3);
  const [slicedData, setSlicedData] = useState<T[]>();

  useEffect(() => {
    setSlicedData(data?.slice(0, length));
  }, [data, length]);

  slicedData?.map(() => "here");

  const loadMore = () => {
    setLength((prev) => prev + length);
  };

  return [slicedData, loadMore];
}

export default useLoadMore;
