import React, { useEffect, useState } from 'react';
import './JournalIcons.scss';
import happyIcon from '../../assets/icons/happy-icon.svg';
import sadIcon from '../../assets/icons/sad-icon.svg';
import laughIcon from '../../assets/icons/laugh-icon.svg';
import angryIcon from '../../assets/icons/angry-icon.svg';
import stressIcon from '../../assets/icons/stress-icon.svg';
import sleepIcon from '../../assets/icons/sleep-icon.svg';
import nutritionIcon from '../../assets/icons/nutrition-icon.svg';
import energyIcon from '../../assets/icons/energy-level-icon.svg';
import natureIcon from '../../assets/icons/nature-icon.svg';
import fitnessIcon from '../../assets/icons/fitness-icon.svg';
import socialIcon from '../../assets/icons/social-icon.svg';
import selfCareIcon from '../../assets/icons/self-care-icon.svg';
import JournalSlideUp from '../JournalSlideUp/JournalSlideUp';
import axios from 'axios';

const JournalIcons = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [infoBox, setInfoBox] = useState([]);
    const [isSelected, setIsSelected] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/journal`)
            .then((res) => {
                setInfoBox(res.data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleOnClick = (event) => {
        event.preventDefault();

        setIsSelected(event.target.title);
    }

    const category = ['happy', 'sad', 'laughs', 'frustrated', 'stress', 'sleep', 'nutrition', 'energy', 'outdoors', 'fitness', 'social', 'self-care']

    return (
        <section className='journal'>
            <h1 className='journal__title'>Daily Journaling</h1>
            <div className='journal__emotional-health'>
                <div className='journal__emo-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-happy' src={happyIcon} alt='happy face icon' title='happy' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title' title='happy'>{category[0]} </h4>
                </div>
                <div className='journal__emo-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-sad' src={sadIcon} alt='sad face icon' title='sad' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[1]}</h4>
                </div>
                <div className='journal__emo-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-laugh' src={laughIcon} alt='laughing face icon' title='laughs' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[2]}</h4>
                </div>
                <div className='journal__emo-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-angry' src={angryIcon} alt='angry face icon' title='frustrated' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[3]}</h4>
                </div>
            </div>

            <div className='journal__physical-health'>
                <div className='journal__physics-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-stress' src={stressIcon} alt='thunder icon' title='stress' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[4]}</h4>
                </div>
                <div className='journal__physics-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-sleep' src={sleepIcon} alt='half moon icon' title='sleep' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[5]}</h4>
                </div>
                <div className='journal__physics-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-nutrition' src={nutritionIcon} alt='apple icon' title='nutrition' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[6]}</h4>
                </div>
                <div className='journal__physics-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-energy' src={energyIcon} alt='battery icon' title='energy-levels' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[7]}</h4>
                </div>
            </div>
            <div className='journal__activity'>
                <div className='journal__activity-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-nature' src={natureIcon} alt='trees icon' title='outdoors' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[8]}</h4>
                </div>
                <div className='journal__activity-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-fitness' src={fitnessIcon} alt='dumbell icon' title='fitness' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[9]}</h4>
                </div>
                <div className='journal__activity-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-social' src={socialIcon} alt='people icon' title='social' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[10]}</h4>
                </div>
                <div className='journal__activity-container' onClick={(() => setIsOpen(true))}>
                    <img className='journal__icon journal__icon-self-care' src={selfCareIcon} alt='yoga pose icon' title='self-care' onClick={handleOnClick}></img>
                    <h4 className='journal__icon-title'>{category[11]}</h4>
                </div >
            </div >
            <JournalSlideUp open={isOpen} onClose={() => setIsOpen(false)} infoBox={infoBox} isSelected={isSelected} />
        </section >
    );
};

export default JournalIcons;