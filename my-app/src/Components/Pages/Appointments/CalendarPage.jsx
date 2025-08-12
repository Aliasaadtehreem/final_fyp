import React, { useState, useEffect } from 'react';
import AppointmentForm from '../Appointments/AppointmentForm';
import AppointmentList from '../Appointments/AppointmentList';

const CalendarPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [role, setRole] = useState('family'); 
  const [currentUser, setCurrentUser] = useState('Ahmad'); 

  const addAppointment = (appt) => {
    const newAppt = { ...appt, id: Date.now() };
    setAppointments([newAppt, ...appointments]);
  };


  const filteredAppointments = appointments.filter(
    (appt) => appt.patient === currentUser
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{color:"brown",paddingLeft:"20px",fontWeight:"bold",fontSize:"40px",marginBottom:"20px"}}>Shared Calendar</h2>

      <div style={{ marginBottom: '10px' }}>
        <label style={{paddingLeft:"20px" ,fontSize:"20px" ,color:"brown"}}>Select Role:&nbsp; &nbsp;&nbsp;&nbsp;</label>
        <select style={{border:"1px solid brown",color:"brown",borderRadius:"2px"}} value={role} onChange={(e) => setRole(e.target.value)}>
          <option style={{backgroundColor:' burlywood',color:"brown "}} value="family">Family Member</option>
          <option style={{backgroundColor:' burlywood',color:"brown "}} value="patient">Patient</option>
        </select>
        <label style={{  paddingLeft:"30px" ,fontSize:"20px", color:"brown"}}>Current User:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input style={{border:"1px solid brown",color:"brown" ,borderRadius:"2px"}}
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      {role === 'family' && <AppointmentForm onAdd={addAppointment} />}
      <AppointmentList appointments={role === 'family' ? appointments : filteredAppointments} />
    </div>
  );
};

export default CalendarPage;
