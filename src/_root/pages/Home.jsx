import React from 'react'
import { Button, Tooltip } from 'antd'
import { LinkedinOutlined, FileTextOutlined } from '@ant-design/icons';
import headshot from '../../../public/assets/valerieheadshot.jpg';
import resume from '../../../public/assets/resume.pdf';
import HeroName from '../../components/HeroName';


const Home = () => {
  return (
    <div className='flex flex-1'>
      <div className='flex flex-col md:pt-24 flex-1'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
          <img className='rounded-full shadow-2xl' src={headshot} />
          <div className='flex flex-col gap-4 items-center md:items-start'>
            <HeroName />
            <p className='text-xl font-bold indent-6'>
              Valerie's Media Portfolio showcases a dynamic fusion of creativity and education in the realm 
              of media. My creative vision, storytelling abilities, and technical prowess are demonstrated 
              through a compilation of projects, each a testament to my dedication and growth in the ever-evolving
              world of media.
            </p>
            <div className='flex gap-5 items-center'>
              <Tooltip placement='bottom' title='LinkedIn'>
                <a className='home-icons' target='_blank' href='https://www.linkedin.com/in/valerienpetrovich' >
                  <LinkedinOutlined className='text-3xl' />
                </a>
              </Tooltip>
              <Tooltip placement='bottom' title='Resume'>
                <a className='home-icons' target='_blank' href={resume}>
                  <FileTextOutlined className='text-3xl' />
                </a>
              </Tooltip>
              <Button className='get-in-touch' size='large'>
                <a target='_blank' href='mailto:vnp13@uakron.edu'>Get in touch!</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home