import React from 'react'
import SocialButtonBox from '../socalbuttons/SocialButtonBox'

interface Props {
    name: string;
    profation: string;
    shortDescription: string;
    contact: {
        href: string;
        icon: React.ReactNode;
        content: string
    }[]
}

export default function AboutSectionUnderHeroSection({
    name, 
    profation, 
    shortDescription, 
    contact
}: Props) {

    
  return (
    <div className='flex flex-col justify-center text-center items-center mt-7 md:mt-0 md:block md:text-left'>
    
        <h2 className='text-2xl font-semibold text-shadow-lg tracking-wide'>HI, I'M {name}</h2>
        <h1 className='text-4xl font-bold text-shadow-lg mt-3 tracking-wide'>Im A {profation}</h1>
    
        <p className='mt-1 text-sm w-[90%] tracking-wider'>{shortDescription}</p>
    
        <SocialButtonBox elements={contact} />
    
    </div>
  )
}
