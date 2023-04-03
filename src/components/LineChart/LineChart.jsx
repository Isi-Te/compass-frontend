import React from 'react';
import { Chart } from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const LineChart = ({ graphData }) => {

    console.log(graphData);

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Stress",
                backgroundColor: "#6FBBB1",
                borderColor: "#6FBBB1",
                data: [1, 2, 6, 4, 5, 8],
            },
        ],
    };

    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default LineChart;