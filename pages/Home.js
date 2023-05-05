import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Footer2 from "./Footer2";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "@/components/Artists";
import { data } from "./data";

const Artists = () => {
  const router = useRouter([]);
  const [artists, setArtists] = useState([]);

  return (
    <>
      <div className="w-screen h-screen flex flex-row bg-[#121212]">
        <div className="w-64 h-full bg-white">
          <Sidebar />
        </div>
        <div className="w-full h-full bg-[#121212] ">
          <div className="w-full h-16"></div>
          <div className="w-full h-16 flex flex-row items-center">
            <div className="w-40 h-16 flex jus items-center text-white text-2xl ml-16 font-semibold">
              Artists
            </div>
            <button className="w-full h-16 hover:underline-offset-4 flex justify-end items-center text-gray-400 text-sm mr-8">
              Show all
            </button>
          </div>
          <div className="w-full h-80 flex justify-center items-center">
            <div className="w-11/12 h-72 grid grid-cols-5 gap-5 ml-4">
              {data.slice(0, 5).map((row, index) => (
                <Card key={index} row={row} />
              ))}
            </div>
          </div>
          <div className="w-full h-16 flex flex-row items-center">
            <div className="w-56 h-16 flex jus items-center text-white text-2xl ml-16 font-semibold">
              Spotify Playlists
            </div>
            <button className="w-full h-16 hover:underline-offset-4 flex justify-end items-center text-gray-400 text-sm mr-8">
              Show all
            </button>
          </div>
          <div className="w-full h-80 bg-white"></div>
          <div className="w-20 h-20 text-white"></div>
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
      <Header />
    </>
  );
};

export default Artists;
