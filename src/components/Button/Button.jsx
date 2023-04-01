import React from 'react';
import './Button.scss';

const Button = () => {
    return (
        <section className='button'>
            <button className='button__cancel'>cancel</button>
            <button className='button__track'>track</button>
        </section>
    );
};

export default Button;