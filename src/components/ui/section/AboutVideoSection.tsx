import ClientsLayout from '@/layouts/ClientsLayout'
import React from 'react'
import VideoCard from '../Card/VideoCard'

export default function AboutVideoSection() {
  return (
    <div className='w-full h-auto text-center mb-[90px]'>
        <ClientsLayout>

            <h1 className='text-3xl font-bold tracking-wide text-shadow-lg'>About Video Section</h1>

            <VideoCard />

        </ClientsLayout>
    </div>
  )
}
