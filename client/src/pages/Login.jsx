import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
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
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
