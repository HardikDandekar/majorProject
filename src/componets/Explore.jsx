import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div className='h-screen  bg-zinc-800 flex justify-center flex-wrap gap-5 items-center'>

      <div className='  h-[45%] w-[30%] justify-center items-center gap-6 flex flex-col'>
        <Link to={"/Average"} className='bg-zinc-300  overflow-hidden rounded  h-[250px] hover:scale-105 w-[390px] transition-all duration-500 '>
        <img className='h-full  w-full' src="https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Link>
        <h1 className='text-5xl text-zinc-200 font-extrabold'>Cabs</h1>
        </div>

        {/* <div className='  h-[45%] w-[30%] justify-center items-center gap-6 flex flex-col'>
        <Link to={"/Standard"} className='bg-zinc-300  overflow-hidden rounded  h-[250px] hover:scale-105 w-[390px] transition-all duration-500 '>
        <img className='h-full  w-full' src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Link>
        <h1 className='text-5xl text-zinc-200 font-extrabold'>Standard</h1>
        </div>
        
        
     
        <div className=' h-[45%] w-[30%] justify-center items-center gap-6 flex flex-col'>
        <Link to={"/Premium"} className='  overflow-hidden rounded bg-zinc-300 h-[250px] hover:scale-105 w-[390px] transition-all duration-500 '> 
         <img className=' h-full  w-full overflow-hidden ' src="https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Link>
        <h1 className='text-5xl text-zinc-200 font-extrabold'>Premium</h1>
        </div> */}
   

       

      
    </div>
  )
}

export default Explore
