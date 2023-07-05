import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Profile(props) {
    let params = useParams();
    // console.log(params.id)
    let navigate = useNavigate()

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [mobile, setMobile] = useState("");
    let [batch, setBatch] = useState("");

    useEffect(()=>{
        if (params.id < props.data.data1.length){
            setName(props.data.data1[params.id].name)
            setEmail(props.data.data1[params.id].email)
            setMobile(props.data.data1[params.id].mobile)
            setBatch(props.data.data1[params.id].batch)
        }else{
            navigate('/users')
        }
    },[])

  return <Table striped bordered hover>
  <thead>
      <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Batch</th>
      <th>Mobile</th>
      </tr>
  </thead>
  <tbody>
                      <tr>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{batch}</td>
                      <td>{mobile}</td>
                      </tr>
           
  </tbody>
</Table>
}

export default Profile