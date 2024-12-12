import React, { useState } from "react";

function Add({ onAddData }) {
  const [newData, setNewData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddData(newData);  // Pass new data to the parent component (App)
    setNewData("");  // Clear input after adding
  };

  return (
    <div>
      <h2>Add New Data</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newData} 
          onChange={(e) => setNewData(e.target.value)} 
          placeholder="Enter new data" 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Add;
