import ClientsLayout from '@/layouts/ClientsLayout'
import React from 'react'

export default function page({ params }: { params: { id: string } }) {

    console.log(params.id)

  return (
    <div className='w-full min-h-[80svh]'>
        <ClientsLayout>
            <h1>{params.id}</h1>
        </ClientsLayout>
    </div>
  )
}
