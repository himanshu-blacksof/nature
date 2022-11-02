import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [tnc, setTnc] = useState(false);
  const [city, setCity] = useState('');
  function getFormData(e) {
    console.log(name, tnc, city);
    e.preventDefault();
  }
  return (
    <>
      <h1>Form</h1>
      <form className="flex justify-center items-center" onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <select onChange={(e) => setCity(e.target.value)}>
          <option>select options</option>
          <option>Indore</option>
          <option>Bhopal</option>
          <option>Ujjain</option>
        </select>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setTnc(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
