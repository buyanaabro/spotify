import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import { useRouter } from "next/router";

export default function Header() {
  const [opacity, setOpacity] = useState(false);
  const changeOpacity = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 90) setOpacity(true);
      else setOpacity(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeOpacity);
  }
  const router = useRouter();

  return (
    <div
      className={
        opacity
          ? "w-full h-16 fixed top-0 bg-black flex flex-row items-center duration-300 z-50"
          : "w-full h-16 fixed top-0 flex flex-row items-center duration-300 z-50"
      }
    >
      {/* style={{background: `rgba(255, 255, 255), ${bgOpacity}`}} */}
      <div className="w-40 h-12 flex flex-row justify-center items-center space-x-5 ml-6">
        <div className="flex justify-center items-center w-6 h-6  rounded-full ml-96">
          <svg
            className="w-4 h-4 -rotate-90"
            viewBox="0 -4.5 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            src="http://www.w3.org/1999/xlink"
            fill="#ffffff"
            stroke="#ffffff"
            onClick={() => router.back()}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>arrow_up [#ffffff]</title> <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-260.000000, -6684.000000)"
                  fill="#ffffff"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                      id="arrow_up-[#ffffff]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <div className="flex justify-center items-center w-6 h-6 rounded-full">
          <svg
            className="w-4 h-4 rotate-90"
            viewBox="0 -4.5 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            src="http://www.w3.org/1999/xlink"
            fill="#ffffff"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>arrow_up [#ffffff]</title> <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-260.000000, -6684.000000)"
                  fill="#ffffff"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                      id="arrow_up-[#ffffff]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
      <div className="w-full h-12 flex flex-row space-x-6 justify-end mr-8">
        <Link
          href="/Signup"
          className="text-gray-400 font-sans hover:text-white text-base flex justify-center items-center hover:scale-105"
        >
          Sign up
        </Link>
        <div className="w-28 h-12 text-base bg-white rounded-full flex justify-center items-center hover:scale-105">
          <Link href="/Login">Log in</Link>
        </div>
      </div>
    </div>
  );
}
