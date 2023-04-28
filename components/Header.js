import React from "react";

export default function Header() {
  return (
    <div className="w-full h-16 fixed bg-black opacity-90 flex flex-row items-center">
      <div className="w-40 h-12"></div>
      <div className="w-full h-12 flex flex-row space-x-6">
        <button className="text-gray-400 font-sans hover:text-white text-base">
          Sign up
        </button>
        <div className="w-28 h-12 text-base bg-white rounded-full flex justify-center items-center">
          Log in
        </div>
      </div>
    </div>
  );
}
