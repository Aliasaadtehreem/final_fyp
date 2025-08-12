import React, { useState }  from 'react'
import TaskForm from './Taskform';
import TaskItem from './Taskitem';
const TaaskList = () => {
    const [tasks, setTasks] = useState([]);
    
      const addTask = (task) => {
        setTasks([task, ...tasks]);
      };
    
      const completeTask = (id) => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, completed: true } : task
        ));
      };
    
      const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
      };
       const editTask = (updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ));
  };


  return (
    
    <div style={{paddingLeft:"20px"}}>
    <TaskForm onAdd={addTask} />
      {tasks.length === 0 ? (
        
        <p  style={{paddingLeft:"50px",paddingTop:"20px",color:"brown",fontSize:"17px",fontWeight:"bold"}}>No tasks yet.</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={completeTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))
      )}
    </div>
  )
}

export default TaaskList
