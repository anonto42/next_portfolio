"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NButtonProps {
  name?: string;
  href: string;      
  style?: string;  
}

export default function NButton({
  name = "Button",
  href,
  style = "",
}: NButtonProps) {
  const pathname = usePathname(); 

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-4 py-2 
        transition duration-500 ease-in-out 
        flex justify-center items-center 
        text-[16px] font-medium cursor-pointer
        ${
          isActive ? 
          "bg-[#1172B2] text-white scale-105 shadow-md" : 
          "bg-[#E8F6FF] text-[#3F3F3F]"
        }
        ${style}
      `}
    >
      {name}
    </Link>
  );
}
