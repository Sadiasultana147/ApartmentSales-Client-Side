import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageAllPurchase = (props) => {
    //const [allPurchases, setPurchases] = useState([]);
    const { _id, status, projectImage, userEmail, UserName, city, address, contact, projectName } = props.purchase
    const { handleConfirm } = props;
    const { handleDelete } = props;
    console.log(props.handleConfirm)


    return (
        <div>
            <div className=" mb-5 ms-3 me-3" >

                <div className="col h-100">
                    <div className="card cardbox   ">
                        <div>
                            <img src={projectImage} alt="" className=" w-100 p-5" />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{projectName}</h4>
                            <hr style={{ border: "2px solid blue" }} />

                            <h6 style={{ color: "white" }} className="card-text"><h5 style={{ color: "black" }}>User : </h5>{UserName}</h6>
                            <hr style={{ border: "2px solid blue" }} />
                            <h6 className="card-text" style={{ color: "white" }}> <h5 style={{ color: "black" }}>UserEmail :</h5>{userEmail}</h6>

                            <h6 className="card-text" style={{ color: "white" }}> <h5 style={{ color: "black" }}>City :</h5>{city}</h6>

                            <h6 className="card-text" style={{ color: "white" }}> <h5 style={{ color: "black" }}>Address :</h5>{address}</h6>

                            <hr style={{ border: "2px solid blue" }} />



                            <h6 className="card-text" style={{ color: "white" }}> {status}</h6>
                        </div>

                        <div className="pb-5">
                            <div>
                                {
                                    status === "pending" &&
                                    < button onClick={() => handleConfirm(_id)} className="btn" style={{ backgroundColor: "indigo", color: "white" }} >Confirm</button>




                                }
                            </div>
                            <br />
                            <div  ><button onClick={() => handleDelete(_id)} className="btn" style={{ backgroundColor: "darkred", color: "white" }}>  <i style={{ color: "white" }} class="fa fa-trash"></i>
                                <span className="ps-1" style={{ color: "white" }}>DELETE</span></button></div>
                        </div>

                    </div>

                </div>

            </div >
        </div >
    );
};

export default ManageAllPurchase;









