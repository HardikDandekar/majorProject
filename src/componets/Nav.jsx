import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-[10%] w-[100%]'>
        <nav className='h-[120%]  text-white w-[100%] flex justify-between items-center'>
          
          <div className='flex gap-10 ml-8'>
           {/* <NavLink href="">ABOUT Us</NavLink>
            <NavLink href="">FAQ</NavLink>
            <NavLink href="">CONTACS</NavLink> */}
          </div>

          <button className='px-5 py-2 mr-6 bg-orange-400 '>+919399211246</button>
         
        


        </nav>
      
    </div>
  )
}

export default Nav
