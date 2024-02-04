import React from 'react'
import HomeSidebar from '../components/Home/HomeSidebar'
import HomeMain from '../components/Home/HomeMain'

function Home() {
    return (
        <div className=' w-full h-screen bg-color flex justify-between text-white overflow-hidden'>
            <HomeSidebar />
            <HomeMain />
        </div>
    )
}

export default Home