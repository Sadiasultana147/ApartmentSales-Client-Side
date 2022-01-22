import React from 'react';
import './MoreProject.css'

import { Link } from 'react-router-dom';

const MoreProject = (props) => {
    const { _id, name, image, price, location, address, size, area, collection, totalFloor, room, status } = props.apartment
    return (
        <div>
            <div class="modal fade w-100" id={`s${_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Details Of {name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="styled-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ fontSize: 20 }}>Location</td>
                                        <td style={{ fontSize: 20 }}>{location}</td>
                                    </tr>
                                    <tr class="active-row">
                                        <td style={{ fontSize: 20 }}>Address</td>
                                        <td >{address}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: 20 }}>Size</td>
                                        <td style={{ fontSize: 20 }} >{size}</td>
                                    </tr>

                                    <tr class="active-row">
                                        <td style={{ fontSize: 20 }}>Land-Area</td>
                                        <td >{area}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: 20 }}>Total Room</td>
                                        <td style={{ fontSize: 20 }} >{room}</td>
                                    </tr>

                                    <tr class="active-row">
                                        <td style={{ fontSize: 20 }}>Total-Floor</td>
                                        <td >{totalFloor}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: 20 }}>Price</td>
                                        <td style={{ fontSize: 20 }} >$ {price}</td>
                                    </tr>

                                    <tr class="active-row">
                                        <td style={{ fontSize: 20 }}>Collection</td>
                                        <td >{collection}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration="3000" data-aos-easing="linear" className=" mb-5 ms-3 me-3 " >

                <div className="col h-100  mt-5 ms-2 me-2">
                    <div className="cardbox w-100 card h-100">
                        <div>
                            <img style={{
                                width: "100%",
                                height: "300px"
                            }}
                                src={image} alt="" />
                        </div>
                        <div className="card-body text-center">
                            <h4 style={{ color: "white" }} className="card-text">{name}
                                <h2 className="status">({status})</h2>
                            </h4>

                            <hr style={{ border: "2px solid blue" }} />
                            <h6 className="card-text" style={{ color: "white" }}> {location}</h6>
                            <hr style={{ border: "2px solid blue" }} />
                            <h6 className="card-text" style={{ color: "white" }}> ৳ {price}</h6>

                        </div>

                        <div >
                            <div className='d-flex justify-content-center '>
                                <button className="btn-grad  mt-5" data-bs-toggle="modal" data-bs-target={`#s${_id}`}>
                                    Show Details
                                </button>

                            </div>
                            <Link className="link d-flex justify-content-center" to={`purchases/${_id}`}><button className="btn-grad ">
                                <i style={{ color: "red", fontSize: "20px" }} class="fa fa-check"></i>
                                <span className="ps-1"> Select your choice</span>
                            </button>
                            </Link>


                        </div>
                    </div>

                </div>
            </div >
        </div>
    );
};

export default MoreProject;