import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './Hooks/useAuth';
import Login from './Auth/Login'

function Header() {

  const { user } = useAuth();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Login />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;