import { collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase";
import "./table.css";

const Table = () => {
  const navigate = useNavigate();
  const db = getFirestore(app);

  const [record, setRecord] = useState([]);

  const getUser = async () => {
    try {
      const data = collection(db, "users");
      const users = await getDocs(data);
      const record = users.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecord(record);
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = async (id) => {
    try {
      let deletedata = doc(db, `users/${id}`);
      await deleteDoc(deletedata);
      alert("Record deleted successfully!");
      getUser();
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <div className="table-container">
      <h2 className="table-title">User Records</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {record.map((val) => {
            const { id, name, phone } = val;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td className="actions">
                  <button
                    className="delete-btn"
                    onClick={() => deleteUser(id)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => navigate("/edit", { state: val })}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/add" className="add-link">
        Add New User
      </Link>
    </div>
  );
};

export default Table;
