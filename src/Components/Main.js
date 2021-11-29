import React from 'react';
import ToDoForm from './Todo/ToDoForm';
import { Navbar } from 'react-bootstrap';
import './main.css';

function Main() {
  return (
    <div className="main">
      <Navbar className="mt-4" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand id="navBarFooterTitle">To Do App</Navbar.Brand>
    </Navbar>
    <ToDoForm />
    </div>
  )
}

export default Main;