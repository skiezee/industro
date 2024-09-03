import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Innovation hub',
        backgroundColor: '#F87171',
        data: [2, 3, 4, 5, 4, 6, 5, 6],
      },
      {
        label: 'Video tutorial',
        backgroundColor: '#FBBF24',
        data: [1, 2, 3, 3, 4, 4, 5, 4],
      },
      {
        label: 'Job board',
        backgroundColor: '#60A5FA',
        data: [2, 2, 3, 2, 5, 3, 6, 5],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,  
      },
      title: {
        display: true,
        text: 'Summary of your Industro account activity',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ActivityChart;
