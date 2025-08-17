import React from 'react'

export default function HeroImageButton({
    text,
    position,
    border
}:{
    text: string,
    position: string,
    border: string
}) {
  return (
    <div className={`absolute ${position} h-[50px] w-1/2 z-10
                  bg-[rgba(255,255,255,0.10)] 
                    ${border} border-[rgba(255,255,255,0.64)] 
                    shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                    backdrop-blur-[8.3px] 
                    flex items-center justify-center 
                    cursor-pointer
                    transition-transform duration-300`
                }>
        <h2 className='text-[14px] font-semibold text-shadow-lg tracking-tighter'>{text}</h2>
    </div>
  )
}
