import React from 'react'
import { data } from './data'
import { useState } from 'react'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'


export default function ArtistDetails() {
  return (
    <div className='w-screen h-[200vh]'>
        <Sidebar />
        <div className="w-screen h-[95vh] flex justify-end bg-[#121212]">
            <div className='w-[87vw] h-[40vh] bg-cover bg-center' style={{backgroundImage: `url(${data[0].cover1})`}}>
                <Header />
            </div>
        </div>
    </div>
  )
}