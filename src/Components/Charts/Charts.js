import React from 'react';
import {Bar , Doughnut, Line, Pie, PolarArea} from 'react-chartjs-2';


const labels = ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12']
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

//Dognut

const dataDognut = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  // Line 

  const dataLineChart = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
      label: 'Purchase Amount',
      data: [65, 59, 80, 81, 26, 55, 40],
      fill: false,
      borderColor: '#ef476f',
      yAxisID: 'y',
      },
      {
      label: 'Sold Amount',
      data: [95, 29, 40, 11, 76, 95, 20],
      fill: false,
      borderColor: 'rgb(54, 162, 235)',
      yAxisID: 'y1',
      }
    ],
  };
   
    const options = {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
          },
        stacked: false,
        plugins: {
          title: {
            display: true,
            
          }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
           position: 'right',
  
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      
    },
  };

  // Pie Chart
  
const dataPie = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };


// Polar 

const dataPolar = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
export const BarChart = () => {
  return (
    <div>
    <Bar data={data}
        height={500}
        width={600}
        />
    </div>
  )
}


export const DoughnutChart = () => {
    return (
        <div>
            <Doughnut data={dataDognut}/>
        </div>
    )
  }
export const LineChart = () => {
    return (
        <Line data={dataLineChart} options={options}/>
        )
  }
export const PieChart = () => {
    return (
        <Pie data={dataPie}/>
        )
  }
  export const PolarAreaChart = () => {
    return (
        <div>
            <PolarArea  data={dataPolar}
                height={400}
                width={600}
                />
        </div>
        )
  }
