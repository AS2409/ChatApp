import React, { useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";

export default function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async() =>{
    setLoading(true);
    try{
      const res = await axios.post("/api/user/logout")
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logout Successful");
    } catch (error){
        console.log(error);
    }
  }
  return (
    <>
      <div className="border border- w-[4%] border-cyberNavy bg-cyberNavy flex flex-col justify-end">
        <div className="p-3 align-bottom">
          <form action="">
            <div className="flex space-x-4">
              <button>
                <RiLogoutCircleRLine className="text-4xl  text-cyberPink bg-softDark hover:text-cyberPink hover:shadow-lg hover:shadow-cyberPink hover:scale-105 transition-all duration-300 ease-in-out rounded-lg p-2"
                 onClick={handleLogout}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}