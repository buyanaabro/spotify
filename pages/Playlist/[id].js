import React from "react";
import { playList } from "../Playlistdata";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";

// export async function getServerSideProps(context) {
//   const songs = playList.find((e) => e.number == context.query.id);
//   return {
//     props: { songs },
//   };
// }
export default function Playlist() {
  return (
    <>
      <div className="w-screen h-screen flex flex-row bg-[#121212]">
        <div className="w-72 h-full">
          <Header />
          <Sidebar />
        </div>
        <div className="w-full h-full rounded-2xl flex items-center flex-col bg-gradient-to-b from-stone-900 to-[#121212]">
          <div className="w-full h-80 rounded-t-2xl bg-white flex items-center px-8 bg-gradient-to-b from-stone-600 to-black/80">
            <div className="w-52 h-52 bg-stone-800 flex items-center justify-center drop-shadow-2xl text-white/40  group mt-10">
              <MusicIcon />
              <button className="absolute w-52 h-52 bg-stone-800 hidden drop-shadow-2xl group-hover:flex flex-col justify-center  items-center">
                <EditIcon />
                <p>Choose Photo</p>
              </button>
            </div>
            <div className="w-fit h-44 mt-16 ml-10 flex flex-col text-white">
              <div className="text-sm">Playlist</div>
              <div className="text-8xl font-bold mt-3">My Playlist#</div>
              <div className="w-fit h-full text-sm flex items-end">Profile</div>
            </div>
          </div>
          <div className="w-11/12 h-28 border-b border-gray-600">
            <More />
          </div>
          <div className="w-11/12 h-fit mt-4">
            <span className="text-white text-2xl font-semibold">
              Let's find something for your playlist
            </span>
            <div className="w-96 h-10 bg-[#242424] rounded-sm drop-shadow-2xl mt-5 flex items-center">
              <Search />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-fit flex flex-row bg-[#121212]">
        <div className="w-72 h-full"></div>
        <div className="w-full">
          <Footer />
          <Footer2 />
        </div>
      </div>
    </>
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
const More = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-9 h-9 text-gray-500 mt-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};
const Search = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7 text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};
