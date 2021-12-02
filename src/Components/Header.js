import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './Hooks/useAuth';
import Login from './Auth/Login'

function Header() {

  const { user, logout } = useAuth();

  return (
    <>
      <Navbar className="headerNavBar" bg="primary" variant="dark">
        <Container>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Navbar.Collapse className="justify-content-end">
            {!user && <Login />}
            {user &&
              <>
                <Navbar.Text>Welcome back, {user.username}</Navbar.Text>
                <Navbar.Text>
                  <Button onClick={() => logout()} variant="dark">Log Out</Button>
                </Navbar.Text>
              </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;