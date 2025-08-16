import React from 'react'

export default function ClientsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div className='max-w-[1280px] h-full px-3 xl:px-0 mx-auto'>
        <div className='w-full h-full'>
            {children}
        </div>
    </div>
  )
}