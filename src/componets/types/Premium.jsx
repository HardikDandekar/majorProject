// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Premium = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-zinc-700 h-full">
//       <div className="h-[13%] flex items-center bg-zinc-800 ">
//         <button
//           onClick={() => navigate(-1)}
//           className="  ml-10 bg-orange-300  rounded px-8 py-2"
//         >
//           Back
//         </button>

//         <div className="w-full h-[80px] flex items-center justify-center">
//           <h1 className=" mr-[10%] text-5xl font-extrabold text-zinc-200">Premium Cabs</h1>
//         </div>
//       </div>

//       <div className=" h-full px-20 py-12 flex flex-wrap gap-5">



//         <div className="h-[340px] w-[400px] overflow-hidden bg-slate-400">
//           <div className="h-[60%] ">
//             <img
//               className="h-full w-full object-cover"
//               src="https://images.unsplash.com/photo-1613921568487-7156e89f2b5d?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//           <div className="h-[40%] p-3">
//             <h1 className="text-2xl mb-9 font-bold">Porsche 911</h1>
//             <Link className="px-40 py-3 ml-1 font-bold rounded bg-zinc-700 text-white hover:text-zinc-900 hover:bg-zinc-200 transition-all duration-300">Show</Link>
//           </div>
//         </div>


//         <div className="h-[340px] w-[400px] overflow-hidden bg-slate-400">
//           <div className="h-[60%] ">
//             <img
//               className="h-full w-full object-cover"
//               src="https://images.unsplash.com/photo-1613921568487-7156e89f2b5d?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//           <div className="h-[40%] p-3">
//             <h1 className="text-2xl mb-9 font-bold">Porsche 911</h1>
//             <Link className="px-40 py-3 ml-1 font-bold rounded bg-zinc-700 text-white hover:text-zinc-900 hover:bg-zinc-200 transition-all duration-300">Show</Link>
//           </div>
//         </div>



//         <div className="h-[340px] w-[400px] overflow-hidden bg-slate-400">
//           <div className="h-[60%] ">
//             <img
//               className="h-full w-full object-cover"
//               src="https://images.unsplash.com/photo-1613921568487-7156e89f2b5d?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//           <div className="h-[40%] p-3">
//             <h1 className="text-2xl mb-9 font-bold">Porsche 911</h1>
//             <Link className="px-40 py-3 ml-1 font-bold rounded bg-zinc-700 text-white hover:text-zinc-900 hover:bg-zinc-200 transition-all duration-300">Show</Link>
//           </div>
//         </div>



//         <div className="h-[340px] w-[400px] overflow-hidden bg-slate-400">
//           <div className="h-[60%] ">
//             <img
//               className="h-full w-full object-cover"
//               src="https://images.unsplash.com/photo-1613921568487-7156e89f2b5d?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//           <div className="h-[40%] p-3">
//             <h1 className="text-2xl mb-9 font-bold">Porsche 911</h1>
//             <Link className="px-40 py-3 ml-1 font-bold rounded bg-zinc-700 text-white hover:text-zinc-900 hover:bg-zinc-200 transition-all duration-300">Show</Link>
//           </div>
//         </div>



//         <div className="h-[340px] w-[400px] overflow-hidden bg-slate-400">
//           <div className="h-[60%] ">
//             <img
//               className="h-full w-full object-cover"
//               src="https://images.unsplash.com/photo-1613921568487-7156e89f2b5d?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//           <div className="h-[40%] p-3">
//             <h1 className="text-2xl mb-9 font-bold">Porsche 911</h1>
//             <Link className="px-40 py-3 ml-1 font-bold rounded bg-zinc-700 text-white hover:text-zinc-900 hover:bg-zinc-200 transition-all duration-300">Show</Link>
//           </div>
//         </div>


//         <div className="h-[340px] w-[400px] overflow-hidden bg-slate-400">
//           <div className="h-[60%] ">
//             <img
//               className="h-full w-full object-cover"
//               src="https://images.unsplash.com/photo-1613921568487-7156e89f2b5d?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//           <div className="h-[40%] p-3">
//             <h1 className="text-2xl mb-9 font-bold">Porsche 911</h1>
//             <Link className="px-40 py-3 ml-1 font-bold rounded bg-zinc-700 text-white hover:text-zinc-900 hover:bg-zinc-200 transition-all duration-300">Show</Link>
//           </div>
//         </div>




//       </div>
//     </div>
//   );
// };
// export default Premium;
