import React from 'react';
import './Insights.scss';

const Insights = () => {
    return (
        <section className='insights'>
            <h2 className='insights__title'>Insights</h2>
            <ul className='insights__details'>
                <li className='insights__item'>There's a correlation between x and y. </li>
            </ul>
        </section>
    );
};

export default Insights;