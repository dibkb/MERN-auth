import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
const Users = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  return (
    <div>
      <h1>USERS PAGE</h1>
      <p style={{ fontSize: "6px" }}>TOEKN : {user.token}</p>
    </div>
  );
};

export default Users;
