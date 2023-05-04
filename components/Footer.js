import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="w-full h-96 bg-[#121212] flex flex-row items-center space-x- decoration-1">
        <div className="w-52 h-80 bg-[#121212] ml-12 flex flex-col">
          <div className="w-full h-12 flex items-center text-white font-medium text-md">
            Company
          </div>
          <div className="w-full h-48 bg-[#121212] grid grid-rows-6">
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              About
            </button>
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              Jobs
            </button>
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              For the Records
            </button>
          </div>
        </div>
        <div className="w-52 h-80 bg-[#121212] ml-12 flex flex-col">
          <div className="w-full h-12 flex items-center text-white font-medium text-md">
            Communities
          </div>
          <div className="w-full h-48 bg-[#121212] grid grid-rows-6">
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              For artists
            </button>
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              Developers
            </button>
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              Advertising
            </button>
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              Investors
            </button>
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              Vendors
            </button>
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              Spotify for Work
            </button>
          </div>
        </div>
        <div className="w-52 h-80 bg-[#121212] ml-12 flex flex-col">
          <div className="w-full h-12 flex items-center text-white font-medium text-md">
            Useful links
          </div>
          <div className="w-full h-48 bg-[#121212] grid grid-rows-6">
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              Support
            </button>
            <button className="w-full flex justify-start items-center text-gray-400 hover:underline hover:underline-offset-2 hover:text-white">
              Free Mobile App
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
