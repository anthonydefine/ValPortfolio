import React from 'react'
import aboutme from '../../../public/assets/aboutme.mov';

const About = () => {
  return (
    <div className='flex flex-1 pb-12'>
      <div className='flex flex-col items-center flex-1 h-full w-full'>
        <div>
          <h2 className='font-bold mb-4'>About Me</h2>
        </div>
        <div className='video-outline rounded-2xl md:p-3 lg:p-6'>
          <video className='h-full rounded-xl' controls >
            <source src={aboutme} type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  )
}

export default About