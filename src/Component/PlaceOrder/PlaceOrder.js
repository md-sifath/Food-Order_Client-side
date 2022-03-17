import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
import '../Add new food/AddNewFood.css';
import axios from 'axios';

const PlaceOrder = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        data.status = 'Pending';
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thank You for Booking');
                    reset();
                }
            })
    };


    useEffect(() => {
        fetch(`http://localhost:5000/foods`)
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const item = data.filter(td => td._id === id);

    return (
        <div className="placeorder">
            <div className="placeorder-img">
                <img src={item[0]?.image} alt=""></img>
            </div>
            <div>
                <h1>{item[0]?.name}</h1>
                <p>This is very good healty food. We have to choce this food.This is very cheap food.Very healty Food.All people love this food very much. We have to choce this food.This is very cheap food.Very healty Food.All people love this food very much.</p>
                <h2>Price : ${item[0]?.price}</h2>
            </div>

            <div className="book-food">
                <h1>Order Your Food</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
 
                        <input {...register("name", { required: true })} placeholder="Your Name" />
                        {/* errors will return when field validation fails  */}
                        <input {...register("email", { required: true })} placeholder="Your Email" />
                        <input readOnly={true} {...register("destination", { required: true })} value={item[0]?.name} />
                        {/* errors will return when field validation fails  */}
                        <input {...register("address", { required: true })} placeholder="Your Address" />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span className="text-warning">This field is required</span>}
                        <input type="submit" value="Order-Now" />

                </form>
            </div>

        </div>
    );
};

export default PlaceOrder;