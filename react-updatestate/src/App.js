import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>

      <div>
        <button onClick={() => setNumbers([...numbers, numbers.length])}>+</button>
      </div>

      <ul>
        {numbers.map(n => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
