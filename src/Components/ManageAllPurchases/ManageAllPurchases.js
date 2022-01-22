import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';

import ManageAllPurchase from '../ManageAllPurchase/ManageAllPurchase';

const ManageAllPurchases = () => {
    const [allpurchases, setAllPurchases] = useState([]);

    useEffect(() => {
        fetch('https://boiling-falls-89635.herokuapp.com/purchases')
            .then(res => res.json())
            .then(data => setAllPurchases(data))
    }, [])



    //Delete Purchases

    const handleDelete = (id) => {
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
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                            const remaining = allpurchases.filter(purchase => purchase._id !== id);
                            setAllPurchases(remaining);
                        }
                    })
            }
        })

    }

    //Handle status

    const handleConfirm = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://boiling-falls-89635.herokuapp.com/updateStatus/${id}`;
                fetch(url, {
                    method: 'put'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('first console', data)
                        if (data.modifiedCount > 0) {
                            Swal.fire("Order Confirmed Successfully");

                            fetch('https://boiling-falls-89635.herokuapp.com/purchases')
                                .then(res => res.json())
                                .then(data => setAllPurchases(data))
                        }
                    })
            }
        })

    }

    return (
        <div className="body overflow-hidden">
            <div  >
                <div style={{
                    backgroundImage: "url('https://images.pexels.com/photos/2032749/pexels-photo-2032749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",

                    position: "relative",
                    height: "650px",
                    color: "white"

                }}>
                    <h1 style={{

                        paddingTop: "200px",
                        marginLeft: 80,
                        fontSize: 50


                    }}>MANAGE ALL PURCHASES</h1>
                </div>
            </div>
            <h1 style={{ color: "white" }} className='mt-4 mb-4'>Total Purchases : {allpurchases.length}</h1>

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