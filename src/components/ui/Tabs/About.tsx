import React from 'react'
import ImageUploader from './Image'

export default function About() {


  return (
    <div className='w-full grid rows-2 md:rows-1 grid-cols-1 md:grid-cols-2 gap-3 justify-center p-3'>

        <div className='w-[90%] h-auto flex flex-col items-start bg-[white] justify-start p-2 rounded-sm shadow-[0_0px_5px_rgba(0,0,0,0.2)]'>
            <small className='text-[#00111d] text-sm font-bold'>First Header :</small>
            <input 
                type="text" 
                placeholder="First Header" 
                id="" 
                className={'w-full h-auto p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] placeholder:text-[#00111d] mt-2'}/>
        </div>
        
        <div className='w-[90%] h-auto flex flex-col items-start bg-[white] justify-start p-2 rounded-sm shadow-[0_0px_5px_rgba(0,0,0,0.2)]'>
            <small className='text-[#00111d] text-sm font-bold'>Second Header :</small>
            <input 
                type="text" 
                placeholder="Second Header" 
                id="" 
                className={'w-full h-auto p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] placeholder:text-[#00111d] mt-2'}/>
        </div>

        <div className='w-[90%] h-auto flex flex-col items-start bg-[white] justify-start p-2 rounded-sm shadow-[0_0px_5px_rgba(0,0,0,0.2)]'>
            <small className='text-[#00111d] text-sm font-bold'>Description :</small>
            <textarea 
                placeholder="Description" 
                id="" 
                className={'w-[90%] h-auto p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] placeholder:text-[#00111d] mt-2'}/>
        </div>

        <div className='w-[90%] h-auto flex flex-col items-start justify-start p-2 rounded-sm shadow-[0_0px_5px_rgba(0,0,0,0.2)]'>
            
            <ImageUploader apiEndpoint="" />
        </div>


    </div>
  )
}
