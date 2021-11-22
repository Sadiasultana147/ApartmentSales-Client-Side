import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import ClientReview from '../ClientReview/ClientReview';

const Reviews = () => {
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {

        fetch('https://vast-dusk-02829.herokuapp.com/addReview')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])

    if (allReviews.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div className="overflow-hidden">
            <h1 className="mb-5" style={{ color: "white", backgroundColor: "#2B547E" }}>CLIENT REVIEWS</h1>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4 ms-5 ps-5  ">
                {
                    allReviews.map(review => <ClientReview
                        key={review._id}
                        review={review}
                    >

                    </ClientReview>)

                }
            </div>
        </div>
    );
};

export default Reviews;