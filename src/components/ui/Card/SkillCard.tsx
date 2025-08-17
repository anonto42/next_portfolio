import React from 'react'
import Image from 'next/image'

export default function SkillCard({
    name,
    image
}: {
    name: string,
    image: string
}) {
  return (
    <div className='w-[200px] h-[200px] bg-[#E8F6FF] flex flex-col items-center justify-center rounded-xl shadow-[0_0px_10px_rgba(0,0,0,0.05)] px-2 hover:scale-105'>
        <Image src={image} alt={name} width={90} height={90} />
        <h1 className='text-xl font-medium mt-2'>{name}</h1>
    </div>
  )
}
