import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Label from './Label';
import Axios from 'axios';

Chart.register(ArcElement);

const Graph = ({ goal }) => {
  const [totalCal, setTotalcal] = useState(0);
  useEffect(() => {
    Axios.get('http://localhost:8000/api/addCalorie')
      .then((response) => {
        const data = response.data;
        let sum = 0;
        const totalCalorie = data.forEach((element) => (sum += element.amount));
        setTotalcal(sum);
      })

      .catch((error) => {
        console.log(error);
      }, []);
  });
  const config = {
    data: {
      datasets: [
        {
          data: [totalCal, goal - totalCal],
          backgroundColor: ['#f9c74f', 'rgb(54, 162, 235)'],
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut {...config}></Doughnut>
          <h3 className="mb-4 font-bold title">
            Remaining
            <span
              className="block text-3xl"
              style={{ color: 'rgb(54, 162, 235)' }}
            >
              {goal - totalCal} Cal
            </span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Label goal={goal} totalCal={totalCal} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
