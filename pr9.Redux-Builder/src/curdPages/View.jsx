import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletUser } from '../Redux/Action/curdActions';
import Table from 'react-bootstrap/Table';

function View() {
  const user = useSelector(state => state.curd.userData)
  console.log(user);
  const dispacth = useDispatch()

  const deletDate = (id) => {
     dispacth(deletUser(id))
  }

  return (
    <>
      <div align="center">
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Notes</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
              user.map((val) => {
                return (
                  <tr>
                    <td>{val.name}</td>
                    <td>{val.phone}</td>
                    <td><button onClick={() => deletDate(val.id)}>delet</button></td>
                  </tr>
                )
              })
            }
      </tbody>
    </Table>
        <Link to={"/Add"}>Add </Link>
      </div>
    </>
  )
}

export default View