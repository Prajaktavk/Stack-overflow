import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to="/" className="side-nav-links" activeClass='active'>
            {/* NavLink is same as Link 
             Link  which is used in navbar is called NavLink   */}
             {/*active CSS pseudo-class represents an element (such as a button) that is being activated by the user.
              When using a mouse, "activation" typically starts when the user presses down the primary mouse button.*/}
              <p>Home</p>
            </NavLink>

        <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
            
            <NavLink to='/Questions' className="side-nav-links" activeClass='active'>
               <img src={Globe} alt="Globe"/>
               <p style={{paddingLeft:"10px"}}>Questions</p>            
            </NavLink>
            
            <NavLink to="/Tags" className="side-nav-links" activeClass='active' style={{paddingLeft:"40px"}} >

              <p>Tags</p>

            </NavLink>
            
            <NavLink to="/Users" className="side-nav-links" activeClass='active' style={{paddingLeft:"40px"}} >
              
              <p>Users</p>

            </NavLink>

        </div>
 
        </nav>
      
    </div>
  )
}

export default LeftSidebar
