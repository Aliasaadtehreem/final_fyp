import React, { useState } from 'react';
import './Healthform.css'
const Healthform = ({ onAdd }) => {
  const [form, setForm] = useState({
    systolic: '',
    diastolic: '',
    weight: '',
    glucose: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ systolic: '', diastolic: '', weight: '', glucose: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px',backgroundColor:"brown" ,paddingTop:"20px" }}>
      <div style={{margin:"15px"}}>
        <label style={{color:" #EAEBD0" , paddingLeft:"20px"}}> Systolic (mmHg):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input style={{border:"2px solid #EAEBD0"}} type="number" name="systolic" value={form.systolic} onChange={handleChange} required />
      </div>
      <div style={{margin:"15px"}}>
        <label style={{color:" #EAEBD0", paddingLeft:"20px"}}> Diastolic (mmHg):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input style={{border:"2px solid #EAEBD0"}} type="number" name="diastolic" value={form.diastolic} onChange={handleChange} required />
      </div>
      <div style={{margin:"15px"}}>
        <label style={{color:" #EAEBD0" , paddingLeft:"20px"}}> Weight (kg):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input style={{border:"2px solid #EAEBD0"}} type="number" name="weight" value={form.weight} onChange={handleChange} required />
      </div>
      <div style={{margin:"15px"}}>
        <label style={{color:" #EAEBD0", paddingLeft:"20px"}}>Glucose (mg/dL):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input style={{border:"2px solid #EAEBD0"}} type="number" name="glucose" value={form.glucose} onChange={handleChange} required />
      </div>
      <button  class="button-28"  type="submit" style={{ marginTop: '30px',marginLeft:"35px" }}>Add Record</button>
    </form>
  );
};

export default Healthform;
