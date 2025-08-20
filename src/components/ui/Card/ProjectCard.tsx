import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard(
    {
        name,
        image,
        description,
        index,
        id = "This_is_a_test_id"
    }: {
        name: string,
        image: string,
        description: string,
        index: number,
        id?: string
    }
) {
  return (
    <div key={index} className='w-[250px] h-[350px] flex flex-col items-center mx-auto bg-gray-50 rounded-xl shadow-[0_0px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0px_10px_rgba(0,0,0,0.2)] cursor-pointer transition-transform duration-200 hover:scale-[1.01] pb-3'>
        <div className='w-[230px] h-[230px] rounded-xl bg-[#323232] relative mt-3 overflow-hidden'>
            <Image src={image} alt={name} fill className='object-cover' />
        </div>
        <h2 className='text-xl font-medium mt-2'>{name}</h2>
        <p className='text-sm text-gray-500 overflow-hidden'>{description}</p>
        <Link href={`/blog/${id}`}>
            <button className='hover:bg-[#1172B2] border border-[#1172B2] text-[#1172B2] hover:text-white px-4 py-2 rounded-full mt-2 hover:scale-105 transition-transform duration-300 cursor-pointer'>View Project</button>
        </Link>
    </div>
  )
}
