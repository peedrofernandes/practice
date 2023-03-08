import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Datepicker</h1>
        <div>
          <DatePicker />
        </div>
      </div>
    );
  }
}

export default App;
