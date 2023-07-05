import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import React,{ useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function EditUser(props) {
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

    let handleSubmit= () =>{
        let newData = {name, email, batch, mobile}
        let data = [...props.data.data1]
        data.splice(params.id,1,newData)
        props.data.setData1(data)
        navigate('/users')
      }
    
  return  <div className="mx-auto col-10">
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="enter mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Batch</Form.Label>
                <Form.Control type="text" placeholder="enter batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
            </Form.Group>
            
            <Button variant="primary" onClick={()=>handleSubmit()}>
                Save edited
            </Button>
            </Form>
            </div>
}

export default EditUser