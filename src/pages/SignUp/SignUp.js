import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import { async } from '@firebase/util';

import './SignUp.css';
import SocialLogin from '../SocialLogin.js/SocialLogin';
import Loading from '../Shareable/Loading/Loading';
import auth from '../../firebase.init';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        
         await createUserWithEmailAndPassword(email, password);
       await updateProfile({displayName: name});
       console.log('Updated profile');
       navigate('/home');
    }
    return (
        <div className='signup-form'>
            <h2 style={{ textAlign: 'center' }}>please signUp</h2>
            <form onSubmit={handleSignUp}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept items provider Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-dark mt-2'
                    type="submit"
                    value="signup" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;