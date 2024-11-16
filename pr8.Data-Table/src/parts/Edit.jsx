
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const { record, index } = location.state;

  const [formData, setFormData] = useState(record);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    storedRecords[index] = formData;
    localStorage.setItem('records', JSON.stringify(storedRecords));
    navigate('/'); // Go back to the main view
  };

  return (
    <div className="container mt-5">
      <h2>Edit Record</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button onClick={handleSave} className="btn btn-primary mt-3">
        Save
      </button>
      <button onClick={() => navigate('/')} className="btn btn-secondary mt-3 ms-2">
        Cancel
      </button>
    </div>
  );
}
    