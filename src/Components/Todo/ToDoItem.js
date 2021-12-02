import React from 'react';
import { Toast, Badge } from 'react-bootstrap';
import './toDoItem.css';
import useAuth from '../Hooks/useAuth';

function ToDoItem(props) {

  const { task, onDelete, onUpdate } = props;
  const { hasPermission } = useAuth();

  function handleDelete() {
    onDelete(task);
  }

  function updateTask() {
    onUpdate(task);
  }

  let canDelete = hasPermission('delete');
  let canUpdate = hasPermission('update');

  return (
    <Toast onClose={handleDelete} className="mt-4" style={{ width: '32rem' }}>
      <Toast.Header closeButton={canDelete}>
        {task.completed ?
          <Badge className="updateTaskClick1" onClick={updateTask} pill bg="success">
            Complete
          </Badge> :
          <Badge className="updateTaskClick2" onClick={updateTask} pill bg="danger">
            Pending
          </Badge>}
        <span className="d-inline-block ms-2 me-auto">{task.assignedTo}</span>
      </Toast.Header>
      <Toast.Body>
        <p className="todo-title">
          {task.title}
        </p>
        <p className="todo-difficulty">
          Difficulty: {task.difficulty}
        </p>
      </Toast.Body>
    </Toast>
  )
}

export default ToDoItem;