import AboutVideoSection from '@/components/ui/section/AboutVideoSection'
import HeroSection from '@/components/ui/section/HeroSection'
import MyRole from '@/components/ui/section/MyRole'
import ResentComplitedProjects from '@/components/ui/section/ResentComplitedProjects'
import SkillsSections from '@/components/ui/section/SkillsSections'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SkillsSections />
      <ResentComplitedProjects />
      <AboutVideoSection />
      <MyRole />
    </div>
  )
}