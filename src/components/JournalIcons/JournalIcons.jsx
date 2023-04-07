import React, { useEffect, useState } from 'react';
import './JournalIcons.scss';
import happyIcon from '../../assets/icons/happy-icon.svg';
import sadIcon from '../../assets/icons/sad-icon.svg';
import angryIcon from '../../assets/icons/angry-icon.svg';
import stressIcon from '../../assets/icons/stress-icon.svg';
import sleepIcon from '../../assets/icons/sleep-icon.svg';
import nutritionIcon from '../../assets/icons/nutrition-icon.svg';
import fitnessIcon from '../../assets/icons/fitness-icon.svg';
import socialIcon from '../../assets/icons/social-icon.svg';
import selfCareIcon from '../../assets/icons/self-care-icon.svg';
import JournalSlideUp from '../JournalSlideUp/JournalSlideUp';
import axios from 'axios';

const JournalIcons = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [infoBox, setInfoBox] = useState([]);
    const [isSelected, setIsSelected] = useState(null);
    const [value, onChange] = useState(1);
    const [happy, setHappy] = useState();
    const [sad, setSad] = useState();
    const [frustrated, setFrustrated] = useState();
    const [stress, setStress] = useState();
    const [sleep, setSleep] = useState();
    const [nutrition, setNutrition] = useState();
    const [fitness, setFitness] = useState();
    const [social, setSocial] = useState();
    const [selfcare, setSelfcare] = useState();

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

    const handleOnSave = (event) => {
        event.preventDefault();
        if (isSelected === 'happy') {
            setHappy(event.target.value)
        }
        if (isSelected === 'sad') {
            setSad(event.target.value)
        }
        if (isSelected === 'frustrated') {
            setFrustrated(event.target.value)
        }
        if (isSelected === 'stress') {
            setStress(event.target.value)
        }
        if (isSelected === 'sleep') {
            setSleep(event.target.value)
        }
        if (isSelected === 'nutrition') {
            setNutrition(event.target.value)
        }
        if (isSelected === 'fitness') {
            setFitness(event.target.value)
        }
        if (isSelected === 'social') {
            setSocial(event.target.value)
        }
        if (isSelected === 'self-care') {
            setSelfcare(event.target.value)
        }
    }

    const category = ['happy', 'sad', 'frustrated', 'stress', 'sleep', 'nutrition', 'fitness', 'social', 'self-care']

    return (
        <section className='journal'>
            <h1 className='journal__title'>Daily Journaling</h1>
            <form>
                <div className='journal__emotional-health'>
                    <div className='journal__emo-container' onClick={(() => setIsOpen(true))}>
                        <img className='journal__icon journal__icon-happy' src={happyIcon} alt='happy face icon' title='happy' onClick={handleOnClick}></img>
                        <div className='journal__icon-box'>
                            <h4 className='journal__icon-title' title='happy'>{category[0]} </h4>
                            <input className='journal__input' type='number' value={happy}></input>
                        </div>
                    </div>
                    <div className='journal__emo-container' onClick={(() => setIsOpen(true))}>
                        <img className='journal__icon journal__icon-sad' src={sadIcon} alt='sad face icon' title='sad' onClick={handleOnClick}></img>
                        <div className='journal__icon-box'>
                            <h4 className='journal__icon-title'>{category[1]}</h4>
                            <input className='journal__input' type='number' value={sad}></input>
                        </div>
                    </div>
                    <div className='journal__emo-container' onClick={(() => setIsOpen(true))}>
                        <img className='journal__icon journal__icon-angry' src={angryIcon} alt='angry face icon' title='frustrated' onClick={handleOnClick}></img>
                        <div className='journal__icon-box'>
                            <h4 className='journal__icon-title'>{category[2]}</h4>
                            <input className='journal__input' type='number' value={frustrated}></input>
                        </div>
                    </div>
                </div>

                <div className='journal__physical-health'>
                    <div className='journal__physics-container' onClick={(() => setIsOpen(true))}>
                        <img className='journal__icon journal__icon-stress' src={stressIcon} alt='thunder icon' title='stress' onClick={handleOnClick}></img>
                        <div className='journal__icon-box'>
                            <h4 className='journal__icon-title'>{category[3]}</h4>
                            <input className='journal__input' type='number' value={stress}></input>
                        </div>
                    </div>
                    <div className='journal__physics-container' onClick={(() => setIsOpen(true))}>
                        <img className='journal__icon journal__icon-sleep' src={sleepIcon} alt='half moon icon' title='sleep' onClick={handleOnClick}></img>
                        <div className='journal__icon-box'>
                            <h4 className='journal__icon-title'>{category[4]}</h4>
                            <input className='journal__input' type='number' value={sleep}></input>
                        </div>
                    </div>
                    <div className='journal__physics-container' onClick={(() => setIsOpen(true))}>
                        <img className='journal__icon journal__icon-nutrition' src={nutritionIcon} alt='apple icon' title='nutrition' onClick={handleOnClick}></img>
                        <div className='journal__icon-box'>
                            <h4 className='journal__icon-title'>{category[5]}</h4>
                            <input className='journal__input' type='number' value={nutrition}></input>
                        </div>
                    </div>
                </div>
                <div className='journal__activity'>
                    <div className='journal__activity-container' onClick={(() => setIsOpen(true))}>
                        <img className='journal__icon journal__icon-fitness' src={fitnessIcon} alt='dumbell icon' title='fitness' onClick={handleOnClick}></img>
                        <div className='journal__icon-box'>
                            <h4 className='journal__icon-title'>{category[6]}</h4>
                            <input className='journal__input' type='number' value={fitness}></input>
                        </div>
                    </div>
                    <div className='journal__activity-container' onClick={(() => setIsOpen(true))}>
                        <img className='journal__icon journal__icon-social' src={socialIcon} alt='people icon' title='social' onClick={handleOnClick}></img>
                        <div className='journal__icon-box'>
                            <h4 className='journal__icon-title'>{category[7]}</h4>
                            <input className='journal__input' type='number' value={social}></input>
                        </div>
                    </div>
                    <div className='journal__activity-container' onClick={(() => setIsOpen(true))}>
                        <img className='journal__icon journal__icon-self-care' src={selfCareIcon} alt='yoga pose icon' title='self-care' onClick={handleOnClick}></img>
                        <div className='journal__icon-box'>
                            <h4 className='journal__icon-title'>{category[8]}</h4>
                            <input className='journal__input' type='number' value={selfcare}></input>
                        </div >
                    </div >
                </div >
            </form>
            <JournalSlideUp open={isOpen} onClose={() => setIsOpen(false)} infoBox={infoBox} isSelected={isSelected} value={value} onChange={onChange} handleOnSave={handleOnSave} />
        </section >
    );
};

export default JournalIcons;