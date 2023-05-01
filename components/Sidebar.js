import Link from "next/link";
import React from "react";
import styles from '@/styles/Home.module.css'

function Sidebar() {
  return (
    <div className="w-60 h-full fixed bg-black left-0 flex flex-col items-center space-y-5">
      <div className="w-40 h-10 bg-contain bg-no-repeat bg-[url(https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png)] mt-6 mr-10"></div>
      <div className="w-50 h-30 space-y-3 mr-7">
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
          <Link className="ml-4 text-sm" href="Home">
            Home
          </Link>
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
          <Link className="ml-4 text-sm" href="Search">
            Search
          </Link>
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
      <div className="w-50 h-20 space-y-3 mr-6"> //
        <button className="w-40 h-7 mt-3 flex items-center flex-row text-gray-400 duration-300 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6 bg-gray-400 hover:bg-white duration-300 rounded-sm"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <div className="ml-4 text-sm duration-300 hover:text-white">Create playlist</div>
        </button>
        <button className="w-40 h-7 flex items-center flex-row text-gray-400 hover:text-white duration-300 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-300 rounded-sm"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <div className="ml-4 text-sm">Liked songs</div>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
