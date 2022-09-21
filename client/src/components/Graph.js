import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Label from './Label';

Chart.register(ArcElement);

const config = {
  data: {
    datasets: [
      {
        data: [300, 100],
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

const Graph = () => {
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut {...config}></Doughnut>
          <h3 className="mb-4 font-bold title">
            Total
            <span className="block text-3xl text-emerald-400">{0} Cal</span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Label />
        </div>
      </div>
    </div>
  );
};

export default Graph;
