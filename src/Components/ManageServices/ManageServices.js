import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import ManageService from '../ManageService/ManageService';

const ManageServices = () => {
    const [apartments, setApartments] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");


    useEffect(() => {
        fetch('https://boiling-falls-89635.herokuapp.com/apartmentList')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [])


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
                const url = `https://boiling-falls-89635.herokuapp.com/apartmentList/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                            const remaining = apartments.filter(apartment => apartment._id !== id);
                            setApartments(remaining);
                        }
                    })
            }
        });


    }

    //Handle update
    const handleState = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://boiling-falls-89635.herokuapp.com/updateApartment/${id}`;
                fetch(url, {
                    method: 'put'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('first console', data)
                        if (data.modifiedCount > 0) {
                            Swal.fire("Status Changed Successfully");

                            fetch('http://localhost:5000/apartmentList')
                                .then(res => res.json())
                                .then(data => setApartments(data))
                        }
                    })
            }
        });


    }

    // Update Price
    const handleUpdatedPrice = e => {

        setPrice(e.target.value);
    }


    const handleUpdateApartment = (id, e) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://boiling-falls-89635.herokuapp.com/updateApartmentinfo/${id}`;
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ name, description, price, image })

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            swal('Update Successful');

                            fetch('https://boiling-falls-89635.herokuapp.com/apartmentList')
                                .then(res => res.json())
                                .then(data => setApartments(data))

                        }
                    })


            }
        })


    }

    return (
        <div className="body overflow-hidden">

            <div  >
                <div style={{
                    backgroundImage: "url('https://a0.muscache.com/pictures/7d0b9d6a-fe79-4c5c-89a3-a9c6a78489d2.jpg')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",

                    position: "relative",
                    height: "650px",
                    color: "white"

                }}>
                    <h1 style={{

                        paddingTop: "200px",
                        fontSize: 50

                    }}>MANAGE ALL SERVICES</h1>
                </div>
            </div>

            {

                <div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4 me-4  ">
                        {
                            apartments.map(apartment => <ManageService key={apartment._id} apartment={apartment}

                                handleDelete={handleDelete}
                                handleState={handleState}

                                handleUpdateApartment={handleUpdateApartment}

                                handleUpdatedPrice={handleUpdatedPrice}

                            >
                            </ManageService>)
                        }
                    </div>
                </div>
            }

        </div>
    );
};

export default ManageServices;