import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

import './App.css'

function App() {
  const [openSidebar,setOpensidebar]= useState(false)

  const OpenSidebar=()=>{
    setOpensidebar(!openSidebar)
  }
  return (
   <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar opensidebarToggle ={openSidebar} OpenSidebar={OpenSidebar}/>
    <Home/>
  
   </div>
  )
}

export default App
