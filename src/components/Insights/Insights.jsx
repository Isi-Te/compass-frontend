import React from 'react';
import './Insights.scss';
import insightsIcon from '../../assets/icons/insights-white-icon.svg';

const Insights = () => {
    return (
        <section className='insights'>
            <div className='insights__headline'>
                <h2 className='insights__title'>Insights</h2>
                <img className='insights__icon' src={insightsIcon} alt='Graph Icon'></img>
            </div>
            <ul className='insights__details'>
                <li className='insights__item'>There's a correlation between x and y. </li>
            </ul>
        </section>
    );
};

export default Insights;