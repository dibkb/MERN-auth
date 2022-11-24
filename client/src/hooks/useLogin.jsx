import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const loginUser = async (email, password) => {
    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const json = await response.json();
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setError(false);
    } else {
      setError(json.message);
    }
  };
  return [loginUser, error];
};
