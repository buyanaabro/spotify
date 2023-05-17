import React from "react";
import Image from "next/image";

function Signup() {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        className=" w-30 h-10 bg-contain mt-6 flex justify-center "
      />
      <div className=" font-circularsp subpixel-antialiased text-3xl font-bold text-black mt-12">
        Sign up for free to start listening.
      </div>
      <button className="w-96 h-12 border text-white bg-[#405A93] rounded-full mt-12 pl-20 py-2 hover:scale-105 font-bold flex items-center flex-row">
        <div>
          <Image
            width="50"
            height="50"
            src="https://o.remove.bg/downloads/e2b68ca9-b195-45ce-b4c6-13681f6a71be/social-media-gif-image-logo-animation-png-favpng-8S9hy7SjNuxpkBxmXiWPtpuje-removebg-preview.png"
          />
        </div>
        <div className="ml-4 "> Sign up with Facebook</div>
      </button>
      <button className="w-96 h-12 border border-black rounded-full mt-6 pl-24 py-2 hover:border-black font-bold flex items-center flex-row text-gray-600 hover:scale-105">
        <div>
          {" "}
          <Image
            width="20"
            height="20"
            src="https://o.remove.bg/downloads/94c8c879-f466-418c-a06c-6bc5cdbbdcbb/google-logo-background-g-suite-google-pay-google-doodle-text-circle-line-area-png-clipart-removebg-preview.png"
          />
        </div>
        <div className="ml-6"> Sign up with Google</div>
      </button>
      <div className=" mt-16 flex justify-center font-bold text-black font-sm">
        Sign up with your email address
      </div>
      <div
        className="text-black font-bold text-xs flex items-center mt-4 m
      "
      >
        What's your email?
      </div>
      <button className="w-[450px] h-[48px] border border-black mt-2 flex justify-center "></button>
    </div>
  );
}

export default Signup;
