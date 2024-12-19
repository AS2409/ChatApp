import React from "react";

const Chatuser = () => {
  return (
    <>
      <div className="pl-4 pt-4 pr-4 flex space-x-4 bg-gray-700 hover:bg-gray-500 duration-300">
        <div>
          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl">Ankit Pathak</h1>
          <span className="text-sm">Online</span>
        </div>
      </div>
    </>
  );
};

export default Chatuser;
