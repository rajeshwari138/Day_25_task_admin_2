import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function Users(props) {
    let navigate = useNavigate();

    let handleDelete=(i)=>{
       let newData=[...props.data.data1]
        newData.splice(i,1)
        props.data.setData1(newData)
    }

  return <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>s.no</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Batch</th>
                                <th>Mobile</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        props.data.data1.map((data1,i)=>{
                                            return <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{data1.name}</td>
                                                <td>{data1.email}</td>
                                                <td>{data1.batch}</td>
                                                <td>{data1.mobile}</td>
                                                <td>
                                                <Button variant="primary" onClick={()=>navigate(`/edit-profile/${i}`)}><EditIcon/>Edit</Button>
                                                &nbsp;
                                                <Button variant="danger" onClick={()=>handleDelete(i)}><DeleteIcon/>Delete</Button>
                                                <Button onClick={()=>navigate(`/profile/${i}`)}>View Profile</Button>
                                                </td>
                                                </tr>
                                        })
                                    }
                            </tbody>
                </Table>
}

export default Users