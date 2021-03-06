import React, { useEffect, useState } from 'react';
import MoreProject from '../MoreProject/MoreProject'
const MoreProjects = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch('https://boiling-falls-89635.herokuapp.com/apartmentList')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [])
    return (
        <div className="body overflow-hidden">
            <div  >
                <div style={{
                    backgroundImage: "url('https://navana-realestate.com/frontend/assets/img/slider/slider_5.webp')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    position: "relative",
                    height: "650px",
                    color: "white"

                }}>
                    <h1 style={{

                        paddingTop: "300px",
                        fontSize: 70

                    }}>OUR EXCLUSIVE PROJECTS</h1>
                </div>
            </div>

            {

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5 d-flex justify-content-center mb-5    ">


                    {
                        apartments.map(apartment => <MoreProject key={apartment._id} apartment={apartment}

                        >

                        </MoreProject>)
                    }
                </div>
            }
        </div>
    );
};

export default MoreProjects;