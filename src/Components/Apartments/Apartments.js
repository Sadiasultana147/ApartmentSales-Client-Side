import React, { useEffect, useState } from 'react';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch('https://vast-dusk-02829.herokuapp.com/apartmentList')
            .then(res => res.json())
            .then(data => setApartments(data.slice(0, 6)))
    }, [])
    return (
        <div className="overflow-hidden">
            <div className="mt-5">
                <h1 className="mb-5" style={{ color: "white", backgroundColor: "#2B547E" }}>
                    OUR EXCLUSIVE PROJECTS
                </h1>
            </div>

            {

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5 d-flex justify-content-center mb-5 pb-5  ">


                    {
                        apartments.map(apartment => <Apartment key={apartment._id} apartment={apartment}

                        >

                        </Apartment>)
                    }
                </div>







            }
        </div>
    );
};

export default Apartments;