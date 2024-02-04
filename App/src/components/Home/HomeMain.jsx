import React from 'react'
import images from "../../images/logo.png"
import Icons  from '../../Data/Icons';
function HomeMain() {
  
    return (
        <div className=' text-white flex items-center justify-center flex-col'>
            <img className='w-44 h-44 rounded-full border-4 border-solid border-emerald-500' src={images} alt="" />
            <h1 className="text-3xl capitalize my-3">Hi . Im abdur rahim |</h1>
            <p className=' md:w-7/12 text-center italic'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web application</p>
            <div className="flex items-center justify-center gap-4 my-4">
                  {
                    Icons && Icons.map((li  , index)=>(
                        <a key={index} className='icons' href={li.link}>{li.item}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeMain