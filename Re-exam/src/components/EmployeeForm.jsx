import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmployeeForm.css'; // Import the custom CSS file
import { Link } from 'react-router-dom';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    emp_name: '',
    emp_email: '',
    emp_password: '',
    emp_city: '',
    emp_salary: '',
    emp_designation: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
      employees.push({ id: Date.now(), ...formData });
      localStorage.setItem('employees', JSON.stringify(employees));
      navigate('/');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg crazy-card">
            <Card.Body>
              <h2 className="text-center mb-4 crazy-title">Add Employee</h2>
              <Form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                  <Form.Group className="mb-4" controlId={key} key={key}>
                    <Form.Label className="crazy-label">
                      {key.replace('_', ' ').toUpperCase()}
                    </Form.Label>
                    <Form.Control
                      type={key === 'emp_password' ? 'password' : 'text'}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      isInvalid={!!errors[key]}
                      className="crazy-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors[key]}
                    </Form.Control.Feedback>
                  </Form.Group>
                ))}
                <div className="d-grid">
                  <Button variant="primary" type="submit" className="crazy-button">
                    Add Employee
                  </Button>
                 
                </div>
                <div className="d-grid">
                  
                  <Link to="/" className="btn btn-success mb-3 crazy-button">
                  View  Employee List
              </Link> 
                  
                 
                </div>
                
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EmployeeForm;
