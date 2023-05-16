import React from "react";
import Sidebar from "../components/Sidebar";
import SearchHeader from "../components/SearchHeader";
import Footer from "../components/Footer";
import Footer2 from "@/components/Footer2";
import SearchBody from "../components/SearchBody";

export default function Search() {
  return (
    <>
      <div className="w-screen h-full flex flex-row bg-[#121212]">
        <div className="w-64 h-full bg-white">
          <Sidebar />
        </div>
        <div className="w-full h-full bg-[#121212] ">
          <div className="sticky top-0 w-full h-16 bg-black space-x-8">
            <SearchHeader />
          </div>
          <div className="w-full h-32 flex flex-row items-center">
            <div className="w-40 h-16 flex items-center self-end text-white text-2xl ml-16 font-bold">
              Browse All
            </div>
          </div>
          <div className="w-full h-full bg-[#121212] space-x-12">
            <SearchBody />
          </div>
        </div>
      </div>
      <div className="w-screen h-96 flex flex-row">
        <div className="w-64 h-full bg-white"></div>
        <Footer />
      </div>
      <div className="w-screen h-32 flex flex-row">
        <div className="w-64 h-full bg-white"></div>
        <Footer2 />
      </div>
      <SearchHeader />
    </>
  );
}
