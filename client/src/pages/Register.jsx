import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sumbitHandler = async (e) => {
    e.preventDefault();
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
    const data = await response.json();
    console.log(data);
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
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button onClick={sumbitHandler}>Register</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
