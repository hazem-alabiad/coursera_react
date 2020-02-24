import { createStore } from "redux";
import { reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
  const store = createStore(reducer, initialState);
  return store;
};
