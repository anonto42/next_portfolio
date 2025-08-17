import ClientsLayout from '@/layouts/ClientsLayout';
import React from 'react'
import ProjectCard from '../Card/ProjectCard';

export default function ResentComplitedProjects() {

    const header = "Recent Completed Projects";
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
        }
    ]

  return (
    <div className='text-center w-full h-auto pb-[90px]'>
        <ClientsLayout>
            <h1 className='md:text-3xl text-[24px] mb-5 md:mb-9 font-bold tracking-wide text-shadow-lg'>{header}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:w-[600px] md:w-[550px] lg:w-[820px] mx-auto'>
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
        </ClientsLayout>
    </div>
  )
}
