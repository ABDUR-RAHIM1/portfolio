import React from 'react'
import logo from "../images/logo.png"
import Icons from '../Data/Icons'
import { motion } from 'framer-motion'

function Sidebar() {
  return (
    <div className='sidebar'>
      <motion.div
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: "1" }}
        className="profile">
        <img className='logo' src={logo} alt="" />
      </motion.div>
      <motion.div
        initial={{ x: -20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: "1" }}
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
        className='w-full h-8 bg-emerald-600 rounded-full' >  </motion.div>
    </div>
  )
}

export default Sidebar