import ProjectCard from '@/components/ui/Card/ProjectCard'
import ClientsLayout from '@/layouts/ClientsLayout'
import React from 'react'

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
        </div>

      </ClientsLayout>
    </div>
  )
}
