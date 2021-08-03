import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showHandler: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increse(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showHandler = !state.showHandler;
    },
  },
});

const Store = configureStore({
  reducer: counterSlice.reducer,
});

export const actionReducer = counterSlice.actions;

export default Store;
