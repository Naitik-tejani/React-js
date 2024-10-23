import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../page/View.css'

function View() {
    const [recode, setrecode] = useState(JSON.parse(localStorage.getItem('curd')) || [])
    const [selectedIds, setSelectedIds] = useState([])
    let navigate = useNavigate()


    const deletDeta = (id) => {
        let del = recode.filter((val) => val.id !== id)
        setrecode(del)
        localStorage.setItem('curd', JSON.stringify(del))
    }

    const allDelet = () => {
        let del = recode.filter((val) => !selectedIds.includes(val.id))
        setrecode(del)
        localStorage.setItem('curd', JSON.stringify(del))
        setSelectedIds([])
    }


    const toggleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = recode.map((val) => val.id)
            setSelectedIds(allIds)
        } else {
            setSelectedIds([])
        }
    }

    const toggleSelected = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id))
        } else {
            setSelectedIds([...selectedIds, id])
        }
    }

    const statusDeta = (id, actvity) => {

        if (actvity == "active") {
            let up = recode.map((val) => {
                if (val.id == id) {
                    val.actvity = "deactive"
                }
                return val
            })

            setrecode(up)
            localStorage.setItem('curd', JSON.stringify(up))
        }
        else {
            let up = recode.map((val) => {
                if (val.id == id) {
                    val.actvity = "active"
                }
                return val
            })

            setrecode(up)
            localStorage.setItem('curd', JSON.stringify(up))
        }
    }

    return (
        <>
            <h1>-: View Data :-</h1>
            <button onClick={allDelet}> Deleted</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                onChange={toggleSelectAll}
                                checked={selectedIds.length === recode.length && recode.length > 0}
                            />
                            Select All
                        </th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recode.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            onChange={() => toggleSelected(val.id)} checked={selectedIds.includes(val.id)}
                                        />
                                    </td>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <td>
                                        <button onClick={() => deletDeta(val.id)} type="button">Delete</button>
                                        <button onClick={() => navigate(`/Edit`, { state: val })} type="button">Update</button>
                                    </td>
                                    <td>
                                        {
                                            val.actvity == "active" ?
                                                <button onClick={() => statusDeta(val.id, val.actvity)(
                                                )} type="button" style={{ backgroundColor: 'green' }}>Active</button> :
                                                <button onClick={() => statusDeta(val.id, val.actvity)(
                                                )} type="button" style={{ backgroundColor: 'red' }}>Deactive</button>
                                        }

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to={"/Add"}>Add</Link>
        </>
    )
}

export default View
