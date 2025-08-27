"use client"
import About from '@/components/ui/Tabs/About';
import Contact from '@/components/ui/Tabs/Contact';
import Projects from '@/components/ui/Tabs/Projects';
import React, { useState } from 'react'

export default function page() {
    const [board, setBoard] = useState<"projects" | "about" | "contact">("projects");

  return (
    <div>
        
        <nav className='w-full h-[80px] bg-[#100727] flex items-center justify-around shadow-[0_0px_10px_rgba(0,0,0,0.2)]'>
            <h3 onClick={() => setBoard("projects")} className='underline cursor-pointer active:scale-105 duration-100 ease-in-out'>Projects</h3>
            <h3 onClick={() => setBoard("about")} className='underline cursor-pointer active:scale-105 duration-100 ease-in-out'>About</h3>
            <h3 onClick={() => setBoard("contact")} className='underline cursor-pointer active:scale-105 duration-100 ease-in-out'>Contact</h3>
        </nav>

        <div className='w-full h-[80svh]'>
            {board === "projects" && <Projects />}
            {board === "about" && <About />}
            {board === "contact" && <Contact />}
        </div>

    </div>
  )
}
