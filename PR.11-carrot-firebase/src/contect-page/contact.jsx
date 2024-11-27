// Contact.js
import React from "react";
import "./contact.css"; // Importing contact.css
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    let id = Math.floor(Math.random() * 100000);
    set(ref(db, `users/${id}`), {
      name: name,
      phone: phone,
    });
    alert("Record added successfully!");
    setName(""); // Reset name field
    setPhone(""); // Reset phone field
  };
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Contact Number:
          <input type="tel" name="contact" />
        </label>
        <label>
          email:
        <input type="text"/>
        </label>
        <label>
          Review (max 250 words):
          <textarea name="review" maxLength="250" />
        </label>
        <input type="hidden" name="randomId" value={Math.random().toString(36).substr(2, 9)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;