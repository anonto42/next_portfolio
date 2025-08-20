import Link from 'next/link'
import React from 'react'

export default function BlogCard({
    title,
    description,
    category,
    publishedOn,
    id
}: {
    title: string,
    description: string,
    category: string,
    publishedOn: string,
    id: number
}) {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <div className='w-[70%] flex flex-col items-center justify-center bg-[#E8F6FF]  backdrop-blur-[8.3px] inset-shadow-[0_0px_5px_rgba(5,55,25,0.4)] p-6 border border-[#0f78bd] rounded-2xl shadow-[0_0px_5px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-all duration-300'>
        <h1 className='text-2xl font-bold tracking-wider text-shadow-lg'>{title}</h1>
        <p className='text-gray-500 text-sm md:text-base'>{category}</p>
        <p className='text-gray-500 text-sm md:text-base'>Published on: {publishedOn}</p>
        <p className='text-gray-500 text-sm md:text-base my-2'>{description}</p>{/* this will not more then 50 words */}
        <Link href={`/blog/${id}`}>
          <button className='px-5 py-2 rounded-full bg-[#0f78bd] text-white cursor-pointer active:scale-105 transition-all duration-300 hover:bg-[#0f9abd] hover:text-white'>Read More</button>
        </Link>
      </div>
    </div>
  )
}
