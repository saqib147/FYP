import React from 'react';
import './NavBar.css'
import navlogo from '../../assets/logo.png'
import navProfile from '../../assets/nav-profile.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='left-nav'>
        <img src={navlogo} width={"300px"} alt ="" className="nav-logo" />
        
      </div>
      <div className='right-nav'>
         <img src={navProfile} className='nav-profile' alt=''/> 
      </div>
      
      

    </div>
  )
}

export default NavBar