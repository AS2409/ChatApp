import React from "react";
import User from "./User";
function Users() {
  return (
    <div
      className="flex-aditi py-2 overflow-y-auto"
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
