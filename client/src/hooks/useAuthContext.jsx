import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  console.log(context);
  if (!context) {
    throw Error("useContext must be used inside Context Provider");
  }
  return context;
};
