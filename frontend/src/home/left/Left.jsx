import React from "react";
import Search from "./Search";
import Users from "./Users";

function Left() {
  return (
    <>
      <div className="border border-brightWhite w-[25%] bg-cyberNavy text-richBrown">
        <h1
          className="font-sourceSans px-4 py-2 text-3xl text-neonCyan shadow-md  "
          style={{ textShadow: "0 0 5px cyan, 0 0 2px cyan, 0 0 1px cyan" }}
        >
          CHATS
        </h1>

        <div>
          <Search></Search>
        </div>
        <hr></hr>
        <div>
          <Users></Users>
        </div>
      </div>
    </>
  );
}

export default Left;
