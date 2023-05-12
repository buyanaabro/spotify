import React from "react";

export default function Card({ row }) {
  return (
    <button className="bg-[#171717] group rounded-lg flex flex-col font-mono items-center hover:bg-[#303030] duration-300">
      <div
        className={`w-11/12 h-48 bg-white mt-2 drop-shadow-2xl rounded-lg bg-cover flex justify-end items-end`}
        style={{ backgroundImage: `url(${row.cover})` }}
      >
        <div className="w-16 h-16 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-300 hover:scale-105 bg-contain bg-no-repeat bg-[url(https://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button.png)]"></div>
      </div>
      <div className="w-11/12 h-6 mt-4 flex justify-start ml-3">
        <div className="text-white text-xl font-medium ml-px mt-1">
          {row.singer}
        </div>
      </div>
      <div className="w-11/12 h-12 mt-2 text-gray-400 text-sm flex items-center ml-4 mb-4">
        Artist
      </div>
    </button>
  );
}