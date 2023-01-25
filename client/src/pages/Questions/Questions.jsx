import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
const Questions = () => {
  return (
  
    <div className='home-container-1'>
      <div className='home-left'>
        <LeftSidebar/> 
        <HomeMainbar/>
      </div>
     
      <div className='home-container-2'>
        <RightSidebar/>
      </div>
      
    </div>
      
      
    
  )
}

export default Questions
