import React from 'react'
import { BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs'

const Sidebar = ({opensidebarToggle,OpenSidebar}) => {
  return (
    <aside id='sidebar' className={opensidebarToggle?"sidebar-responsive":""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header'/> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
           <a href="">
              <BsGrid1X2Fill className='icon'/>Dasboard
           </a>
        </li>
        <li className='sidebar-list-item'>
           <a href="">
              <BsFillArchiveFill className='icon'/>Perks
           </a>
        </li>
        <li className='sidebar-list-item'>
           <a href="">
              <BsFillGrid3X3GapFill className='icon'/>Addons
           </a>
        </li>
        
        <li className='sidebar-list-item'>
           <a href="">
              <BsListCheck className='icon'/>FAQ
           </a>
        </li>
        <li className='sidebar-list-item'>
           <a href="">
              <BsPeopleFill className='icon'/>Support
           </a>
        </li>
       
      </ul>
    </aside>
  )
}

export default Sidebar