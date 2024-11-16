// View.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function View() {
  const [records, setRecords] = useState([]);
  const [filteredRecord, setFilteredRecord] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(storedRecords);
    setFilteredRecord(storedRecords);  // Initialize filtered records
  }, []);

  const handleDelete = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
    setFilteredRecord(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
  };

  const handleToggleStatus = (index) => {
    const updatedRecords = records.map((record, i) =>
      i === index ? { ...record, status: record.status === 'Active' ? 'Deactive' : 'Active' } : record
    );
    setRecords(updatedRecords);
    setFilteredRecord(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
  };

  const filterData = (status) => {
    const updatedRecords = records.filter((val) => val.status === status);
    setFilteredRecord(status === 'All' ? records : updatedRecords);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = records.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
    setFilteredRecord(filtered);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    const sortedRecords = sortRecords([...filteredRecord], value);
    setFilteredRecord(sortedRecords);
  };

  const sortRecords = (records, order) => {
    if (order === 'az') {
      return [...records].sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'za') {
      return [...records].sort((a, b) => b.name.localeCompare(a.name));
    }
    return records;
  };

  return (
    <div>
      <Link to="/Add">Add</Link>

      <div className="container mt-5">
        <h2>Record List</h2>

        <div className="d-flex mb-3">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={handleSearch}
            className="form-control me-2"
          />
          <select onChange={(e) => filterData(e.target.value)} className="form-select me-2">
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Deactive">Deactive</option>
          </select>
          <select onChange={handleSort} value={sortOrder} className="form-select me-2">
            <option value="">Sort by</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>

        {filteredRecord.length > 0 ? (
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecord.map((record, index) => (
                <tr key={index}>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>{record.date}</td>
                  <td>{record.gender}</td>
                  <td>{record.course}</td>
                  <td>
                    <button
                      onClick={() => handleToggleStatus(index)}
                      className={`btn ${record.status === 'Active' ? 'btn-success' : 'btn-secondary'}`}
                    >
                      {record.status}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)} className="btn btn-danger">
                      Delete
                    </button>
                    <button
                      onClick={() => navigate('/Add', { state: { record, index } })}
                      className="btn btn-primary ms-2">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No records available.</p>
        )}
      </div>
    </div>
  );
}