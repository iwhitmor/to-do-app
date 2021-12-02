import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';

function ToDoForm(props) {

  const { hasPermission } = useAuth();
  const { onSave } = props;

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const { title, assignedTo, difficulty } = form.elements;

    const formData = {
      title: title.value,
      assignedTo: assignedTo.value,
      difficulty: difficulty.value,
    };

    onSave(formData);

    form.reset();
    title.focus();
  }

  let canCreate = hasPermission('create');

  return (
    <>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="mb-4">
            Add To Do Item
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>
                To Do Item
              </Form.Label>
              <Form.Control as="textarea" rows={2} name="title" placeholder="Details" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                Assigned To
              </Form.Label>
              <Form.Control type="text" name="assignedTo" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                Difficulty
              </Form.Label>
              <Form.Range name="difficulty" min="1" max="10" />
            </Form.Group>
            <Button type="submit" disabled={!canCreate} className="mb-4" variant="secondary" size="sm">
              Add Item
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default ToDoForm;