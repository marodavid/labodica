import React from 'react';
import logo from './logo.svg';
import losLoquitos from './images/losLoquitos.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={losLoquitos} className="App-logo" alt="losLoquitos" />
        <p>
          Bienvenidos a <b>la bodica</b>!!!!
          {/*Edit <code>src/App.js</code> and save to reload.*/}
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
      <img src={losLoquitos} className="App-logo" alt="losLoquitos" />
    </div>
  );
}

export default App;
