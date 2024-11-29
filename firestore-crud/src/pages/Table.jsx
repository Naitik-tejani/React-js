import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../firebase'

const Table = () => {
    const navigate = useNavigate();
    const db = getFirestore(app)

    const [record, setRecord] = useState([]);


    const getUser = async () => {
        try {
            const data = collection(db, "users")
            const users = await getDocs(data);
            const record = users.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            setRecord(record)
        } catch (err) {
            console.log(err);
            return false
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    const deleteUser = async (id) => {
        try {
            let deletedata = doc(db, `users/${id}`);
            await deleteDoc(deletedata);
            alert("record delete");
            getUser();
        } catch (err) {
            console.log(err);
            return false;
        }

    }


    return (
        <div align="center">
            <h2>View User</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((val) => {
                            const { id, name, phone } = val;
                            return (
                                <tr>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <button onClick={() => deleteUser(id)}>Delete</button> ||
                                        <button onClick={() => navigate('/edit', { state: val })}>Edit</button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to={`/add`}>Add</Link>
        </div>
    )
}

export default Table