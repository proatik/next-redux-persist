import { configureStore, combineReducers } from "@reduxjs/toolkit";

import randomReducer from "./random/randomSlice";
import counterReducer from "./counter/counterSlice";

const combinedReducer = combineReducers({
  random: randomReducer,
  counter: counterReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "INITIATE") {
    return action.payload;
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
