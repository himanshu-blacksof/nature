import React, { useState } from 'react';

const HideShow = () => {
  const [status, setStatus] = useState('');
  return (
    <>
      {status ? (
        <h1 className="text-center font-semibold text-2xl">Hide & Show</h1>
      ) : null}
      {/* <button
        onClick={() => setStatus(false)}
        className="bg-slate-400 m-36 w-16"
      >
        Hide
      </button>
      <button
        onClick={() => setStatus(true)}
        className="bg-slate-300 m-11 w-28"
      >
        Show
      </button> */}
      <button
        onClick={() => setStatus(!status)}
        className="bg-slate-300 m-11 w-28"
      >
        Toggle
      </button>
    </>
  );
};

export default HideShow;
