import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddNewFood.css';
const AddNewFood = () => {

    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/foods', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('Data Inserted SuccessFully');
                reset();
            }
        })
    };

    return (
        <div className="addFood">
        <h1>Please Add New Food</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("image")} placeholder="Img Url"/>
                <input {...register("name")} placeholder="Name"/>
                <textarea {...register("discription")} placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="Price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewFood;