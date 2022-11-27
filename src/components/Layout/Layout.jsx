import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout