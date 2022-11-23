import { createContext } from "react";
export const store = "";
export const reducer = (state, action) => {
  switch (action.type) {
    case "STORE_USER":
      return { ...action.payload };
    default:
      return state;
  }
};
export const AppContext = createContext(store);
