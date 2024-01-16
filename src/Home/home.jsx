import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import HomeMainbar from '../components/HomeMainbar'
import '../App.css'

const home = () => {
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            <HomeMainbar/>
            <RightSidebar/>
        </div>
    </div>
  )
}

export default home
