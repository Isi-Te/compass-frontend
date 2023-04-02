import React, { useEffect, useState } from 'react';
import './JournalSlideUp.scss';
import infoIcon from '../../assets/icons/info-white-icon.svg';
import minimizeIcon from '../../assets/icons/minimize-icon.svg';

const JournalSlideUp = ({ open, onClose }) => {
    const [value, onChange] = useState(1);
    useEffect(() => {
        const element = document.querySelector('.value');
        if (element) {
            element.style.left = `${Number(value / 4)}px`;
        }
    })

    if (!open) return null;

    return (
        <section className='slide-up'>
            <div className='slide-up__container'>
                <img className='slide-up__minimize' src={minimizeIcon} alt='Minimize icon'></img>
            </div>
            <div className='slide-up__headline'>
                <h2 className='slide-up__title'>Stress</h2>
                <img className='slide-up__icon-info' src={infoIcon} alt='Info icon'></img>
            </div>
            <div className='slide-up__slider-container'>
                <input type='range' min='1' max='10' value={value} className='slider' onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                }}>
                </input>
                <div className="slide-up__value">
                    {value}
                </div>
            </div>
            <button className='slide-up__button' onClick={onClose}>track</button>


        </section>
    );
};

export default JournalSlideUp;