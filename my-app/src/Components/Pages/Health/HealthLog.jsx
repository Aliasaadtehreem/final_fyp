import React from 'react';

const HealthLog = ({ records }) => {
  return (
   
    <div style={{backgroundColor:" #EAEBD0",fontWeight:"bold"}}>
      <h3 style={{backgroundColor:" #EAEBD0",fontWeight:"bold"}}> Health Log</h3>
      {records.length === 0 ? (
        <p style={{color:"brown"}}>No records yet.</p>
      ) : (
        records.map((r) => (
          <div key={r.id} style={{ border: '2px solid #EAEBD0' ,backgroundColor:"brown"}}>
            <p style={{color:" #EAEBD0", paddingLeft:"50px"}}><strong>{r.date}</strong></p>
            <p  style={{color:" #EAEBD0", paddingLeft:"50px"}}> BP: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{r.systolic}/{r.diastolic} mmHg</p>
            <p   style={{color:" #EAEBD0", paddingLeft:"50px"}}> Weight: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{r.weight} kg</p>
            <p   style={{color:" #EAEBD0", paddingLeft:"50px"}}> Glucose:&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{r.glucose} mg/dL</p>
          </div>
        ))
      )}
    </div>
    
  );
};

export default HealthLog;
