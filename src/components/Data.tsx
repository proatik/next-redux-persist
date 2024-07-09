"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Data = () => {
  const counter = useSelector((store: RootState) => store.counter);
  const random = useSelector((store: RootState) => store.random);

  return (
    <fieldset className="border-2 border-slate-800 py-4 px-8 rounded-md w-full box-border">
      <legend className="bg-slate-800 px-2 py-1 rounded-md font-medium text-lg">
        Store
      </legend>

      <pre className="text-teal-500 text-[18px]">
        {JSON.stringify({ counter, random }, null, 4)}
      </pre>
    </fieldset>
  );
};

export default Data;
