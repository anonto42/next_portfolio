import ClientsLayout from '@/layouts/ClientsLayout'
import Image from 'next/image';
import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiFacebookLogoBold, PiWhatsappLogo } from 'react-icons/pi';
import AboutSectionUnderHeroSection from './AboutSectionUnderHeroSection';
import ImageBoxUnderHeroSection from './ImageBoxUnderHeroSection';

export default function HeroSection() {

    const name = "MD Kamrul Hasan";
    const profation = "Web Developer";
    const shortDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, cumque.";

     const contact = [
        {
          icon: <IoCallOutline size={21} />,
          content: "+1234567890",
          href: "#"
        },
        {
          icon: <MdOutlineMailOutline size={22} />,
          content: "6yDfI@example.com",
          href: "#"
        },
        {
          icon: <PiWhatsappLogo size={22} />,
          content: "+1234567890",
          href: "#"
        },
        {
          icon: <FiLinkedin size={20} />,
          content: "DfIsdkf",
          href: "#"
        },
        {
          icon: <PiFacebookLogoBold size={22} />,
          content: "Dolbioslkdf",
          href: "#"
        },
      ]

  return (   
    <div 
        className='w-full md:h-[450px] py-6 md:py-0 text-white'
        style={{
            background: 'linear-gradient(to right, #187CBF 0%, #4A90E2 40%, #BBD9ED 80%)',
        }} 
    >
        <ClientsLayout>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='md:grid-cols-2 grid grid-cols-1 gap-5 items-center xl:pl-[150px] bg-gray-'>

                    <AboutSectionUnderHeroSection
                        name={name}
                        profation={profation}
                        shortDescription={shortDescription}
                        contact={contact}
                    />

                    <ImageBoxUnderHeroSection />

                </div>
            </div>
        </ClientsLayout>
    </div>
  )
}
