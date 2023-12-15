import React from 'react'
import { Button } from 'antd';
import videoOne from '../../../public/assets/videoOne.mp4';
import videoThumb from '../../../public/assets/thumbnails/videoThumb.png';
import flyerCopy from '../../../public/assets/thumbnails/flyer-copy.png';
import thumbOne from '../../../public/assets/thumbnails/thumbOne.png';
import thumbTwo from '../../../public/assets/thumbnails/thumbTwo.png';
import thumbThree from '../../../public/assets/thumbnails/thumbThree.png';
import exThumb from '../../../public/assets/thumbnails/exThumb.png';
import ex from '../../../public/assets/photoAssignmentFinal.pdf';
import flyer from '../../../public/assets/flyer.png';
import photoass from '../../../public/assets/photoAssignment.pdf';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
  return (
    <div className='flex flex-1 pb-12'>
      <div className='flex flex-col items-center lg:pt-20 flex-1'>
        <div className='mb-6'>
          <h2 className='font-bold'>My Projects</h2>
          <p className='text-center'>Checkout my projects below!</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full lg:w-auto gap-6'>
          <div className='project-container'>
            <img className='rounded-full h-28 lg:h-56 w-28 lg:w-56' src={flyerCopy} />
            <div className='flex flex-col gap-3 md:gap-6'>
              <h3 className='font-bold md:text-2xl'>Advising Flyer</h3>
              <p className='font-semibold'>UA School of Comm. adviser fair flyer.</p>
              <Button className='project-btn'>
                <a href={flyer} target='_blank'>View Project</a>
              </Button>
            </div>
          </div>
          <div className='project-container'>
            <img className='rounded-full h-28 lg:h-56 w-28 lg:w-56' src={exThumb} />
            <div className='flex flex-col gap-3 md:gap-6'>
              <h3 className='font-bold md:text-2xl'>Social Media Campaign</h3>
              <p className='font-semibold'>Swenson's Drive Ins holiday social media campaign.</p>
              <Button className='project-btn'>
                <a href={ex} target='_blank'>Download Project</a>
              </Button>
            </div>
          </div>
          <div className='project-container'>
            <img className='rounded-full h-28 lg:h-56 w-28 lg:w-56' src={videoThumb} />
            <div className='flex flex-col gap-3 md:gap-6'>
              <h3 className='font-bold md:text-2xl'>30 sec. Commercial</h3>
              <p className='font-semibold'>Day in the life of a UA Comm student.</p>
              <Button className='project-btn'>
                <a href={videoOne} target='_blank'>View Project</a>
              </Button>
            </div>
          </div>
          <div className='project-container'>
            <Carousel 
            autoPlay
            infiniteLoop
            showThumbs={false} 
            showArrows={false} 
            showIndicators={false} 
            showStatus={false}
            className='h-28 lg:h-56 w-28 lg:w-56'
            >
              <div>
                <img className='rounded-full h-28 lg:h-56 w-28 lg:w-56' src={thumbOne} />
              </div>
              <div>
                <img className='rounded-full h-28 lg:h-56 w-28 lg:w-56' src={thumbTwo} />
              </div>
              <div>
                <img className='rounded-full h-28 lg:h-56 w-28 lg:w-56' src={thumbThree} />
              </div>
            </Carousel>
            <div className='flex flex-col gap-3 md:gap-6'>
              <h3 className='font-bold md:text-2xl'>Photography Assignment</h3>
              <p className='font-semibold'>Variations of different shots.</p>
              <Button className='project-btn'>
                <a href={photoass} target='_blank'>View Project</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects