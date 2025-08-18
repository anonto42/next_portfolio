import ProjectCard from '@/components/ui/Card/ProjectCard'
import ClientsLayout from '@/layouts/ClientsLayout'
import React from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'

export default function PortfolioPage() {

  const projects = [
    {
      name: "Project 1",
      image: "/skills_images/first.png",
      description: "Description for Project 1", 
    },
    {
      name: "Project 2",
      image: "/skills_images/second.png",
      description: "Description for Project 2", 
    },
    {
      name: "Project 3",
      image: "/skills_images/third.png",
      description: "Description for Project 3", 
    },
    {
      name: "Project 1",
      image: "/skills_images/first.png",
      description: "Description for Project 1", 
    },
    {
      name: "Project 2",
      image: "/skills_images/second.png",
      description: "Description for Project 2", 
    },
    {
      name: "Project 3",
      image: "/skills_images/third.png",
      description: "Description for Project 3", 
    }
]

  return (
    <div className='w-full h-auto'>
      <ClientsLayout>
        <div className='py-12'>

          <div className='text-center mb-6'>
            <h2 className='text-2xl md:text-4xl font-semibold text-shadow-xl tracking-tighter'>Portfolio</h2>
            <p className='text-gray-500 text-sm md:text-base'>Check out some of my recent work</p>
          </div>

          <div className='flex flex-wrap gap-4'>
            {
              projects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  name={project.name} 
                  image={project.image} 
                  description={project.description} 
                  index={index} 
                />
              ))
            }
          </div>

            {/* Pagination Component */}
          <div className='flex justify-between mt-12 w-full max-w-[800px] mx-auto h-full items-center'>
            
            <h1 className='text-gray-500 text-sm md:text-base font-semibold'>Showing 1 to 5 page</h1>


            <div className='flex gap-4 items-center'>
              <button className='text-gray-500 text-sm md:text-base cursor-pointer active:scale-105 transition-all duration-300 hover:bg-gray-500 hover:text-white rounded-full'>
                <GoArrowLeft size={25} />
              </button>
              
              <div className='flex gap-2'>
                <button className='w-[30px] h-[30px] bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer active:scale-105 transition-all duration-300'>1</button>
                <button className='w-[30px] h-[30px] bg-blue-200 text-black rounded-full flex items-center justify-center cursor-pointer active:scale-105 transition-all duration-300'>2</button>
                <button className='w-[30px] h-[30px] bg-blue-200 text-black rounded-full flex items-center justify-center cursor-pointer active:scale-105 transition-all duration-300'>3</button>
                <button className='w-[30px] h-[30px] bg-blue-200 text-black rounded-full flex items-center justify-center cursor-pointer active:scale-105 transition-all duration-300'>4</button>
                <button className='w-[30px] h-[30px] bg-blue-200 text-black rounded-full flex items-center justify-center cursor-pointer active:scale-105 transition-all duration-300'>5</button>
              </div>

              <button className='text-gray-500 text-sm md:text-base cursor-pointer active:scale-105 transition-all duration-300 hover:bg-gray-500 hover:text-white rounded-full'>
                <GoArrowRight size={25} />
              </button>
            </div>

          </div>

        </div>
      </ClientsLayout>
    </div>
  )
}
