import { getDatabase, ref, update } from "firebase/database";
import { app } from "../../firebase.js";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState("");

  useEffect(() => {
    setEditId(location?.state[0]);
    setName(location?.state[1]?.name || "");
    setPhone(location?.state[1]?.phone || "");
  }, [location?.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);

    const user = ref(db, `users/${editId}`);
    update(user, {
      name: name,
      phone: phone,
    });
    alert("Record updated successfully!");
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "30rem" }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">Edit Record</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Update
              </Button>
              <Link to="/" className="btn btn-outline-secondary">
                View All Records
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Edit;
