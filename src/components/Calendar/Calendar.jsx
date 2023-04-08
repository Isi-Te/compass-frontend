import React from 'react';
import './Calendar.scss';

const Calendar = () => {

    let newDate = new Date()
    let today = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('en-US', { month: 'long' });
    }
    const currentMonth = getMonthName(month)

    let weekday = newDate.getDay()
    console.log(weekday);

    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    console.log(daysOfWeek[6]);

    return (
        <section className='calendar'>
            <div className='calendar__title'>
                <h3 className='calendar__month'>{currentMonth} {year}</h3>
            </div>
            <div className='calender__container'>
                <div className='calendar__week-day'>
                    <h3 className='calendar__weekday'>{daysOfWeek[(weekday - 3)]}</h3>
                    <h3 className='calendar__weekday'>{daysOfWeek[(weekday - 2)]}</h3>
                    <h3 className='calendar__weekday'>{daysOfWeek[(weekday - 1)]}</h3>
                    <h3 className='calendar__weekday'>{daysOfWeek[weekday]}</h3>
                    <h3 className='calendar__weekday'>{daysOfWeek[(weekday - 6)]}</h3>
                    <h3 className='calendar__weekday'>{daysOfWeek[(weekday - 5)]}</h3>
                    <h3 className='calendar__weekday'>{daysOfWeek[(weekday - 4)]}</h3>
                </div>
                <div className='calendar__week-date'>
                    <h3 className='calendar__date'>{(today - 3).toString().padStart(2, '0')}</h3>
                    <h3 className='calendar__date'>{(today - 2).toString().padStart(2, '0')}</h3>
                    <h3 className='calendar__date'>{(today - 1).toString().padStart(2, '0')}</h3>
                    <h3 className='calendar__date calendar__today'>{today.toString().padStart(2, '0')}</h3>
                    <h3 className='calendar__date'>{(today + 1).toString().padStart(2, '0')}</h3>
                    <h3 className='calendar__date'>{(today + 2).toString().padStart(2, '0')}</h3>
                    <h3 className='calendar__date'>{(today + 3).toString().padStart(2, '0')}</h3>
                </div>
            </div>
        </section>
    );
};

export default Calendar;