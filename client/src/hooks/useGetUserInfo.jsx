import React, { useState } from "react";
export const useGetUserInfo = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(null);
  const fetchUser = async (_id) => {
    setLoading(true);
    const response = await fetch(`http://localhost:4000/api/user/${_id}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const json = await response.json();
    if (response.ok) {
      setProfile(json);
    } else {
      setProfile("ERROR");
    }
    setLoading(false);
  };
  return { fetchUser, profile, loading };
};
