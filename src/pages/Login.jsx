import './Login.scss';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import logoImg from '../assets/logo/compass-logo.png';
import { Link } from 'react-router-dom';

const Login = ({ setIsUserLoggedIn }) => {
    const [error, setError] = useState();

    const handleLogin = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        axios
            .post(
                "http://localhost:8080/user",
                {
                    username,
                    password,
                }
            )
            .then((response) => {

                const { token } = response.data;

                console.log(response);
                sessionStorage.setItem("token", token);

                setIsUserLoggedIn(true);
            })
            .catch((error) => {
                console.error("error!" + error);
                setError("Login failed!!");
            })
    };

    return (
        <section className='login'>
            <Link to='/'><img className='login__logo' src={logoImg} alt='Compass logo'></img></Link>
            <form className='login__form' onSubmit={handleLogin}>
                <label className='login__label' name='username'>User Name:</label>
                <input className='login__input' name='username'></input>
                <label className='login__label' name='password'>Password:</label>
                <input className='login__input' type='password' name='password'></input>
                <button className='login__button' type='submit'>Login</button>
            </form>
        </section>
    );
};

export default Login;