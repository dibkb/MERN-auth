import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, error] = useLogin();
  const loginHandler = (e) => {
    e.preventDefault();
    loginUser(email, password);
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
        {error && (
          <div
            style={{
              color: "red",
              border: "1px solid red",
              padding: "1rem 2rem",
            }}
          >
            {error}
          </div>
        )}
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
