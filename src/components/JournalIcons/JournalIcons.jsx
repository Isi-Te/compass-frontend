import React from 'react';
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

const JournalIcons = () => {
    return (
        <section className='journal'>
            <h1 className='journal__title'>Daily Journaling</h1>
            <div className='journal__emotional-health'>
                <img className='journal__icon journal__icon-happy' src={happyIcon} alt='happy face icon'></img>
                <img className='journal__icon journal__icon-sad' src={sadIcon} alt='sad face icon'></img>
                <img className='journal__icon journal__icon-laugh' src={laughIcon} alt='laughing face icon'></img>
                <img className='journal__icon journal__icon-angry' src={angryIcon} alt='angry face icon'></img>
            </div>
            <div className='journal__physical-health'>
                <img className='journal__icon journal__icon-stress' src={stressIcon} alt='thunder icon'></img>
                <img className='journal__icon journal__icon-sleep' src={sleepIcon} alt='half moon icon'></img>
                <img className='journal__icon journal__icon-nutrition' src={nutritionIcon} alt='apple icon'></img>
                <img className='journal__icon journal__icon-energy' src={energyIcon} alt='battery icon'></img>
            </div>
            <div className='journal__activity'>
                <img className='journal__icon journal__icon-nature' src={natureIcon} alt='trees icon'></img>
                <img className='journal__icon journal__icon-fitness' src={fitnessIcon} alt='dumbell icon'></img>
                <img className='journal__icon journal__icon-social' src={socialIcon} alt='people icon'></img>
                <img className='journal__icon journal__icon-self-care' src={selfCareIcon} alt='yoga pose icon'></img>
            </div>
        </section>
    );
};

export default JournalIcons;