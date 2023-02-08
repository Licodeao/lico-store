import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import homeReducer from "./modules/home";

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

const makeStore = () => store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(makeStore);
