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
    setEmail();
    setPassword();
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
          style={{
            fontSize: "1rem",
          }}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{
            fontSize: "1rem",
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            fontSize: "1rem",
            padding: "1rem",
          }}
          onClick={loginHandler}
        >
          Login
        </button>
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
        {error === false && (
          <div
            style={{
              color: "green",
              border: "1px solid green",
              padding: "1rem 2rem",
            }}
          >
            <Link
              style={{
                color: "green",
              }}
              to="/users"
            >
              Go to your page
            </Link>
          </div>
        )}
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
