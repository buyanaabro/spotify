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
          <div className="w-full h-40 flex items-center self-end text-white text-2xl font-bold bg-red-300">
              Browse All
            </div>
          <div className="w-40 h-16 flex items-center self-end text-white text-2xl ml-16 font-bold">
              Browse All
            </div>
            <div className="w-full h-80 flex justify-center items-center">
            <BodyGenre />
          </div>
          
          <div className="w-40 h-16 flex items-center self-end text-white text-2xl ml-16 font-bold">
              Browse All
            </div>
            <div className="w-full h-80 flex justify-center items-center">
            <BodyGenre />
          </div>

          <div className="w-40 h-16 flex items-center self-end text-white text-2xl ml-16 font-bold">
              Browse All
            </div>
            <div className="w-full h-80 flex justify-center items-center">
            <BodyGenre />
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
};
