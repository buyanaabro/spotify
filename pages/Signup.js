import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Switch } from "@headlessui/react";
import Link from "next/link";

function Signup() {
  const router = useRouter();

  const fields = [
    {
      label: "What's your email?",
      placeholder: "Enter your email.",
      type: "email",
    },
    {
      label: "Create a password",
      placeholder: "Create a password",
      type: "password",
    },
    {
      label: "What should we call you?",
      placeholder: "Enter a profile name",
      type: "text",
    },
  ];

  const fields2 = [
    {
      label: "Year",
      placeholder: "YY",
      type: "number",
    },
    {
      label: "Month",
      placeholder: "Month",
      type: "text",
    },
    {
      label: "Day",
      placeholder: "DD",
      type: "number",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        className=" w-30 h-10 bg-contain mt-6 flex justify-center "
      />
      <div className=" font-circularsp subpixel-antialiased text-3xl font-bold text-black mt-12">
        Sign up for free to start listening.
      </div>
      <button
        onClick={() => router.push("https://fb.com/login")}
        className="w-96 h-12 border text-white bg-[#405A93] rounded-full mt-12 pl-20 py-2 hover:scale-105 font-bold flex items-center flex-row"
      >
        <div>
          <Image
            width="50"
            height="50"
            src="data:image/png;base64,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"
            className="rounded-full w-7"
          />
        </div>
        <div className="ml-4 "> Sign up with Facebook</div>
      </button>
      <div className="flex items-center justify-center flex-col mt-6 ">
        <button className="w-96 h-12 border border-gray-500 rounded-full hover:border-black hover:scale-105 font-bold flex items-center flex-row ">
          <div className="ml-20">
            <Image
              width="30"
              height="30"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            />
          </div>
          <p className="text-gray-600 ml-8 "> Sign up with Google</p>
        </button>
      </div>
      <p className=" mt-16 flex justify-center font-bold text-black font-sm">
        Sign up with your email address
      </p>

      <div className="flex flex-col gap-5 w-96 mt-8 mb-12">
        {fields.map((row, index) => (
          <div key={index} className="w-full flex flex-col gap-2">
            {row.label}
            <input
              className="w-full border border-gray-700 text-gray-700 py-3 px-4"
              placeholder={row.placeholder}
              type={row.type}
              autoComplete="true"
              name={row.type}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center">
        <p>What's your date of birth?</p>{" "}
      </div>

      <div className="flex gap-3 w-96 mt-4">
        {fields2.map((row, index) => (
          <div key={index} className="w-full gap-2">
            {row.label}
            <input
              className="w-full border py-3 px-4"
              placeholder={row.placeholder}
              type={row.type}
              autoComplete="true"
              name={row.type}
            />
          </div>
        ))}
      </div>
      <div className="w-[400px] h-full">
        <div className="flex flex-wrap gap-x-6">
          <div class="flex mt-6 gap-4">
            <div class="flex items-center mr-4 ">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
              />
              <label
                for="inline-radio"
                class="ml-2 text-sm font-medium text-black dark:text-gray-300"
              >
                Male
              </label>
            </div>
            <div class="flex items-center mr-4">
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio-group"
              />
              <label
                for="inline-2-radio"
                class="ml-2 text-sm font-medium text-black dark:text-gray-300"
              >
                Female
              </label>
            </div>
            <div class="flex items-center mr-4">
              <input
                id="inline-checked-radio"
                type="radio"
                value=""
                name="inline-radio-group"
              />
              <label
                for="inline-3-radio"
                class="ml-2 text-sm font-medium text-black dark:text-gray-300"
              >
                Non-binary
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="inline-4-radio"
                type="radio"
                value=""
                name="inline-radio-group"
              />
              <label
                for="inline-radio-group"
                class="ml-2 text-sm font-medium text-black dark:text-gray-500"
              >
                Other
              </label>
            </div>
          </div>
          <div className="mt-4 grid grid-rows-2">
            <label>
              <input type="checkbox" class="accent-[#1ed760]" /> Please send me
              news and offers from Spotify
            </label>
            <label>
              <input type="checkbox" class="accent-[#1ed760]" /> Share my
              registration data with Spotify's content providers for marketing
              purposes.
            </label>
          </div>
        </div>
      </div>
      <div className="mt-8 ml-4 flex justify-center text-black text-xs">
        By clicking on sign-up, you agree to Spotify's
        <Link
          href="https://www.spotify.com/mn/legal/end-user-agreement/"
          className="text-[#1ed760] font-sans underline font-bold flex ml-2 justify-center text-xs"
        >
          Terms of Conditions of Use.
        </Link>
      </div>
      <div className=" w-[450px] mt-4 ml-4 flex flex-rows-2 justify-center text-black text-xs">
        To learn more about how Spotify collects, uses, shares and protects your
        personal data, please see
        <Link
          href="https://www.spotify.com/mn/legal/privacy-policy/"
          className="text-[#1ed760] font-sans underline font-bold text-xs"
        >
          Spotify's Privacy Policy.
        </Link>
      </div>
      <button className="px-6 py-3 rounded-full bg-[#1ed760] text-black hover:scale-105 text-ms mt-4">
        Sign up
      </button>
      <div className="mt-6 ml-4 flex  justify-center text-gray-400 text-sm">
        Have an account?
        <Link
          href="Login"
          className="text-[#1ed760] font-sans underline font-bold flex ml-2 justify-center "
        >
          Log in.
        </Link>
      </div>
    </div>
  );
}

export default Signup;