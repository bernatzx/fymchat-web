import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './partials/Header'
import Footer from './partials/Footer'

function Layout() {
  return (
    <div className='font-poppins light-green-bg-color px-3 pt-3 h-screen overflow-hidden'>
      <Header />
      <div className='white-bg-color gray-border-color border-2 p-3 rounded-tl-xl rounded-xl h-[calc(100vh-80px)] overflow-y-auto no-scrollbar flex flex-col'>
        <div className='flex-1'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout