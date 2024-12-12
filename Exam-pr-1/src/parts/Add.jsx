import React, { useState } from "react";

function Add({ onAddData }) {
  const [newData, setNewData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newData) {
      onAddData(newData); // Add the new data through the prop function
      setNewData(""); // Reset input field after adding data
    }
  };

  return (
    <div>
      <h2>Add New Data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          placeholder="Add your data"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Add;
