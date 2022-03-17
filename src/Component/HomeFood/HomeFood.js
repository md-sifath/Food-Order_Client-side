import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../FoodOrder/Foods.css';

const HomeFood = () => {
    const [food,setFood]=useState();

    useEffect(()=>{
        fetch('http://localhost:5000/foods')
        .then(res=>res.json())
        .then(data=>{setFood(data.slice(0,6))})
    },[])
    return (
        <div className="food">
             <h1>Order Your Food Now</h1>
           <p>We are always delivery best food.we delivrey fast food.<br/>we delivrey fast food.We are always delivery best food.we delivrey fast food.</p>
           <div className="all-food">
               {
                   food?.map((dt)=>(
                       <div className="single-food">
                           <div>
                               <img src={dt?.image} alt=""></img>
                           </div>
                           <h3>{dt?.name}</h3>
                           <h4>{dt?.discription}</h4>
                           <h4>${dt?.price}</h4>
                           <Link to={`/orderPlaced/${dt?._id}`}>
                               <button className="food-btn">Book Now</button>
                           </Link>
                       </div>
                   ))
               }
           </div>
        </div>
    );
};

export default HomeFood;