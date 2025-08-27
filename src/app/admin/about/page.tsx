import React from 'react'

export default function page() {
  return (
    <div className='p-4'>

      <h1 className='text-2xl font-bold mb-4'>For Home Page</h1>

      <div className='bg-[#232323] p-3 rounded-lg'>
        <h2 className='text-lg font-semibold mb-2'>First Title:</h2>
        <input 
          type="text" 
          placeholder='First Title'
          className='border border-gray-300 rounded-md px-2 py-1 w-full' 
        />
      </div>

      <div className='bg-[#232323] p-3 mt-3 rounded-lg'>
        <h2 className='text-lg font-semibold mb-2'>Second Title:</h2>
        <input 
          type="text" 
          placeholder='Second Title'
          className='border border-gray-300 rounded-md px-2 py-1 w-full' 
        />
      </div>

      
      <div className='bg-[#232323] p-3 mt-3 rounded-lg'>
        <h2 className='text-lg font-semibold mb-2'>Description :</h2>
        <textarea 
          placeholder='Description'
          className='border border-gray-300 rounded-md px-2 py-1 w-full' 
        />
      </div>

    </div>
  )
}
