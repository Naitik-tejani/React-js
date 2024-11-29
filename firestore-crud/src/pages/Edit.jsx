import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { app } from '../firebase'

const Edit = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [editid, setEditId] = useState("")

    const db = getFirestore(app)


    useEffect(() => {
        setName(location?.state?.name)
        setPhone(location?.state?.phone)
        setEditId(location?.state?.id)
    }, [location?.state])

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await doc(db, `users/${editid}`);
            await updateDoc(user, {
                name: name,
                phone: phone,
            })
            alert("record update");
            navigate('/')
        } catch (err) {
            console.log(err);
            return false;
        }

    }

    return (
        <div align="center">
            <h2>Edit User</h2>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                        <td>phone :- </td>
                        <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
            <Link to={`/`}>View</Link>
        </div>
    )
}

export default Edit