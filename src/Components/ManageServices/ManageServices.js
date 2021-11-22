import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';

const ManageServices = () => {

    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch('https://vast-dusk-02829.herokuapp.com/apartmentList')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [])

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `https://vast-dusk-02829.herokuapp.com/apartmentList/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = apartments.filter(apartment => apartment._id !== id);
                        setApartments(remaining);
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

                    }}>MANAGE ALL SERVICES</h1>
                </div>
            </div>

            {

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  ">


                    {
                        apartments.map(apartment => <ManageService key={apartment._id} apartment={apartment}

                            handleDelete={handleDelete}

                        >

                        </ManageService>)
                    }
                </div>







            }
        </div>
    );
};

export default ManageServices;