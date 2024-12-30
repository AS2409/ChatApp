import React from "react";
import Search from "./Search";
import Users from "./Users";

function Left() {
  return (
    <>
      <div className="border box-border border-lavenderBlue  w-[25%] bg-cyberNavy text-lavenderBlue">
        <h1 className="font-montserrat px-4 pt-5 text-3xl font-extrabold neon-font text-transparent bg-gradient-to-r from-neonMagenta to-neonCyan bg-clip-text">
          CHATS
        </h1>
        <div className="mt-1">
          <Search />
          <hr className="border-cyberNavy opacity-50 my-2" />
          <Users />
        </div>
        <hr className="border-cyberNavy opacity-50 my-2" />
        <div>
          <Users />
        </div>
      </div>
    </>
  );
}

export default Left;
