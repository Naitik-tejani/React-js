import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, ListGroup, Alert } from 'react-bootstrap';
import { app } from './fireStore';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  // Initialize Firestore
  const db = getFirestore(app);
  const todosCollectionRef = collection(db, 'todos');

  // Fetch data on component load
  useEffect(() => {
    const unsubscribe = onSnapshot(todosCollectionRef, (snapshot) => {
      const fetchedTodos = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
      }));
      setTodos(fetchedTodos);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [db]);

  const addTodo = async () => {
    if (input.trim()) {
      try {
        await addDoc(todosCollectionRef, { text: input.trim() });
        setInput('');
        setAlertMessage('Task added successfully!');
      } catch (error) {
        setAlertMessage('Failed to add task. Please try again.');
      }
    }
  };

  const removeTodo = async (id) => {
    try {
      const todoDoc = doc(db, 'todos', id);
      await deleteDoc(todoDoc);
      setAlertMessage('Task removed successfully!');
    } catch (error) {
      setAlertMessage('Failed to remove task. Please try again.');
    }
  };

  const clearList = async () => {
    try {
      const docsSnapshot = await getDocs(todosCollectionRef);
      docsSnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      setAlertMessage('All tasks cleared!');
    } catch (error) {
      setAlertMessage('Failed to clear tasks. Please try again.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 py-5">
      <Card className="shadow-lg rounded-3" style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Header className="bg-primary text-white text-center py-3 rounded-top">
          <h2>🌟 My Todo List 🌟</h2>
          <p>Your tasks, organized with love!</p>
        </Card.Header>
        <Card.Body>
          {alertMessage && <Alert variant="info" onClose={() => setAlertMessage('')} dismissible>{alertMessage}</Alert>}
          <Form className="d-flex mb-4" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="text"
              placeholder="Add a new task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="rounded-pill shadow-sm p-3"
            />
            <Button
              variant="success"
              onClick={addTodo}
              className="ms-2 rounded-pill shadow-sm p-3"
            >
              Add Task
            </Button>
          </Form>
          
          <ListGroup className="mb-3">
            {todos.length === 0 ? (
              <div className="text-muted text-center">No tasks yet! 🎉</div>
            ) : (
              todos.map((todo) => (
                <ListGroup.Item
                  key={todo.id}
                  className="d-flex justify-content-between align-items-center py-3"
                  style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    marginBottom: '10px',
                  }}
                >
                  <span className="text-dark" style={{ fontSize: '16px' }}>
                    {todo.text}
                  </span>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeTodo(todo.id)}
                    className="rounded-circle"
                  >
                    ✖
                  </Button>
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
          
          <Button
            variant="danger"
            onClick={clearList}
            className="w-100 shadow-sm rounded-pill p-3"
          >
            Clear All Tasks
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TodoList;
