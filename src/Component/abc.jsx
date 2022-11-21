import React from 'react';
import { useState } from 'react';

const Abc = () => {
  const menus = [
    {
      name: 'himanshu',
      age: '22',
    },
    {
      name: 'avc',
      age: '22',
    },
    {
      name: 'tjdhg',
      age: '22',
    },
  ];

  return (
    <>
      <div className="text-center">
        {menus.map((menu, index) => (
          <div key={index}>
            <li className=" text-base flex items-center gap-x-4 cursor-pointer my-3  hover:bg-green-100 rounded-md">
              <span>{menu.name}</span>
              <h1>{menu.age}</h1>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};

export default Abc;
