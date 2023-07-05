import React from 'react'
import {Link} from 'react-router-dom'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


function Sidebar() {
  return <>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">
                        {/* <!-- Sidebar --> */}
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        {/* <!-- Sidebar - Brand --> */}
                        <div className="sidebar-brand d-flex align-items-center justify-content-center">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                        </div>
                    
                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider my-0"/>

                        {/* <!-- Nav Item - Dashboard --> */}
                        <Link to='/dashboard' >
                            <li className="nav-item active">
                                <div className="nav-link">
                                    <i className="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Dashboard</span>
                                </div>
                            </li>
                        </Link>
                       
                        <Link to='/users' >
                            <li className="nav-item active">
                                <div className="nav-link">
                                    <PersonAddAltIcon/> &nbsp;
                                    <span>Users</span>
                                </div>
                            </li>
                        </Link>

                        <Link to='/create-user' >
                            <li className="nav-item active">
                                <div className="nav-link">
                                    <PersonAddAltIcon/> &nbsp;
                                    <span>Add User</span>
                                </div>
                            </li>
                        </Link>

                        </ul>
                    {/* <!-- End of Sidebar --> */}
            

                    {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" class="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content"></div>
                </div>
        </div>
        </div>
    </>
}
export default Sidebar