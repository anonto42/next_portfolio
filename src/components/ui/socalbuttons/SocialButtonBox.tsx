import React from 'react'

export default function SocialButtonBox({
    elements
}: Readonly<{
    elements: {
        href: string;
        icon: React.ReactNode;
        content: string
    }[]
}>) {
  return (
    <div className='flex gap-1 md:gap-2 mt-5 items-center justify-start mb-4 md:mb-0'>

        <button className="bg-[rgba(255,255,255,0.19)] 
        rounded-full 
        shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
        inset-shadow-[0_0px_5px_rgba(255,255,255,0.64)]
        backdrop-blur-[8.3px] 
        h-[46px] w-[124px]
        flex items-center justify-center 
        hover:scale-110 cursor-pointer
        transition-transform duration-300">Contact Me</button>

        {

            elements.map((item, index) => (
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
