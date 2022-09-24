import React from 'react';
import 'boxicons';

const List = ({ calorieList, deleteCalorie }) => {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {calorieList.map((value, index) => (
        <CalorieIntake
          key={index}
          category={value}
          deleteCalorie={deleteCalorie}
        />
      ))}
    </div>
  );
};

const CalorieIntake = ({ category, deleteCalorie }) => {
  if (!category) return null;
  return (
    <div className="item flex justify-center bg-gray-50 py-2 rounded-r">
      <button className="px-3" onClick={() => deleteCalorie(category._id)}>
        <box-icon name="trash" color={'red'}></box-icon>
      </button>
      <span className="block w-full">{category.name ?? ''}</span>
      <span className="block w-full">{category.amount ?? ''}Cal</span>
    </div>
  );
};

export default List;
