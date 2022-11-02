import React, { useEffect, useRef, useState } from 'react';

const Text = () => {
  const [inputValue, setInputValue] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(e) {
    setInputValue(e.target.value);
    setPrint(false);
  }

  return (
    <>
      <input type="text" onChange={getData} />
      {print ? <h1> {inputValue}</h1> : null}
      <button onClick={() => setPrint(true)}>PRINT</button>
    </>
  );
};

export default Text;
