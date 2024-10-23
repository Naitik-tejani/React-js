import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Add.css';  // Add your CSS file

function Add() {
    let navigate = useNavigate();
     const [name, setname] = useState("");
     const [phone, setphone] = useState("");

    const [recode, setrecode] = useState(JSON.parse(localStorage.getItem('curd')) || []);
    
    const fileHandling = (e) => {
        e.preventDefault();
        alert('Record Added');
        let obj = {
            id: Math.floor(Math.random() * 1000),
            name: name,
            phone: phone,
            actvity: "active"
        };

        let updeta = [...recode, obj];
        setrecode(updeta);

        localStorage.setItem('curd', JSON.stringify(updeta));
        navigate('/');
    };

    return (
        <div className="container">
            <h1>-: Add Data :-</h1>
            <form onSubmit={fileHandling}>
                <label>-: Name :-</label>
                <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Enter Name" required />
                
                <label>-: Phone :-</label>
                <input value={phone} onChange={(e) => setphone(e.target.value)} type="text" placeholder="Enter Phone Number" required />
                
                <input type="submit" value="Submit" />
            </form>
            <Link to={`/`}>View Records</Link>
        </div>
    );
}

export default Add;
