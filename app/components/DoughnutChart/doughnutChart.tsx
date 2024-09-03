"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const JobApplyChart = () => {
  const data: ChartData<'doughnut'> = {
    labels: ['Applied', 'Interviewing', 'Accepted', 'Rejected'],
    datasets: [
      {
        data: [50, 5, 20, 25],
        backgroundColor: ['#FBBF24', '#60A5FA', '#34D399', '#F87171'],
        hoverBackgroundColor: ['#F59E0B', '#3B82F6', '#10B981', '#EF4444'],
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,  // This ensures the position is typed correctly
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default JobApplyChart;
