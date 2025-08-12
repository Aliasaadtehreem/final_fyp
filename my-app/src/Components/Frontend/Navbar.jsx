import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar1.css";
import { CgClose, CgMenu } from "react-icons/cg";
const Navbar = () => {
 const [click, setClick] =useState(false);
  const handleClick = ()=>{
    setClick(!click)
  }
  
  return (
    <>


        <nav className="navbar">
        <div className="nav-container">
          <NavLink 
          exact to='/'
          className='nav-logo'
          >
          HEAL SYNC
           
          </NavLink>
               <ul className={click ? "nav-menu active" : 'nav-menu'}>

            <li className="nav-item">
              <NavLink 
              exact to ='/'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              exact to ='/notification'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              >
                Notification & Alert
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              exact to ='/sos'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              >
           SOS Button
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              exact to ='/login'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              
              >
                Login To Heal Sync
              </NavLink>
            </li>
          </ul>
           
           
        
         <div className="nav-icon" onClick={handleClick}>
        {!click ? (
          <CgMenu/> // Menu open icon
        ) : (
          <CgClose/> // Close icon
        )}
      </div>
          </div>
      </nav>
    
      
    </>
  )
}

export default Navbar
