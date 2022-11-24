import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, error] = useRegister();
  const sumbitHandler = (e) => {
    e.preventDefault();
    signup(name, email, password);
    // setName("");
    // setEmail("");
    // setPassword("");
  };
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
        <input
          style={{
            fontSize: "1rem",
          }}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={sumbitHandler}
        >
          Register
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
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
