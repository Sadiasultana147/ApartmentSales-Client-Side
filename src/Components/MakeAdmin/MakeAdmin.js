import React from 'react';
import { useForm } from "react-hook-form"
import './MakeAdmin.css'
const MakeAdmin = () => {
    const { register, handleSubmit, reset, watch, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://vast-dusk-02829.herokuapp.com/makeAdmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('New Admin Join Successfully')

                    reset();
                }
            })

    };
    return (
        <div className="overflow-hidden">
            <h1 className="mt-5 ">MAKE ADMIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field w-50"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />


                <input
                    className="submit-btn btn btn-danger mt-3 mb-3"
                    type="submit"
                    value="Make As Admin"
                />
            </form>
        </div >
    );
};

export default MakeAdmin;