import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Components/Hooks/useAuth'



const Review = () => {
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const { user } = useAuth();

    console.log(user.email)
    const onSubmit = (data) => {
        fetch("https://vast-dusk-02829.herokuapp.com/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Successfully added a review.')
                    reset();
                }
            });

        console.log(data);

    };

    return (
        <div>
            <h5 style={{ color: "white" }} className="ms-5 mt-5">Fell Free To Give Your valuable Review</h5>
            <div className=" d-flex justify-content-center  ">

                <form className="d-flex flex-column  w-50" onSubmit={handleSubmit(onSubmit)}>

                    <input
                        className="input-field , w-auto "
                        name="name"
                        value={user?.displayName}

                        {...register("name", { required: true })}
                    />
                    <br />
                    <br />
                    <input
                        className="input-field w-auto "
                        name="email"
                        value={user?.email}

                        {...register("email", { required: true })}
                    />

                    <br />
                    <br />


                    <input
                        className="input-field w-auto d-none "
                        name="text"
                        value={user?.photoURL}

                        {...register("photoURL")}
                    />


                    <br />
                    <br />



                    <textarea
                        className="input-field w-100 mt-2"
                        name="comments"
                        placeholder="Comments"
                        {...register("comments", { required: true })}
                    />
                    <br />
                    <br />
                    <input type="number" min="0" max="5" className="w-100" placeholder="Rating(Out of 5)" defaultValue="" {...register("rating", { required: true })} />
                    <br />




                    <input
                        className="submit-btn btn btn-danger  mb-3"
                        type="submit"
                        value="Submit"
                    />


                </form>

            </div>

        </div>
    );
};

export default Review;