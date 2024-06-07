import React from 'react'

const Footer = () => {
  return (
    <div className=' flex justify-between gap-12 mt-auto'>
      <ul className=' flex  gap-6 font-lato text-gray-400'>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    <div className='flex gap-2'> 
      <img className=' w-16' src="./src/assets/Expert.jpeg" alt="specialist"/>
      <div>
        <p className=' font-playfair'>Have any Questions ?</p>
        <a  className=" font-lato"href="#" >Talk to Specialist</a>
      </div>
    </div>
    </div>
  )
}

export default Footer