import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

function userGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]); // Ensuring allUsers is initialized as an empty array
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true); // Show loading while fetching data
      try {
        const token = Cookies.get('jwt');
        if (!token) {
          console.log("No JWT token found in cookies");
        }
        const response = await axios.get('/api/user/getUserProfile', {
          withCredentials: true, // Ensures credentials like cookies are sent with the request
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });


        if (response.data && Array.isArray(response.data.filteredUsers)) {
          // Extracting the array from the `filteredUsers` key
          setAllUsers(response.data.filteredUsers);
        } else {
          console.warn('Unexpected response format:', response.data);
          setAllUsers([]); // Set to an empty array if the format is unexpected
        }
      } catch (error) {
        console.log('Error in userGetAllUsers:', error);
        setAllUsers([]); // Ensure allUsers is an empty array in case of error
      } finally {
        setLoading(false); // Hide loading spinner once done
      }
    };

    getUsers();
  }, []);

  return [allUsers, loading];
}

export default userGetAllUsers;
