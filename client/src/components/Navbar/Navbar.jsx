import React,{useEffect} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import logo from '../../assets/logo.png' 
import search from '../../assets/search.svg'
import Avatar from '../Avatar/Avatar'
import { useSelector,useDispatch} from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'

import  './Navbar.css'
import  decode from 'jwt-decode'
const Navbar = () => {
  const dispatch = useDispatch()
//using this we can access the userdata from anywhere in the application
// we can access data from redux anywhere using the useSelector hook
  var User = useSelector((state) => (state.currentUserReducer))
  // ​ Allows you to extract data from the Redux store state, using a selector function.
  

 

    const navigate = useNavigate();
    
    const handleLogout = () => {
      dispatch({ type: 'LOGOUT'});
      navigate('/')
      dispatch(setCurrentUser(null))
  }
  
    useEffect(() => {
      const token = User?.token 
      if(token){
          const decodedToken = decode(token)
          if(decodedToken.exp * 1000 < new Date().getTime()){
              handleLogout()
          }
      }
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
  },[User?.token, dispatch])
 
//token expired the the logout will occur .The token isdecode and multiple with 1000 if it is lees than 
 
  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img src={logo}  alt='Logo' width={150}/>
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
          <input type="text" placeholder='Search...'/>
          <img src={search}  alt='search' width={15} className='search-icon'/>
       </form>
    
           
        { User=== null ? 
            <Link  to="/Auth" className='nav-item nav-links'>Log in</Link>:
           
            <>
            {/* M is consider a children,it is user of the website */}
            
              
             <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
             <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>  
            </>
        }
        
      </div>
      
    </nav>
  )
}

export default Navbar
