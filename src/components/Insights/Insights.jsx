import React, { useEffect, useState } from 'react';
import './Insights.scss';
import insightsIcon from '../../assets/icons/personalize-white-icon.svg';
import axios from 'axios';

const Insights = () => {
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/journal-entry')
            .then(res => setGraphData(res.data))
            .catch(error => console.error(error));
    }, []);

    if (!graphData) {
        return <div>Loading....</div>
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

    return (
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
    );
};

export default Insights;