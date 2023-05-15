import React from "react";
import { data } from "./data";
import { useState, useEffect } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Footer2 from "../components/Footer2";
import Card from "@/components/Card";
import Song_Card from "@/components/SongCard";

export default function ArtistDetails() {
  const router = useRouter();
  const [follow, setFollow] = useState();
  const [followStyle, setFollowStyle] = useState(false);
  const [totalPLays, setTotalPLays] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [opacity, setOpacity] = useState(1);
  const [main, setMain] = useState(false);
  const [seeMore, setSeeMore] = useState();
  const [seeMoreStyle, setSeeMoreStyle] = useState(false);
  useEffect(() => {
    setFollow("FOLLOW");
    setSeeMore("See more");
  }, []);
  const boom = () => {
    if (followStyle == false) {
      setFollow("FOLLOWING");
      setFollowStyle(true);
    } else {
      setFollow("FOLLOW");
      setFollowStyle(false);
    }
  };
  const rNumber = () => {
    setRandomNumber(
      Math.floor(Math.random() * (100, 1000)).toString() +
        "," +
        Math.floor(Math.random() * (100, 1000)).toString() +
        "," +
        Math.floor(Math.random() * (100, 1000)).toString()
    );
  };
  useEffect(() => {
    rNumber();
  }, []);

  useEffect(() => {
    const headerHeight = 500;
    const range = 200;
    const offset = headerHeight / 2;

    const didScrollPage = (e) => {
      let calc = 1 - (window.scrollY - offset + range) / range;
      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }
      setOpacity(calc);
    };
    window.addEventListener("scroll", didScrollPage);
  }, []);

  const clickSeeMore = () => {
    if (main == false) {
      setMain(true);
      setSeeMore("See less");
      setSeeMoreStyle(true);
    } else {
      setMain(false);
      setSeeMore("See more");
      setSeeMoreStyle(false);
    }
  };

  return (
    <div className="w-screen overflow-x-hidden h-[380vh]">
      <main
        className={
          main
            ? "top-0 right-0 w-full h-[140vh] flex flex-col items-end bg-[#121212]"
            : "top-0 right-0 w-full h-[95vh] flex flex-col items-end bg-[#121212]"
        }
      >
        <div
          className="w-[85.7vw] h-[40vh] bg-cover bg-center flex flex-col"
          style={{ backgroundImage: `url(${data[0].cover})`, opacity: opacity }}
        >
          <div className="pt-44 pl-14">
            <div className="flex flex-row items-center text-white text-xs">
              <Image src="/verified.png" width={27} height={0} />
              <div className="ml-2">Verified Artist</div>
            </div>
            <div className="text-white text-[600%] mt-[-2vh] font-bold">
              {data[0].singer}
            </div>
            <div className="text-white mt-2">393,835 monthly listeners</div>
          </div>
        </div>
        <songs className="w-[87vw] h-[55vh]">
          <div className="w-[30%] h-[20%] flex flex-row justify-center items-center">
            <Image
              className="cursor-pointer hover:w-[62px] hover:h-[62px] hover:mr-[-0.55%] relative right-[17.5%]"
              src="/playButton.png"
              width={60}
              height={0}
            />
            <div
              onClick={boom}
              className={
                followStyle
                  ? "w-32 h-8 ml-[-7.3%] flex justify-center items-center rounded-md tracking-widest font-semibold border-[1px] border-white text-white text-xs cursor-default"
                  : "w-24 h-8 relative right-8 flex justify-center items-center rounded-md tracking-widest font-semibold border-[1px] hover:border-white border-gray-600 text-white text-xs cursor-default"
              }
            >
              {follow}
            </div>
            <svg
              className="w-6 h-6 relative left-2 stroke-gray-400 hover:stroke-white"
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
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="relative left-14 font-semibold text-2xl text-white mb-2">
            Popular
          </div>
          <div className="w-full flex justify-between">
            <div className="flex flex-col mt-4">
              {data[0].duu.slice(0, 5).map((row, index) => (
                <ol
                  className="relative left-20 flex items-center text-white"
                  key={index}
                >
                  <li className="text-gray-400 mr-4 cursor-default">
                    {index + 1}
                  </li>
                  <Image
                    src="https://i.scdn.co/image/ab67616d00001e0238991276d17ac6315dcd4a92"
                    width={40}
                    height={0}
                  />
                  <li className="w-96 m-4 cursor-pointer hover:underline">
                    {row.songName}
                  </li>
                  <li className="text-gray-400 font-light text-sm ml-72">
                    {randomNumber}
                  </li>
                </ol>
              ))}
            </div>
            <div className="flex flex-col justify-evenly mr-20">
              {data[0].songdur.slice(0, 5).map((row, index) => (
                <div key={index}>
                  <div className="text-gray-400 font-light text-sm m-2">
                    {row}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </songs>
        <div
          onClick={clickSeeMore}
          className={
            seeMoreStyle
              ? "text-gray-400 hover:text-white relative text-sm font-semibold right-[79%] top-[27%] cursor-default"
              : "text-gray-400 hover:text-white relative text-sm font-semibold right-[79%] bottom-[6%] cursor-default"
          }
        >
          {seeMore}
        </div>
      </main>
      <div className="flex flex-col justify-center w-[85.7vw] h-[40vh] bg-[#121212] relative left-[14.3vw]">
        <div className="text-white text-2xl font-semibold mr-6 ml-6 mb-6">
          Popular Releases
        </div>
        <div className="w-full h-full grid grid-cols-5 gap-5 ml-4">
          {data[0].duu.slice(3, 8).map((row, index) => (
            <Song_Card key={index} row={row} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center w-[85.7vw] h-[40vh] bg-[#121212] relative left-[14.3vw]">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold mr-6 ml-6 mb-6">
            Albums
          </div>
          <div className="text-gray-400 text-sm font-semibold mr-6 cursor-pointer hover:underline">
            See discography
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-5 gap-5 ml-4">
          {data[0].duu.slice(3, 8).map((row, index) => (
            <Song_Card key={index} row={row} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center w-[85.7vw] h-[40vh] bg-[#121212] relative left-[14.3vw]">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold mr-6 ml-6 mb-6">
            Singles and EPs
          </div>
          <div className="text-gray-400 text-sm font-semibold mr-6 cursor-pointer hover:underline">
            See discography
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-5 gap-5 ml-4">
          {data[0].duu.slice(3, 8).map((row, index) => (
            <Song_Card key={index} row={row} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center w-[85.7vw] h-[40vh] bg-[#121212] relative left-[14.3vw]">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold mr-6 ml-6 mb-6">
            Featuring {data[0].singer}
          </div>
          <div className="text-gray-400 text-sm font-semibold mr-6 cursor-pointer hover:underline">
            See discography
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-5 gap-5 ml-4">
          {data[0].duu.slice(3, 8).map((row, index) => (
            <Song_Card key={index} row={row} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center w-[85.7vw] h-[40vh] bg-[#121212] relative left-[14.3vw]">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold mr-6 ml-6 mb-6">
            Fans also like
          </div>
          <div className="text-gray-400 text-sm font-semibold mr-6 cursor-pointer hover:underline">
            See discography
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-5 gap-5 ml-4">
          {data.slice(1, 6).map((row, index) => (
            <Card key={index} row={row} />
          ))}
        </div>
      </div>
      <Header />
      <Sidebar />
      <div className="w-screen h-96 relative top-[80vh] flex flex-row">
        <div className="w-64 h-full bg-white"></div>
        <Footer />
      </div>
      <div className="w-screen h-32 relative top-[80vh] flex flex-row">
        <div className="w-64 h-full bg-white"></div>
        <Footer2 />
      </div>
    </div>
  );
}
