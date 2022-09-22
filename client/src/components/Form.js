import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import List from './List';
import Axios from 'axios';

const Form = () => {
  const { register, handleSubmit, resetField } = useForm();

  const [calorieList, setCalorieList] = useState([]);

  const finalList = useEffect(() => {
    Axios.get('http://localhost:8000/api/addCalorie')
      .then((response) => {
        setCalorieList(response.data);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl"> Calorie Consumption</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register('name')}
              placeholder="Food name..."
              className="form-input"
            ></input>
          </div>
          <div className="input-group">
            <input
              type="text"
              {...register('amount')}
              placeholder="Calorie amount"
              className="form-input"
            ></input>
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Add
            </button>
          </div>
        </div>
      </form>
      <List calorieList={calorieList} />
    </div>
  );
};

export default Form;
