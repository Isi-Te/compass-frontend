import './Start.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/compass-logo.png';


const Start = () => {
    return (
        <section className='start'>
            <img className='start__logo' src={logoImg} alt='Compass logo'></img>
            <div className='start__container'>
                <Link to='/login' className='start__button'>login</Link>
                <Link to='/signup' className='start__button'>get started</Link>
            </div>
        </section >
    );
};

export default Start;