"use client";
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import ProjectCard from '../Card/ProjectCard';
import AddProjectCard from '../Card/AddProjectCard';

export default function Projects() {

  const [addNew, setAddNew] = useState<boolean>(false);

  const [projects, setProjects] = useState<any[]>([
    {
      name: "Project 1",
      image: "/skills_images/first.png",
      description: "Description for Project 1",
    },{
      name: "Project 1",
      image: "/skills_images/first.png",
      description: "Description for Project 1",
    },{
      name: "Project 1",
      image: "/skills_images/first.png",
      description: "Description for Project 1",
    },{
      name: "Project 1",
      image: "/skills_images/first.png",
      description: "Description for Project 1",
    },
  ]);


  return (
    <div className='relative w-full h-full'>
      {
        addNew && (
          <AddProjectCard />
        )
      }

      <div className='w-[80px] h-[80px] right-0 top-0 absolute flex justify-center items-center'>
        <CiCirclePlus
          size={47} 
          className='cursor-pointer active:scale-105 transition duration-300 ease-in-out' 
          onClick={() => setAddNew(!addNew)}
        />
      </div>

      <div className='flex flex-wrap justify-center pt-[90px] gap-3 text-black'>
        {
          projects.map((project, index) => (
            <ProjectCard key={index} name={project.name} image={project.image} description={project.description} index={index} />
          ))
        }
      </div>

      

    </div>
  )
}
