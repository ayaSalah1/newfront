import React, { useEffect } from 'react';
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
                data: [3, 7, 3, 16],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgb(235,54,220)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgb(235,54,220)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
                offset: [0, 5, 0, 8] // ضبط الجزء الرابع فقط
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom',
                rtl: true,
                direction: "rtl",
                labels: {
                    align: 'end',
                    usePointStyle: true,
                    boxWidth:10,
                    padding: 12, // Adjust padding between legend items
                    maxWidth: 2, // Adjust this value to change the size of legend circles
                    font: {
                        size:12, // Adjust font size if needed
                    }
                },
            },
            title: {
                display: false,
                text: 'Doughnut Chart',
            },
        },
        layout: {
            padding: 0
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };


    useEffect(() => {
        const customScale = {
            id: 'customScale',
            beforeDraw: (chart) => {
                const { ctx, chartArea: { left, top, width, height } } = chart;
                const radius = Math.min(width, height) / 2;
                const centerX = left + width / 2;
                const centerY = top + height / 2;
                const enlargeIndex = 3; // تحديد الجزء الذي تريد تكبيره

                chart.data.datasets[0].data.forEach((value, index) => {
                    if (index === enlargeIndex) {
                        const startAngle = chart.getDatasetMeta(0).data[index].startAngle;
                        const endAngle = chart.getDatasetMeta(0).data[index].endAngle;

                        // رسم الجزء المكبر
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(centerX, centerY, radius * 1.01, startAngle, endAngle); // تغيير نسبة التكبير
                        ctx.arc(centerX, centerY, radius * 0.9, endAngle, startAngle, true); // نصف القطر الداخلي
                        ctx.closePath();
                        ctx.fillStyle = chart.data.datasets[0].backgroundColor[index];
                        ctx.fill();
                        ctx.restore();
                    }
                });
            },
        };

        ChartJS.register(customScale);

        return () => {
            ChartJS.unregister(customScale);
        };
    }, []);

    return (
        <div className={"w-full h-full flex items-center justify-center"} style={{ overflow: 'visible' }}>
            <div className="w-11/12">
                <Doughnut data={data} options={options} width={200} height={200} />
            </div>
        </div>
    );
};

export default DoughnutChart;
