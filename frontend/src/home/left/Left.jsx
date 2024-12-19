import React from "react";
import Search from "./Search";

function Left() {
  return (
    <>
      <div className="border border-brightWhite w-[25%] bg-cyberNavy text-richBrown">
        <h1 className="font-robotoMono px-4 py-1 text-2xl text- font-bold">CHATS</h1>
        <div>
          <Search></Search>
        </div>
      </div>
    </>
  );
}

export default Left;
