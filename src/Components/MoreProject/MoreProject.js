import React from 'react';

import { Link } from 'react-router-dom';

const MoreProject = (props) => {
    const { _id, name, image, price, description } = props.apartment
    return (
        <div>
            <div data-aos="zoom-out-up" data-aos-duration="3000" data-aos-easing="linear" className=" mb-5 ms-3 me-3" >

                <div className="col h-100">
                    <div className="cardbox w-100 card h-100">
                        <div>
                            <img src={image} alt="" className=" w-100 p-5" />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{name}</h4>
                            <hr style={{ border: "2px solid blue" }} />

                            <h6 style={{ color: "white" }} className="card-text"><h5 style={{ color: "black" }}>DESCRIPTION : </h5>{description}</h6>
                            <hr style={{ border: "2px solid blue" }} />
                            <h6 className="card-text" style={{ color: "white" }}> <h5 style={{ color: "black" }}>PRICE :</h5>৳ {price}</h6>
                            <hr style={{ border: "2px solid blue" }} />
                        </div>
                        <div className="mt-5">
                            <Link className="link d-flex justify-content-center" to={`purchases/${_id}`}><button className="btn-grad ">
                                <i style={{ color: "red", fontSize: "20px" }} class="fa fa-cart-plus"></i>
                                <span className="ps-1"> Purchase</span>
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