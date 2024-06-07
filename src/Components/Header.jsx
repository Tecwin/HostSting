import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex justify-center items-center gap-8' >
        <img src="./src/assets/logo.png" width="100" alt="logo"/>
        <button className='bg-gradient-to-r from-yellow-400 to-red-400 px-6 py-1 rounded-lg'>HostSting is Hiring</button>
        </div>
        <ul className=' hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
          <li><a href="#">Plans</a></li>
          <li><a href="#">Find Domain</a></li>
          <li><a href="#">Why HostSting</a></li>
        </ul>
        <div className=' hidden lg:flex justify-between items-center font-lato gap-6'>
          <a href="#">Sign In</a>
          <button className=' rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600'>Join Waitlist</button>
        </div>
        <div className='lg:hidden'>
        <FaBars/>
      </div>
      </div>
  )
}

export default Header