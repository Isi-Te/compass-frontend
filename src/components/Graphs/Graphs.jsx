import React, { useEffect, useState } from 'react';
import './Graphs.scss';
import Line from '../LineChart/LineChart';
import axios from 'axios';
import LineChart from '../LineChart/LineChart';


const Graphs = () => {
    const [graphData, setGraphData] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/`)
            .then((res) => {
                setGraphData(res.data);
            })
            .catch(error => console.error(error));
    }, []);

    if (!graphData) {
        return <div>Loading....</div>
    }

    // const [newGraphData] = graphData;
    // const objectArray = Object.entries(newGraphData);
    // console.log(objectArray);
    // objectArray.forEach(([key, value]) => {
    //     console.log(key);
    //     console.log(value);
    // })

    console.log(graphData);

    let happy = [];
    let sad = [];
    let laughs = [];
    let frustrated = [];
    let stress = [];
    let sleep = [];
    let nutrition = [];
    let energy = [];
    let outdoors = [];
    let fitness = [];
    let social = [];
    let selfCare = [];
    let timestamp = [];

    graphData.map((category) => {
        happy.push(category.happy);
        sad.push(category.sad);
        laughs.push(category.laughs);
        frustrated.push(category.frustrated);
        stress.push(category.stress);
        sleep.push(category.sleep);
        nutrition.push(category.nutrition);
        energy.push(category.energy);
        outdoors.push(category.outdoors);
        fitness.push(category.fitness);
        social.push(category.social);
        selfCare.push(category.selfCare);
        timestamp.push(category.created_at);
    })

    let dates = []
    timestamp.map((date) => {
        dates.push(date.slice(5, 10))
    })
    console.log(dates)

    return (
        <>
            <LineChart className="graph" graphData={graphData} type={happy} name='Happy' dates={dates} />
            <LineChart graphData={graphData} type={sad} name='Sad' />
            <LineChart graphData={graphData} type={laughs} name='Laughs' />
            <LineChart graphData={graphData} type={frustrated} name='Frustrated' />
            <LineChart graphData={graphData} type={stress} name='Stress level' />
            <LineChart graphData={graphData} type={sleep} name='Sleep' />
            <LineChart graphData={graphData} type={nutrition} name='Nutrition' />
            <LineChart graphData={graphData} type={energy} name='Energy Levels' />
            <LineChart graphData={graphData} type={outdoors} name='Time outdoors' />
            <LineChart graphData={graphData} type={fitness} name='Fitness' />
            <LineChart graphData={graphData} type={social} name='Social' />
            <LineChart graphData={graphData} type={selfCare} name='Self-care' />
        </>
    );

};

export default Graphs;