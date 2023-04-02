import React from 'react';
import './JournalInfoBox.scss';
import infoIcon from '../../assets/icons/info-white-icon.svg';
import closeIcon from '../../assets/icons/close-white-icon.svg';

const JournalInfoBox = ({ infoClick, infoClose }) => {
    if (!infoClick) return null;
    return (
        <section className='info-box'>
            <div className='info-box__headline-container'>
                <div className='info-box__headline'>
                    <img className='info-box__icon-info' src={infoIcon} alt='Info icon'></img>
                    <h2 className='info-box__title'>Stress</h2>
                </div>
                <div className='info-box__container'>
                    <img className='info-box__icon-close' src={closeIcon} alt='Close icon' onClick={infoClose}></img>
                </div>
            </div>
            <div className='info-box__details'>
                <p className='info-box__question'>How stressed do you feel today?</p>
                <p className='info-box__measurement'>0 meaning not stressed at all. 10 meaning extremely stressed and overwhelmed.</p>
            </div>
        </section>
    );
};

export default JournalInfoBox;