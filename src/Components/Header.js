import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './Hooks/useAuth';
import Login from './Auth/Login'

function Header() {

  const { user } = useAuth();

  return (
    <>
      <Navbar className="headerNavBar" bg="primary" variant="dark">
        <Container>
          <Nav.Link  as={Link} to="/">Home</Nav.Link>
          <Nav.Link  as={Link} to="/about">About</Nav.Link>
          <Navbar.Collapse className="justify-content-end">
            <Login />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;