import React, { useState } from "react";

function Edit({ onSaveData }) {
  const [editedData, setEditedData] = useState("");
  const [index, setIndex] = useState(null);

  const handleSave = () => {
    if (index !== null && editedData) {
      onSaveData(index, editedData); // Save the edited data through the prop function
    }
  };

  return (
    <div>
      <h2>Edit Data</h2>
      <input
        type="text"
        value={editedData}
        onChange={(e) => setEditedData(e.target.value)}
        placeholder="Edit your data"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Edit;
