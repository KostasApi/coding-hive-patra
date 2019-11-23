import React from 'react';

import ClassBased from './components/ClassBased';
import { Functional } from './components/Functional';
import './App.css';

const App = () => {
  return (
    <>
      <div>App</div>
      <ClassBased />
      <Functional />
    </>
  );
};

export default App;
