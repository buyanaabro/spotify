import React from 'react'
import { data } from './data'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { useRouter } from 'next/router'

export default function ArtistDetails() {
  const router = useRouter()
  const [follow, setFollow] = useState()
  const [followStyle, setFollowStyle] = useState(false)
  const [totalPLays, setTotalPLays] = useState()
  useEffect(() => {
    setFollow("FOLLOW")
  }, [])
  const boom = () => {
    if(followStyle == false) {
      setFollow("FOLLOWING")
      setFollowStyle(true)
    } else {
      setFollow("FOLLOW")
      setFollowStyle(false)
    }
  }
  return (
    <div className='w-screen overflow-x-hidden h-[200vh]'>
      <Sidebar />
        <main className="w-full h-[95vh] flex flex-col items-end bg-[#121212]">
            <div className='w-[87vw] h-[40vh] bg-cover bg-center flex flex-col' style={{backgroundImage: `url(${data[0].cover})`}}>
              <Header />
                <div className='pt-44 pl-14'>
                  <div className='flex flex-row items-center text-white text-xs'>
                    <Image src="/verified.png" width={27} height={0}/>
                    <div className='ml-2'>Verified Artist</div>
                  </div>
                  <div className='text-white text-[600%] mt-[-2vh] font-bold'>{data[0].singer}</div>
                  <div className='text-white mt-2'>393,835 monthly listeners</div>
                </div>
            </div>
            <songs className='w-[87vw] h-[55vh]'>
              <div className='w-[30%] h-[20%] flex justify-center items-center'>
                <Image className='cursor-pointer hover:w-[62px] hover:h-[62px] hover:mr-[-0.55%] relative right-[17.5%]' src="/playButton.png" width={60} height={0}/>
                <div onClick={boom} className={followStyle ? 'w-32 h-8 ml-[-7.3%] flex justify-center items-center rounded-md tracking-widest font-semibold border-[1px] border-white text-white text-xs cursor-default' : 'w-24 h-8 relative right-8 flex justify-center items-center rounded-md tracking-widest font-semibold border-[1px] hover:border-white border-gray-600 text-white text-xs cursor-default'}>{follow}</div>
                <svg className='w-6 h-6 relative left-2 stroke-gray-400 hover:stroke-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              <div className='relative left-14 font-semibold text-2xl text-white mb-2'>Popular</div>
              {data[0].duu.slice(0, 5).map((row, index) => (
                <ol className='relative left-20 mt-[-0.8%] flex items-center text-white' key={index}>
                  <li className='text-gray-400 mr-4 cursor-default'>{index + 1}</li>
                  <Image src="https://i.scdn.co/image/ab67616d00001e0238991276d17ac6315dcd4a92" width={40} height={0} />
                  <li className='m-6 cursor-pointer hover:underline'>{row}</li>
                  <li>{Math.floor(Math.random() * (0, 1000000))}</li>
                </ol>
              ))}
            </songs>
        </main>
    </div>
  )
}