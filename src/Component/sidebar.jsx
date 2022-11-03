import React from 'react';
import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import {
  MdDashboard,
  MdFingerprint,
  MdSettingsSuggest,
  MdPriorityHigh,
  MdDescription,
  MdBolt,
  MdPeople,
  MdStar,
  MdMonitor,
  MdGridOn,
} from 'react-icons/md';
import Homepage from './homepage';
import Chart from './chart';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    {
      title: 'DASHBOARD',
      icons: <MdGridOn />,
    },
    {
      title: 'UTILITY PROVIDERS',
      icons: <MdFingerprint />,
    },
    {
      title: 'ENERGY PROVIDERS',
      icons: <MdBolt />,
    },
    {
      title: 'CUSTOMERS',
      icons: <MdPeople />,
    },
    {
      title: 'REFERRALS',
      icons: <MdStar />,
    },
    {
      title: 'EXPORTS',
      icons: <MdDashboard />,
    },
    {
      title: 'CMS',
      icons: <MdMonitor />,
    },
    {
      title: 'TERMS AND CONDITIONS',
      icons: <MdDescription />,
    },
    {
      title: 'VALIDATION',
      icons: <MdPriorityHigh />,
    },
    {
      title: 'SETTINGS',
      icons: <MdSettingsSuggest />,
    },
  ];
  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? 'w-72' : 'w-20'
          } h-screen bg-gray-50 relative duration-300 px-5 py-8 shadow-md`}
        >
          <div className="flex items-center ">
            <img
              src="https://live.staticflickr.com/65535/49588087256_22de22dee2_c.jpg"
              alt=""
              className=" m-auto w-36 my-2 rounded-2xl border-2"
            />
            <h1
              className={`text-3xl font-bold text-gray-700 ${
                !open && 'hidden'
              }`}
            >
              NESTLE
            </h1>
          </div>
          <FaChevronLeft
            className={` absolute cursor-pointer rounded-full -right-3  bg-green-500 top-12 text-3xl text-white  p-1 ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <ul className="pt-6">
            {menus.map((menu, index) => (
              <li
                key={index}
                className=" text-base flex items-center gap-x-4 cursor-pointer my-3  hover:bg-green-100 rounded-md"
              >
                <span
                  className={`text-2xl ${
                    open ? 'text-gray-300' : 'text-black'
                  } duration-300`}
                >
                  {menu.icons}
                </span>
                <h1
                  className={`${!open && 'hidden'} font-semibold duration-300`}
                >
                  {menu.title}
                </h1>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7 flex-1  h-[35vh]  bg-[#171717] ">
          <Homepage />
          <Chart />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
