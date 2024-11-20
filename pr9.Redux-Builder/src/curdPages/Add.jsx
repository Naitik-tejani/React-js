import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../Redux/Action/curdActions'
import { Link, useNavigate } from 'react-router-dom'

function Add() {
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const dispacth = useDispatch()
    const navigate = useNavigate()

    const fileHandling = (e) => {
        e.preventDefault()
        //alert('mahadev')
        if (!name || !phone) {
            alert('All filed are requvaied...!')
            return false;
        }

        let obj = {
            id: Math.floor(Math.random()*1000000),
            name:name,
            phone:phone,
        }

        dispacth(addUser(obj))

        navigate('/')

    //console.log(obj);


    }

    return (
        <>
            <div align="center">
                <h1>Add Notes</h1>
                <form onSubmit={fileHandling}>
                    <table border={1}>
                        <tr>
                            <td><input type="text" placeholder='Title' onChange={(e) => setname(e.target.value)} value={name} /></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder='Write notes' onChange={(e) => setphone(e.target.value)} value={phone} /></td>
                        </tr>
                        <tr><td><input type="Submit" value="+" /></td></tr>
                    </table>
                </form>
                <Link to={'/'}>View</Link>
            </div>
        </>
    )
}


export default Add