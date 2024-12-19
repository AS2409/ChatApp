import React from "react";
import Search from "./Search";
import Users from "./Users";
function Left() {
  return (
    <>
      <div className="border border-brightWhite w-[25%] bg-charcoal text-white">
        <h1 className="font-robotoMono px-4 py-1 text-2xl text- font-bold">
          CHATS
        </h1>
        <div>
          <Search></Search>
          <hr />
          <Users></Users>
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
