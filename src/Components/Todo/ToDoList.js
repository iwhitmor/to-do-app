import { prependOnceListener } from 'process';
import React from 'react';
import { Badge, Card, ListGroup } from 'react-bootstrap';

function ToDoList(props){
  
  const { data } = props;
  
  return (
  <>
   {data.map(task => (
     <Card className="mb-3" style={{ width: '32rem' }} key={task.title}>
       <Card.Header>
         {task.completed ? <Badge pill bg="success">Complete</Badge> : <Badge pill bg="danger">Pending</Badge>} 
         {task.assignedTo}
       </Card.Header> 
       <Card.Body>
       <Card.Title>
        {task.title} 
        </Card.Title>
        <Card.Text>
        Difficulty: {task.difficulty}
        </Card.Text>
       </Card.Body>
       </Card>
   ))}
  </>  
  )
}

export default ToDoList;