"use client";
import React, { useState } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'

export default function MobileSideBar() {
    const [open, setOpen] = useState<boolean>(false);
  return (
    <div className='md:hidden flex justify-between items-center h-full w-full px-3'>

        <div className='flex items-center cursor-pointer active:scale-105 transition duration-300 ease-in-out'>
            <h1 className='text-[24px] font-bold italic'>ANANTO</h1>
        </div>
           
        <FaBarsStaggered 
            size={26} 
            className='cursor-pointer active:scale-105 transition duration-300 ease-in-out'
            onClick={() => setOpen(!open)}
        />

        <div 
            className='absolute top-0 left-0 w-[80%] h-svh bg-white transition-transform duration-300 ease-in-out shadow-lg'
            style={{
                transform: open ? "translateX(0)" : "translateX(-100%)"
            }}
        >
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <h1 className='text-[24px] font-bold italic'>ANANTO</h1>
            </div>
        </div>
    </div>

  )
}
