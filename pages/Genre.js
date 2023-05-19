import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Footer2 from "../components/Footer2";
import BodyGenre from "@/components/BodyGenre";

export default function Genre() {
  return (
    <>
      <div className="w-screen h-full flex flex-row bg-[#121212]">
        <div className="w-64 h-full bg-white">
          <Header />
          <Sidebar />
        </div>
        <div className="w-full h-full bg-[#121212] ">
          <div className="w-full h-16"></div>
          <div className="space-y-12">
            <div className="w-full h-56   bg-gradient-to-r from-indigo-500">
              <div className="w-64 h-56 flex items-center ml-12 text-white text-6xl font-bold">
                Lists
              </div>
            </div>
            <div className="space-y-3">
              <div className="space-y-3">
                <div className="w-full h-16 flex flex-row items-center">
                  <div className="w-56 h-16 flex jus items-center text-white text-2xl ml-16 font-bold">
                    Categories
                  </div>
                  <button className="w-full h-16 hover:underline hover:underline-offset-2 hover:text-white flex justify-end items-center text-gray-400 text-sm mr-8 ">
                    Show all
                  </button>
                </div>
              </div>
              <div className="w-full h-80 flex justify-center items-center">
                <BodyGenre />
              </div>
            </div>
            <div className="space-y-2">
              <div className="space-y-0">
                <div className="w-full h-16 flex flex-row items-center">
                  <div className="w-56 h-16 flex jus items-center text-white text-2xl ml-16 font-bold">
                    Must Listens
                  </div>
                  <button className="w-full h-16 hover:underline hover:underline-offset-2 hover:text-white flex justify-end items-center text-gray-400 text-sm mr-8 ">
                    Show all
                  </button>
                </div>
                <div className="w-full flex items-center self-end text-slate-300 text-sm ml-16">
                  Soundtrack with these essential songs and shows.
                </div>
              </div>
              <div className="w-full h-80 flex justify-center items-center">
                <BodyGenre />
              </div>
            </div>
            <div className="space-y-2">
              <div className="space-y-0">
                <div className="w-full h-16 flex flex-row items-center">
                  <div className="w-64 h-16 flex jus items-center text-white text-2xl ml-16 font-bold">
                    Radio you'd like.
                  </div>
                  <button className="w-full h-16 hover:underline hover:underline-offset-2 hover:text-white flex justify-end items-center text-gray-400 text-sm mr-8 ">
                    Show all
                  </button>
                </div>
                <div className="w-full flex items-center self-end text-slate-300 text-sm ml-16">
                  Check out today's hits and more.
                </div>
              </div>
              <div className="w-full h-80 flex justify-center items-center">
                <BodyGenre />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-96 flex flex-row">
        <div className="w-64 h-full bg-white"></div>
        <Footer />
      </div>
      <div className="w-screen h-32 flex flex-row">
        <div className="w-64 h-full bg-white"></div>
        <Footer2 />
      </div>
    </>
  );
}