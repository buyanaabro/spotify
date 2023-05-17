import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { playList } from "@/pages/Playlistdata";

function Sidebar() {
  const [playlists, setPlayLists] = useState([]);
  const router = useRouter();
  const [myPlayListNumber, setMyPlayListNumber] = useState(1);
  const addToPlaylist = () => {
    setPlayLists([
      ...playlists,
      {
        hu: setMyPlayListNumber((myPlayListNumber) => myPlayListNumber + 1),
        number: myPlayListNumber,
        label: "Playlist",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5Z11CZTMkvsu0yzbg2XxyKrR5A45QLrEaw&usqp=CAU",
        name: "MyPlaylist" + myPlayListNumber,
      },
    ]);
  };

  return (
    <div className="w-60 h-full fixed bg-black left-0 top-0 flex flex-col items-center space-y-5 z-50">
      <div className="w-32 h-12 bg-contain bg-no-repeat mt-6 mr-16">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" />
      </div>

      <div className="h-24 space-y-3 mr-7">
        <div className="w-40 h-7 mt-3 flex items-center flex-row text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
            />
          </svg>
          <div className="ml-4 text-sm" onClick={() => router.push("/Home")}>
            Home
          </div>
        </div>
        <div className="w-40 h-7 flex items-center flex-row text-gray-400 hover:text-white duration-300 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <div className="ml-4 text-sm" onClick={() => router.push("/Search")}>
            Search
          </div>
        </div>
        <div className="w-40 h-7 flex items-center flex-row text-gray-400 hover:text-white duration-300 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
          <button className="ml-4 text-sm">Your library</button>
        </div>
      </div>
      <div className="w-40 h-full space-y-3 mr-6">
        <button
          className="w-40 h-7 mt-10 flex items-center flex-row text-gray-400 duration-300"
          onClick={addToPlaylist}
        >
          <div className="w-6 h-6 bg-gray-400 hover:bg-white duration-300 rounded-sm hover:text-white text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <div className="relative ml-[2.40rem] bottom-[85%] w-24">
              Create Playlist
            </div>
          </div>
        </button>
        {playlists.map((row, index) => (
          <button
            onClick={() => router.push(`/playlist/${row.number}`)}
            key={index}
            className="w-40 text-gray-400 hover:text-white duration-300"
          >
            <div className="w-full h-7 flex items-center">
              <div
                className="w-8 h-6 rounded-sm bg-cover"
                style={{ backgroundImage: `url(${row.img})` }}
              ></div>
              <div className="w-full h-7 ml-5">
                <div className="w-full h-4 text-sm flex justify-start">
                  {row.name}
                </div>
                <div className="w-full h-2 text-xs flex justify-start">
                  {row.label}
                </div>
              </div>
            </div>
          </button>
        ))}
        <button className="w-40 h-7 flex items-center flex-row text-gray-400 hover:text-white duration-300 font-medium">
          <div className="w-6 h-6 bg-gradient-to-r flex justify-center items-center from-indigo-600 to-blue-200 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="ml-4 text-sm"> Liked Songs</div>
        </button>
      </div>
      <div className="w-full h-full flex items-end">
        <div className="w-full h-60 flex justify-center flex-col text-gray-400 text-xs">
          <div className="w-full h-8 flex flex-row">
            <button className="ml-4">Legal</button>
            <button className="ml-4">Privacy Center</button>
          </div>
          <div className="w-full h-8 flex flex-row">
            <button className="ml-4">Pricacy Policy</button>
            <button className="ml-4">Cookies</button>
          </div>
          <div className="w-full h-8 flex flex-row">
            <button className="ml-4">About Ads</button>
          </div>
          <div className="w-full h-8">
            <button className="ml-4 mt-2">Cookies</button>
          </div>
          <div className="w-40 h-20">
            <div className="w-24 h-8 ml-6 mt-6 rounded-full border border-gray-400 hover:scale-105 hover:text-white hover:border-white flex felx-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <button className="text-sm text-normal text-white ml-px">
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
