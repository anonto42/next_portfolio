"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { FiLinkedin } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiFacebookLogoBold, PiWhatsappLogo } from 'react-icons/pi';

export default function SocialButtonBox({
    elements
}: Readonly<{
    elements: {
        facebook: string,
        contact:string,
        email: string,
        linkedin: string,
        whatsapp: string
    }
}>) {

const [contact,setContact] = useState([
        {
          icon: <IoCallOutline size={21} />,
          content: elements.contact,
          href: `tel:+88${elements.contact}`
        },
        {
          icon: <MdOutlineMailOutline size={22} />,
          content: elements.email,
          href: `mailto:${elements.email}`
        },
        {
          icon: <PiWhatsappLogo size={22} />,
          content: elements.whatsapp,
          href: `https://wa.me/88${elements.whatsapp}`
        },
        {
          icon: <FiLinkedin size={20} />,
          content: elements.linkedin,
          href: elements.linkedin
        },
        {
          icon: <PiFacebookLogoBold size={22} />,
          content: elements.facebook,
          href: elements.facebook
        },
      ]);

  return (
    <div className='flex gap-1 md:gap-2 mt-5 items-center justify-start mb-4 md:mb-0'>

        <Link href={""}>
            <button className="bg-[rgba(255,255,255,0.19)] 
            rounded-full 
            shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
            inset-shadow-[0_0px_5px_rgba(255,255,255,0.64)]
            backdrop-blur-[8.3px] 
            h-[46px] w-[124px]
            flex items-center justify-center 
            hover:scale-110 cursor-pointer
            transition-transform duration-300">
                Contact Me
            </button>
        </Link>

        {

            contact.map((item, index) => (
                <a href={item.href} key={index}>
                    <button className="
                        bg-[rgba(255,255,255,0.19)] 
                        rounded-full 
                        shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                        inset-shadow-[0_0px_5px_rgba(255,255,255,0.64)]
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
  )
}
