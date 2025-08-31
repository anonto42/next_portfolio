import ClientsLayout from '@/layouts/ClientsLayout'
import AboutSectionUnderHeroSection from './AboutSectionUnderHeroSection';
import ImageBoxUnderHeroSection from './ImageBoxUnderHeroSection';
import { getHomeAboutData } from '@/funcs/get.server.func';

export default async function HeroSection() {

  const data = await getHomeAboutData()

  return (   
    <div 
        className='w-full md:h-[450px] py-6 md:py-0 text-white'
        style={{
          background: 'linear-gradient(to right, #187CBF 0%, #4A90E2 40%, #BBD9ED 80%)',
        }} 
    >
        <ClientsLayout>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='md:grid-cols-2 grid grid-cols-1 gap-5 items-center xl:pl-[150px] bg-gray-'>
                  <AboutSectionUnderHeroSection
                    data={data.HeroSection}
                    links={data.links}
                  />
                  <ImageBoxUnderHeroSection data={data.imageData} />
                </div>
            </div>
        </ClientsLayout>
    </div>
  )
}
