import React from 'react'
import { Link } from 'react-router-dom'
import '../parts/Add.css'


export default function Add() {
    return (

        <>

            <Link to="/View">View</Link>

            <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Simple Form</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label> 
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date of Birth</label>
              <input type="date" className="form-control" id="date" />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select className="form-select">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="course" className="form-label">Course</label>
              <input type="text" className="form-control" id="course" placeholder="Enter your course" />
            </div>

            <div className="mb-3">
              <label htmlFor="status" className="form-label">Status</label>
              <input type="text" className="form-control" id="status" placeholder="Enter your status" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>

           



        </>
    )
}
