import React from 'react';
import ToDoForm from './Todo/ToDoForm';
import ToDoList from './Todo/ToDoList';
import { Navbar } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import useFetch from '../Components/Hooks/useFetch';
import Auth from './Auth';
import './main.css';
import useAuth from './Hooks/useAuth';

// const data = [
//   { title: "Do the dishes, clean kitchen", difficulty: 5, assignedTo: "Ian", completed: true },
//   { title: "Vaccuum and sweep all floors", difficulty: 3, assignedTo: "Sarah", completed: false },
//   { title: "Walk the dogs and pick up poop in yard", difficulty: 10, assignedTo: "Sarah", completed: false },
//   { title: "Wash and dry clothes. Make sure to fold them afterwards", difficulty: 7, assignedTo: "Ian", completed: true },
// ];

const toDoApi = 'https://deltav-todo.azurewebsites.net/api/v1/Todos';

function Main() {
function setTasks(){}
  const { tasks, reload } = useFetch(toDoApi);
  const { user } = useAuth();

  function handleSave(formData) {
    const newTask = {
      ...formData,
    };

    const newTasks = [
      ...tasks,
      newTask,
    ];

   
  }

  async function handleDelete(task) {

    const updatedTaskList = tasks.filter(t =>
      t !== task)

    await fetch(`${toDoApi}/${task.id}`, {
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })

    setTasks(updatedTaskList)
  reload();
  }

  function taskStatus(task) {
    const updatedTaskStatus = tasks.map(todo => {

      if (todo === task) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo;

    })

    setTasks(updatedTaskStatus)
  }


  return (
    <div className="main">
      <Navbar className="mt-4 px-2" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand id="navBarFooterTitle">
          To Do List Manager
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col xs={5}>
            <ToDoForm onSave={handleSave} />
          </Col>
          <Col xs={7}>
            <ToDoList toDoApi={tasks} onDelete={handleDelete} onUpdate={taskStatus} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main;