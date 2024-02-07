import React from 'react'
import logo from "../../images/image.jpg"
import Icons from '../../Data/Icons'
import { motion } from 'framer-motion'
import {Link} from "react-router-dom"
function Sidebar() {
  return (
    <div className='sidebar '>
      <motion.div
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: "1" }}
        className="profile">
        <Link to="/" >
          <img className='logo' src={logo} alt="" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: -20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: "1" }}
        className='m-auto'
      >
        {
          Icons && Icons.map((ic, index) => (
            <a key={index} className='icons text-emerald-500' href={ic.link}>{ic.item}</a>
          ))
        }
      </motion.div>
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: "1" }}
        className='w-full h-8 bg-emerald-600 rounded-full flex items-center justify-center' >  AB </motion.div>
        
    </div>
  )
}

export default Sidebar