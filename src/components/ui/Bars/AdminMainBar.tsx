"use client"
import Link from 'next/link'
import React from 'react'
import { FaRegNewspaper } from 'react-icons/fa6'
import { IoHomeOutline } from 'react-icons/io5'
import { LuFolderCode, LuLogOut } from 'react-icons/lu'
import { MdOutlineContacts, MdOutlineDashboard } from 'react-icons/md'
import { usePathname } from 'next/navigation'

export default function AdminMainBar() {

    const pathname = usePathname(); 


    const menu = [
        {
            name: "Dashboard",
            href: "/admin/tab/dashboard",
            icon: <MdOutlineDashboard size={22} />
        },
        {
            name: "Home",
            href: "/admin/tab/home",
            icon: <IoHomeOutline size={22} />
        },
        {
            name: "Portfolio",
            href: "/admin/tab/portfolio",
            icon: <LuFolderCode size={21} />
        },
        {
            name: "Blog Page",
            href: "/admin/tab/blog",
            icon: <FaRegNewspaper size={20} />
        },
        {
            name: "Contact",
            href: "/admin/tab/contact",
            icon: <MdOutlineContacts size={22} />
        },
        {
            name: "Logout",
            href: "/",
            icon: <LuLogOut size={22} />
        }
    ]

  return (
    <div className='w-full h-svh relative'>

        <div className='w-full h-[80px] absolute bg-[#2c344b] z-10' />

        {/* Logo add hear */}
        <Link href={"/"} className='w-[120px] h-[80px] absolute bg-[#2c344b] z-20 flex items-center justify-center'>
            <div className='w-full h-full flex items-center justify-center'>
                <h1 className='text-[16px] font-bold italic text-shadow-2xs cursor-pointer active:scale-105 transition duration-300 ease-in-out'>ANANTO</h1>
            </div>
        </Link>

        {/* SideBar add hear */}
        <div className='w-[140px] h-svh absolute bg-[#2c344b] shadow-[0_0px_10px_rgba(0,0,0,0.2)] px-5 pt-[80px]'>
             {
                menu.map((item, index) => (
                    <Link href={item.href} key={index} > 
                        <div className={`w-full h-[80px] flex items-center justify-center cursor-pointer active:scale-105 active:text-[#5e86ff] transition duration-300 ease-in-out ${ pathname === item.href ? "text-[#4371fa]" : ""}`}>
                            <div className='w-full h-full flex items-center justify-between'>
                                {item.icon}
                                <h1 className='text-[12px] w-[80%] pl-2 font-bold italic text-shadow-2xs cursor-pointer active:scale-105 transition duration-300 ease-in-out text-start'>{item.name}</h1>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>

        {/* TopBar add hear */}
        <div className='w-full h-[80px] bg-[#4371fa] shadow-[0_0px_10px_rgba(0,0,0,0.2)]'>
            
           
        </div>
    </div>
  )
}
