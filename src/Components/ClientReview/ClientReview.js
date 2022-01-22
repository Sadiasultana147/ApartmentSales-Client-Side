import React from 'react';
import { FaStar } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ClientReview = (props) => {
    const { _id, photoURL, comments, text, name, review, rating } = props.review;
    const { user } = useAuth();
    const image = photoURL || "https://www.securityindustry.org/wp-content/uploads/sites/3/2018/05/noimage.png"

    AOS.init();
    let starNumber = 0;
    return (
        <div  >
            <div className="col h-100  me-5 ">
                {(user?.email || !user?.email) &&
                    <div className="   p-5  cardbox  ">
                        <div>

                            <img className="ms-2" style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={image} alt="" />
                        </div>
                        <div className="ms-2">{name}</div>
                        <hr style={{ border: "2px solid blue" }} />
                        <div className="ms-2">{comments}</div>
                        <hr style={{ border: "2px solid blue" }} />

                        <div className="ms-2">
                            {[...Array(5)].map((star, i) => {
                                starNumber += 1;
                                return <label key={i}>
                                    <input style={{ display: 'none' }} type="radio" name="rating" id="" />

                                    <FaStar color={starNumber <= rating ? "yellow" : "grey"} />
                                </label>
                            })}

                        </div>

                    </div>
                }


            </div>
            <p >“{review}”</p>
        </div>

    );
};

export default ClientReview;