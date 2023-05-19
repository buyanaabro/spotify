import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "@headlessui/react";

function Login() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="w-full h-24 bg-black flex items-center ">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          className=" w-28 h-9 bg-contain mr-16 ml-16 "
        />
      </div>

      <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-black flex justify-center ">
        <div className="w-[734px] h-[900px] bg-black rounded-lg text-white mt-8 flex items-center flex-col">
          <div className=" h-96 bg-purple border-b border-gray-600 ">
            <div className="text-white font-bold flex justify-center text-5xl mt-20">
              Log in to Spotify
            </div>
            <div className="flex items-center justify-center flex-col mt-10 space-y-3">
              <button className="w-80 h-12 border border-gray-500 rounded-full  pl-8 py-2 px-10 hover:border-white font-bold flex items-center flex-row">
                <div>
                  <Image
                    width="30"
                    height="30"
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  />
                </div>
                <div className="ml-8"> Continue With Google</div>
              </button>
              <button className="w-80 h-12 border  border-gray-500 rounded-full pl-8 py-2 hover:border-white font-bold flex items-center flex-row">
                <div>
                  <Image
                    width="20"
                    height="20"
                    src="https://www.facebook.com/images/fb_icon_325x325.png"
                  />
                </div>
                <div className="ml-8"> Continue With Facebook</div>
              </button>
              <button className="w-80 h-12 border border-gray-500 rounded-full  pl-8 py-2 px-10 hover:border-white font-bold flex justify-start items-center flex-row">
                <div className="flex justify-start items-center h-full w-auto">
                  <Image
                    width="15"
                    height="15"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png"
                  />
                </div>
                <div className="ml-10"> Continue With Apple</div>
              </button>
            </div>
          </div>
          <div className=" h-96 flex flex-col justify-start items-center border-b border-gray-600">
            <div className="text-white font-bold flex flex-col justify-center items-start pt-4 text-xs w-auto h-auto mt-4 gap-2">
              <label class="block">
                <span class="a block text-sm font-medium text-white">
                  Email or username
                </span>
                <input
                  type="email"
                  name="email"
                  class="mt-1 px-2 py-2 w-80 h-12 bg-black border shadow-sm border-white placeholder-slate-400 focus:outline-none focus:border-white focus:ring-white block rounded-md sm:text-sm focus:ring-1 hover:border-white "
                  placeholder="Email or username"
                />
              </label>
              <label class="block">
                <span class="a block text-sm font-medium text-white">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  class="mt-1 px-2 py-2 w-80 h-12 bg-black border shadow-sm border-white placeholder-slate-400 focus:outline-none focus:border-white focus:ring-white block rounded-md sm:text-sm focus:ring-1 hover:border-white "
                  placeholder="Password"
                />
              </label>
              <div className="flex items-center mt-4 gap-5">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-[#1ed760]" : "bg-gray-200"
                  } relative inline-flex h-5 w-10 items-center rounded-full `}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-3 w-3 transform rounded-full bg-black transition`}
                  />
                </Switch>
                <p className="text-white text-center">Remember me</p>
              </div>
            </div>
            <div className="text-white font-bold flex flex-col justify-center items-start pt-4 text-xs w-auto h-auto mt-4 gap-2">
              <button className="w-80 h-12 rounded-full bg-[#1ed760] text-black hover:scale-105 text-sm">
                Log in
              </button>
              <button className="flex justify-center mt-4 ml-20 mr-4 text-white text-sm hover:text-[#1ed760] underline ">
                Forgot your password?
              </button>

              <div className="mt-16 ml-4 flex  justify-center text-gray-400 text-sm">
                Don't have an account?
                <Link
                  href="Signup"
                  className="text-white font-sans hover:underline font-bold flex ml-2 justify-center "
                >
                  Sign up for Spotify
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;