import ContactSection from '@/components/ui/section/ContactSection'
import ClientsLayout from '@/layouts/ClientsLayout'
import Image from 'next/image'
import React from 'react'


export default function ContactPage() {

  return (
    <div>

      <section className='w-full h-[400px] bg-gradient-to-r from-[#0f78bd] via-[#0f9abd] to-[#2f0fbd]'>
        <ClientsLayout>
          <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[70%] h-[70%] flex items-center justify-center bg-[rgba(255,255,255,0.10)]  backdrop-blur-[8.3px] inset-shadow-[0_0px_5px_rgba(255,255,255,0.64)] gap-3 px-6'>
              <div className='w-[50%] h-full flex items-center justify-center flex-col gap-3'>
                <p className='text-gray-100 text-sm md:text-base text-start'>Whether you're starting a new project, looking for a freelance designer, or simply have a question — I’m here to help. I love collaborating on meaningful digital experiences and would be happy to hear from you.</p>
              </div>
              <div className='relative w-[50%] h-[90%]'>
                <Image src="/skills_images/first.png" alt="" fill className='object-cover' />
              </div>
            </div>
          </div>
        </ClientsLayout>
      </section>

      <ContactSection />

    </div>
  )
}