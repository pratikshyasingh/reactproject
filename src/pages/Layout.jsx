import React, { Suspense } from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Suspense fallback={<h1 className='text-4xl'>Loading........</h1>}><Outlet/></Suspense>
    </div>
  )
}

export default Layout