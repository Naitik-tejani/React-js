import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Add({ onAddData }) {
  const [itemName, setItemName] = useState(""); // Changed 'name' to 'itemName'
  const [itemDescription, setItemDescription] = useState(""); // Changed 'discription' to 'itemDescription'

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddData({ itemName, itemDescription }); // Updated to pass the new variable names
    setItemName(""); // Resetting itemName after submit
    setItemDescription(""); // Resetting itemDescription after submit

    navigate("/view"); // Navigate to the 'view' page
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h2>Add Data</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="itemName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="itemName" // Updated id to match the new variable name
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)} // Updated to use itemName
                    placeholder="Enter the item name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="itemDescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="itemDescription" // Updated id to match the new variable name
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)} // Updated to use itemDescription
                    placeholder="Enter the item description"
                    required
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Add Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
