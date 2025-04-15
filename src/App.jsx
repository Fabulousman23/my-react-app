import React, { useState } from 'react';
import { CORE_CONCEPTS } from './data.jsx';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TapButton from './components/TapButton.jsx';
import { EXAMPLES } from './data.jsx';
import NewCoreConcept from './components/NewCoreConcept.jsx';
import Examples from './components/Examples.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <NewCoreConcept />
        <Examples />
      </main >
    </ >
  );
}

export default App;