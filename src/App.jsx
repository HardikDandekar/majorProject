import React from 'react'
import Home from './componets/Home'
import Explore from './componets/Explore'
import { Route, Routes } from 'react-router-dom'
import Average from './componets/types/Average'
// import Standard from './componets/types/Standard'
// import Premium from './componets/types/Premium'
import AvgDetails from './componets/types/AvgDetails'
import Create from './componets/Create'
// import StandardDetails from './componets/types/standardDetails'


const App = () => {
  return (
   <>


  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Create' element={<Create/>} />

    <Route path='/Explore' element={<Explore/>}/>

    <Route path='/Average' element={<Average/>}/>
    <Route path='/Average/:id' element={<AvgDetails/>}/>

    {/* <Route path='/Standard' element={<Standard/>}/>
    <Route path='/Standard/:id' element={<StandardDetails/>}/>
    <Route path='/Premium' element={<Premium/>}/> */}

   
  </Routes>


   </>

  )
}

export default App
