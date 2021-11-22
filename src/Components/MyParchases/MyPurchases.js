import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../Components/Hooks/useAuth';

const MyPurchases = () => {
    const [allpurchases, setAllPurchases] = useState([]);
    const { user } = useAuth();



    useEffect(() => {
        fetch('https://vast-dusk-02829.herokuapp.com/purchases')
            .then(res => res.json())
            .then(data => setAllPurchases(data))
    }, [])

    //DELETE ORDER

    const handleDeletePurchases = id => {
        const proceed = window.confirm('Confirm your delete activity');
        if (proceed) {
            const url = `https://vast-dusk-02829.herokuapp.com/purchases/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = allpurchases.filter(order => order._id !== id);
                        setAllPurchases(remainingOrders);
                    }
                });



        }
        //window.location.reload();
    }

    const myPurchase = allpurchases.filter(purchase => (purchase.userEmail == user.email))

    return (
        <div>
            <div className="body overflow-hidden" >
                <div  >
                    <div style={{
                        backgroundImage: "url('https://navana-realestate.com/assets/frontend/img/banner/about.jpg')",
                        backgroundPosition: "center center",
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",

                        position: "relative",
                        height: "650px",
                        color: "white"

                    }}>
                        <h1 style={{

                            paddingTop: "300px",

                        }}>MY PURCHASES</h1>
                    </div>
                </div>


                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 ms-5 ps-5  ">
                    {

                        myPurchase.map(purchase => <div >

                            <div className="col h-100 ">
                                <div className=" cardbox m-5  ">
                                    <img className="w-75 mt-2" src={purchase.projectImage} alt="" />
                                    <hr style={{ border: "2px solid blue" }} />
                                    <h4>Project Name: <span style={{ color: "white" }} > {purchase.projectName}</span></h4>
                                    <hr style={{ border: "2px solid blue" }} />
                                    <h6 >DETAILS : <h5 style={{ color: "white" }}>{purchase.projectDetails}</h5></h6>

                                    <hr style={{ border: "2px solid blue" }} />
                                    <h6>PRICE : <span style={{ color: "white" }}>{purchase.price}</span></h6>
                                    <hr style={{ border: "2px solid blue" }} />
                                    <h6>{purchase.status}</h6>

                                    < button style={{ backgroundColor: "darkred" }} className="mb-4 btn " onClick={() => handleDeletePurchases(purchase._id)}>
                                        <i style={{ color: "white" }} class="fa fa-trash"></i>
                                        <span className="ps-1" style={{ color: "white" }}>DELETE</span></button >
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