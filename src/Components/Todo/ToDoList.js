import { prependOnceListener } from 'process';
import React from 'react';



function ToDoList(props){
  
  const { data } = props;
  
  return (
  <>
   {data.map(task => (
     <li key={task.title}>{task.completed}, {task.assignedTo}, {task.title}, {task.difficulty}  </li>
   ))}
  </>  
    
  )
}

export default ToDoList;