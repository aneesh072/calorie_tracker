import React, { useEffect, useState } from 'react';
import List from './List';
import Axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [calorieList, setCalorieList] = useState([]);

  const addFood = () => {
    Axios.post('http://localhost:8001/api/addCalorie', {
      name: name,
      amount: amount,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get('http://localhost:8001/api/addCalorie')
      .then((response) => {
        setCalorieList(response.data);
      })
      .catch(
        (error) => {
          console.log(error);
        },
        [calorieList]
      );
  });

  const deleteCalorie = (id) => {
    Axios.delete(`http://localhost:8001/api/addCalorie/${id}`).then(() => {
      setCalorieList(
        calorieList.filter((val) => {
          return val._id !== id;
        })
      );
    });
    window.location.reload(false);
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl"> Calorie Consumption</h1>
      <form id="form" onSubmit={addFood}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Food name..."
              className="form-input"
            ></input>
          </div>
          <div className="input-group">
            <input
              type="text"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Calorie amount"
              className="form-input"
              required
            ></input>
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-green-400 w-full">
              Add
            </button>
          </div>
        </div>
      </form>
      <List calorieList={calorieList} deleteCalorie={deleteCalorie} />
    </div>
  );
};

export default Form;
