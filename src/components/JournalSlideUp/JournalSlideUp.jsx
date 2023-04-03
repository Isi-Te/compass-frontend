import React, { useEffect, useState } from 'react';
import './JournalSlideUp.scss';
import infoIcon from '../../assets/icons/info-white-icon.svg';
import closeIcon from '../../assets/icons/close-white-icon.svg';
import JournalInfoBox from '../JournalInfoBox/JournalInfoBox';

const JournalSlideUp = ({ open, onClose, infoBox, isSelected }) => {
    const [infoClick, setInfoClick] = useState(false);
    const [value, onChange] = useState(1);
    useEffect(() => {
        const element = document.querySelector('.value');
        if (element) {
            element.style.left = `${Number(value / 4)}px`;
        }
    })
    if (!open) return null;

    console.log(isSelected);
    console.log(infoBox);


    return (
        <section className='slide-up'>
            <div className='slide-up__headline-container'>
                <div className='slide-up__headline'>
                    <h2 className='slide-up__title'>{isSelected}</h2>
                    <img className='slide-up__icon-info' src={infoIcon} alt='Info icon' onClick={() => setInfoClick(true)}></img>
                </div>
                <img className='slide-up__icon-close' src={closeIcon} alt='Close Icon' onClick={onClose}></img>
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

            <JournalInfoBox infoClick={infoClick} infoClose={() => setInfoClick(false)} infoBox={infoBox} isSelected={isSelected} />
        </section>
    );
};

export default JournalSlideUp;