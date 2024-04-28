import React from 'react';
import logo from './logo.svg';
import Login from './pages/login';

import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="mt-5 px-3 py-4">
      <h1 className="h1 display-1">Counter Component</h1>
      <h2 className="h1 display-1 mt-5 mb-3">0</h2>
      <div className="mt-5">
        <button
          className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2">
          Add
        </button>
        <button
          className="btn btn-dark btn-lg mx-3 px-5 py-3 mt-2" >
          Remove
        </button>
      </div>
    </div>
  )
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
