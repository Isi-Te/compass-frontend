import React from 'react';
import { Chart } from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const LineChart = ({ type, name, dates }) => {

    console.log({ type });
    console.log({ name });
    console.log({ dates });

    const data = {
        labels: ['03-30', '03-31', '04-01', '04-02', '04-03', '04-04'],
        datasets: [
            {
                label: `${name}`,
                backgroundColor: "#6FBBB1",
                borderColor: "#6FBBB1",
                data: `${type}`,
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