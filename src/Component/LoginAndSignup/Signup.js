import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Signup = () => {

    const {
        user,
        logOut,
        handleRegistration,
        error,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
    }=useFirebase();

    return (
        <div className="from-page">
             <div className="login-form">
               <form onSubmit={handleRegistration}>
               <h1>Please SignUp</h1>
                <p><input onBlur={handleNameChange} type="text" placeholder="Enter Your name" required></input></p>
                <p><input type="email" onBlur={handleEmailChange} placeholder="Enter Your Email" ></input></p>
                <p><input type="password"  onBlur={handlePasswordChange}placeholder="Enter Your password" ></input></p>
                <div>{error}</div>
                <button type="submit">
                    Sign Up
                </button>
               </form>
               <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div> 
        </div>
    ); 
};

export default Signup;