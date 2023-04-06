import React, { useState } from 'react';
import './SignUp.scss';
import logoImg from '../assets/logo/compass-logo-transparent.png';
import Login from './Login';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = ({ setIsUserLoggedIn }) => {

    const [error, setError] = useState();

    const handelSignup = (event) => {
        event.preventDefault();

        const name = event.target.name.value
        const username = event.target.username.value;
        const password = event.target.password.value;

        axios
            .post(
                "http://localhost:8080/user/signup",
                {
                    name,
                    username,
                    password,
                }
            )
            .then((response) => {
                setIsUserLoggedIn(true);
                event.target.reset();
            })
            .catch((error) => {
                console.error("error!" + error);
                setError("Login failed!!");
            })
    };


    return (
        <section className='signup'>
            <Link to='/'><img className='signup__logo' src={logoImg} alt='Compass logo'></img></Link>
            <form className='signup__form' onSubmit={handelSignup}>
                <label className='signup__label'>Name:</label>
                <input className='signup__input' name='name'></input>
                <label className='signup__label'>User Name:</label>
                <input className='signup__input' name='username'></input>
                <label className='signup__label'>Password:</label>
                <input className='signup__input' type='password' name='password'></input>
                <label className='signup__label'>Confirm password:</label>
                <input className='signup__input' type='password' name='password'></input>
                <button className='signup__button'>sign-up</button>
            </form>
        </section>
    );
};

export default SignUp;