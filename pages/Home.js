import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-row">
        <div className="w-60 h-full">
          <Sidebar />
        </div>
        <div className="w-fit h-full">
          <Header />
        </div>
      </div>
      <div className="w-screen h-screen"></div>
    </>
  );
}
