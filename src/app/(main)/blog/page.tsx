import BlogCard from '@/components/ui/Card/BlogCard'
import ClientsLayout from '@/layouts/ClientsLayout'
import Link from 'next/link'
import React from 'react'

export default function BlogPage() {

  const blogs = [
    {
      id: 1,
      title: "Web Design",
      description: "This will the details of this blog post",
      category: "Web Design",
      publishedOn: "2025-08-20",
    },
    {
      id: 2,
      title: "Web Design",
      description: "This will the details of this blog post",
      category: "Web Design",
      publishedOn: "2025-08-20",
    },
    {
      id: 3,
      title: "Web Design",
      description: "This will the details of this blog post",
      category: "Web Design",
      publishedOn: "2025-08-20",
    },
    {
      id: 4,
      title: "Web Design",
      description: "This will the details of this blog post",
      category: "Web Design",
      publishedOn: "2025-08-20",
    },
    {
      id: 5,
      title: "Web Design",
      description: "This will the details of this blog post",
      category: "Web Design",
      publishedOn: "2025-08-20",
    },
    {
      id: 6,
      title: "Web Design",
      description: "This will the details of this blog post",
      category: "Web Design",
      publishedOn: "2025-08-20",
    }
  ]

  return (
    <div className='w-full h-auto'>
      <ClientsLayout>
        <div className='py-12'>

          <div className='text-center mb-6'>
            <h2 className='text-2xl md:text-4xl font-semibold text-shadow-xl tracking-tighter'>Blog</h2>
            <p className='text-gray-500 text-sm md:text-base'>Check out some of my recent work</p>
          </div>

          <div className='flex flex-wrap gap-4'>

            {
              blogs.map( ( item, index ) => (
                <BlogCard 
                  key={index} 
                  title={item.title} 
                  description={item.description} 
                  category={item.category} 
                  publishedOn={item.publishedOn} 
                  id={item.id} 
                />
              ))
            }

            
            
          </div>          
        </div>
      </ClientsLayout>
    </div>
  )
}
