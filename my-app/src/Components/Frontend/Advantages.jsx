import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mindfulness from '../../Assets/mindfulness.png';
import meditation from '../../Assets/meditation.png';
import exercise from '../../Assets/exercise.png';
import './Advantage.css'
const Advantages = () => {
  return (
    <>
    <div className="car">
      <p className="pg">Advantage</p>
      <h2 className="hi">Why Choose Us</h2>
      <p className="pe">Hundreds of patient in Pakistan choose us. We offer effective heal Sync in groups and individually.</p>
      </div>

      <div className="advantage">
         <Card style={{ width: '13rem',height:'18rem' ,backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img  variant='top' src={mindfulness} style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}
      />
      <Card.Body>
        <Card.Title  style={{paddingLeft:"20px",color:"brown" ,paddingBottom:"4px",paddingTop:"4px",fontWeight:"bold"}}>Vast Experience</Card.Title>
        <Card.Text  style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
         We can find an approach to each patient and solve even the most complicated and critical problems.
        </Card.Text>
       
      </Card.Body>
    </Card>
     <Card style={{ width: '13rem',height:'18rem',backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img variant="top" src={meditation}   style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}/>
      <Card.Body>
        <Card.Title style={{paddingLeft:"20px",color:"brown" ,paddingBottom:"4px",paddingTop:"4px",fontWeight:"bold"}}>New Techniques</Card.Title>
        <Card.Text style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
        We are constantly mastering new effective treatment methods and upgrade our skills in healSync.
        </Card.Text>
        
      </Card.Body>
    </Card>
     <Card style={{ width: '13rem',height:'18rem',backgroundColor:" #EAEBD0",border:"none"  }}>
      <Card.Img variant="top" src={exercise} style={{width:"60px",paddingTop:"40px",marginLeft:"80px"}} />
      <Card.Body>
        <Card.Title style={{paddingLeft:"24px",color:"brown" ,paddingBottom:"4px",paddingTop:"4px",fontWeight:"bold"}}>Any Problems</Card.Title>
        <Card.Text style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
          We will help cope with depression and anxiety, solve problems in the family, relationships, and at work.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>

    </>
  )
}

export default Advantages
