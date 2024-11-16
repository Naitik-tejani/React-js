import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Add.css'; // Ensure the CSS file matches the styles below.

function Add() {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [records, setRecords] = useState(JSON.parse(localStorage.getItem('curd')) || []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Record Added');
        let newRecord = {
            id: Math.floor(Math.random() * 1000),
            name: name,
            phone: phone,
            activity: "active"
        };

        let updatedRecords = [...records, newRecord];
        setRecords(updatedRecords);

        localStorage.setItem('curd', JSON.stringify(updatedRecords));
        navigate('/');
    };

    return (
        <div className="add-container">
            <div className="form-card">
                <h1>Add New Record</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter full name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            placeholder="Enter phone number"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Add Record</button>
                </form>
                <Link to="/" className="view-records-link">View All Records</Link>
            </div>
        </div>
    );
}

export default Add;
