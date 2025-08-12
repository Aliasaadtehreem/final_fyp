import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      <h3> Appointments</h3>
      {appointments.length === 0 ? (
        <p style={{paddingLeft:"50px" ,color:"brown"}}>No appointments available.</p>
      ) : (
        appointments.map((a) => (
          <div key={a.id} style={{ border: '1px solid brown',backgroundColor:" #EAEBD0", padding: '10px', marginBottom: '10px',paddingLeft:"50px",color:"brown" }}>
            <p><strong>{a.title}</strong></p>
            <p>{a.date}  {a.time}</p>
            <p>Patient: {a.patient}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AppointmentList;
