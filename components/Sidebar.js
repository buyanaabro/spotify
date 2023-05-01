import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="w-60 h-full fixed bg-black left-0 flex flex-col items-center space-y-5">
      <div className="w-40 h-10 bg-contain bg-no-repeat bg-[url(https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png)] mt-6 mr-10"></div>
      <div className="w-50 h-40 space-y-3 mr-7">
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
          <div className="ml-4 text-sm">Your library</div>
        </div>
      </div>
      <div className="w-40 h-8  bg-green-300"></div>
    </div>
  );
}

export default Sidebar;
