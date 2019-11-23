import React from 'react';

import ClassBased from './components/ClassBased';
import { Functional } from './components/Functional';
import './App.css';

const App = () => {
  console.log('App Component');

  return (
    <>
      <div>App</div>
      <ClassBased country="Greece" />
      <Functional name="Konstntinos" />
    </>
  );
};

export default App;
