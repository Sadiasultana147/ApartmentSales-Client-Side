import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import './Header.css'

const Header = (props) => {
    const { control, setcontrol, user, logOut } = useAuth()
    const { isAdmin } = useAuth()



    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg  ">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand ">
                    <img src="https://www.anwarlandmark.com/frontend/images/homeloanmain-1.png" className="rounded-circle  " height="60" width="60" alt="" />
                    <span className="ms-3 ">
                        <strong>
                            <em style={{ color: "white" }}>DREAM KINGDOM</em>
                        </strong>
                    </span>
                </NavLink>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">





                    <div className="navbar-nav ms-5 ps-5">
                        <NavLink to="/home" className="nav-item nav-link active " style={{ color: "white", fontSize: "20px" }}>Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link active " style={{ color: "white", fontSize: "20px" }}>About</NavLink>

                        <NavLink to="/explore" className="nav-item nav-link" style={{ color: "white", fontSize: "20px" }}>More Projects</NavLink>
                        {
                            user?.email &&
                            <NavLink to="/dashboard" className="nav-item nav-link" style={{ color: "white", fontSize: "20px" }}>Dash Board</NavLink>
                        }




                    </div>






                    <div className="navbar-nav ms-auto">

                        {
                            (user.email) ?
                                <div>
                                    <NavLink style={{ fontSize: "20px", color: "white" }} to="/" onClick={logOut} className=" logout  " >
                                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        <span className="ps-1 ">LogOut</span>

                                    </NavLink>
                                    <span className="ms-4" style={{ fontSize: "20px", color: "white" }}> {user?.displayName}
                                        {
                                            (user?.photoURL) ?

                                                <img className="rounded-circle ms-4 w-25" src={user?.photoURL} alt="" />
                                                :
                                                <img className="rounded-circle w-25 ms-4" src="https://image.shutterstock.com/image-vector/avatar-man-icon-profile-placeholder-260nw-1229859850.jpg" alt="" />



                                        }
                                    </span>
                                </div>
                                :

                                <div className="navbar-nav ms-auto">
                                    <NavLink to="/register" className="nav-item nav-link pe-5" style={{ color: "white", fontSize: "30px" }}>
                                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        Register</NavLink>



                                    <NavLink to="/login" className="nav-item nav-link "> <button style={{ backgroundColor: "blue", color: "white", fontSize: "30px" }}>

                                        <i class="fa fa-user"></i>
                                        <span class="ps-1">Login</span>
                                    </button></NavLink>

                                </div>
                        }
                    </div>




                </div>
            </div>
        </nav>

    );
};

export default Header;