import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
function Logout() {
  return (
    <>
      <div className="border border- w-[4%] bg-softDark text-white flex flex-col justify-end">
        Logout
        <div className="p-3 align-bottom">
          <form action="">
            <div className="flex space-x-4">
              <button>
                <RiLogoutCircleRLine className="text-4xl text-white bg-softDark hover:text-white hover:shadow-lg hover:shadow-coolGray hover:scale-110 transition-all duration-300 ease-in-out rounded-lg p-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Logout;
