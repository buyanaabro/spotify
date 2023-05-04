import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="w-full h-96 bg-black flex flex-row items-center space-x-3">
        <div className="w-52 h-80 bg-white ml-12"></div>
        <div className="w-52 h-80 bg-white"></div>
        <div className="w-52 h-80 bg-white"></div>
      </div>
    </>
  );
};

export default Footer;
