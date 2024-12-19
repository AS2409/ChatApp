import React from "react";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="px-4 py-2">
      <form action="">
        <div className="flex space-x-4">
          <label className="border-[1px] bg-brightWhite rounded-lg flex items-center gap-2 w-[80%] p-3">
            <input
              type="text"
              className="grow outline-none bg-brightWhite text-deepPurple font-sourceSans w-[80%]"
              placeholder="Search"
            />
          </label>
          <button>
            <IoSearch className="text-4xl text-deepPurple bg-brightWhite hover:text-neonMagenta hover:shadow-lg hover:shadow-neonMagenta hover:scale-110 transition-all duration-300 ease-in-out rounded-lg p-2" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
