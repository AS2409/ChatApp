import React from "react";
import useConversation from "../../statemanage/useConversation.js"

const Chatuser = () => {
  const {selectedConversation} = useConversation();
  console.log(selectedConversation);
  return (
    <>
      <div className="pl-5 pt-5 h-[12vh] pb-3 flex space-x-4 bg-gray-700 duration-300">
        <div>
          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl">{selectedConversation.name}</h1>
          {/* <h1 className="text-xl">Dummy Value for now</h1> */}
          <span className="text-sm">Online</span>
        </div>
      </div>
    </>
  );
};

export default Chatuser;
