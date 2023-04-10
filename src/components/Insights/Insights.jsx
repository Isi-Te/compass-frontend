import React, { useEffect, useState } from 'react';
import './Insights.scss';
import insightsIcon from '../../assets/icons/personalize-white-icon.svg';
import thumbsUpIcon from '../../assets/icons/thumb-up-white-icon.svg';
import thumbsDownIcon from '../../assets/icons/thumb-down-white-icon.svg';
import axios from 'axios';
import Loading from '../Loading/Loading';

const Insights = () => {
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/journal-entry')
            .then(res => setGraphData(res.data))
            .catch(error => console.error(error));
    }, []);

    if (!graphData) {
        return <div>
            <Loading />
        </div>
    }

    const sum = (data, key) => data.reduce((a, b) => a + b[key], 0);
    const average = (data, key) => sum(data, key) / data.length;

    const averageStress = average(graphData, 'stress');
    const averageFitness = average(graphData, 'fitness');
    const averageNutrition = average(graphData, 'nutrition');
    const averageQualitytime = average(graphData, 'qualitytime');
    const averageSleep = average(graphData, 'sleep');
    const averageSocial = average(graphData, 'social');

    const happyScore = sum(graphData, 'fitness') +
        sum(graphData, 'nutrition') +
        sum(graphData, 'qualitytime') +
        sum(graphData, 'sleep') +
        sum(graphData, 'social') -
        (averageStress * graphData.length);
    const averageHappy = (happyScore / (graphData.length * 50)) * 100;

    let happyDays = [];
    let stressDays = []
    graphData.map((item) => {
        if (item.happy >= 7) {
            happyDays.push(item.highlight.toLowerCase())
        }
        if (item.stress >= 7) {
            stressDays.push(item.lowlight.toLowerCase())
        }
        return (happyDays, stressDays)
    })

    let happyHighlight = [...new Set(happyDays)];
    let stressHighlight = [...new Set(stressDays)];


    return (
        <>
            <section className='insights'>
                <div className='insights__headline'>
                    <h2 className='insights__title'>Insights</h2>
                    <img className='insights__icon' src={insightsIcon} alt='Graph Icon'></img>
                </div>
                <div className='insights__container'>
                    <div className='insights__score-container'>
                        <h2 className='insights__score'>{averageHappy.toFixed(1) + '%'}</h2>
                        <p className='insights__subtitle'>Happiness Rate</p>
                    </div>
                    <div className='insights__ratings-container'>
                        <div className='insights__ratings-category'>
                            <p className='insights__rating'>Fitness:</p>
                            <p className='insights__rating'>{averageFitness.toFixed(1)}/10</p>
                        </div>
                        <div className='insights__ratings-category'>
                            <p className='insights__rating'>Nutrition:</p>
                            <p className='insights__rating'>{averageNutrition.toFixed(1)}/10</p>
                        </div>
                        <div className='insights__ratings-category'>
                            <p className='insights__rating'>Quality Time:</p>
                            <p className='insights__rating'>{averageQualitytime.toFixed(1)}/10</p>
                        </div>
                        <div className='insights__ratings-category'>
                            <p className='insights__rating'>Sleep:</p>
                            <p className='insights__rating'>{averageSleep.toFixed(1)}/10</p>
                        </div>
                        <div className='insights__ratings-category'>
                            <p className='insights__rating'>Social:</p>
                            <p className='insights__rating'>{averageSocial.toFixed(1)}/10</p>
                        </div>
                        <div className='insights__ratings-category'>
                            <p className='insights__rating'>Stress:</p>
                            <p className='insights__rating'>{averageStress.toFixed(1)}/10</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content'>
                <div className='content__happiness'>
                    <div className='content__headline-container'>
                        <h2 className='content__title'>Try to make more time for:</h2>
                        <img className='content__icon' src={thumbsUpIcon} alt='Thumb up icon'></img>
                    </div>
                    {happyHighlight.map((item) => {
                        return (
                            <ul className='content__list'>
                                <li className='content__item'>{item}</li>
                            </ul>
                        )
                    })}
                </div>
                <div className='content__stress'>
                    <div className='content__headline-container'>
                        <h2 className='content__title'>Your stress levels are increased due to:</h2>
                        <img className='content__icon' src={thumbsDownIcon} alt='Thumb down icon'></img>
                    </div>
                    {stressHighlight.map((item) => {
                        return (
                            <ul className='content__list'>
                                <li className='content__item'>{item}</li>
                            </ul>
                        )
                    })}
                </div>
            </section>
        </>
    );
};

export default Insights;