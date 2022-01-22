import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Components/Hooks/useAuth';
import "./Purchase.css"

const Purchase = () => {
    const { _id } = useParams();
    const [apartment, setApartment] = useState({});

    const { user } = useAuth();
    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/mypurchase"


    const cityRef = useRef();
    const addressRef = useRef();
    const contactRef = useRef()

    useEffect(() => {

        fetch(`https://boiling-falls-89635.herokuapp.com/apartmentList/${_id}`)
            .then(res => res.json())
            .then(data => setApartment(data))

    }, [])

    const handlepurchase = (e) => {
        // console.log(data)

        const UserName = user.displayName;

        const userEmail = user.email;
        const city = cityRef.current.value;
        const address = addressRef.current.value;
        const contact = contactRef.current.value;
        const projectName = apartment.name;
        const projectImage = apartment.image;
        const projectLocation = apartment.location;
        const projectAddress = apartment.address;
        const projectArea = apartment.area;
        const projectSize = apartment.size;
        const projectRoom = apartment.room;
        const projectTotalFloor = apartment.totalFloor;
        const projectCollection = apartment.collection;
        const price = apartment.price;


        const newPurchase = { projectName, projectImage, projectLocation, price, userEmail, UserName, city, address, contact, projectAddress, projectArea, projectSize, projectRoom, projectTotalFloor, projectCollection };
        fetch('https://boiling-falls-89635.herokuapp.com/purchases', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newPurchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setApartment(data)
                    Swal.fire({
                        title: "Ordered Confirmed Successfully",
                        showClass: {
                            popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                        },
                    });
                    e.target.reset();
                }
                history.push(url)

            })

        e.preventDefault();
    }
    return (
        <div className="body overflow-hidden">
            <h1 style={{ fontFamily: "Tangerine,cursive", fontSize: 70, color: "white" }}>{apartment?.name}</h1>
            <div className=" overflow-hidden row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 mt-4 me-4 ms-4">
                <div >
                    <img className='mt-5 pt-5' style={{ width: "80%" }} src={apartment?.image} alt="" />
                </div>
                <div >
                    <h1 style={{ color: "teal" }}>At A Glance</h1>
                    <hr />
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ fontSize: 20 }}>Location</td>
                                <td style={{ fontSize: 20 }}>{apartment.location}</td>
                            </tr>
                            <tr class="active-row">
                                <td style={{ fontSize: 20 }}>Address</td>
                                <td >{apartment.address}</td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 20 }}>Size</td>
                                <td style={{ fontSize: 20 }} >{apartment.size}</td>
                            </tr>

                            <tr class="active-row">
                                <td style={{ fontSize: 20 }}>Land-Area</td>
                                <td >{apartment.area}</td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 20 }}>Total Room</td>
                                <td style={{ fontSize: 20 }} >{apartment.room}</td>
                            </tr>

                            <tr class="active-row">
                                <td style={{ fontSize: 20 }}>Total-Floor</td>
                                <td >{apartment.totalFloor}</td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 20 }}>Price</td>
                                <td style={{ fontSize: 20 }} >$ {apartment.price}</td>
                            </tr>

                            <tr class="active-row">
                                <td style={{ fontSize: 20 }}>Collection</td>
                                <td >{apartment.collection}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>








            <div className=" d-flex justify-content-center mt-4 pt-5">
                <form onSubmit={handlepurchase} className="d-flex flex-column  w-50  ">

                    <input className="p-2" value={user.displayName} />



                    <input className="p-2 mt-3" value={user.email} />
                    <input className="p-2 mt-3" ref={cityRef} type="text" placeholder="City" required />
                    <input className="p-2 mt-3" ref={addressRef} type="text" placeholder="Address" required />
                    <input className="p-2 mt-3" ref={contactRef} type="number" placeholder="Contact No." required />

                    <button style={{ backgroundColor: "indigo", color: "white", fontSize: "20px" }} className="mb-5 mt-5 btn" type="submit">SUBMIT</button>
                </form>

            </div>
        </div>
    );
};

export default Purchase;