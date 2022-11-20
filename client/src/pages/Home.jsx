import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <header>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </header>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
