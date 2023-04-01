import React from 'react';
import './Calendar.scss';
import expandIcon from '../../assets/icons/expand-icon.svg';

const Calendar = () => {
    return (
        <section className='calendar'>
            <div className='calendar__title'>
                <h3 className='calendar__month'>April 2023</h3>
                <img className='calendar__expand-icon' src={expandIcon} alt='expand icon'></img>
            </div>
            <div className='calender__container'>
                <div className='calendar__week-day'>
                    <h3 className='calendar__weekday'>M</h3>
                    <h3 className='calendar__weekday'>T</h3>
                    <h3 className='calendar__weekday'>W</h3>
                    <h3 className='calendar__weekday'>T</h3>
                    <h3 className='calendar__weekday'>F</h3>
                    <h3 className='calendar__weekday'>S</h3>
                    <h3 className='calendar__weekday'>S</h3>
                </div>
                <div className='calendar__week-date'>
                    <h3 className='calendar__date'>3</h3>
                    <h3 className='calendar__date'>4</h3>
                    <h3 className='calendar__date'>5</h3>
                    <h3 className='calendar__date'>6</h3>
                    <h3 className='calendar__date'>7</h3>
                    <h3 className='calendar__date'>8</h3>
                    <h3 className='calendar__date'>9</h3>
                </div>
            </div>
        </section>
    );
};

export default Calendar;