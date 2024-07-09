"use client";

import { ReactNode, useLayoutEffect } from "react";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

store.subscribe(() => {
  const state = store.getState();

  if (state) localStorage.setItem("store", JSON.stringify(state));
});

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  useLayoutEffect(() => {
    const state = localStorage.getItem("store");

    if (state) {
      store.dispatch({ type: "INITIATE", payload: JSON.parse(state) });
    }
  }, []);
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
