import React, { useRef } from 'react';
import { useHistory, useLocation } from 'react-router';

import './AddApartment.css'
const AddApartment = () => {


    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/explore"
    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();



    const handleApartment = e => {
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;

        const newApartment = { name, description, price, image };


        fetch('https://vast-dusk-02829.herokuapp.com/apartmentList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newApartment)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the new apartment.')
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
                        <input className="input" type="text" id="description" placeholder="Description" ref={descriptionRef} />
                        <span className="span">Description</span>
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