import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <div style={{ border: '1px solid brown', padding: 10, marginBottom: 10,width:"60%",paddingLeft:"30px" ,marginLeft:"40px",borderRadius:"5px",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"}}>
      <h3>{task.title}</h3>
      <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? ' Completed' : ' Pending'}</p>
      {!task.completed && (
        <button onClick={() => onComplete(task.id)}>Mark Complete</button>
      )}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
