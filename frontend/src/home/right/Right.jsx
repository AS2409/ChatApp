import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./messages";
import Type from "./Type";
function Right() {
  return (
    <>
      <div className="border border- w-[75%] bg-softDark text-white pl-1">
        <Chatuser></Chatuser>
        <div className= "pt-1 flex-aditi overflow-y-auto " style={{maxHeight: "calc(92vh- 8vh)"} }>
        <Messages></Messages>
        </div>
        <><Type ></Type></>
      </div>
    </>
  );
}

export default Right;
