import React from 'react'
import TaskList from './Progresss/Tasklist';
import {  NavLink } from 'react-router-dom'
import Footer from '../Frontend/Footer';


const Progress = () => {
   const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
<NavLink to="/">
      <button onClick={handleClick}  class="button-52" >Go To Heal Sync</button>
      </NavLink>
    <div style={{ padding: '20px' }}>
      <h1 style={{color:"brown",fontWeight:"bold",paddingLeft:"150px"}}> Progress Page & Task Report</h1>
      
    </div>
     <TaskList/>

     <Footer/>
    </>
  )
}

export default Progress
