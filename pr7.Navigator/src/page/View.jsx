import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../page/View.css';

function View() {
    const [recode, setrecode] = useState(JSON.parse(localStorage.getItem('curd')) || []);
    const [selectedIds, setSelectedIds] = useState([]);
    let navigate = useNavigate();

    const deletDeta = (id) => {
        let del = recode.filter((val) => val.id !== id);
        setrecode(del);
        localStorage.setItem('curd', JSON.stringify(del));
    };

    const allDelet = () => {
        let del = recode.filter((val) => !selectedIds.includes(val.id));
        setrecode(del);
        localStorage.setItem('curd', JSON.stringify(del));
        setSelectedIds([]);
    };

    const toggleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = recode.map((val) => val.id);
            setSelectedIds(allIds);
        } else {
            setSelectedIds([]);
        }
    };

    const toggleSelected = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const statusDeta = (id, actvity) => {
        const updatedRecode = recode.map((val) => {
            if (val.id === id) {
                val.actvity = actvity === 'active' ? 'deactive' : 'active';
            }
            return val;
        });
        setrecode(updatedRecode);
        localStorage.setItem('curd', JSON.stringify(updatedRecode));
    };

    return (
        <div className="view-container">
            <h1 >View Data</h1>
            <button className="delete-all-btn" onClick={allDelet}>Delete Selected</button>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                onChange={toggleSelectAll}
                                checked={selectedIds.length === recode.length && recode.length > 0}
                            />
                        </th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Actions</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {recode.map((val) => (
                        <tr key={val.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={() => toggleSelected(val.id)}
                                    checked={selectedIds.includes(val.id)}
                                />
                            </td>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.phone}</td>
                            <td>
                                <button className="btn delete-btn" onClick={() => deletDeta(val.id)}>
                                    Delete
                                </button>
                                <button
                                    className="btn update-btn"
                                    onClick={() => navigate(`/Edit`, { state: val })}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className={`btn status-btn ${
                                        val.actvity === 'active' ? 'active-btn' : 'inactive-btn'
                                    }`}
                                    onClick={() => statusDeta(val.id, val.actvity)}
                                >
                                    {val.actvity === 'active' ? 'Active' : 'Deactive'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link className="add-btn" to="/Add">Add New Record</Link>
        </div>
    );
}

export default View;
