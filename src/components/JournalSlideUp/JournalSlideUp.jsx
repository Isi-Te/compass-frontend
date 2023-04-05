import React, { useEffect, useState } from 'react';
import './JournalSlideUp.scss';
import infoIcon from '../../assets/icons/info-white-icon.svg';
import closeIcon from '../../assets/icons/close-white-icon.svg';
import JournalInfoBox from '../JournalInfoBox/JournalInfoBox';
import axios from 'axios';

const JournalSlideUp = ({ open, onClose, infoBox, isSelected }) => {
    const [infoClick, setInfoClick] = useState(false);
    const [value, onChange] = useState(1);
    useEffect(() => {
        const element = document.querySelector('.value');
        if (element) {
            element.style.left = `${Number(value / 4)}px`;
        }
    })


    // const [addIcon, setAddIcon] = useState([]);
    // const fetchIcon = () => {
    //     axios
    //         .get(`http://localhost:8080/icons`)
    //         .then(res => {
    //             console.log(res.data)
    //             setAddIcon(res.data);
    //         })
    //         .catch(err => console.log(err));
    // }

    // useEffect(() => {
    //     fetchIcon();
    // }, [])

    // function handleiconsubmit(event) {
    //     event.preventDefault();

    //     console.log(event);
    //     console.log(event);
    //     console.log(event.target);

    //     const highlight = event.target.highlight.value;
    //     const lowlight = event.target.lowlight.value;
    //     const user_id = 1;
    //     const icon_id = 21;

    //     axios
    //         .post(`http://localhost:8080/journal-entry`, {
    //             highlight: highlight,
    //             lowlight: lowlight,
    //             user_id: user_id,
    //             icon_id: icon_id
    //         })
    //         .then(() => {
    //             fetchIcon();
    //             event.target.reset();
    //         })
    //         .catch(err => console.log(err));
    // }

    // if (!addIcon) {
    //     return <div>Loading....</div>
    // }

    if (!open) return null;

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
            <button className='slide-up__button' onClick={onClose} type='submit'>track</button>

            <JournalInfoBox infoClick={infoClick} infoClose={() => setInfoClick(false)} infoBox={infoBox} isSelected={isSelected} />
        </section>
    );
};

export default JournalSlideUp;