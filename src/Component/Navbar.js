import React from 'react';
import Logo from '../assests/sixteen-miles-out-BU8C2fOcVyw-unsplash.jpg';
export default function Landing() {
  return (
    <>
      <nav className=" text-lg font-bold  h-20 text-white bg-black px-28 flex justify-between ">
        <img
          src={Logo}
          className="w-auto rounded-xl py-2 hover:animate-spin "
          alt="img"
        />
        <ul className="flex float-right  font-serif">
          <li className="mx-4 py-6 cursor-pointer hover:text-xl  text-slate-300 ">
            HOME
          </li>
          <li
            className="mx-4 py-6  
           cursor-pointer hover:text-xl text-slate-300"
          >
            ABOUT
          </li>
          <li
            className="mx-4 py-6 
          cursor-pointer hover:text-xl  text-slate-300"
          >
            CONTACT
          </li>
          <li
            className="mx-4 py-6 
           cursor-pointer  hover:text-xl  text-slate-300"
          >
            SUPPORT
          </li>
        </ul>
      </nav>
    </>
  );
}
