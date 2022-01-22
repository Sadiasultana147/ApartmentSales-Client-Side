
import React, { useEffect, useState } from 'react';
import MyPurchases from '../MyParchases/MyPurchases';
import Pay from '../Pay/Pay';
import Review from '../ReView/Review';
import useAuth from '../Hooks/useAuth'
import './DashBoard.css'
import AddApartment from '../AddApartment/AddApartment'
import ManageAllPurchases from '../ManageAllPurchases/ManageAllPurchases'
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import { NavLink, Spinner } from 'react-bootstrap';
import DashBoardContainer from '../DashboardContainer/DashBoardContainer';


const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
 
  
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
 
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 300vh;
  display: flex;
  justify-content: center;
  position:fixed;
  top: 10;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  
`;
const UserDashBoard = () => {

    const { logOut, user, isAdmin, setIsAdmin } = useAuth();
    const [sidebar, setSidebar] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    const [control, setControl] = useState('dashboardcontainer');
    const showSidebar = () => setSidebar(!sidebar);

    useEffect(() => {
        fetch(`https://boiling-falls-89635.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data[0]?.role === "admin") {
                    setIsAdmin('admin');
                } else {
                    setIsAdmin('user');
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [user?.email]);



    return (
        <div className="body overflow-hidden" >
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav >
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    <h1
                        style={{
                            textAlign: "center",
                            marginLeft: "200px",
                            color: "green"
                        }}
                    >DashBoard
                    </h1>

                </Nav>
                <div >
                    <div>

                    </div>
                    <div >
                        <SidebarNav sidebar={sidebar}>
                            <SidebarWrap style={{ color: "white" }}>

                                {
                                    isAdmin === "admin" && (
                                        <div>
                                            <li
                                                onClick={() => setControl("addapartment")}
                                                className=" li "
                                            >
                                                Add Appartment
                                            </li>
                                            <li
                                                onClick={() => setControl("makeadmin")}
                                                className="li p-2"
                                            >
                                                MakeAdmin
                                            </li>
                                            <li
                                                onClick={() => setControl("allpurchases")}
                                                className="li p-2"
                                            >
                                                Manage All Purchases
                                            </li>
                                            <li
                                                onClick={() => setControl("manageservices")}
                                                className="li p-2"
                                            >
                                                Manage Services
                                            </li>
                                            <NavLink style={{ color: "white" }} to="/" onClick={logOut} className="nav-item nav-link li" >
                                                <i class="fa fa-sign-out" aria-hidden="true"></i>
                                                <span className="ps-1">LogOut</span>

                                            </NavLink>


                                        </div>
                                    )}
                                {
                                    isAdmin === "user" &&
                                    <div>
                                        <li
                                            onClick={() => setControl("mypurchase")}
                                            className=" li "
                                        >
                                            My Selected Apartments
                                        </li>
                                        <li
                                            onClick={() => setControl("pay")}
                                            className="li p-2"
                                        >
                                            Pay
                                        </li>
                                        <li
                                            onClick={() => setControl("review")}
                                            className="li p-2"
                                        >
                                            Review
                                        </li>
                                        <NavLink style={{ color: "white" }} to="/" onClick={logOut} className="nav-item nav-link li" >
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                            <span className="ps-1">LogOut</span>

                                        </NavLink>

                                    </div>
                                }
                            </SidebarWrap>
                        </SidebarNav>
                    </div>
                </div>
                <div >

                    {
                        isAdmin === "admin" && (


                            <div>
                                {control === "dashboardcontainer" &&
                                    <DashBoardContainer></DashBoardContainer>}
                                {control === "addapartment" && <AddApartment></AddApartment>}
                                {control === "allpurchases" && <ManageAllPurchases></ManageAllPurchases>}
                                {control === "makeadmin" && <MakeAdmin></MakeAdmin>}


                                {control === "manageservices" && <ManageServices></ManageServices>}


                            </div>

                        )}

                    {
                        isAdmin === "user" && (
                            <div>
                                {control === "dashboardcontainer" &&
                                    <DashBoardContainer></DashBoardContainer>}
                                {control === "mypurchase" && <MyPurchases></MyPurchases>}
                                {control === "pay" && <Pay></Pay>}
                                {control === "review" && <Review></Review>}

                            </div>
                        )}
                </div>
            </IconContext.Provider>


        </div>
    );
};

export default UserDashBoard;