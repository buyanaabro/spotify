"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [check, setCheck] = useState(false);
  const clickCheck = () => {
    if (check == false) setCheck(true);
    else setCheck(false);
  };
  return (
    <>
      <div className="w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/4ede0716-706b-4794-9fca-4b8b56e8d539/MN-en-20230508-popsignuptwoweeks-perspective_alpha_website_small.jpg')]">
        <div className="w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 shadow-inner">
          <Image
            className="absolute left-10 top-[-1vh]"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            width={200}
            height={0}
          />
          <div className="w-[440px] h-[670px] flex flex-col pl-14 pt-4 bg-black bg-opacity-75 rounded-md">
            <div className="text-white text-3xl font-medium pl-2">Sign In</div>
            <input
              className="w-[310px] h-[50px] rounded-sm bg-stone-700 outline-none pl-4 m-2 mt-8"
              placeholder="Email or phone number"
            ></input>
            <input
              className="w-[310px] h-[50px] rounded-sm bg-stone-700 outline-none pl-4 m-2"
              placeholder="Password"
            ></input>
            <button className="w-[310px] h-[50px] bg-red-600 text-white rounded-sm pl-4 m-2 mt-8">
              Sign In
            </button>
            <div className="flex items-center m-2">
              <div
                onClick={clickCheck}
                className={
                  check
                    ? "w-[18px] h-[18px] bg-white rounded-sm"
                    : "w-[18px] h-[18px] bg-stone-400 rounded-sm"
                }
              >
                <svg
                  className={check ? "" : "hidden"}
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="Interface / Check">
                      {" "}
                      <path
                        id="Vector"
                        d="M6 12L10.2426 16.2426L18.727 7.75732"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className="text-stone-400 text-sm m-2 cursor-default">
                Remember me
              </div>

              <div className="hover:underline text-stone-400 text-sm ml-28 cursor-pointer">
                Need help?
              </div>
            </div>
            <div className="flex mt-16">
              <div className="text-stone-400 opacity-70 pl-2">
                New to Netflix?
              </div>
              <div className="text-white hover:underline ml-2">Sign up now</div>
            </div>
            <div className="mt-2 text-stone-400 opacity-70 pl-2 text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </div>
            <div className="text-blue-600 relative left-[30%] bottom-[3.1%] text-sm hover:underline cursor-pointer">
              Learn more.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
