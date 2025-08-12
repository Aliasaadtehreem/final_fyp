import React from 'react';

const HealthStatus = ({ records }) => {
  if (records.length === 0) return null;

  const latest = records[0];

  return (
    <div style={{ marginBottom: '40px',width:"100%",backgroundColor:"brown",border:"2px solid #EAEBD0 " }}>
      <h3 style={{color:"brown",fontWeight:"bold" ,backgroundColor:" #EAEBD0"}}> Latest Record</h3>
      <p style={{color:" #EAEBD0", paddingLeft:"50px",fontWeight:"bold"}}>{latest.date}</p>
      <p style={{color:" #EAEBD0", paddingLeft:"50px",fontWeight:"bold"}}> Blood Pressure: &nbsp;  &nbsp; &nbsp; &nbsp;{latest.systolic}/{latest.diastolic} mmHg</p>
      <p style={{color:" #EAEBD0", paddingLeft:"50px",fontWeight:"bold"}}> Weight:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{latest.weight} kg</p>
      <p style={{color:" #EAEBD0", paddingLeft:"50px",fontWeight:"bold"}}> Glucose: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  {latest.glucose} mg/dL</p>
    </div>
  );
};

export default HealthStatus;
