import React from 'react'
import SocialButtonBox from '../socalbuttons/SocialButtonBox'

interface Props {
  data:{
    firstHeader: string;
    secondHeader: string;
    discription: string;
    contact: {
        href: string;
        icon: React.ReactNode;
        content: string
    }[]
  },
  links:{
    contact: string,
    email: string,
    facebook: string,
    linkedin: string,
    whatsapp: string
  }
}

export default function AboutSectionUnderHeroSection({
  data,
  links
}: Props) {
    
  return (
    <div className='flex flex-col justify-center text-center items-center mt-7 md:mt-0 md:block md:text-left'>
    
        <h2 className='text-2xl font-semibold text-shadow-lg tracking-wide'>{data.firstHeader}</h2>
        <h1 className='text-4xl font-bold text-shadow-lg mt-3 tracking-wide'> {data.secondHeader}</h1>
    
        <p className='mt-1 text-sm w-[90%] tracking-wider'>{data.discription}</p>
    
        <SocialButtonBox elements={links} />
    
    </div>
  )
}
