import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Add({ onAddData }) {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState(""); // Fixed typo from 'Discription' to 'discription'

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddData({ name, discription }); // Passed the correct variables here
    setName("");
    setDiscription("");

    navigate("/view");
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
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="discription" className="form-label">
                    Discription
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="discription" // Corrected id from 'username' to 'discription'
                    value={discription}
                    onChange={(e) => setDiscription(e.target.value)} // Fixed variable reference
                    placeholder="Enter your discription"
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
