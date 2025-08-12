import React from 'react'
import './Dashboard.css'
import {  NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import react from '../../Assets/react.avif';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mindfulness from '../../Assets/mindfulness.png';
import healthcare from '../../Assets/healthcare.png';
import healthcaree from '../../Assets/healthcaree.png';
import brain from '../../Assets/brain.png';
import planning from '../../Assets/planning.png';
import predict from '../../Assets/predict.png';

const Dashboard = () => {
     const handleClick = () => {
    console.log("Button clicked!");
      };

    
  return (
    <>
    <NavLink to="/">
             <button  onClick={handleClick}  class="button-52" >Go To Heal Sync</button>
             </NavLink>

             <h3 style={{fontWeight:"bold",fontSize:"30px" ,marginLeft:"350px",marginBottom:"20px" ,marginTop:"20px"}}>Heal Sync Feature</h3>
    <div>
         <Card style={{ width: '63rem',height:"40rem",marginBottom:"30px",border:"none"}}>
            <Card style={{ width: '57rem',height:"38rem",marginLeft:"45px",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"}}>
                <div className="abouts">
                    <div>
                        <Card style={{width:"50rem" ,fontSize:"16px",color:"brown",border:"none"}}>
                        

                         <div  className="dash1">
          <div >
          <NavLink to="/resourcecenter">
          <button  style={{fontWeight:"bold " ,fontSize:"18px"}}  class="button-48" ><span class="text">Resource Center</span></button> 
          </NavLink>
       </div>
       <div >
           <NavLink to="/healthmontorning">
          <button style={{fontWeight:"bold " ,fontSize:"18px"}} class="button-48" ><span class="text">Health Montorning</span></button>
           </NavLink>
       </div>
       </div>

       <div className="dash2">
       <div>
          <NavLink to="/location">
          <button style={{fontWeight:"bold " ,fontSize:"18px"}} class="button-48"  ><span class="text">Live Location Tracking</span></button>
          </NavLink>
       </div> 
       <div >
           <NavLink to="/task">
          <button style={{fontWeight:"bold " ,fontSize:"18px"}} class="button-48"><span class="text">Task Plan & Management</span></button>
           </NavLink>
       </div>
    </div>

    <div className="dash3">
    <div>
     <NavLink to="/mood">
     <button style={{fontWeight:"bold " ,fontSize:"18px"}} class="button-48" ><span class="text">Mood Behaviour & Tracking</span></button>
     </NavLink>
    </div>
    <div>
     <NavLink to="/progress">
     <button style={{fontWeight:"bold " ,fontSize:"18px"}} class="button-48"  ><span class="text">Progress Tracking & Reports</span></button>
     </NavLink>
    </div>
    </div>
     <div className="dash4">
           <NavLink to="/calender">
          <button style={{fontWeight:"bold " ,fontSize:"18px"}} class="button-48"><span class="text">Shared Calendars & Appointment</span></button>
          </NavLink>
        </div>
                       
                        
                        </Card>
                    </div>
                   

                </div>

                        
                       
                
            
    </Card>
      
       
        
     
    </Card>
      </div>









   

<div className="car">
     
      <h2 className="hi" style={{paddingLeft:"290px" ,paddingBottom:"20px"}}>Your Health, Always Connected</h2>
      <p className="pe">HealSync is a modern healthcare platform that keeps patients, families, and doctors connected.</p>
      </div>

      <div className="advantage">
         <Card style={{ width: '16rem',height:'20rem' ,backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img  variant='top' src={brain} style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}
      />
      <Card.Body>
        
        <Card.Text  style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
        A smart healthcare platform for appointments, medication alerts, SOS emergencies, and a health resource center keeping patients and families informed in real time.
        </Card.Text>
       
      </Card.Body>
    </Card>
     
    <Card style={{ width: '16rem',height:'20rem',backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img variant="top" src={predict} style={{width:"60px",paddingTop:"40px",marginLeft:"80px"}} />
      <Card.Body>
       
        <Card.Text style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
        Manage appointments, get medication reminders, send SOS alerts, and access health resources HealSync keeps care simple and connected.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem',height:'20rem',backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img variant="top" src={planning} style={{width:"60px",paddingTop:"40px",marginLeft:"80px"}} />
      <Card.Body>
       
        <Card.Text style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
        The built-in resource center provides reliable health information, while real-time updates, task alerts, and a family dashboard keep everyone informed.  
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
       


       <div className="advantage" style={{marginTop:"20px"}}>
         <Card style={{ width: '16rem',height:'20rem' ,backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img  variant='top' src={mindfulness} style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}
      />
      <Card.Body>
        
        <Card.Text  style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
       It offers easy appointment scheduling, timely medication alerts. Users can access a trusted health resource center, receive real-time updates, and track treatment progress through task completion alerts. 
        </Card.Text>
       
      </Card.Body>
    </Card>
     
    <Card style={{ width: '16rem',height:'20rem',backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img variant="top" src={healthcaree} style={{width:"60px",paddingTop:"40px",marginLeft:"80px"}} />
      <Card.Body>
       
        <Card.Text style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
         HealSync is a smart healthcare platform that brings all essential care tools into one place. It helps patients manage appointments, get medication reminders, and send instant SOS alerts to family and doctors in emergencies.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '16rem',height:'20rem',backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img variant="top" src={healthcare} style={{width:"60px",paddingTop:"40px",marginLeft:"80px"}} />
      <Card.Body>
        
        <Card.Text style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
          HealSync connects patients, families, and healthcare providers through appointment scheduling, SOS emergency notifications, and a built-in health resource center ensuring care and updates in real time.
        </Card.Text>
        
      </Card.Body>
    </Card>
    
      </div>


     


 <div>
         <Card style={{ width: '63rem',height:"48rem",marginBottom:"40px",border:"none"}}>
            <Card style={{ width: '57rem',height:"50rem",marginLeft:"45px",marginTop:"38px",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"}}>
                <div className="abouts">
                    <div>
                        <h4 style={{fontWeight:"bold",color:"skyblue", paddingLeft:"200px" ,paddingBottom:"25px"}}> Smarter Care & Stronger Connections</h4>
                        <Card style={{width:"50rem" ,fontSize:"16px",color:"brown",border:"none"}}>
                        
                        <h4 style={{fontWeight:"bold",color:"skyblue"}}>Connect & Coordinate</h4>
                        <p>Securely link patients, families, and healthcare providers in one platform for better communication and updates.</p>

                        <h4 style={{fontWeight:"bold",color:"skyblue"}}>Alerts & Reminders</h4>
                        <p>Send instant SOS alerts, appointment reminders, and medication notifications to the right people at the right time.</p>
                        <h4 style={{fontWeight:"bold",color:"skyblue"}}> Resource & Support Hub</h4>
                        <p>Access trusted health guides, service referrals, and wellness tips to manage care confidently at home.</p>
                        <h4  style={{fontWeight:"bold",color:"skyblue"}}>Care Connection</h4>
                        <p>Keep patients, families, and providers connected in real time.</p>
                        <h4  style={{fontWeight:"bold",color:"skyblue"}}>All-in-One Resource Center</h4>
                        <p>Reliable guides, referrals, and tools for better care.</p>
                        <h4  style={{fontWeight:"bold",color:"skyblue"}}>Smart Notifications </h4>
                        <p> Instant SOS alerts, timely reminders, and important updates.</p>
                        <h4  style={{fontWeight:"bold",color:"skyblue"}}> Home Care</h4>
                        <p> In-home care allows your loved one to receive personalized support in the comfort of their own home.</p>
                        </Card>
                    </div>
                   

                </div>

                        
                       
                
            
    </Card>
      
       
        
     
    </Card>
      </div>











    <div style={{paddingTop:"50px"}}>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={react}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{fontSize:"2rem",fontWeight:"bold",color:"#EAEBD0",paddingBottom:"20px"}}>Heal Sync</h5>
          <p style={{ color:"brown"}}>HealSync is an all-in-one digital health solution that simplifies patient care and communication. It enables users to manage appointments, receive timely medication alerts, send instant SOS notifications to family members, and access a comprehensive health resource center. With its user-friendly interface and real-time updates, HealSync bridges the gap between patients, families, and healthcare providers, ensuring safety, convenience, and better health management anytime, anywhere.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={react}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{fontSize:"2rem",fontWeight:"bold",color:"#EAEBD0",paddingBottom:"20px" }}>Heal Sync</h5>
          <p style={{ color:"brown"}}>HealSync is a modern healthcare companion that keeps patients and their loved ones connected and informed. From scheduling appointments and tracking medications to sending urgent SOS alerts in emergencies, it ensures care is always within reach. Its built-in resource center provides reliable health information, making it easier to stay informed and take proactive steps toward better well-being. HealSync brings care, safety, and information together in one seamless platform.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={react}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{fontSize:"2rem",fontWeight:"bold",color:"#EAEBD0",paddingBottom:"20px"}}>Heal Sync</h5>
          <p style={{ color:"brown"}}>
           HealSync is a smart healthcare management platform designed to connect patients, family members, and healthcare providers in real time. It offers features like appointment scheduling, medication reminders, SOS emergency alerts, and a resource center for health-related information.By streamlining communication and providing timely notifications, HealSync helps ensure better care, quick responses in emergencies, and improved health outcomes all in one easy-to-use system
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

  
    



    

 





  
  <div className="bottom">
       <h2 style={{marginBottom:"20px",marginLeft:"50px",color:"brown"}}>Heal Sync</h2>
    
      <p style={{paddingLeft:"400px",fontSize:"20px" ,paddingTop:"5px" ,color:"brown"}}>Home</p>
      <p   href="/" style={{fontSize:"20px",paddingTop:"5px",color:"brown"}}>About</p>
      <p  style={{fontSize:"20px",paddingTop:"5px",color:"brown"}}>Advantages</p>
      <p  style={{fontSize:"20px",paddingTop:"5px",color:"brown"}}>Login</p>
   
      
    </div>




    <div className="bar">
    <p>© Created by</p>
    <p>All rights Reserved</p>
   </div>





   
      
    
   










       
      
    </>
  )
}

export default Dashboard
