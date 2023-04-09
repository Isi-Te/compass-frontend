import React from 'react';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import './LineChart.scss';

const LineChart = ({ type, name, graphData }) => {

    const data = {
        labels: graphData.map((data) => data.date.slice(5, 10)),
        datasets: [
            {
                label: `${name}`,
                backgroundColor: "rgba(111, 187, 177, .5)",
                borderColor: "#26262C",
                fill: true,
                borderWidth: 1.5,
                data: type.map((data) => data),
                tension: 0.4,
            },
        ],
    };
    const options = {
        maintainAspectRatio: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 0,
                max: 10,
            },
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 0
                }
            }
        }
    }

    return (
        <div className='chartbox'>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;