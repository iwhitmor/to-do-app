import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import { Nav, Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>To Do List Manager</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" exact>
          <Home message="To-Do App" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
