import React from 'react'
import logo from "../images/logo.png"
import Icons from '../Data/Icons'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="profile">
        <img className='logo' src={logo} alt="" />
      </div>
      <div>
        {
          Icons && Icons.map((ic, index) => (
            <a key={index} className='icons text-emerald-500' href={ic.link}>{ic.item}</a>
          ))
        }
      </div>
      <div  className='w-full h-8 bg-emerald-600 rounded-full' >
           
      </div>
    </div>
  )
}

export default Sidebar