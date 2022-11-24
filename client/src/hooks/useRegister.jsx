import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const useRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const registerUser = async (name, email, password) => {
    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    if (response.ok) {
      return navigate("/login");
    } else {
      const json = await response.json();
      setError(json.message);
    }
  };
  return [registerUser, error];
};
