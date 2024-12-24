import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

function userGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get('jwt');
        const response = await axios.get('http://localhost:5002/user/getUserProfile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // Fix for the `Credentials` issue (explained below)
        });
        setAllUsers(response.data);
        setLoading(false) ;// Assuming the data is returned in `response.data`
      } catch (error) {
        console.log('Error in userGetAllUsers: ' + error);
      }
    };

    getUsers(); 
  }, []);

  return [allUsers, loading];
}

export default userGetAllUsers;