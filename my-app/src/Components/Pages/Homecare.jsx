import React from 'react'
import {  NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const Homecare = () => {
    const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
      <NavLink to="/">
               <button  onClick={handleClick}  class="button-52" >Go To Heal Sync</button>
               </NavLink>


                <div>
        <h2 style={{fontWeight:"bold",padding:"20px",color:"skyblue",paddingLeft:"50px",fontSize:"25px"}}>Learn More About In Home Care</h2>
        <p style={{color:"burlywood",paddingLeft:"50px",width:"500px",paddingBottom:"20px",fontWeight:"bold",fontSize:"20px"}}>In-home care allows your loved one to receive personalized support in the comfort of their own home. From daily assistance with meals, mobility, and personal care to skilled medical services, HealSync connects you with trusted caregivers who prioritize safety, dignity, and quality of life.</p>
        </div>


        <div>
         <Card style={{ width: '63rem',height:"60rem",marginBottom:"40px",border:"none"}}>
            <Card style={{ width: '57rem',height:"50rem",marginLeft:"45px",marginTop:"38px",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"}}>
                <div className="abouts">
                    <div>
                        <h4 style={{fontWeight:"bold",color:"skyblue"}}> Types of In-Home Care</h4>
                        <Card style={{width:"50rem" ,fontSize:"16px",color:"brown",border:"none"}}>
                        <p>At HealSync, we connect patients and families with the right type of support whether it’s help with daily living, health monitoring, or specialized medical assistance.</p>
                        <h4 style={{fontWeight:"bold",color:"skyblue"}}>Family Support</h4>
                        <p>Family members often take on the role of providing daily care helping with meals, mobility, hygiene, and emotional well-being. Even without formal training, they are the first line of comfort for loved ones.</p>

                        <h4 style={{fontWeight:"bold",color:"skyblue"}}> Community & Volunteer Support</h4>
                        <p>Volunteers from community programs or nonprofit organizations offer companionship, transportation, and occasional respite for family members helping reduce stress and improve quality of life.</p>
                        <h4 style={{fontWeight:"bold",color:"skyblue"}}> Private In-Home Assistance</h4>
                        <p>Privately hired professionals provide personalized, one-on-one support. They may help with daily living, light housekeeping, or companionship, and can often be more flexible with scheduling.</p>
                        <h4  style={{fontWeight:"bold",color:"skyblue"}}>Professional In-Home Services</h4>
                        <p>Licensed home health agencies offer trained personnel who can provide everything from daily living assistance to skilled nursing care—ensuring safety, compliance, and reliable service.</p>
                        <h4  style={{fontWeight:"bold",color:"skyblue"}}>What is a Professional In-Home Support Provider?</h4>
                        <p>A professional in-home support provider is someone trained to assist individuals who need help with daily living or health management. Their goal is to improve quality of life, ensure safety, and promote independence for the person receiving care</p>
                        <p>A professional in-home support provider is someone trained to assist individuals who need help with daily living or health management. Their goal is to improve quality of life, ensure safety, and promote independence for the person receiving care</p>
                        </Card>
                    </div>
                   

                </div>

                        
                       
                
            
    </Card>
      
       
        
     
    </Card>
      </div>
    
    </>
  )
}

export default Homecare
