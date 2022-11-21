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
   



  // dummy data 
const companyData = [
  {
    company: 'Tata',
    employee: 11,
    salary: 120,
  },
  {
    company: 'Mahindra',
    employee: 15,
    salary: 12,
  },
  {
    company: 'Hyundai',
    employee: 5,
    salary: 10,
  },
  {
    company: 'Honda',
    employee: 10,
    salary: 5,
  },
  {
    company: 'kia',
    employee: 9,
    salary: 4,
  },
  {
    company: 'volvo',
    employee: 10,
    salary: 8,
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
            data={companyData}
            className="items-center justify-center text-center m-auto"
          >
            <CartesianGrid />
            <XAxis dataKey="company" interval={'preserveStartEnd'} />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="employee" stroke="black" activeDot={{ r: 8 }} />
            <Line dataKey="salary" stroke="red" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Chart;
