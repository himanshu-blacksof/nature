import React from 'react';
import Nature from '../assests/jesse-gardner-9DHyVy-G1rM-unsplash.jpg';
export default function home() {
  return (
    <>
      <div className=" main bg-zinc-300 h-auto flex justify-around ">
        <div className="  pt-28 w-1/4 ">
          <h1 className="text-4xl text-neutral-500 ">
            If you truly love nature, you will find beauty everywhere
          </h1>
          <p className="text-base py-8 ">
            "The tree which moves some to tears of joy is in the eyes of others
            only a green thing which stands in the way. Some see nature all
            ridicule and deformity, and by these I shall not regulate my
            propositions. And some see no nature at all. But to the eyes of the
            man of imagination, nature is imagination itself
          </p>
          <div className=" pb-10 ">
            <button className="bg-yellow-800 hover:translate-x-4  hover:text-lg w-24 h-10 rounded-2xl hover:border-solid hover:bg-gray-500 hover:text-gray-300  hover:border-2 hover:border-black">
              click
            </button>
          </div>
        </div>
        <img
          className="w-96 mt-14 h-96 rounded-xl  hover:animate-pulse  "
          src={Nature}
          alt="img"
        />
      </div>
    </>
  );
}
