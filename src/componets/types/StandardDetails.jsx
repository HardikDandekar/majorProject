// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Link, useNavigate, useParams } from 'react-router-dom'

// const StandardDetails = () => {
//     const navigate = useNavigate();

//     const {id} = useParams();

//     const{scarList} = useSelector((state) => state.scar)

//     const c = scarList.find((car) => car.id == id);



//   return (    
// <div className='h-screen w-full bg-zinc-800 flex items-center justify-center'>

//     <div className='h-[90%] w-[80%] bg-gray-100'>

//         <div className='h-[60%] bg-red-600'>
//             <img className='h-full w-full object-cover' src={c.url} alt="" />
//         </div>

//         <div className='h-[40%] bg-zinc-300 flex '>

//             <div className='w-[80%]  p-10'>
//                <h1 className='text-5xl font-extrabold'>{c.name}</h1>
//                <h2 className='text-2xl font-semibold mt-3'>Type - {c.type}</h2>

//                <h1 className='mt-1 font-semibold'>Rs {c.price} /- per hour</h1>
//                <p className='mt-2 mb-3'>{c.description}</p>

//                <button className='px-10 py-2 text-white bg-zinc-700 hover:bg-zinc-800 transition-all duration-200'>Booking</button>
             
//             </div>
//             <div className='w-[20%] p-10 justify-end flex flex-col gap-5'>


//             <Link 
//               onClick={() => navigate(-1)}
//             className=' flex justify-center items-center py-2 bg-zinc-700 text-white hover:bg-zinc-800 transition-all duration-200'>Back</Link>
//                 <button className=' py-2 bg-zinc-700 text-white hover:bg-zinc-800 transition-all duration-200'>Edit</button>
//                 <button className='py-2 bg-zinc-700 text-white hover:bg-zinc-800 transition-all duration-200'>Delete</button>
//             </div>

//         </div>


//     </div>
 
// </div>
//   )
// }

// export default StandardDetails
