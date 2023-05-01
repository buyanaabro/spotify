import React from 'react'
import { data } from './data'
import { useState } from 'react'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'


export default function ArtistDetails() {
  return (
    <div className='w-screen overflow-x-hidden h-[200vh]'>
        <Sidebar />
        <div className="w-full h-[95vh] flex justify-end bg-[#121212]">
            <div className='w-[87vw] h-[40vh] bg-cover bg-center flex flex-col' style={{backgroundImage: `url(${data[0].cover1})`}}>
              <Header />
                <div className='absolute pt-44 pl-14'>
                  <div className='flex flex-row items-center text-white text-xs'>
                    <Image src="/verified.png" width={27} height={0}/>
                    <div className='ml-2'>Verified Artist</div>
                  </div>
                  <div className='text-white text-[600%] mt-[-2vh] font-bold'>{data[0].singer}</div>
                  <div className='text-white mt-2'>393,835 monthly listeners</div>
                </div>
            </div>
        </div>
    </div>
  )
}