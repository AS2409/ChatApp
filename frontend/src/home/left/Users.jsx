import React from "react";

function Users() {
  return (
    <div className= "flex">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div> 
      <div>
        <h1>User1</h1>
        <span>user1@gmail.com</span>
      </div>    
    </div>
  );
}
export default Users;
