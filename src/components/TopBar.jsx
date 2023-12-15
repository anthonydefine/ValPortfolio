import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Dropdown } from 'antd'
import multimedia from '../../public/assets/multimedia.png';
import { MenuOutlined } from '@ant-design/icons';


const items = [
  {key: '1', label: (<Link to='/'>Home</Link>)},
  {key: '2', label: (<Link to='/About'>About</Link>)},
  {key: '3', label: (<Link to='/Projects'>Projects</Link>)},
]

const TopBar = () => {
  return (
    <section className='fixed flex justify-between items-center top-0 z-50 w-full py-4 px-12'>
      <div className='hidden md:block'>
        <Link to='/' className='flex items-center gap-2'>
          <img className='w-12' src={multimedia} />
          <h3 className='text-xl font-bold'>Valerie Petrovich</h3>
        </Link>
      </div>
      <div className='hidden md:flex gap-8'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Projects'>Projects</Link>
      </div>
      <div className='block md:hidden'>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          className='cursor-pointer'
        >
          <MenuOutlined />
        </Dropdown>
      </div>
      <div>
        <Button className='get-in-touch'>
          <a target='_blank' href='mailto:vnp13@uakron.edu'>Get in touch!</a>
        </Button>
      </div>
    </section>
  )
}

export default TopBar