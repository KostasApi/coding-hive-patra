import React from 'react';
import PropTypes from 'prop-types';

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

Functional.defaultPros = {
  name: ''
};

Functional.propTypes = {
  name: PropTypes.string.isRequired
};

export { Functional };
