import { Form, Button, Row, Col } from "react-bootstrap";
import useAuth from '../Hooks/useAuth';

export default function Login() {
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const { username, password } = form.elements;

    const loginData = {
      username: username.value,
      password: password.value,
    };
    console.log(loginData);

    login(loginData);

    form.reset();
  }

  return (
    <Form className="loginForm" onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Control type="text" name="username" placeholder="Username" />
        </Col>
        <Col>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Col>
        <Col>
          <Button variant="dark" type="submit">Log In</Button>
        </Col>
      </Row>
    </Form>
  )
}
