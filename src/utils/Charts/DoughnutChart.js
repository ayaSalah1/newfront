import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        labels: ['المهام غير المنجزه', 'المهام المنجزه في الوقت', 'المهام المنجزه بعد الوقت', 'المهام المنجزه قبل الوقت'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                rtl: true,
                direction:"rtl",
                labels: {
                    align: 'end',
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 12, // Adjust padding between legend items
                },
            },
            title: {
                display: false,
                text: 'Doughnut Chart',
            },
        },
    };

    return (
        <div className={"w-full h-full"}>
            <Doughnut data={data} options={options} width={200} height={200}/>
        </div>
    );
};

export default DoughnutChart;
