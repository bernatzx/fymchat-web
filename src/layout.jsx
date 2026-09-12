import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './partials/Header'
import Footer from './partials/Footer'

function Layout() {
  return (
    <div className='font-poppins light-green px-3 pt-3'>
      <Header />
      <div className='white-color gray-border border-2 p-3 rounded-tl-xl rounded-tr-xl'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout