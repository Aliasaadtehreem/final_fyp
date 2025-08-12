import React from 'react'
import Moodpage from '../Pages/Moodbehaviour/Moodpage';
import {  NavLink } from 'react-router-dom';
import Footer from '../Frontend/Footer';
import Benefits from '../Frontend/Benefits.jsx'
const Mood = () => {
   const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
    <NavLink to="/">
          <button onClick={handleClick}  class="button-52" >Go To Heal Sync</button>
          </NavLink>
      <h2 style={{paddingLeft:"280px",color:"brown",fontWeight:"bold",paddingTop:"20px"}}>Mood Behaviour & Tracking</h2>
      <Moodpage/>
<Benefits/>
      <Footer/>
     
    </>
  )
}

export default Mood
