import React from 'react';
import { useState, useEffect } from 'react';
import {
    GoogleAuthProvider, getAuth, signInWithPopup, signOut,
    onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import firebaseappinit from '../Firebase/Initfirebase';

firebaseappinit();


const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInUsingGoogle = () => {
        
      return signInWithPopup(auth, googleProvider);
     
    };

      const loginCheck= ()=>{
        setIsLogin(true);
      }
    
      const handleNameChange = e => {
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
    
      const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
    
        if (isLogin) {
          processLogin(email, password);
        }
        else {
          registerNewUser(email, password);
        }
    
      }
    
      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            setUser(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            setUserName();
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }

    const logOut = () =>{
        
      signOut(auth).then(() => {
          setUser({});
        })
        
    }

    useEffect(() => {
         onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
            else{
                setUser({});
            }
          
        });
        
      }, [])
    return {
        user,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        isLogin,
        error,
        handleNameChange,
        loginCheck,
        handleEmailChange,
        handlePasswordChange,
      };
};

export default useFirebase;