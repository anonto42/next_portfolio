import ClientsLayout from '@/layouts/ClientsLayout'
import Image from 'next/image';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';

export default function HeroSection() {
    const name = "MD Kamrul Hasan";
    const profation = "Web Developer";
    const shortDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.   ";

  return (
    <div className='w-full min-h-[400px] bg-gradient-to-r from-[#187CBF] to-[#BBD9ED] text-white'>
        <ClientsLayout>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='md:grid-cols-2 grid grid-cols-1 gap-5 items-center'>

                    <div className='flex flex-col justify-center text-center items-center mt-7 md:mt-0 md:block md:text-left'>

                        <h2 className='text-2xl font-semibold text-shadow-lg tracking-wide'>HI, I'M {name}</h2>
                        <h1 className='text-4xl font-bold text-shadow-lg mt-3 tracking-wide'>Im A {profation}</h1>
                    
                        <p className='mt-1 text-sm w-[90%] tracking-wider'>{shortDescription}</p>

                        <div className=''>

                            <button className="bg-[#ffff0000] backdrop-blur-md w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                                <FaFacebook className="text-white text-xl" />
                            </button>
                            
                        </div>

                    </div>

                    <div className='flex items-center justify-center bg--200'>
                        <Image 
                            // onLoad={()=>setLoading(false)}
                            width={290}
                            height={290}
                            quality={80}
                            priority
                            placeholder='blur'
                            alt="User profile picture"
                            src={"/profileImage.jpg"} 
                            blurDataURL='/images/Profile2.webp'
                            // className={loading?'hidden':"block"}
                            /> 
                    </div>

                </div>
            </div>
        </ClientsLayout>
    </div>
  )
}
