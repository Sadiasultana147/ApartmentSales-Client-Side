import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../Components/Hooks/useAuth';

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

        fetch(`https://vast-dusk-02829.herokuapp.com/apartmentList/${_id}`)
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
        const projectName = apartment.name
        const projectImage = apartment.image
        const projectDetails = apartment.description
        const price = apartment.price


        const newPurchase = { projectName, projectImage, projectDetails, price, userEmail, UserName, city, address, contact };
        fetch('https://vast-dusk-02829.herokuapp.com/purchases', {
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
                    alert('Successfully Purchased.')

                    e.target.reset();
                }
                history.push(url)

            })

        e.preventDefault();
    }
    return (
        <div className="body overflow-hidden">
            <h1>Details of : {apartment?.name}</h1>


            <img src={apartment?.image} alt="" />
            <h5>{apartment?.description}</h5>





            <div className=" d-flex justify-content-center mt-4 pt-5">
                <form onSubmit={handlepurchase} className="d-flex flex-column  w-50  ">

                    <input className="p-2" value={user.displayName} />



                    <input className="p-2 mt-3" value={user.email} />
                    <input className="p-2 mt-3" ref={cityRef} type="text" placeholder="City" required />
                    <input className="p-2 mt-3" ref={addressRef} type="text" placeholder="Address" required />
                    <input className="p-2 mt-3" ref={contactRef} type="number" placeholder="Contact No." required />

                    <button style={{ backgroundColor: "indigo", color: "white", fontSize: "20px" }} className="mb-5 mt-5 btn" type="submit">CONFIRM PURCHASE</button>
                </form>

            </div>
        </div>
    );
};

export default Purchase;