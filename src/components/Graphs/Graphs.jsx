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

    return (
        <>
            <LineChart graphData={graphData} />
        </>
    );
};

export default Graphs;