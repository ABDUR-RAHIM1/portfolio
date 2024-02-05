import React from 'react'
import Sidebar from './Sidebar'

function Layout({ children }) {
    return (
        <div className=' w-full h-screen bg-color flex justify-between text-white overflow-hidden'>
            <Sidebar />

            <div className='main'>
                {children}
            </div>
        </div>
    )
}

export default Layout