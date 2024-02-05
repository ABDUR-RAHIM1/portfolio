import React from 'react'
import Heading from '../Heading'
import aboutData from '../../Data/About'
import images from "../../images/logo.png"
import { motion } from "framer-motion"

function AboutInfo() {
  return (
    <div className='my-24 '>
      <Heading text="about" />
      <div className='about_page'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: "2" }}
          className="w-48">
          <img src={images} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: "1" }}
          className='w-48 '>
          {
            aboutData && aboutData.map((ab, index) => (
              <li key={index} className=' text-lg text-emerald-500 capitalize my-4 italic'>

                <span className='text-white'>
                  {ab.key} <span className='ml-4 text-white'>: {ab.value}</span>
                </span>

              </li>
            ))
          }
          <motion.button
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: "2" }}
            className='button bg-emerald-600 text-white'>Download Cv</motion.button>

        </motion.div>
      </div>
    </div>

  )
}

export default AboutInfo