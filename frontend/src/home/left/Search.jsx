import React from "react";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="h-[10vh]">
      <div className="p-4">
        <form action="">
          <div className="flex space-x-4">
            <label className="border-[1px] bg-brightWhite rounded-lg flex items-center gap-2 w-[80%] p-3">
              <input
                type="text"
                className="grow outline-none bg-brightWhite text-coolGray font-sourceSans"
                placeholder="Search"
              />
            </label>
            <button>
              <IoSearch className="text-4xl text-black bg-brightWhite hover:text-coolGray hover:shadow-lg hover:shadow-coolGray hover:scale-110 transition-all duration-300 ease-in-out rounded-lg p-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
