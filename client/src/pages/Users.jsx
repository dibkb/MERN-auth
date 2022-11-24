import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import "./user.css";
const Users = () => {
  let userData;
  const { fetchUser, profile, loading } = useGetUserInfo();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  useEffect(() => {
    const id = user?.userId;
    if (id) {
      fetchUser(id);
    }
  }, [user]);
  let content;
  if (loading) {
    content = <h4>HOLD TIGHT !!!!.......</h4>;
  } else {
    content = (
      <section
        style={{
          fontSize: "24px",
          fontWeight: 400,
          border: "2px solid orange",
          padding: "2rem",
        }}
      >
        <h4 className="rainbow">NAME : {profile?.name}</h4>
        <h4 className="rainbow">EMAIL : {profile?.email}</h4>
        <h4 className="rainbow">HASHED PASSWORD : {profile?.password}</h4>
      </section>
    );
  }
  return (
    <div>
      <h1>USERS PAGE</h1>
      <p className="rainbow-two">TOKEN : {user?.token}</p>
      {content}
    </div>
  );
};

export default Users;
