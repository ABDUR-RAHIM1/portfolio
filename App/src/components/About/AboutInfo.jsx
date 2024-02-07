import React from 'react'
import Heading from '../Utilies/Heading'
import aboutData from '../../Data/About'
import images from "../../images/about.png"
import { motion } from "framer-motion"
import { FaDotCircle } from "react-icons/fa";

function AboutInfo() {
  return (
    <div className='my-24 '>
      <Heading text="about" />
      <div className='about_page flex-wrap'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: "2" }}
          className=" w-full md:w-48">
          <img src={images} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: "1" }}
          className=' w-full md:w-48 '>
          {
            aboutData && aboutData.map((ab, index) => (
          
                <div className='text-white flex items-center justify-between text-xl mt-3'>
                  <span className=' w-48'> <span className='text-lg text-emerald-500 mr-3'>*</span> {ab.key}</span>
                  <span className='ml-4 text-white w-48'>: {ab.value}</span>
                </div>
 
            ))
          }
          <motion.button
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: "2" }}
            className='button bg-emerald-600 text-white mt-3'>
            <a target='_blank' href="https://docs.google.com/document/d/1X3iuC4dGA9baR1IZDnaly4YXuvVaB9jAZcQZaNw1YCw/edit?usp=sharing">Download Cv</a>
          </motion.button>

        </motion.div>
      </div>
    </div>

  )
}

export default AboutInfo