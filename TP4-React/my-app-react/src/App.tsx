import React from 'react';
import im from './im.jpg';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>LISTE DES BIERRES</h1>
        <img src={im} className="App-logo" alt="im" />

           </header>
    </div>
  );
}

export default App;
