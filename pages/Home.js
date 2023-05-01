import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Footer2 from "./Footer2";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-row bg-[#121212]">
        <div className="w-64 h-full bg-white">
          <Sidebar />
        </div>

        <div className="w-full h-full bg-[#121212]">
          <Header />
          <div className="w-20 h-20 text-white">hicheel</div>
        </div>
      </div>
      <div className="w-screen h-96 flex flex-row">
        <div className="w-64 h-full bg-white"></div>
        <Footer />
      </div>
      <div className="w-screen h-48 flex flex-row">
        <div className="w-64 h-full bg-white"></div>
        <Footer2 />
      </div>
    </>
  );
}