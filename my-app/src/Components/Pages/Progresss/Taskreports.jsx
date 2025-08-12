import React from 'react';

const TaskReport = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  const priorityCount = {
    Low: tasks.filter(t => t.priority === 'Low').length,
    Medium: tasks.filter(t => t.priority === 'Medium').length,
    High: tasks.filter(t => t.priority === 'High').length,
  };

  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px',borderRadius:" 6px",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"  }}>
      <h4 style={{color:"brown" ,paddingLeft:"250px",fontWeight:"bold"}}>Task Report</h4>
      <p style={{color:"brown" ,paddingLeft:"50px" }}>Total Tasks: {total}</p>
      <p style={{color:"brown" ,paddingLeft:"50px"}}> Completed: {completed}</p>
      <p style={{color:"brown" ,paddingLeft:"50px"}}> Pending: {pending}</p>
      <p style={{color:"brown" ,paddingLeft:"50px"}}>Priority Breakdown:</p>
      <ul>
        <li style={{color:"brown" ,paddingLeft:"20px"}}> Low: {priorityCount.Low}</li>
        <li style={{color:"brown" ,paddingLeft:"20px"}}> Medium: {priorityCount.Medium}</li>
        <li  style={{color:"brown" ,paddingLeft:"20px"}}> High: {priorityCount.High}</li>
      </ul>
    </div>
  );
};

export default TaskReport;
