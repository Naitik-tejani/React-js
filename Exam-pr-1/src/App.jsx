import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./parts/SignUp";
import Add from "./parts/Add";
import View from "./parts/View";
import Edit from "./parts/Edit";

function App() {
  // State for user and data
  const [user, setUser] = useState(null);
  const [data, setData] = useState(() => {
    // Load data from localStorage when the app starts
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : [];
  });

  // Handle signup - user login
  const handleSignup = (userData) => {
    setUser(userData);
  };

  // Handle adding new data
  const handleAddData = (newData) => {
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData)); // Save updated data to localStorage
  };

  // Handle deleting data
  const handleDeleteData = (index) => {
    const updatedData = data.filter((item, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData)); // Save updated data to localStorage
  };

  // Handle saving edited data
  const handleSaveData = (index, updatedData) => {
    const updatedDataArray = data.map((item, i) =>
      i === index ? updatedData : item
    );
    setData(updatedDataArray);
    localStorage.setItem("data", JSON.stringify(updatedDataArray)); // Save updated data to localStorage
  };

  return (
    <Router>
      <Routes>
        {/* Signup Route */}
        <Route 
          path="/" 
          element={!user ? <Signup onSignup={handleSignup} /> : <Navigate to="/add" />} 
        />
        
        {/* Add Data Route */}
        <Route 
          path="/add" 
          element={user ? <Add onAddData={handleAddData} /> : <Navigate to="/" />} 
        />
        
        {/* View Data Route */}
        <Route 
          path="/view" 
          element={user ? <View data={data} onDelete={handleDeleteData} /> : <Navigate to="/" />} 
        />
        
        {/* Edit Data Route */}
        <Route 
          path="/edit" 
          element={user ? <Edit onSaveData={handleSaveData} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
