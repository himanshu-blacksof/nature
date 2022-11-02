import React, { useState } from 'react';
import './perks.css';

const Message = () => {
  const [data, setData] = useState(0);
  //   let data = 'himanshu';
  //   function apple() {
  //     data = 'Himanshu Tomar';
  //     alert(data);
  //   }
  function update() {
    setData(data + 1);
  }
  return (
    <>
      <section className="flex justify-center items-center flex-col">
        <h1 className="text-center">{data} </h1>
        <button className="btn-wrapper " onClick={update}>
          Submit
        </button>
      </section>
    </>
  );
};

export default Message;
