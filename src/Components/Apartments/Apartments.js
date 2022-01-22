import React, { useEffect, useState } from 'react';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {
    const [apartments, setApartments] = useState([]);
    // fetch data from database
    useEffect(() => {
        fetch('https://boiling-falls-89635.herokuapp.com/apartmentList')
            .then(res => res.json())
            .then(data => setApartments(data.slice(0, 9)))
    }, [])

    return (
        <div className="overflow-hidden">
            <div className="mt-5">
                <h1 className="mb-5" style={{ color: "white", backgroundColor: "#2B547E" }}>
                    OUR EXCLUSIVE PROJECTS
                </h1>
            </div>

            {
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4  ">
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