import React from 'react';
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const pdata = [
  {
    name: 'MongoDb',
    student: 11,
    fees: 120,
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12,
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10,
  },
  {
    name: 'Java',
    student: 10,
    fees: 5,
  },
  {
    name: 'C#',
    student: 9,
    fees: 4,
  },
  {
    name: 'C++',
    student: 10,
    fees: 8,
  },
];

function Chart() {
  return (
    <>
      <div className="items-center bg-white w-[80%] m-auto py-6  shadow-lg ">
        <h1 className="px-8 py-5 text-lg font-semibold">
          Monthly Sign Up Statistics
        </h1>
        <ResponsiveContainer width=" 90%" className="m-auto" aspect={3}>
          <LineChart
            data={pdata}
            className="items-center justify-center text-center m-auto"
          >
            <CartesianGrid />
            <XAxis dataKey="name" interval={'preserveStartEnd'} />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="student" stroke="black" activeDot={{ r: 8 }} />
            <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Chart;
