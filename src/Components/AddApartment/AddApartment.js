import React, { useRef } from 'react';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert2';

import './AddApartment.css'
const AddApartment = () => {
    // redirect code
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/explore"
    // data submit code
    const nameRef = useRef();
    const locationRef = useRef();
    const sizeRef = useRef();
    const areaRef = useRef();
    const roomRef = useRef();
    const floorRef = useRef();
    const collectionRef = useRef();
    const launchDateRef = useRef();
    const addressRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();

    const handleApartment = e => {
        const name = nameRef.current.value;
        const location = locationRef.current.value;
        const address = addressRef.current.value;
        const price = priceRef.current.value;
        const area = areaRef.current.value;
        const size = sizeRef.current.value;
        const room = roomRef.current.value;
        const totalFloor = floorRef.current.value;
        const collection = collectionRef.current.value;
        const launchDate = launchDateRef.current.value;
        const image = imageRef.current.value;

        const newApartment = { name, location, address, area, size, room, totalFloor, collection, launchDate, price, image };


        fetch('https://boiling-falls-89635.herokuapp.com/apartmentList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newApartment)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal.fire({
                        title: "New Project Added Successfully",
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
            <h1 style={{ color: "white" }} className="mt - 5 ">ADD NEW APARTMENT_PROJECT</h1>
            < div className=" mb-5" >
                <form className="form" onSubmit={handleApartment}  >
                    <label className="label" for="name">
                        <input className="input" type="text" id="name" placeholder="Name" ref={nameRef} />
                        <span className="span">Name</span>
                    </label>
                    <label className="label" for="description">
                        <input className="input" type="text" id="location" placeholder="Location" ref={locationRef} />
                        <span className="span">Location</span>
                    </label>
                    <label className="label" for="address">
                        <input className="input" type="text" id="address" placeholder="Address" ref={addressRef} />
                        <span className="span">Address</span>
                    </label>
                    <label className="label" for="area">
                        <input className="input" type="text" id="area" placeholder="Area" ref={areaRef} />
                        <span className="span">Area</span>
                    </label>
                    <label className="label" for="size">
                        <input className="input" type="text" id="size" placeholder="Size" ref={sizeRef} />
                        <span className="span">Size</span>
                    </label>
                    <label className="label" for="room">
                        <input className="input" type="text" id="room" placeholder="Room" ref={roomRef} />
                        <span className="span">Room</span>
                    </label>
                    <label className="label" for="floor">
                        <input className="input" type="text" id="floor" placeholder="TotalFloor" ref={floorRef} />
                        <span className="span">Total Floor</span>
                    </label>
                    <label className="label" for="collection">
                        <input className="input" type="text" id="collection" placeholder="Collection" ref={collectionRef} />
                        <span className="span">Collection</span>
                    </label>
                    <label className="label" for="launchDate">
                        <input className="input" type="text" id="launchDate" placeholder="LaunchDate" ref={launchDateRef} />
                        <span className="span">Launch Date</span>
                    </label>
                    <label className="label" for="price">
                        <input className="input" type="text" id="price" placeholder="Price" ref={priceRef} />
                        <span className="span">Price</span>
                    </label>
                    <label className="label" for="image">
                        <input className="input" type="text" id="imageURl" placeholder="imageURL" ref={imageRef} />
                        <span className="span">ImageURL</span>
                    </label>

                    <button className="button" type="submit">AddApartment</button>
                </form>
            </div>
        </div >


    );
};

export default AddApartment;