import React from 'react'

const Body = () => {
  return (
    <div className=' space-y-4 lg:flex justify-between'>
      <div className='lg:order-2'>
        <img className='rounded-2xl' width="400px"  src="./src/assets/body-img.jpeg"/>
      </div>
      <div className=' lg:order-1'> 
        <h1 className='text-5xl font-bold font-playfair leading-tight'>
          Host your website in less then  5 minutes 
        </h1>
        <p className=' font-lato text-gray-400'> 
          With HostSting get your website up and running  in less then 5 minutes with most competitive pricing packages available online...
        </p>
        <form className='flex flex-col gap-4'>
          <input className=' rounded-md px-4 py-3 placeholder: text-gray-400' type="email" placeholder='Enter your Email'></input>
          <button className=' rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 'type='Submit'>Join WaitList</button>
        </form>
      </div>
    </div>
  )
}

export default Body