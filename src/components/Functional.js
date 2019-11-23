import React from 'react';

const Functional = ({ name }) => {
  console.log('Functional Component');

  return (
    <>
      <div>
        <p>Functional Component</p>
        <p>{name}</p>
      </div>
    </>
  );
};

export { Functional };
