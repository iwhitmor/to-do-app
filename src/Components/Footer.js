import React from 'react';
import { Navbar } from 'react-bootstrap';
import './footer.css';

function Footer () {
  return (
    <>
    <Navbar className="Navbar" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand id="navBarFooterTitle">To Do App</Navbar.Brand>
    </Navbar>
    </>
  )
}

export default Footer;