import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../../firebase';
import { Table, Button, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const View = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState({});

    const db = getDatabase(app);

    // Fetch user data from Firebase
    const viewData = () => {
        const users = ref(db, "users");
        onValue(users, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setRecord(data);
            } else {
                setRecord({});
            }
        });
    };

    useEffect(() => {
        viewData();
    }, []);

    // Delete user record
    const deleteUser = (id) => {
        const userRef = ref(db, `users/${id}`);
        remove(userRef)
            .then(() => {
                alert("Record deleted successfully!");
                viewData();
            })
            .catch((err) => {
                console.error("Error deleting record: ", err);
                alert("Failed to delete record.");
            });
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">User Records</h2>

            {/* Table to display users */}
            <Table striped bordered hover responsive>
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {record && Object.entries(record).length > 0 ? (
                        Object.entries(record).map(([key, val], index) => (
                            <tr key={key}>
                                <td>{index + 1}</td> {/* Serial number */}
                                <td>{val.name}</td>
                                <td>{val.phone}</td>
                                
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                <Alert variant="info">No records found</Alert>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Link to Add New Record */}
            <div className="text-center">
                <Link to="/add">
                    <Button variant="primary">Add New Record</Button>
                </Link>
            </div>
        </Container>
    );
};

export default View;
