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
          <FloatingLabel controlId="floatingInput" label="Username">
            <Form.Control type="text" name="username" placeholder="username" />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInput" label="Password">
            <Form.Control type="text" name="password" placeholder="password" />
          </FloatingLabel>
        </Col>
        <Col>
          <Button variant="secondary" size="sm" type="submit">Log In</Button>
        </Col>
      </Row>
    </Form>
  )
}