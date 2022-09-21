import React from 'react';
const obj = [
  {
    color: '#f9c74f',
    type: 'Taken',
    percent: 45,
  },
  {
    color: 'rgb(54, 162, 235)',
    type: 'Remaining',
    percent: 55,
  },
];

const Label = () => {
  return (
    <>
      {obj.map((value, index) => (
        <LabelComponent key={index} data={value} />
      ))}
    </>
  );
};

const LabelComponent = ({data}) => {
  if (!data) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: data.color ?? '#f9c74f' }}
        ></div>
        <h3 className="text-md">{data.type ?? ''}</h3>
      </div>
      <h3 className="font-bold">{data.percent ?? 0}%</h3>
    </div>
  );
};

export default Label;
