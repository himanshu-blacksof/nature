import React, { useState } from 'react';

const Rendering = () => {
  const [loggedIn, setLoggedIn] = useState(3);
  return (
    <>
      <div>
        {loggedIn == 1 ? (
          <h1>hello welcome </h1>
        ) : loggedIn == 2 ? (
          <h1>plz login user 2</h1>
        ) : (
          <h1>login 3rd user </h1>
        )}
      </div>
    </>
  );
};

export default Rendering;
