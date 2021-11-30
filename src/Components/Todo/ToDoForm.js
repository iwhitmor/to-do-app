import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';

function ToDoForm() {
  return (
    <>
      <Card className="mt-4" style={{ width: '25rem' }}>
        <Card.Title className="mb-4">Add To Do Item</Card.Title>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control placeholder="Details" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Difficulty</Form.Label>
            <Form.Range min="1" max="10" />
          </Form.Group>
          <Button className="mb-4" variant="secondary" size="sm">Add Item</Button>
        </Form>
      </Card>
    </>
  )
}

export default ToDoForm;