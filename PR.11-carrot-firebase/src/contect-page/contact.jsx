import React, { useState } from "react";
import "./contact.css"; // Importing contact.css
import { app } from "../firebase"; // Import the Firebase app instance
import { getDatabase, ref, set } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !review) {
      alert("Please fill in all fields.");
      return;
    }

    const db = getDatabase(app); // Get the database instance
    const id = Math.random().toString(36).substr(2, 9); // Generate a random ID

    // Save data to Firebase Realtime Database
    set(ref(db, `contacts/${id}`), {
      name,
      phone,
      email,
      review,
    })
      .then(() => {
        alert("Your review has been submitted successfully!");
        // Reset form fields
        setName("");
        setPhone("");
        setEmail("");
        setReview("");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("There was an error. Please try again.");
      });
  };

  return (
    <div className="contact-page container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center mb-5">
        We'd love to hear your feedback! Please fill out the form below and we’ll get back to you soon.
      </p>
      <form onSubmit={handleSubmit} className="contact-form mx-auto" style={{ maxWidth: "600px" }}>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phone" className="form-label">Contact Number:</label>
          <input
            id="phone"
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="review" className="form-label">Review (max 250 words):</label>
          <textarea
            id="review"
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            maxLength="250"
            placeholder="Write your feedback here..."
            rows="4"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4 py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
