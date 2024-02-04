import React from 'react'
import Heading from '../Heading'
import servicesData from '../../Data/Services'

function My_services() {
    return (
        <>
            <Heading text="my services" />
            <div className="my_services">
                {
                    servicesData && servicesData.map((sv, index) => (
                        <div style={{border:"1px solid #878787" , background :"#0f172a"}} className='my-5 w-full md:w-31 shadow-md  p-3 rounded-md hover:translate-y-1 duration-200' key={index}>
                            <div className='flex items-center justify-between'>
                                <span className='text-4xl rounded-full bg-emerald-600  cursor-pointer p-3'>{sv.icon}</span>
                                <p className='text-4xl opacity-5'>{index + 1}</p>
                            </div>
                            <h2 className='my-4 capitalize text-xl'>{sv.title}</h2>
                            <p>
                                {sv.desc}
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default My_services