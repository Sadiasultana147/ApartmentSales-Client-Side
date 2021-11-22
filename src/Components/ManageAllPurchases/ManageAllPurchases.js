import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import ManageAllPurchase from '../ManageAllPurchase/ManageAllPurchase';

const ManageAllPurchases = () => {
    const [allpurchases, setAllPurchases] = useState([]);

    useEffect(() => {
        fetch('https://vast-dusk-02829.herokuapp.com/purchases')
            .then(res => res.json())
            .then(data => setAllPurchases(data))
    }, [])



    //Delete Purchases

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `https://vast-dusk-02829.herokuapp.com/purchases/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = allpurchases.filter(purchase => purchase._id !== id);
                        setAllPurchases(remaining);
                    }
                })
        }
    }

    //Handle status

    const handleConfirm = (id) => {
        console.log(id);
        // const newStatus = { status: 'confirmed' };
        // console.log(newStatus);
        const proceed = window.confirm('are you sure to confirm?');
        if (proceed) {
            const url = `https://vast-dusk-02829.herokuapp.com/updateStatus/${id}`;
            fetch(url, {
                method: 'put'

            })
                .then(res => res.json())
                .then(data => {
                    console.log('first console', data)
                    if (data.modifiedCount > 0) {
                        alert('Order Confirmed Successfully')

                        fetch('https://vast-dusk-02829.herokuapp.com/purchases')
                            .then(res => res.json())
                            .then(data => setAllPurchases(data))
                    }
                })
        }
    }

    return (
        <div className="body overflow-hidden">
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

                    }}>MANAGE ALL PURCHASES</h1>
                </div>
            </div>
            <h1>Total Purchases : {allpurchases.length}</h1>

            {
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-1 ms-5  ">

                    {
                        allpurchases.map(purchase => <ManageAllPurchase

                            key={purchase._id}
                            purchase={purchase}
                            handleConfirm={handleConfirm}

                            handleDelete={handleDelete}


                        >



                        </ManageAllPurchase>)
                    }


                </div>

            }
        </div>
    );
};

export default ManageAllPurchases;