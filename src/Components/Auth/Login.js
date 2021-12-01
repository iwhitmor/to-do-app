import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";

function handleSubmit(event) {
  const form = event.target;
  const { username, password } = form.elements;

  const loginData = {
    username: username.value,
    password: password.value,
  };
  console.log(loginData);
}

export default function Login() {
  return (
    <Form className="loginForm" onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Control type="text" name="username" placeholder="Username" />
        </Col>
        <Col>
          <Form.Control type="text" name="password" placeholder="Password" />
        </Col>
        <Col>
          <Button variant="dark" type="submit">Log In</Button>
        </Col>
      </Row>
    </Form>
  )
}