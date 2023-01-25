import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'
const DisplayQuestion = () => {
  return (
      
    <div className='home-container-1'>
      <div className='home-left'>
        <LeftSidebar/> 
        <QuestionsDetails/>
      </div>
     
      <div className='home-container-2'>
       
        <RightSidebar/>
      </div>
      
    </div>
      
    
  )
}

export default DisplayQuestion
