import React, { useState } from 'react';
import './JournalSlideUp.scss';
import infoIcon from '../../assets/icons/info-white-icon.svg';
import closeIcon from '../../assets/icons/close-white-icon.svg';
import JournalInfoBox from '../JournalInfoBox/JournalInfoBox';

const JournalSlideUp = ({ open, onClose, infoBox, isSelected, value, onChange, handleOnSave }) => {
    const [infoClick, setInfoClick] = useState(false);
    // const [value, onChange] = useState(1);
    // useEffect(() => {
    //     const element = document.querySelector('.value');
    //     if (element) {
    //         element.style.left = `${Number(value / 4)}px`;
    //     }
    // })

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

    // function handleIconSubmit(event) {
    //     event.preventDefault();

    //     console.log(event);
    //     console.log(event);
    //     console.log(event.target);

    //     const score = event.target.score.value;
    //     const icon = { isSelected }
    //     const user_id = 1;

    //     console.log(score);
    //     console.log(icon);
    //     console.log(user_id);

    //     axios
    //         .post(`http://localhost:8080/icons`, {
    //             score: score,
    //             icon: icon,
    //             user_id: user_id,
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
                    <label className='slide-up__title'>{isSelected}</label>
                    <img className='slide-up__icon-info' src={infoIcon} alt='Info icon' onClick={() => setInfoClick(true)}></img>
                </div>
                <img className='slide-up__icon-close' src={closeIcon} alt='Close Icon' onClick={onClose}></img>
            </div>
            <div className='slide-up__slider-container'>
                <input type='range' min='1' max='10' value={value} className='value' name='score' onInput={handleOnSave} onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                }}>
                </input>
                <div className="slide-up__value">
                    {value}
                </div>
            </div>
            <button className='slide-up__button' onClick={onClose} type='submit'>save</button>
            <JournalInfoBox infoClick={infoClick} infoClose={() => setInfoClick(false)} infoBox={infoBox} isSelected={isSelected} />
        </section>
    );
};

export default JournalSlideUp;