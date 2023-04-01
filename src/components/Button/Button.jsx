import React from 'react';
import './Button.scss';

const Button = ({ name, type }) => {
    return (
        <section className='button'>
            <button className={name}>{type}</button>
        </section >
    );
};

export default Button;