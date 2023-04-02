import React from 'react';
import { useState } from 'react';
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

const JournalIcons = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className='journal'>
            <h1 className='journal__title'>Daily Journaling</h1>
            <div className='journal__emotional-health'>
                <div className='journal__emo-container'>
                    <img className='journal__icon journal__icon-happy' src={happyIcon} alt='happy face icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Happy</h4>
                </div>
                <div className='journal__emo-container'>
                    <img className='journal__icon journal__icon-sad' src={sadIcon} alt='sad face icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Sad</h4>
                </div>
                <div className='journal__emo-container'>
                    <img className='journal__icon journal__icon-laugh' src={laughIcon} alt='laughing face icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Laughs</h4>
                </div>
                <div className='journal__emo-container'>
                    <img className='journal__icon journal__icon-angry' src={angryIcon} alt='angry face icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Frustrated</h4>
                </div>
            </div>

            <div className='journal__physical-health'>
                <div className='journal__physics-container'>
                    <img className='journal__icon journal__icon-stress' src={stressIcon} alt='thunder icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Stress</h4>
                </div>
                <div className='journal__physics-container'>
                    <img className='journal__icon journal__icon-sleep' src={sleepIcon} alt='half moon icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Sleep</h4>
                </div>
                <div className='journal__physics-container'>
                    <img className='journal__icon journal__icon-nutrition' src={nutritionIcon} alt='apple icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Nutrition</h4>
                </div>
                <div className='journal__physics-container'>
                    <img className='journal__icon journal__icon-energy' src={energyIcon} alt='battery icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Energy</h4>
                </div>
            </div>
            <div className='journal__activity'>
                <div className='journal__activity-container'>
                    <img className='journal__icon journal__icon-nature' src={natureIcon} alt='trees icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Outdoors</h4>
                </div>
                <div className='journal__activity-container'>
                    <img className='journal__icon journal__icon-fitness' src={fitnessIcon} alt='dumbell icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Fitness</h4>
                </div>
                <div className='journal__activity-container'>
                    <img className='journal__icon journal__icon-social' src={socialIcon} alt='people icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Social</h4>
                </div>
                <div className='journal__activity-container'>
                    <img className='journal__icon journal__icon-self-care' src={selfCareIcon} alt='yoga pose icon' onClick={(() => setIsOpen(true))}></img>
                    <h4 className='journal__icon-title'>Self-care</h4>
                </div >
            </div >
            <JournalSlideUp open={isOpen} onClose={() => setIsOpen(false)} />
        </section >
    );
};

export default JournalIcons;