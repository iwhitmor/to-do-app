import { prependOnceListener } from 'process';
import React from 'react';
import { Badge, Card } from 'react-bootstrap';

function ToDoList(props){
  
  const { data } = props;
  
  return (
  <>
   {data.map(task => (
     <Card style={{ width: '20rem' }} key={task.title}>
       {task.completed ? <Badge pill bg="success">Complete</Badge> : <Badge pill bg="danger">Pending</Badge>} {task.assignedTo} {task.title} {task.difficulty}  </Card>
   ))}
  </>  
  )
}

export default ToDoList;