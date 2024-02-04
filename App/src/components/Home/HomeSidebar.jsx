import React from 'react'
import logo from "../../images/logo.png"
import Icons from '../../Data/Icons'

function HomeSidebar() {
  return (
    <div className='w-20 h-full border-r border-gray-200 flex flex-col justify-around items-center px-3'>
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
      <div className="flex flex-col items-center justify-center">
        <p className='text-emerald-600 flex flex-col-reverse'>Ⓒ AR It Solutions</p>
      </div>
    </div>
  )
}

export default HomeSidebar