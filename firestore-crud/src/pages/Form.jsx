import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase";
import { motion } from "framer-motion";
import "./form.css";

const UserForm = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const db = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        name: userName,
        phone: userPhone,
      });
      alert("User added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="form-title"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Add New User
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="user-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            onChange={(e) => setUserPhone(e.target.value)}
            value={userPhone}
            required
          />
        </div>
        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.form>

      <motion.div
        className="view-link"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link to="/">View Users</Link>
      </motion.div>
    </motion.div>
  );
};

export default UserForm;
