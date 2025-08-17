import React from 'react'
import SkillCard from '../Card/SkillCard'

export default function SkillsContainer() {

    const skills = [
        {
            name: "UX Research",
            image: "/skills_images/first.png",
        },
        {
            name: "UI Design",
            image: "/skills_images/second.png",
        },
        {
            name: "Usability Testing",
            image: "/skills_images/third.png",
        },
        {
            name: "Mobile & Web Design",
            image: "/skills_images/forth.png",
        }
    ]

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 items-center justify-center'>
        {
            skills.map((skill, index) => (
                <SkillCard key={index} name={skill.name} image={skill.image} />
            ))
        }
    </div>
  )
}
