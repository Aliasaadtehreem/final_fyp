import React from 'react'
import doctor1 from '../../Assets/doctor1.png'
import Button from 'react-bootstrap/Button';
import './Herosection.css';
const Herosection = () => {


  
  return (
    <>
      
        <div className="container" >
          <div className="section-hero-data">
            <h2 className="hero-heading">The Future of Connected Healthcare</h2>
            <p className="hero-para"> HealSync is a user-friendly web app that helps patients and family member stay connected. It allows appointment booking, health record storage, and real-time updates in a secure and easy-to-use interface.</p>
            <Button  href="/dashbord" variant="outline-danger">
            Get Started
            </Button>
            


           
          </div>
          
          <div className="section-hero-image">
              <img src={doctor1} alt=""/>
          </div>
        </div>
     
    </>
  )
}
export default Herosection