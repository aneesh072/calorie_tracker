import React, { useState } from 'react';

const Goal = () => {
  const [goal, setGoal] = useState(0);

  const submitGoal = (e) => {
    e.preventDefault();
    setGoal(e.target.value);
  };
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl"> Set Goal</h1>

      <form id="form">
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="number"
              placeholder="Calorie amount"
              className="form-input"
            ></input>
          </div>
          <div className="submit-btn">
            <button
              className="border py-2 text-white bg-indigo-500 w-full"
              onClick={submitGoal}
            >
              Set
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Goal;
