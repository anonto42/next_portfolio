import ClientsLayout from '@/layouts/ClientsLayout'
import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FiLinkedin } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { PiFacebookLogoBold, PiWhatsappLogo } from 'react-icons/pi'

export default function Footer() {

  const Socials = [
    {
      name: "Facebook",
      href: "#"
    },
    {
      name: "Linkedin",
      href: "#"
    },
    {
      name: "Email",
      href: "#"
    },
    {
      name: "Whatesapp",
      href: "#"
    },
    {
      name: "Instagram",
      href: "#"
    }
  ]

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
    <footer className='w-full h-auto bg-[#1172B2] text-white'>
      <ClientsLayout>
          
        <div className='grid grid-cols-4 py-6 gap-6 w-full h-full'>

          <div className='col-span-2 flex flex-col gap-4'>
            <h1 className='text-[24px] font-bold italic'>Ananto</h1>
            <h3 className='text-'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, vitae ullam. Quia dolorem ad, fugiat cupiditate omnis quod facilis at accusantium, doloribus beatae adipisci eius labore. Tenetur dolorem non deleniti.</h3>
          </div>

          <div className='h-full flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Get In Touch</h1>
            
            {
              Socials.map((item, index) => (
                <a href={item.href}>
                  <h3 key={index} className='hover:scale-105 transition duration-300 ease-in-out'>{item.name}</h3>
                </a>
              ))
            }

          </div>

          <div className='h-full flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Contact Info</h1>
            
            {
              contact.map((item, index) => (
                <a href={item.href}>
                  <div key={index} className='flex gap-2 transition duration-300 ease-in-out hover:scale-105'>
                    {item.icon}
                    <h3>{item.content}</h3>
                  </div>
                </a>
              ))
            }
          </div>

        </div>

      </ClientsLayout>
      <div className='bg-[#1172B2] h-[40px] border-t-2 px-3 xl:px-0 flex justify-center items-center'>
        <h3 className='text-[14px]'>&copy; 2025 and all right service</h3>
      </div>
    </footer>
  )
}
