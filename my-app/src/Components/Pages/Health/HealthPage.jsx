import React, { useState } from 'react';
import HealthForm from  '../Health/Healthform';
import HealthStatus from './HealthStatus';
import HealthLog from  '../Health/HealthLog';

const HealthPage = () => {
  const [records, setRecords] = useState([]);

  const addRecord = (data) => {
    const newEntry = { id: Date.now(), ...data, date: new Date().toLocaleString() };
    setRecords([newEntry, ...records]);
  };

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '20px' }}>
      <h2 style={{backgroundColor:" #EAEBD0",paddingBottom:"20px" ,paddingLeft:"50px",paddingTop:"20px", color:"brown"}}> Health Monitor</h2>
      <HealthForm onAdd={addRecord} />
      <HealthStatus records={records} />
      <HealthLog records={records} />
    </div>
  );
};

export default HealthPage;
