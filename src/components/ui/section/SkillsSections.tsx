import ClientsLayout from '@/layouts/ClientsLayout';
import React from 'react'
import SkillsContainer from '../Container/SkillsContainer';

export default function SkillsSections() {

  const header = "Design Skills That Drive Impact";
  const subHeader = "I craft intuitive, user-friendly interfaces by combining research, creativity, and strategy — ensuring each design is both beautiful and purposeful";

  return (
    <div className='w-full h-auto text-center py-[90px]'>
      <ClientsLayout>
        <h1 className='md:text-3xl text-[24px] mb-2 font-bold tracking-wide text-shadow-lg'>{header}</h1>
        <p className='text-base text-[#474747da] w-[80%] md:w-1/2 mx-auto'>{subHeader}</p>

        <div className='w-full h-auto flex items-center justify-center mt-10'>
          <SkillsContainer />
        </div>

      </ClientsLayout>
    </div>
  )
}