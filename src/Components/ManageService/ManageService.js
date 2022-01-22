import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageService = (props) => {
    const { _id, name, image, price, location, status } = props.apartment
    const { handleDelete } = props;
    const { handleState } = props;
    const { handleUpdateApartment } = props;

    const { handleUpdatedPrice } = props;

    console.log(props)
    return (
        <div>
            <Col className="h-100 ms-5 mb-5 " >
                <Card className="card singlecard  cardbox  w-100" >

                    <Card.Body>
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

                        <div>
                            <div>
                                {
                                    status === "Available" &&
                                    < button onClick={() => handleState(_id)} className="btn" style={{ backgroundColor: "indigo", color: "white" }} >SoldOut</button>
                                }
                            </div>
                            <br />
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <button onClick={() => handleDelete(_id)} className="btn" style={{ backgroundColor: "darkred", color: "white" }}>  <i style={{ color: "white" }} class="fa fa-trash"></i>
                                        <span className="ps-1" style={{ color: "white" }}>DELETE</span></button>
                                </div>
                                <div>
                                    <button style={{ backgroundColor: "blue", color: "white" }} class="btn " data-bs-toggle="modal" data-bs-target={`#s${_id}`}><i style={{ color: "white" }} class="fas fa-edit me-2"></i>
                                        EDIT
                                    </button>
                                </div>
                            </div>


                            <div class="modal fade" id={`s${_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div style={{ backgroundColor: "skyblue" }} class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Edit information of {name}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form >

                                                <div class="mb-3">
                                                    <label style={{ color: "white", fontSize: 30 }} class="form-label">ProjectName</label>
                                                    <input type="text" class="form-control" id="name" defaultValue={name} />
                                                </div>

                                                <div class="mb-3 ">
                                                    <label style={{ color: "white", fontSize: 30 }} class="form-label" for="price">Price</label>
                                                    <input onChange={handleUpdatedPrice} type="text" class="form-control" id="price" defaultValue={price} />

                                                </div>
                                                <div class="modal-footer d-block">

                                                    <button type="button" onClick={() => handleUpdateApartment(_id)} class="btn btn-primary">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

            </Col>
        </div >
    );
};

export default ManageService;