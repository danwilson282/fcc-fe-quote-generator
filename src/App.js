//import React from 'react';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './Film_strip.png';
import { Counter } from './features/counter/Counter';
import { Random } from './features/generate/Generate';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Random />
      </header>
    </div>
  );
}

export default App;
