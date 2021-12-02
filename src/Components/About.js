import React from 'react';
import { Navbar } from 'react-bootstrap';
import './about.css';

function About() {
  return (
    <div className="main">
      <Navbar className="mt-4 px-2" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand id="navBarFooterTitle">
          About
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default About;