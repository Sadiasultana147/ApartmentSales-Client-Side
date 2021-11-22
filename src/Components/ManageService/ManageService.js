import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageService = (props) => {
    const { _id, name, image, price, description } = props.apartment;
    const { handleDelete } = props;
    console.log(props)
    return (
        <div>
            <Col className="h-100 ms-5 mb-5 " >
                <Card className="card singlecard  cardbox  w-100" >
                    <Card.Img variant="top" src={image} className=" mt-4 w-50  mx-auto d-block " />
                    <Card.Body>
                        <div>
                            <Card.Title  >{name} </Card.Title>

                            <hr style={{ border: "2px solid blue" }} />
                            <Card.Text style={{ color: "white" }} className="h-100">
                                <h6 style={{ color: "black", fontWeight: "30px", fontSize: "20px" }}>DETAILS:</h6>
                                {description}</Card.Text>

                            <hr style={{ border: "2px solid blue" }} />
                            <Card.Text style={{ color: "white" }} className="h-100"> <span style={{ color: "black" }}>PRICE : </span> ৳ {price}</Card.Text>
                            <hr style={{ border: "2px solid blue" }} />


                        </div>

                        <div><button onClick={() => handleDelete(_id)} className="btn" style={{ backgroundColor: "darkred", color: "white" }}>  <i style={{ color: "white" }} class="fa fa-trash"></i>
                            <span className="ps-1" style={{ color: "white" }}>DELETE</span></button></div>









                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageService;