import React from 'react';
import './SignUp.scss';
import logoImg from '../assets/logo/compass-logo-transparent.png';
import Login from './Login';

const SignUp = ({ setIsUserLoggedIn }) => {


    return (
        <section className='signup'>
            <img className='signup__logo' src={logoImg} alt='Compass logo'></img>
            <form className='signup__form'>
                <label className='signup__label'>Name:</label>
                <input className='signup__input'></input>
                <label className='signup__label'>User Name:</label>
                <input className='signup__input'></input>
                <label className='signup__label'>Password:</label>
                <input className='signup__input'></input>
                <label className='signup__label'>Confirm password:</label>
                <input className='signup__input'></input>
                <button className='signup__button'>sign-up</button>
            </form>
        </section>
    );
};

export default SignUp;