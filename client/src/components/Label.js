import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Label = () => {
  const [totalCal, setTotalcal] = useState(0);
  console.log(totalCal);

  useEffect(() => {
    Axios.get('http://localhost:8000/api/addCalorie')
      .then((response) => {
        const data = response.data;
        let sum = 0;
        const totalCalorie = data.forEach((element) => (sum += element.amount));
        setTotalcal(sum);
      })

      .catch(
        (error) => {
          console.log(error);
        },
        [totalCal]
      );
  });

  //  let sum = 0;
  //const totalCalorie = data.forEach((element) => (sum += element.amount));

  return (
    <>
      <div className="labels flex justify-between">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded py-3"></div>
          <h3 className="text-md">Taken</h3>
        </div>
        <h3 className="font-bold">{totalCal}</h3>
      </div>
      <div className="labels flex justify-between">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded py-3"></div>
          <h3 className="text-md">Remaining</h3>
        </div>
        <h3 className="font-bold">{totalCal}</h3>
      </div>
    </>
  );
};

export default Label;
