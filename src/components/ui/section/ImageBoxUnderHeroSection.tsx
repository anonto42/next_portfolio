import Image from 'next/image'
import React from 'react'
import HeroImageButton from '../Buttons/HeroImageButton'

export default function ImageBoxUnderHeroSection() {
  return (
    <div className='flex items-center justify-center'>
        <div className='w-[340px] h-[340px] flex justify-center items-center overflow-hidden relative rounded-tl-4xl rounded-br-4xl'>
            <Image 
                fill={true}
                quality={100}
                priority
                placeholder='blur'
                alt="User profile picture"
                src={"/profileImage.webp"} 
                blurDataURL='/images/Profile2.webp'
                className='object-cover'
            /> 

            <HeroImageButton 
                text="20+ completed projects" 
                position="right-0 top-0" 
                border='border-b border-l rounded-bl-xl' 
            />

            <HeroImageButton 
                text="2 years experience" 
                position="left-0 bottom-0" 
                border='border-t border-r rounded-tr-xl' 
            />

        </div>
    </div>
  )
}
