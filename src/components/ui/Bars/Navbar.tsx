import React from 'react'
import NButton from '../Buttons/NButton'
import ClientsLayout from '@/layouts/ClientsLayout'
import MobileSideBar from './MobileSideBar'


export default function Navbar() {

  const Buttons = [
    {
      name: "Home",
      href: "/",
      key: 1
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      key: 2
    },
    {
      name: "About",
      href: "/about",
      key: 3
    },
    {
      name: "Blog",
      href: "/blog",
      key: 4
    },
    {
      name: "Contact",
      href: "/contact",
      key: 5
    }
  ]

  return (
    <nav className='w-full h-[86px] shadow-lg sticky top-0 z-50 bg-white'>
      <ClientsLayout>

        {/* Mobile */}
        <MobileSideBar />

        {/* From Xl */}
        <section className='hidden md:flex w-full h-full justify-between items-center'>

          <h1 className='text-[24px] font-bold italic'>Ananto</h1>

          <div className='flex w-auto h-full justify-between items-center gap-2 lg:gap-4 xl:gap-6'>
            {
              Buttons.map((button) => (
                <NButton 
                  key={button.key}
                  name={button.name}
                  href={button.href} 
                  style={`w-[124px] h-[39px]`} 
                />
              ))
            }
          </div>
        </section>
      </ClientsLayout>
      

    </nav>
  )
}
