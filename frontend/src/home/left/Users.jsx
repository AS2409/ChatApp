import React from "react";
import User from "./User";
import userGetAllUsers from "../../context/userGetAllUsers";


function Users() {
  const [allUsers, loading] = userGetAllUsers();      
  console.log("All Users:", allUsers);

  return (
    <div className="users-container">
      {loading ? (
        <p>Loading...</p> // Display a loading message while fetching users
      ) : (
        allUsers.map((user, index) => {
          return <User key={index} user={user} />;
        })
      )}
    </div>
  );
}

export default Users;
