import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const userGetAllUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        console.log('API response data:', res.data);

        const response = await axios.get(
          "http://localhost:5002/user/getUserProfile",
          {
            Credentials: "include",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAllUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.log("Error in userDetAllUsers " + err);
      }
    };
    getUsers();
  }, []);
  return [allUsers, loading];
};

export default userGetAllUser;
