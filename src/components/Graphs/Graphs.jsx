import React, { useEffect, useState } from 'react';
import './Graphs.scss';
import Line from '../LineChart/LineChart';
import axios from 'axios';
import LineChart from '../LineChart/LineChart';
import Loading from '../Loading/Loading';


const Graphs = () => {
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
        return <div>
            <Loading />
        </div>
    }

    let happy = [];
    let sad = [];
    let frustrated = [];
    let stress = [];
    let sleep = [];
    let nutrition = [];
    let fitness = [];
    let social = [];
    let qualitytime = [];
    let timestamp = [];

    graphData.map((category) => {
        happy.push(category.happy);
        sad.push(category.sad);
        frustrated.push(category.frustrated);
        stress.push(category.stress);
        sleep.push(category.sleep);
        nutrition.push(category.nutrition);
        fitness.push(category.fitness);
        social.push(category.social);
        qualitytime.push(category.qualitytime);
        timestamp.push(category.date);
    })

    //Baseline -- later integration
    // const sum = happy => happy.reduce((a, b) => a + b, 0)
    // const average = (sum(happy) / happy.length);

    return (
        <>
            <LineChart className="graph" graphData={graphData} type={happy} name='Happy' />
            <LineChart graphData={graphData} type={sad} name='Sad' />
            <LineChart graphData={graphData} type={frustrated} name='Frustrated' />
            <LineChart graphData={graphData} type={stress} name='Stress level' />
            <LineChart graphData={graphData} type={sleep} name='Sleep' />
            <LineChart graphData={graphData} type={nutrition} name='Nutrition' />
            <LineChart graphData={graphData} type={fitness} name='Fitness' />
            <LineChart graphData={graphData} type={social} name='Social' />
            <LineChart graphData={graphData} type={qualitytime} name='Self-care' />
            <div className='graph__placeholder'></div>
        </>
    );
};

export default Graphs;