import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-row">
        <div className="w-64 h-full bg-white">
          <Sidebar />
        </div>
        <div className="w-full h-full bg-[#121212]">
          <Header />
          <div className="w-20 h-20 text-black">hi</div>
        </div>
      </div>
      <div className="w-screen h-screen  bg-[#121212]"></div>
    </>
  );
}