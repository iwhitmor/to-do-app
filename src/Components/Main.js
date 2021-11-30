import React from 'react';
import ToDoForm from './Todo/ToDoForm';
import ToDoList from './Todo/ToDoList';
import { Navbar } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import './main.css';

const data = [
  { title: "Do the dishes, clean kitchen", difficulty: 5, assignedTo: "Ian", completed: true },
  { title: "Vaccuum and sweep all floors", difficulty: 3, assignedTo: "Sarah", completed: false },
  { title: "Walk the dogs and pick up poop in yard", difficulty: 10, assignedTo: "Sarah", completed: false },
  { title: "Wash and dry clothes. Make sure to fold them afterwards", difficulty: 7, assignedTo: "Ian", completed: true },
  { title: "Clean up all kids toys", difficulty: 1, assignedTo: "Wesley", completed: false }
];

function Main() {

  const [tasks, setTasks] = useState(data);

  function handleSave(formData) {
    const newTask = {
      ...formData,
    };

    const newTasks = [
      ...tasks,
      newTask,
    ];

    setTasks(newTasks);

  }

  return (
    <div className="main">
      <Navbar className="mt-4 px-2" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand id="navBarFooterTitle">To Do List Manager</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col xs={5}>
            <ToDoForm onSave={handleSave} />
          </Col>
          <Col xs={7}>
            <ToDoList data={tasks} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main;