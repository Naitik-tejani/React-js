import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Add() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    let id = Math.floor(Math.random() * 100000);
    set(ref(db, `users/${id}`), {
      name: name,
      phone: phone,
    });
    alert("Record added successfully!");
    setName(""); // Reset name field
    setPhone(""); // Reset phone field
  };

  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col xs={12} md={6} className="mx-auto">
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body>
              <h2 className="text-center mb-4 text-primary">Add New Record</h2>
              <Form onSubmit={handleSubmit}>
                {/* Name Input */}
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 border-primary"
                    required
                  />
                </Form.Group>

                {/* Phone Input */}
                <Form.Group className="mb-4" controlId="formPhone">
                  <Form.Label className="fw-bold">Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-3 border-primary"
                    required
                  />
                </Form.Group>

                {/* Submit Button */}
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" type="submit" className="fw-bold">
                    Add Record
                  </Button>
                </div>
              </Form>
              <div className="text-center mt-4">
                <Link to="/">
                  <Button variant="outline-secondary" size="lg" className="fw-bold">
                    View Records
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Add;
