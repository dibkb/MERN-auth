import React, { useState, useReducer } from "react";
import { reducer, store } from "../context/store";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, store);
  const loginHandler = async (e) => {
    e.preventDefault();
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
    const data = await response.json();
    if (data.status === "ok") {
      localStorage.setItem("token", data.token);
      dispatch({ type: "STORE_USER", payload: data.user });
    }
    // setName("");
    // setEmail("");
    // setPassword("");
  };
  return (
    <div>
      <h3>Login</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginHandler}>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
