import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../src/_root/pages/Home';
import About from '../src/_root/pages/About';
import Projects from '../src/_root/pages/Projects';
import RootLayout from '../src/_root/RootLayout';

function App() {

  return (
    <>
      <main className='flex h-screen w-screen'>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
