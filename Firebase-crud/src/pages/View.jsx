import { getDatabase, onValue, ref, remove } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../../firebase'


const View = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState("");

    const db = getDatabase(app)

    const viewData = () => { 
        const users = ref(db, "users");

        onValue(users, (u) => {
            const data = u.val();
            setRecord(data)
        })

    }

    useEffect(() => {
        viewData();
    }, [])

    const deleteUser = (id) => {
        const users = ref(db, `users/${id}`);
        remove(users);
        alert("record delete");
        viewData();
    }



    return (
        <div align="center">
            <h2>View User</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Srno</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record && Object.entries(record).map(([key, val]) => {
                            return (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <td>
                                        <button onClick={() => deleteUser(key)}>Delete</button> &nbsp;
                                        <button onClick={() => navigate(`/edit`, { state: [key, val] })}>Edit</button>
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

export default View