"use client";

import { useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
} from "@/redux/counter/counterSlice";

import { randomID, randomNumber } from "@/redux/random/randomSlice";

const Controller = () => {
  const dispatch = useDispatch();

  return (
    <fieldset className="border-2 border-slate-800 py-4 px-8 rounded-md w-full box-border">
      <legend className="bg-slate-800 px-2 py-1 rounded-md font-medium text-lg">
        Controller
      </legend>

      <div className="flex gap-3 items-center mb-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 w-24 rounded-md bg-red-300 text-slate-800 font-bold"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 w-24 text-center rounded-md bg-green-300 text-slate-800 font-bold"
        >
          +1
        </button>
      </div>

      <div className="flex gap-3 items-center mb-4">
        <button
          onClick={() => dispatch(incrementByAmount(-5))}
          className="px-3 py-2 w-24 rounded-md bg-red-300 text-slate-800 font-bold"
        >
          -5
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-3 py-2 w-24 rounded-md bg-green-300 text-slate-800 font-bold"
        >
          +5
        </button>
      </div>

      <div className="flex gap-3 items-center">
        <button
          onClick={() => dispatch(randomID())}
          className="px-3 py-2 w-24  rounded-md bg-violet-300 text-slate-800 font-bold"
        >
          id
        </button>
        <button
          onClick={() => dispatch(randomNumber())}
          className="px-3 py-2 w-24 rounded-md bg-blue-300 text-slate-800 font-bold"
        >
          number
        </button>
      </div>
    </fieldset>
  );
};

export default Controller;
