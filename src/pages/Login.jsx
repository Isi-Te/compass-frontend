import './Login.scss';
import React from 'react';

const Login = () => {
    return (
        <section className='login'>
            <form className='login__form'>
                <label className='login__label'>User Name:</label>
                <input className='login__input'></input>
                <label className='login__label'>Password:</label>
                <input className='login__input'></input>
                <button className='login__button'>Login</button>
            </form>
        </section>
    );
};

export default Login;