import React from 'react';
import { useForm } from "react-hook-form"
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import './MakeAdmin.css'
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://boiling-falls-89635.herokuapp.com/makeAdmin', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.modifiedCount > 0) {
                            swal('New Admin Join Successfully')

                            reset();
                        }
                    })
            }
        })
    };
    return (
        <div className="overflow-hidden">
            <h1 style={{ color: "white" }} className="mt-5 ">MAKE ADMIN</h1>
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