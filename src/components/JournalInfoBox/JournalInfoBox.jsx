import React from 'react';
import './JournalInfoBox.scss';
import infoIcon from '../../assets/icons/info-white-icon.svg';
import closeIcon from '../../assets/icons/close-white-icon.svg';


const JournalInfoBox = ({ infoClick, infoClose, infoBox, isSelected }) => {

    if (!infoClick) return null;

    const selectedTitle = infoBox.find((category) => {
        return category.title === isSelected;
    })

    console.log(selectedTitle);



    return (
        <section className='info-box'>
            <div className='info-box__headline-container'>
                <div className='info-box__headline'>
                    <img className='info-box__icon-info' src={infoIcon} alt='Info icon'></img>
                    <h2 className='info-box__title'>{selectedTitle.title}</h2>
                </div>
                <div className='info-box__container'>
                    <img className='info-box__icon-close' src={closeIcon} alt='Close icon' onClick={infoClose}></img>
                </div>
            </div>
            <div className='info-box__details'>
                <p className='info-box__question'>{selectedTitle.question}</p>
                <p className='info-box__measurement'>{selectedTitle.explanation}</p>
            </div>
        </section>
    );
};

export default JournalInfoBox;