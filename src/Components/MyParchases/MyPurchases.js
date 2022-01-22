import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import useAuth from '../../Components/Hooks/useAuth';

const MyPurchases = () => {
    const [allpurchases, setAllPurchases] = useState([]);
    const { user } = useAuth();



    useEffect(() => {
        fetch('https://boiling-falls-89635.herokuapp.com/purchases')
            .then(res => res.json())
            .then(data => setAllPurchases(data))
    }, [])

    //DELETE ORDER

    const handleDeletePurchases = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://boiling-falls-89635.herokuapp.com/purchases/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swal('deleted successfully');
                            const remainingOrders = allpurchases.filter(order => order._id !== id);
                            setAllPurchases(remainingOrders);
                        }
                    });



            }
        })

        //window.location.reload();
    }

    const myPurchase = allpurchases.filter(purchase => (purchase.userEmail == user.email))

    return (
        <div>
            <div className="body overflow-hidden " >
                <div  >
                    <div style={{
                        backgroundImage: "url('https://www.suvastuproperties.com/wp-content/uploads/2018/12/ahs-2.jpg')",
                        backgroundPosition: "center center",
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",

                        position: "relative",
                        height: "650px",
                        color: "white"

                    }}>
                        <h1 style={{

                            paddingTop: "250px",
                            fontSize: 50

                        }}>MY SELECTED APARTMENTS</h1>
                    </div>
                </div>


                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4   ">
                    {

                        myPurchase.map(purchase => <div >

                            <div className="col h-100 ">
                                <div className=" cardbox m-5  ">
                                    <img style={{
                                        width: "100%",
                                        height: "300px"
                                    }}
                                        src={purchase.projectImage} alt="" />

                                    <h4> <span style={{ color: "white" }} > {purchase.projectName}</span></h4>



                                    <h6> <span style={{ color: "white" }}>{purchase.price}</span></h6>

                                    <h6 style={{ fontSize: 30 }}>{purchase.status}</h6>

                                    <div className='d-flex justify-content-between ms-3 '>
                                        <div>
                                            <button style={{ backgroundColor: "skyblue", color: "white" }} className="mb-4 btn " data-bs-toggle="modal" data-bs-target={`#s${purchase._id}`}>
                                                <i style={{ color: "white" }} class="fa fa-info-circle me-2" aria-hidden="true"></i>
                                                Show Details
                                            </button>

                                        </div>
                                        <div>
                                            < button style={{ backgroundColor: "darkred" }} className="mb-4 btn me-3 " onClick={() => handleDeletePurchases(purchase._id)}>
                                                <i style={{ color: "white" }} class="fa fa-trash"></i>
                                                <span className="ps-1" style={{ color: "white" }}>DELETE</span></button >
                                        </div>
                                        <div class="modal fade w-100 mb-5" id={`s${purchase._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Details Of {purchase.projectName}</h5>
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
                                                                    <td style={{ fontSize: 20 }}>{purchase.projectLocation}</td>
                                                                </tr>
                                                                <tr class="active-row">
                                                                    <td style={{ fontSize: 20 }}>Address</td>
                                                                    <td >{purchase.projectAddress}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ fontSize: 20 }}>Size</td>
                                                                    <td style={{ fontSize: 20 }} >{purchase.projectSize}</td>
                                                                </tr>

                                                                <tr class="active-row">
                                                                    <td style={{ fontSize: 20 }}>Land-Area</td>
                                                                    <td >{purchase.projectArea}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ fontSize: 20 }}>Total Room</td>
                                                                    <td style={{ fontSize: 20 }} >{purchase.projectRoom}</td>
                                                                </tr>

                                                                <tr class="active-row">
                                                                    <td style={{ fontSize: 20 }}>Total-Floor</td>
                                                                    <td >{purchase.projectTotalFloor}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ fontSize: 20 }}>Price</td>
                                                                    <td style={{ fontSize: 20 }} >$ {purchase.projectPrice}</td>
                                                                </tr>

                                                                <tr class="active-row">
                                                                    <td style={{ fontSize: 20 }}>Collection</td>
                                                                    <td >{purchase.projectCollection}</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div >)
                    }
                </div>



            </div>
        </div >
    );
};

export default MyPurchases;