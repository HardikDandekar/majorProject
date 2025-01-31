import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav2 = () => {
  return (
    <div className='h-[10%] w-[100%]'>
    <nav className='h-[120%]  text-white w-[100%] flex justify-between items-center'>
      
      <div className='flex  '>
        <div className='bg-orange-400 h-64 w-24'>h</div>
        <img className='h-20 absolute z-auto mt-24 ml-8 ' src="https://static.vecteezy.com/system/resources/thumbnails/035/915/849/small/ai-generated-car-logo-isolated-no-background-ai-generated-free-png.png" alt="" /></div>
      <div className='flex gap-10 mr-6'>
      <i className="mr-4 text-xl ri-menu-2-fill"></i>
       <NavLink to="">HOME</NavLink>
        <NavLink to="/Create">GARAGE</NavLink>
      </div>


    </nav>
  
</div>
  )
}

export default Nav2
