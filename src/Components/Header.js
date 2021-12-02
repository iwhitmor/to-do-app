import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './Hooks/useAuth';
import Login from './Auth/Login'

function Header() {

  const { user, logout } = useAuth();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav.Link style={{ color: "white" }} as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} as={Link} to="/about">
            About
          </Nav.Link>
          <Navbar.Collapse className="justify-content-end">
            {!user &&
              <Login />
            }
            {user &&
              <>
                <Navbar.Text style={{ color: "white" }}>
                  Welcome back, {user.username}
                </Navbar.Text>
                <Navbar.Text>
                  <Button  onClick={() => logout()} variant="danger">
                    Log Out
                  </Button>
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