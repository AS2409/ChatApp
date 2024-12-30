import React from "react";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="h-[10vh] border-cyberNavy">
      <div className="p-4">
        <form action="">
          <div className="flex space-x-4 items-center">
            {/* Input Field */}
            <label className="border-[1px] border-neonMagenta bg-cyberNavy rounded-2xl flex items-center gap-2 w-[80%] p-3  transition-all">
              <input
                type="text"
                className="grow outline-none bg-cyberNavy text-lavenderBlue font-montserrat font-medium w-[80%] placeholder-neonCyan "
                placeholder="Search"
              />
            </label>

            {/* Search Icon Button */}
            <button
              type="submit"
              className="text-4xl text-lavenderBlue bg-cyberNavy hover:text-cyberPink hover:shadow-md hover:shadow-neonCyan hover:scale-105 transition-all duration-300 ease-in-out rounded-xl p-2"
            >
              <IoSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
