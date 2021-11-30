import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';

function ToDoForm(props) {

  function handleSubmit(event) {
    event.preventDefautlt();

    const form = event.target;
    const { title, assignedTo, difficulty } = form.elements;

    const formData = {
      title,
      assignedTo,
      difficulty,
    };

    console.log(formData);

    event.target.reset();
    event.targe.elements.title.focus();
  }

  return (
    <>
      <Card className="mt-4" style={{ width: '25rem' }}>
        <Card.Title className="mb-4">Add To Do Item</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control type="text" name="title" placeholder="Details" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignedTo" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Difficulty</Form.Label>
            <Form.Range name="difficulty" min="1" max="10" />
          </Form.Group>
          <Button className="mb-4" variant="secondary" size="sm" type="submit">Add Item</Button>
        </Form>
      </Card>
    </>
  )
}

export default ToDoForm;