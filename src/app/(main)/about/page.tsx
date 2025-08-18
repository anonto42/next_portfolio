import ClientsLayout from '@/layouts/ClientsLayout'
import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <div className="w-full h-auto">

      <section className='w-full h-[400px] bg-[#0f78bd]'>
        <ClientsLayout>
          <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[70%] h-[70%] flex items-center justify-center bg-[rgba(255,255,255,0.10)]  backdrop-blur-[8.3px] inset-shadow-[0_0px_5px_rgba(255,255,255,0.64)] flex-col gap-3 px-6'>
              <h1 className='text-3xl font-bold tracking-wider text-shadow-lg text-white'>About</h1>
              <p className='text-gray-100 text-sm md:text-base text-center'>I turn ideas into digital products that are intuitive, responsive, and user-centered.My focus is on creating clean, functional designs that solve real problems Every interface I design aims to deliver clarity, impact, and a seamless user experience.</p>
            </div>
          </div>
        </ClientsLayout>
      </section>

      <section className='w-full mb-12'>
        <ClientsLayout>
          <div className='w-full h-auto flex flex-col items-center justify-center'>
          
            <div className='w-full h-auto md:flex items-center md:justify-around justify-center mt-9 md:mt-[80px] md:px-[100px]'>

                <div className='w-1/2 h-auto flex flex-col items-center justify-center mx-auto gap-1'>

                  <h2 className='text-2xl font-bold tracking-wide text-shadow-lg text-start w-full'>My Role</h2>
                  <p className='text-gray-500 text-sm md:text-base md:pr-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere. Inventore eligendi officiis magni eum corrupti voluptas, hic fugit iste minus temporibus, dignissimos incidunt quaerat necessitatibus beatae aut, harum porro!
                  </p>
                </div>
          
                <div className='md:w-[340px] max-w-[340px] mx-auto mt-6 md:mt-0 h-[340px] bg-[#1172B2] rounded-tl-4xl rounded-br-4xl overflow-hidden relative shadow-[0_0px_10px_rgba(0,0,0,0.2)]'>
                    <Image src="/skills_images/first.png" alt="" fill className='object-cover' />
                </div>
            </div>
            
            <div className='w-full h-auto md:flex items-center md:justify-around justify-center mt-4 md:mt-[40px] md:px-[100px]'>

              <div className='md:w-[340px] max-w-[340px] mx-auto mb-6 md:mb-0 h-[340px] bg-[#1172B2] rounded-tr-4xl rounded-bl-4xl overflow-hidden relative shadow-[0_0px_10px_rgba(0,0,0,0.2)]'>
                <Image src="/skills_images/first.png" alt="" fill className='object-cover' />
              </div>
              
              <div className='w-1/2 h-auto flex flex-col items-center justify-center mx-auto gap-1 md:pl-3 pl-0'>

                <h2 className='text-2xl font-bold tracking-wide text-shadow-lg text-start w-full'>My Role</h2>
                <p className='text-gray-500 text-sm md:text-base'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere. Inventore eligendi officiis magni eum corrupti voluptas, hic fugit iste minus temporibus, dignissimos incidunt quaerat necessitatibus beatae aut, harum porro!
                </p>
              </div>
              
            </div>

            <div className='w-full h-auto md:flex items-center md:justify-around justify-center mt-9 md:mt-[40px] md:px-[100px]'>

                <div className='w-1/2 h-auto flex flex-col items-center justify-center mx-auto gap-1'>

                  <h2 className='text-2xl font-bold tracking-wide text-shadow-lg text-start w-full'>My Role</h2>
                  <p className='text-gray-500 text-sm md:text-base md:pr-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere. Inventore eligendi officiis magni eum corrupti voluptas, hic fugit iste minus temporibus, dignissimos incidunt quaerat necessitatibus beatae aut, harum porro!
                  </p>
                </div>
          
                <div className='md:w-[340px] max-w-[340px] mx-auto mt-6 md:mt-0 h-[340px] bg-[#1172B2] rounded-tl-4xl rounded-br-4xl overflow-hidden relative shadow-[0_0px_10px_rgba(0,0,0,0.2)]'>
                  <Image src="/skills_images/first.png" alt="" fill className='object-cover' />
                </div>
            </div>
            
          </div>
        </ClientsLayout>
      </section>

    </div>
  )
}
