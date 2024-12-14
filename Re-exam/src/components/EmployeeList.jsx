import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmployeeList.css'; // Import the custom crazy styles

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(data);
  }, []);

  const handleDelete = (id) => {
    const filteredEmployees = employees.filter(emp => emp.id !== id);
    localStorage.setItem('employees', JSON.stringify(filteredEmployees));
    setEmployees(filteredEmployees);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="crazy-card shadow-lg">
            <Card.Body>
              <h2 className="text-center crazy-title mb-3">Employee List</h2>
              <Link to="/add" className="btn btn-success mb-3 crazy-button">
                Add New Employee
              </Link>
              <Table striped hover responsive className="crazy-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Salary</th>
                    <th>Designation</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.length > 0 ? (
                    employees.map(emp => (
                      <tr key={emp.id} className="crazy-row">
                        <td>{emp.emp_name}</td>
                        <td>{emp.emp_email}</td>
                        <td>{emp.emp_city}</td>
                        <td>{emp.emp_salary}</td>
                        <td>{emp.emp_designation}</td>
                        <td>
                          <Link to={`/update/${emp.id}`} className="btn btn-warning me-2 crazy-button">
                            Edit
                          </Link>
                          <Button variant="danger" onClick={() => handleDelete(emp.id)} className="crazy-button">
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">No employees found.</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EmployeeList;
