import React from "react";
import User from "./User";
import userGetAllUsers from "../../context/userGetAllUsers";
function Users() {
    const [allUsers, loading]= userGetAllUsers(); //changes
    console.log(allUsers);

  return (
    <div
      className=" py-2 overflow-y-auto "
      style={{ maxHeight: "calc(84vh-1vh)"}}
    >
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
    </div>
  );
}

export default Users
