import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import './Edit.css'; // Import the CSS file

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [editid, setEditId] = useState('');

  const db = getFirestore(app);

  useEffect(() => {
    setName(location?.state?.name);
    setPhone(location?.state?.phone);
    setEditId(location?.state?.id);
  }, [location?.state]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await doc(db, `users/${editid}`);
      await updateDoc(user, {
        name: name,
        phone: phone,
      });
      alert('Record updated successfully!');
      navigate('/');
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <div className="edit-container">
      <h2 className="edit-header">Edit User</h2>
      <form className="edit-form" onSubmit={handlesubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone:</label>
          <input
            type="text"
            className="form-input"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <button type="submit" className="form-button">
          Update
        </button>
      </form>
      <Link to="/Table" className="back-link">
        Back to View
      </Link>
    </div>
  );
};

export default Edit;
