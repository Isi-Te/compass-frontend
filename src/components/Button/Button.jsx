import React from 'react';
import './Button.scss';

const Button = ({ name, title }) => {
    return (
        <section className='button'>
            <button className={name}>{title}</button>
        </section >
    );
};

export default Button;