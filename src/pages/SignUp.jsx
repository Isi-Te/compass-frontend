import React from 'react';
import './SignUp.scss';

const SignUp = () => {
    return (
        <section className='signup'>
            <form className='signup__form'>
                <label className='signup__label'>Name:</label>
                <input className='signup__input'></input>
                <label className='signup__label'>User Name:</label>
                <input className='signup__input'></input>
                <label className='signup__label'>Password:</label>
                <input className='signup__input'></input>
                <label className='signup__label'>Confirm password:</label>
                <input className='signup__input'></input>
                <button className='signup__button'>signup</button>
            </form>
        </section>
    );
};

export default SignUp;