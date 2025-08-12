import React from 'react'
import { NotificationsProvider } from './Notification/NotificationContext';
import Navbar from '../Frontend/Navbar';
import FeaturesPage from './Notification/FeaturesPage';
import { ToastContainer } from 'react-toastify';
import Footer from '../Frontend/Footer.jsx'
import Card from 'react-bootstrap/Card';
const NotificationAlert = () => {
  return (
    <>
    <Navbar/>
    <NotificationsProvider>
      <FeaturesPage />
      <ToastContainer />
    </NotificationsProvider>



    <div>
         <Card style={{ width: '63rem',height:"45rem",marginBottom:"40px",border:"none"}}>
            <Card style={{ width: '57rem',height:"40rem",marginLeft:"45px",marginTop:"38px",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"}}>
                <div className="abouts">
                    <div>
                        <h4 style={{fontWeight:"bold",color:"skyblue"}}> About HealSync</h4>
                        <Card style={{width:"50rem" ,fontSize:"16px",color:"brown",border:"none"}}>
                        <p>HealSync is a smart healthcare platform designed to help families keep their loved ones safe, healthy, and comfortable at home. We understand that many people prefer to receive care in their own homes, surrounded by familiarity. That’s why HealSync combines advanced technology with compassionate support to connect patients and their families with the right caregivers, medical services, and resources making it easier to plan, coordinate, and manage care from anywhere.</p>
                        <h4 style={{fontWeight:"bold",color:"skyblue"}}>Our Services</h4>
                        <p>HealSync offers its care-matching and health management tools at no cost to families. Our platform is supported by partnerships with trusted healthcare providers, home care agencies, and service networks. These collaborations allow us to deliver a wide range of caregiving resources without passing any costs on to you.</p>

                        <h4 style={{fontWeight:"bold",color:"skyblue"}}> Care Matching & Referrals</h4>
                        <p>Our Care Coordinators work with families to match them with trusted providers in their area based on medical needs, location, and personal preferences. Providers may support HealSync through referral fees, partnerships, or premium listings in our directory but regardless of payment, our commitment is to connect you with the best possible care options.</p>
                        <p>HealSync’s referral service is designed to guide your search, not replace your judgment. We encourage families to review provider details, check ratings, and have direct conversations to ensure the best fit for their loved ones.</p>
                        </Card>
                    </div>
                   

                </div>
                </Card>
                </Card>
        </div>

    <Footer/>
    </>
  )
}

export default NotificationAlert
