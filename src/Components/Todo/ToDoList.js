import React from 'react';
import './ToDoList.css';
import ToDoItem from './ToDoItem';
import { Spinner } from 'react-bootstrap';

function ToDoList(props) {

  const { toDoApi, onDelete, onUpdate } = props;

  if (!toDoApi) {
    return (<Spinner animation="grow" variant="danger" />);
  }

  return (
    <>
      {toDoApi.map(task => (
        <ToDoItem key={task.title} task={task} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </>
  )
}

export default ToDoList;