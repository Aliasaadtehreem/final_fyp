import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Benefits.css';
import benefits from '../../Assets/benefits.png';
import benefitss from '../../Assets/benefitss.png';
import socialresponsibility from '../../Assets/socialresponsibility.png';
const Benefits = () => {
  return (
    <>
    <div className="benefits">
    <Card style={{ width: '56rem',height:"25rem" }}>
      <Card.Body>
        <div className="benefitfirst">
        <div style={{paddingLeft:"30px", gap:"2rem ", width:"70%",paddingTop:"40px" ,color:"brown" }}>
        <h4 style={{fontWeight:"bold"}}>Benefits of in-home care</h4>
        <Button href="/homecare"  className="benefitbtn" style={{marginTop:"20px"}} variant="primary">Learn More About In Home Care</Button>
        </div>
        <div className="benefitspic" style={{
            paddingTop:"40px"
        }}>
            
            <img style={{marginBottom:"30px",marginLeft:"40px"}}  src={benefits }/>
            <img style={{marginBottom:"30px" ,marginLeft:"40px"}} src={benefitss}/>
            <img style={{marginBottom:"20px" ,marginLeft:"40px"}} src={socialresponsibility}/>
        </div>
        <div   style={{
            paddingTop:"20px",
        }}>
            <h4 style={{color:"brown" ,fontWeight:"bold"}}>Quality help at home</h4>
            <p style={{fontSize:"16px",color:"brown"}}>HealSync ensures quality help at home with timely care reminders, health monitoring, and instant support for patients and families.</p>
            <h4 style={{color:"brown" ,fontWeight:"bold"}}>Respite for family caregivers</h4>
            <p style={{fontSize:"16px" ,color:"brown"}}>HealSync gives family caregivers relief by keeping them informed and supported with real-time updates and alerts.</p>
            <h4 style={{color:"brown" ,fontWeight:"bold"}}>Peace of mind</h4>
            <p style={{fontSize:"16px" ,color:"brown"}}>HealSync provides peace of mind through real-time health updates, reminders, and emergency alerts keeping care connected and stress reduced.</p>
        </div>
        </div>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Benefits
