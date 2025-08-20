import ClientsLayout from '@/layouts/ClientsLayout'
import React from 'react'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  
  return (
    <div className="w-full min-h-[80svh]">
      <ClientsLayout>
        <h1>{resolvedParams.id}</h1>
      </ClientsLayout>
    </div>
  )
}