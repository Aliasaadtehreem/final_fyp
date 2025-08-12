import React from 'react'
import Locationpage from './Locations/Locationpage'
import {  NavLink } from 'react-router-dom';
import Footer from '../Frontend/Footer.jsx'
const Location = () => {
      const handleClick = () => {
    console.log("Button clicked!");
      };
  return (

    <>
    <div style={{paddingBottom:"20px"}}>
   <NavLink to="/">
         <button  onClick={handleClick}  class="button-52" >Go To Heal Sync</button>
         </NavLink>
         </div>
      

         <Locationpage/>

         <Footer/>
   
    </>
    
  )
}

export default Location
