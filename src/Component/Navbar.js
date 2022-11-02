import React from 'react';
import Logo from '../assests/sixteen-miles-out-BU8C2fOcVyw-unsplash.jpg';
export default function Landing() {
  return (
    <>
      <nav className=" font-bold  h-16 sm:h-20  text-white bg-black px-1 flex justify-between   ">
        <img
          src={Logo}
          className="w-auto sm:pl-14 rounded-md py-2 sm:hover:animate-pulse transition duration-200 ease-out cursor-pointer"
          alt="img"
        />
        <ul className="flex  text-xs sm:text-base font-serif sm:pr-14 sm:pl-8 ">
          <li className="ml-4 mr-1 py-6 cursor-pointer   text-slate-300  active:underline ">
            HOME
          </li>
          <li
            className="mx-1 py-6  
           cursor-pointer  text-slate-300 active:underline "
          >
            ABOUT
          </li>
          <li
            className="mx-1 py-6  
          cursor-pointer  text-slate-300 active:underline"
          >
            CONTACT
          </li>
          <li
            className="mx-1 py-6 
           cursor-pointer    text-slate-300 active:underline"
          >
            SUPPORT
          </li>
        </ul>
      </nav>
    </>
  );
}
