import React from "react";
import useConversation from "../../statemanage/useConversation.js"

const Chatuser = () => {
  const {selectedConversation} = useConversation();
  console.log(selectedConversation);
  return (
    <>
      <div className="pl-4 pt-5 h-[12vh] pb-3 flex space-x-4 bg-cyberNight duration-300">
        <div>
          <div className="avatar">
            <div className="w-14  rounded-full shadow-md shadow-neonCyan">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-xl text-neonMagenta font-raleway bg-clip-text">{selectedConversation.name}</h1>
          {/* <h1 className="text-xl">Dummy Value for now</h1> */}
          <span className="text-lavenderBlue text-sm">{selectedConversation.email}</span>
        </div>
      </div>
    </>
  );
};

export default Chatuser;
