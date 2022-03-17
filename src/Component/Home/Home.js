import React from 'react';
import Foods from '../FoodOrder/Foods';
import Footer from '../Footer/Footer';
import HomeFood from '../HomeFood/HomeFood';
import img1 from '../Image/food-bg.jpg';
import './Home.css';


const Home = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-text">
                    <h1>Order Your Food and Get Fast</h1>
                    <p>We will try to do delivery as fast as we can.</p>
                    <button className="home-btn">Order Now</button>
                </div>
                <div className="home-image">
                    <img src={img1} alt=""></img>
                </div>
            </div>
          <HomeFood></HomeFood>
        </>

    );
};

export default Home;