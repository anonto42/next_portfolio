import ClientsLayout from '@/layouts/ClientsLayout'
import Image from 'next/image'
import React from 'react'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'

export default function MyRole() {

    const conditions = [
        "User Research",
        "UX Strategist",
        "Interaction Designer",
        "Visual Designer",
        "Prototyping",
        "Responsive Design",
        "User Experience",
        "Usability Testing"
    ]

  return (
    <div className='w-full h-auto mb-[90px]'>
        <ClientsLayout>
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold tracking-wide text-shadow-lg text-center'>My Role</h1>

                <div className='w-full xl:w-[80%] h-auto md:flex items-center md:justify-around justify-center mt-9 md:mt-[80px] md:px-[100px]'>

                    <div className='w-1/2 h-auto flex flex-col items-center justify-center mx-auto gap-1'>
                        {
                            conditions.map((condition, index) => (
                                <div key={index} className='w-full h-auto flex items-center justify-start md:pl-16'>
                                    <IoCheckmarkDoneCircleSharp className='text-[#11b21e] text-2xl mr-2' />
                                    <h1 className='text-xl tracking-wide text-shadow-lg'>{condition}</h1>
                                </div>
                            ))
                        }
                    </div>

                    <div className='md:w-[340px] max-w-[340px] mx-auto mt-6 md:mt-0 h-[340px] bg-[#1172B2] rounded-tl-4xl rounded-br-4xl overflow-hidden relative shadow-[0_0px_10px_rgba(0,0,0,0.2)]'>
                        <Image src="/skills_images/first.png" alt="" fill className='object-cover' />
                    </div>
                </div>
            </div>
        </ClientsLayout>
    </div>
  )
}
