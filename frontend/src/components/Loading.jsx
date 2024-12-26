import React from "react";

function Loading() {
  return (
    <>
      <div className="flex h-screen items-center  justify-center bg-cyberNavy ">
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 bg-lavenderBlue w-full"></div>
          <div className="skeleton h-5 bg-deepPurple  w-28"></div>
          <div className="skeleton h-5 bg-lavenderBlue w-full"></div>
          <div className="skeleton h-5 bg-deepPurple   w-full"></div>
        </div>
      </div>
    </>
  );
}

export default Loading;
