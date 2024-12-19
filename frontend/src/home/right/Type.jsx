import React from "react";
import { IoSend } from "react-icons/io5";
function Type() {
  return (
    <>
    <div className= " flex mt-1 pl-4 p-5 grow outline-none text-coolGray font-sourceSans " >
      <input
        type="text"
        className="grow outline-none rounded-lg bg-brightWhite text-coolGray font-sourceSans max-w-xs h-[8vh] pl-2 "
        placeholder="Type here"
      />
      <button className="ml-6 className= text-2xl rounded-xl text-black bg-brightWhite hover:text-coolGray hover:shadow-lg hover:shadow-coolGray hover:scale-110 transition-all duration-300 ease-in-out h-[8vh] p-2">
        <IoSend />
      </button>
    </div>
    </>
  );
}

export default Type;
