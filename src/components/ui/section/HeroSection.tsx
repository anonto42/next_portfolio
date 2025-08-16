import ClientsLayout from '@/layouts/ClientsLayout'
import Image from 'next/image';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiFacebookLogoBold, PiWhatsappLogo } from 'react-icons/pi';

export default function HeroSection() {
    const name = "MD Kamrul Hasan";
    const profation = "Web Developer";
    const shortDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.";

     const contact = [
        {
          icon: <IoCallOutline size={22} />,
          content: "+1234567890",
          href: "#"
        },
        {
          icon: <MdOutlineMailOutline size={21} />,
          content: "6yDfI@example.com",
          href: "#"
        },
        {
          icon: <PiWhatsappLogo size={21} />,
          content: "+1234567890",
          href: "#"
        },
        {
          icon: <FiLinkedin size={20} />,
          content: "DfIsdkf",
          href: "#"
        },
        {
          icon: <PiFacebookLogoBold size={21} />,
          content: "Dolbioslkdf",
          href: "#"
        },
      ]

  return (   
    <div className='w-full min-h-[400px] bg-gradient-to-r from-[#187CBF] to-[#BBD9ED] text-white'>
        <ClientsLayout>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='md:grid-cols-2 grid grid-cols-1 gap-5 items-center'>

                    <div className='flex flex-col justify-center text-center items-center mt-7 md:mt-0 md:block md:text-left'>

                        <h2 className='text-2xl font-semibold text-shadow-lg tracking-wide'>HI, I'M {name}</h2>
                        <h1 className='text-4xl font-bold text-shadow-lg mt-3 tracking-wide'>Im A {profation}</h1>
                    
                        <p className='mt-1 text-sm w-[90%] tracking-wider'>{shortDescription}</p>

                        <div className=' flex gap-2 mt-5 items-center justify-start'>

                            <button className="bg-[rgba(255,255,255,0.19)] 
                            border border-[rgba(255,255,255,0.64)] 
                            rounded-full 
                            shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                            backdrop-blur-[8.3px] 
                            h-[46px] w-[124px]
                            flex items-center justify-center 
                            hover:scale-110 cursor-pointer
                            transition-transform duration-300">Contact Me</button>

                            {

                                contact.map((item, index) => (
                                    <a href={item.href} key={index}>
                                        <button className="
                                            bg-[rgba(255,255,255,0.19)] 
                                            border border-[rgba(255,255,255,0.64)] 
                                            rounded-full 
                                            shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                                            backdrop-blur-[8.3px] 
                                            w-[46px] h-[46px] 
                                            flex items-center justify-center 
                                            hover:scale-110 cursor-pointer
                                            transition-transform duration-300
                                            ">
                                            {item.icon}
                                        </button>
                                    </a>
                                ))
                            }
                            
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
