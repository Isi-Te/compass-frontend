import React, { useEffect, useState } from 'react';
import './JournalEntry.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../JournalIcons/JournalIcons.scss';
import happyIcon from '../../assets/icons/happy-icon.svg';
import sadIcon from '../../assets/icons/sad-icon.svg';
import angryIcon from '../../assets/icons/angry-icon.svg';
import stressIcon from '../../assets/icons/stress-icon.svg';
import sleepIcon from '../../assets/icons/sleep-icon.svg';
import nutritionIcon from '../../assets/icons/nutrition-icon.svg';
import fitnessIcon from '../../assets/icons/fitness-icon.svg';
import socialIcon from '../../assets/icons/social-icon.svg';
import qualityTimeIcon from '../../assets/icons/quality-time-icon.svg';
import JournalSlideUp from '../JournalSlideUp/JournalSlideUp';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const category = ['happy', 'sad', 'frustrated', 'stress', 'sleep', 'nutrition', 'fitness', 'social', 'quality time']

const JournalEntry = () => {
    const [journalEntry, setJournalEntry] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [infoBox, setInfoBox] = useState([]);
    const [isSelected, setIsSelected] = useState(null);
    const [value, onChange] = useState(1);
    const navigate = useNavigate();

    const [happy, setHappy] = useState();
    const [sad, setSad] = useState();
    const [frustrated, setFrustrated] = useState();
    const [stress, setStress] = useState();
    const [sleep, setSleep] = useState();
    const [nutrition, setNutrition] = useState();
    const [fitness, setFitness] = useState();
    const [social, setSocial] = useState();
    const [qualityTime, setQualityTime] = useState();


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
        onChange(1);
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
        if (isSelected === 'qualitytime') {
            setQualityTime(event.target.value)
        }

    }

    const fetchEntry = () => {
        axios
            .get(`http://localhost:8080/journal-entry`)
            .then(res => {
                setJournalEntry(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchEntry();
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        const highlight = event.target.highlight.value;
        const lowlight = event.target.lowlight.value;
        const user_id = 1;
        const happy = event.target.happy.value;
        const sad = event.target.sad.value;
        const frustrated = event.target.frustrated.value;
        const stress = event.target.stress.value;
        const sleep = event.target.sleep.value;
        const nutrition = event.target.nutrition.value;
        const fitness = event.target.fitness.value;
        const social = event.target.social.value;
        const qualitytime = event.target.qualitytime.value;

        axios
            .post(`http://localhost:8080/journal-entry`, {
                happy: happy,
                sad: sad,
                frustrated: frustrated,
                stress: stress,
                sleep: sleep,
                nutrition: nutrition,
                fitness: fitness,
                social: social,
                qualitytime: qualitytime,
                highlight: highlight,
                lowlight: lowlight,
                user_id: user_id,
            })
            .then(() => {
                fetchEntry();
                event.target.reset();
                navigate('/compass/insights');
            })
            .catch(err => console.log(err));
    }

    if (!journalEntry) {
        return <div>
            <Loading />
        </div>
    }

    return (
        <section className='journal-entry'>
            <h1 className='journal__title'>Daily Journaling</h1>
            <form className='journal-entry__form' onSubmit={handleSubmit}>
                <section className='journal'>
                    <div className='journal__emotional-health'>
                        <div className='journal__emo-container' onClick={(() => setIsOpen(true))}>
                            <img className='journal__icon journal__icon-happy' src={happyIcon} alt='happy face icon' title='happy' onClick={handleOnClick}></img>
                            <div className='journal__icon-box'>
                                <h4 className='journal__icon-title' title='happy'>{category[0]} </h4>
                                <input className='journal__input' type='number' name='happy' value={happy} required></input>
                            </div>
                        </div>
                        <div className='journal__emo-container' onClick={(() => setIsOpen(true))}>
                            <img className='journal__icon journal__icon-sad' src={sadIcon} alt='sad face icon' title='sad' onClick={handleOnClick}></img>
                            <div className='journal__icon-box'>
                                <h4 className='journal__icon-title'>{category[1]}</h4>
                                <input className='journal__input' type='number' name='sad' value={sad} required></input>
                            </div>
                        </div>
                        <div className='journal__emo-container' onClick={(() => setIsOpen(true))}>
                            <img className='journal__icon journal__icon-angry' src={angryIcon} alt='angry face icon' title='frustrated' onClick={handleOnClick}></img>
                            <div className='journal__icon-box'>
                                <h4 className='journal__icon-title'>{category[2]}</h4>
                                <input className='journal__input' type='number' name='frustrated' value={frustrated} required></input>
                            </div>
                        </div>
                    </div>

                    <div className='journal__physical-health'>
                        <div className='journal__physics-container' onClick={(() => setIsOpen(true))}>
                            <img className='journal__icon journal__icon-stress' src={stressIcon} alt='thunder icon' title='stress' onClick={handleOnClick}></img>
                            <div className='journal__icon-box'>
                                <h4 className='journal__icon-title'>{category[3]}</h4>
                                <input className='journal__input' type='number' name='stress' value={stress} required></input>
                            </div>
                        </div>
                        <div className='journal__physics-container' onClick={(() => setIsOpen(true))}>
                            <img className='journal__icon journal__icon-sleep' src={sleepIcon} alt='half moon icon' title='sleep' onClick={handleOnClick}></img>
                            <div className='journal__icon-box'>
                                <h4 className='journal__icon-title'>{category[4]}</h4>
                                <input className='journal__input' type='number' name='sleep' value={sleep} required></input>
                            </div>
                        </div>
                        <div className='journal__physics-container' onClick={(() => setIsOpen(true))}>
                            <img className='journal__icon journal__icon-nutrition' src={nutritionIcon} alt='apple icon' title='nutrition' onClick={handleOnClick}></img>
                            <div className='journal__icon-box'>
                                <h4 className='journal__icon-title'>{category[5]}</h4>
                                <input className='journal__input' type='number' name='nutrition' value={nutrition} required></input>
                            </div>
                        </div>
                    </div>
                    <div className='journal__activity'>
                        <div className='journal__activity-container' onClick={(() => setIsOpen(true))}>
                            <img className='journal__icon journal__icon-fitness' src={fitnessIcon} alt='dumbell icon' title='fitness' onClick={handleOnClick}></img>
                            <div className='journal__icon-box'>
                                <h4 className='journal__icon-title'>{category[6]}</h4>
                                <input className='journal__input' type='number' name='fitness' value={fitness} required></input>
                            </div>
                        </div>
                        <div className='journal__activity-container' onClick={(() => setIsOpen(true))}>
                            <img className='journal__icon journal__icon-social' src={socialIcon} alt='people icon' title='social' onClick={handleOnClick}></img>
                            <div className='journal__icon-box'>
                                <h4 className='journal__icon-title'>{category[7]}</h4>
                                <input className='journal__input' type='number' name='social' value={social} required></input>
                            </div>
                        </div>
                        <div className='journal__activity-container' onClick={(() => setIsOpen(true))}>
                            <img className='journal__icon journal__icon-self-care' src={qualityTimeIcon} alt='Heart icon' title='qualitytime' onClick={handleOnClick}></img>
                            <div className='journal__icon-box'>
                                <h4 className='journal__icon-title'>{category[8]}</h4>
                                <input className='journal__input' type='number' name='qualitytime' value={qualityTime} required></input>
                            </div >
                        </div >
                    </div >
                    <JournalSlideUp open={isOpen} onClose={() => setIsOpen(false)} infoBox={infoBox} isSelected={isSelected} value={value} onChange={onChange} handleOnSave={handleOnSave} />
                </section >
                <div className='journal-entry__highlight'>
                    <input className='journal-entry__input journal-entry__input--highlight' placeholder='What made your day?' name='highlight' minLength='2' maxLength='30' required></input>
                </div>
                <div className='journal-entry__stress'>
                    <input className='journal-entry__input journal-entry__input--lowlight' placeholder='What bothered you today?' name='lowlight' minLength='2' maxLength='30' required></input>
                </div>
                <div className='journal-entry__button'>
                    <Link to='/compass'><Button className='journal-entry__button-cancel' name='button__cancel' type='cancel' title='cancel' /></Link>
                    <Button className='journal-entry__button-track' name='button__track' type='submit' title='track' />
                </div>
            </form>
        </section >
    );
};

export default JournalEntry;