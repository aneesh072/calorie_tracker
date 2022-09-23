import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Label = ({ goal, totalCal }) => {
  return (
    <>
      <div className="labels flex justify-between">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded py-3"></div>
          <h3 className="text-md">Goal</h3>
        </div>
        <h3 className="font-bold">{goal} Cal</h3>
      </div>
      <div className="labels flex justify-between">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded py-3"></div>
          <h3 className="text-md">Consumed</h3>
        </div>
        <h3 className="font-bold" style={{ color: '#f9c74f' }}>
          {totalCal} Cal
        </h3>
      </div>
    </>
  );
};

export default Label;
