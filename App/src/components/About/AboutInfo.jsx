import React from 'react'
import Heading from '../Heading'
import aboutData from '../../Data/About'
import images from "../../images/logo.png"
function AboutInfo() {
  return (
    <div className='my-24 '>
      <Heading text="about" />
      <div className='about_page'>
        <div className="w-48">
          <img src={images} alt="" />
        </div>
        <div className='w-48 '>
          {
            aboutData && aboutData.map((ab, index) => (
              <li key={index} className=' text-lg text-emerald-500 capitalize my-4 italic'>

                <span className='text-white'>
                  {ab.key} <span className='ml-4 text-white'>: {ab.value}</span>
                </span>

              </li>
            ))
          }
          <button className='button bg-emerald-600 text-white'>Download Cv</button>
        
        </div>
      </div> 
    </div>

  )
}

export default AboutInfo