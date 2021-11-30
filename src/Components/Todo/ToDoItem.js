import React from 'react';
import { Toast, Badge } from 'react-bootstrap';

function ToDoItem(props) {

  const { task, onDelete, onUpdate } = props;

  function removeTask() {
    onDelete(task);
  }

  function updateTask() {
    onUpdate(task);
  }

  return (
    <Toast onClose={removeTask} className="mt-4" style={{ width: '32rem' }} key={task.title}>
      <Toast.Header>
        {task.completed ? <Badge onClick={updateTask} onUpdate={updateTask} pill bg="success">Complete</Badge> : <Badge onClick={updateTask} pill bg="danger">Pending</Badge>}
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