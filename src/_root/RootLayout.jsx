import React from 'react'
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';

const RootLayout = () => {
  return (
    <div className='w-full'>
      <TopBar />
      <section className='outlet-section flex flex-1 h-full w-full pt-24 px-12'>
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout