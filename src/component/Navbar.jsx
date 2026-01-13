import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-[50px] bg-purple-950'>
      <ul className='flex gap-7 justify-center items-center  '>
        <li className='text-white mt-3'><Link to="/home">Home</Link></li>
        <li className='text-white mt-3'><Link to="/about">About</Link></li>
        <li className='text-white mt-3'><Link to="/dashboard">Dashboard</Link></li>
        
      </ul>
    </div>
  )
}

export default Navbar