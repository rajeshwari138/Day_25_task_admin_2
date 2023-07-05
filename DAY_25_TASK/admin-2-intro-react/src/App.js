import './App.css';
import Dashboard from './components/Dashboard';
import Adduser from './components/Adduser';
import Sidebar from './components/Sidebar';
import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import EditUser from './components/EditUser';
import Users from './components/Users';
import  Profile from './components/Profile';


function App() {
  let data={
    earningsMonthly:"40,000",
    earningsAnnual:"2,15,000",
    task:"20",
    pendingRequest:"18"
  }

  const [data1, setData1] = useState([
    {
      name: "usha",
      email: "usha@gmail.com",
      batch: "B39WDT",
      mobile: "9453627341",
    },
    {
      name: "heena",
      email: "heena@gmail.com",
      batch: "B39WDT",
      mobile: "1235678934",
    },{
      name: "siva",
      email: "siva@gmail.com",
      batch: "B39WDT",
      mobile: "1235463767",
    }
  ])
  
  // let navigate = useNavigate();
  // const [value, setValue]=useState(0)
  return <>
    <div id="wrapper">
          <BrowserRouter>
            <Sidebar/>
              <Routes>
                <Route path='/dashboard' element={<Dashboard data={{data,data1,setData1}}/>}/>
                <Route path='/users' element={<Users data={{data1,setData1}}/>}/>
                <Route path='/create-user' element={<Adduser data={{data1,setData1}}/>}/>
                <Route path='/edit-profile/:id' element={<EditUser data= {{data1, setData1}}/>}/>
                {/* <Route path='*' element={<navigate to='/adduser'/>}/> */}
                <Route path='/profile/:id' element={<Profile data= {{data1, setData1}}/>}/>
              </Routes>
          </BrowserRouter>
          
          {/* <h1>{value}</h1> */}
          {/* <Dashboard data={{data, setValue}}/> */}
    </div>
  </>
}

export default App

