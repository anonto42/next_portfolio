import React from 'react';

export default function VideoCard() {
  return (
    <div className='w-full max-w-[800px] h-auto flex flex-col items-center mx-auto rounded-xl shadow-[0_0px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0px_10px_rgba(0,0,0,0.2)] cursor-pointer transition-transform duration-200 hover:scale-[1.01] mt-3 overflow-hidden'>
      <video 
        src="/intro_video/intro.mp4" 
        controls 
        loop 
        autoPlay 
        className='w-full h-full object-cover'
      ></video>
    </div>
  );
}
