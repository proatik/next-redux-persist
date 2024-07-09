import { UUID, uuid } from "@/utils/uuid";
import { createSlice } from "@reduxjs/toolkit";

export type RandomState = {
  id: UUID;
  number: number;
};

const initialState: RandomState = {
  id: "00000-00000-00000-00000-00000",
  number: 7.111,
};

export const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    randomID: (state) => {
      state.id = uuid();
    },
    randomNumber: (state) => {
      state.number = Number((Math.random() * 10000).toFixed(3));
    },
  },
});

export const { randomID, randomNumber } = randomSlice.actions;

export default randomSlice.reducer;
