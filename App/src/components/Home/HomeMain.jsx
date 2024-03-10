import React from 'react'
import images from "../../images/image.jpg"
import Icons from '../../Data/Icons';
import { motion } from "framer-motion"

function HomeMain() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: "0.5" }}
            className='  flex items-center justify-center flex-col'>
            <img className=' homeImg duration-500 w-44 h-44 rounded-full border-4 border-solid border-emerald-500' src={images} alt="" />
            <h1 className="text-2xl text-center md:text-3xl uppercase my-3 homeHeading font-medium">Hi, Im abdur rahim </h1>
            <p className=' md:w-7/12 text-center italic'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web application</p>
            <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: "3" }}
            className="flex items-center justify-center gap-4 my-4">
                {
                    Icons && Icons.map((li, index) => (
                        <a target='_blank' key={index} className='icons' href={li.link}>{li.item}</a>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default HomeMain