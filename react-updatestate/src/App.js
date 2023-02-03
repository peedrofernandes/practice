import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const addOne = (index) => {
    setCounters(state => {
      const c = [...state];
      c[index] = c[index] + 1;
      return c;
    });
  }

  return (
    <div>
      <div>
        <button onClick={() => addOne(0)}>[0]</button>
        <button onClick={() => addOne(1)}>[1]</button>
        <button onClick={() => addOne(2)}>[2]</button>
        <button onClick={() => addOne(3)}>[3]</button>
      </div>

      <ul>
        {counters.map((c, i) => (
          <li key={i}>{c}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
