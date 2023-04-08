import React, { useEffect, useState } from 'react';
import './Insights.scss';
import insightsIcon from '../../assets/icons/insights-white-icon.svg';
import axios from 'axios';

const Insights = () => {
    const [graphData, setGraphData] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/journal-entry`)
            .then((res) => {
                setGraphData(res.data);
            })
            .catch(error => console.error(error));
    }, []);

    if (!graphData) {
        return <div>Loading....</div>
    }

    //Scorecard Happiness Rate:
    const happyScore = graphData.map((item) => {
        return (item.fitness + item.nutrition + item.selfcare + item.sleep + item.social + item.stress)
    })
    const sumHappy = happyScore => happyScore.reduce((a, b) => a + b, 0);
    const averageHappy = ((sumHappy(happyScore) / (happyScore.length * 60)) * 100);

    //Fitness Score:
    const fitnessScore = graphData.map((item) => {
        return (item.fitness)
    })
    const sumFitness = fitnessScore => fitnessScore.reduce((a, b) => a + b, 0);
    const averageFitness = ((sumFitness(fitnessScore) / (fitnessScore.length)));

    //Stress Score:
    const stressScore = graphData.map((item) => {
        return (item.stress)
    })
    const sumStress = stressScore => stressScore.reduce((a, b) => a + b, 0);
    const averageStress = ((sumStress(stressScore) / (stressScore.length)));

    //Nutrition Score:
    const nutritionScore = graphData.map((item) => {
        return (item.nutrition)
    })
    const sumNutrition = nutritionScore => nutritionScore.reduce((a, b) => a + b, 0);
    const averageNutrition = ((sumNutrition(nutritionScore) / (nutritionScore.length)));

    //Self-care Score:
    const selfCareScore = graphData.map((item) => {
        return (item.selfcare)
    })
    const sumSelfCare = selfCareScore => selfCareScore.reduce((a, b) => a + b, 0);
    const averageSelfCare = ((sumSelfCare(selfCareScore) / (selfCareScore.length)));

    //Nutrition Score:
    const sleepScore = graphData.map((item) => {
        return (item.sleep)
    })
    const sumSleep = sleepScore => sleepScore.reduce((a, b) => a + b, 0);
    const averageSleep = ((sumSleep(sleepScore) / (sleepScore.length)));

    //Social Score:
    const socialScore = graphData.map((item) => {
        return (item.social)
    })
    const sumSocial = socialScore => socialScore.reduce((a, b) => a + b, 0);
    const averageSocial = ((sumSocial(socialScore) / (socialScore.length)));


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
                        <p className='insights__rating'>Self-Care:</p>
                        <p className='insights__rating'>{averageSelfCare.toFixed(1)}/10</p>
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