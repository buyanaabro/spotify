import React from "react";
import { playList } from "../Playlistdata";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// export async function getServerSideProps(context) {
//   const songs = playList.find((e) => e.number == context.query.id);
//   return {
//     props: { songs },
//   };
// }
export default function Playlist() {
  return (
    <div className="w-screen h-screen flex flex-row bg-[#121212]">
      <div className="w-72 h-full">
        <Header />
        <Sidebar />
      </div>
      <div className="w-full h-full rounded-2xl">
        <div className="w-full h-80 rounded-t-2xl bg-white flex items-center px-8 bg-gradient-to-b from-stone-600 to-black/70 ">
          <div className="w-52 h-52 bg-stone-800 flex items-center justify-center text-white/40 shadow group">
            <MusicIcon />
            <div className="absolute w-52 h-52 bg-stone-800 hidden group-hover:flex flex-col justify-center items-center">
              <EditIcon />
              <p>Choose Photo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MusicIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-16 h-16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
      />
    </svg>
  );
};

const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-12 h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
  );
};
