import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmployeeUpdate.css'; // Import custom CSS for crazy styles

function EmployeeUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emp_name: '',
    emp_email: '',
    emp_password: '',
    emp_city: '',
    emp_salary: '',
    emp_designation: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = employees.find(emp => emp.id === parseInt(id));

    if (employee) {
      setFormData(employee);
    } else {
      alert('Employee not found');
      navigate('/');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.emp_name) newErrors.emp_name = 'Name is required';
    if (!formData.emp_email) newErrors.emp_email = 'Email is required';
    if (!formData.emp_password) newErrors.emp_password = 'Password is required';
    if (!formData.emp_city) newErrors.emp_city = 'City is required';
    if (!formData.emp_salary || isNaN(formData.emp_salary)) newErrors.emp_salary = 'Valid salary is required';
    if (!formData.emp_designation) newErrors.emp_designation = 'Designation is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const employees = JSON.parse(localStorage.getItem('employees')) || [];
      const updatedEmployees = employees.map(emp =>
        emp.id === parseInt(id) ? { ...formData, id: parseInt(id) } : emp
      );

      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      navigate('/');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="crazy-card shadow-lg">
            <Card.Body>
              <h2 className="text-center crazy-title mb-4">Update Employee</h2>
              <Form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                  <Form.Group className="mb-4" key={key} controlId={key}>
                    <Form.Label className="crazy-label">
                      {key.replace('_', ' ').toUpperCase()}
                    </Form.Label>
                    <Form.Control
                      type={key === 'emp_password' ? 'password' : 'text'}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="crazy-input"
                      isInvalid={!!errors[key]}
                    />
                    <Form.Control.Feedback type="invalid">{errors[key]}</Form.Control.Feedback>
                  </Form.Group>
                ))}
                <div className="d-grid">
                  <Button type="submit" className="crazy-button">
                    Update Employee
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EmployeeUpdate;
