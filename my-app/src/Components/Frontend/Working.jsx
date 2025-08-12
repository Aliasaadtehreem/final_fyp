import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import technology from '../../Assets/technology.png';
import rpa from '../../Assets/rpa.png';
import computer from '../../Assets/computer.png';
import './Working.css';
const Working = () => {
  return (
    <>
      <div className="work">
        <Card style={{ width: '56rem',height:"33rem"}}>
     
      <Card.Body>
       <div className="workss" >
        <h4 style={{paddingLeft:"145px" ,paddingTop:"30px" ,color:"brown",fontWeight:"bold"}}>HealSync simplifies support for patients and their families</h4>
        <p style={{paddingLeft:"370px",fontSize:"20px" ,paddingTop:"20px"}}>How it works</p>
       </div>
       <div className="worksimg" >
        <img  style={{marginLeft:"90px"
          ,paddingTop:"38px"}} src={computer}/>
        <img   style={{marginLeft:"160px"
          ,paddingTop:"40px"}} src={rpa}/>
        <img  style={{marginLeft:"194px"
          ,paddingTop:"40px"}} src={technology}/>
       </div>
       <div className="worksss">
       <div>
        <h5 style={{paddingTop:"20px",paddingLeft:"40px" ,fontWeight:"bold", color:"brown"}} >Determine your needs</h5>
       
       </div>
       <div>
        <h5 style={{paddingTop:"20px",paddingLeft:"60px" ,fontWeight:"bold", color:"brown"}}>Personalize your plan</h5>
        
       </div>
       <div>
        <h5 style={{
          paddingTop:"20px",fontWeight:"bold", color:"brown",paddingLeft:"80px"
        }}>Select your support provider</h5>
       
       </div>
       </div>
       <div className="workpara" >
          <Card style={{ width: '13rem',border:"none",color:"brown" }}>
     <Card.Text style={{paddingLeft:"16px"}}>
         HealSync helps you identify when and where support is needed.
        </Card.Text>
    </Card>
      <Card style={{ width: '13rem' ,border:"none" ,color:"brown"}}>
        <Card.Text>
          Choose the right in-home services to ensure the care you deserve.
        </Card.Text>
    </Card>
      <Card style={{ width: '13rem' ,border:"none",color:"brown" }}>
      <Card.Text>
         Select trusted care providers that fit your needs with HealSync
        </Card.Text>
    </Card>
       </div>
      
        <Button  href="/heal" className="workbtn" style={{ marginTop:"60px"}} >Heal Sync</Button>
      </Card.Body>
    </Card>
      </div>
    </>
  )
}

export default Working
