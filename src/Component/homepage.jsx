import React from 'react';
import { MdFullscreen, MdKeyboardArrowDown } from 'react-icons/md';
const Homepage = () => {
  const boxs = [
    {
      title: 'ENERGY PROVIDERS',
      no: '35',
    },
    {
      title: '    ENERGY PROVIDERS PLANS',
      no: '2,869',
    },
    {
      title: 'SIGN UPS',
      no: '31,955',
    },
    {
      title: 'UTILITY PROVIDERS',
      no: '39',
    },
    {
      title: '    UTILITY PROVIDERS PLANS',
      no: '59',
    },
    {
      title: 'REFERALS',
      no: '3',
    },
  ];
  return (
    <>
      <div className="">
        <div className="text-white flex items-center gap-x-3 text-xl relative">
          <MdFullscreen />
          DASHBOARD
          <div className="top-0 right-8 absolute flex items-center gap-x-2">
            Welcome Admin <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="flex gap-x-6 my-14 text-center items-center ">
          {boxs.map((box, index) => (
            <div
              key={index}
              className="bg-slate-200 w-60 rounded-sm py-4 shadow-md"
            >
              <h1 className="text-gray-400 font-medium"> {box.title} </h1>
              <h1 className="font-semibold">{box.no}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
