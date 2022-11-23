import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../context/store";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [token, useToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (!token) {
      return navigate("/home");
    }
  }, [token]);
  const user = useContext(AppContext);
  console.log(user, AppContext);
  return (
    <div>
      <h1>USERS PAGE</h1>
      <p style={{ fontSize: "12px" }}>TOEKN : {token}</p>
    </div>
  );
};

export default Users;
