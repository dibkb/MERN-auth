import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <h3>Register</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
        }}
      >
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
