import React from 'react';
import { Badge, Toast } from 'react-bootstrap';
import './ToDoList.css';
import ToDoItem from './ToDoItem';

function ToDoList(props) {

  const { data, onDelete } = props;

  return (
    <>
      {data.map(task => (
        <ToDoItem task={task} onDelete={onDelete} />
      ))}
    </>
  )
}

export default ToDoList;