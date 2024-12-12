import React, { useState } from "react";

function Edit({ data, onSaveData }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updatedData, setUpdatedData] = useState(data[selectedIndex] || "");

  const handleSave = () => {
    onSaveData(selectedIndex, updatedData);
  };

  return (
    <div>
      <h2>Edit Data</h2>
      <select 
        value={selectedIndex} 
        onChange={(e) => setSelectedIndex(Number(e.target.value))}
      >
        {data.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>
      <input 
        type="text" 
        value={updatedData} 
        onChange={(e) => setUpdatedData(e.target.value)} 
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Edit;
