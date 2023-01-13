import React, { useState } from 'react';
import logo from './logo.svg';
import { Greeter } from 'baki-awesome-greeter';

import './App.css';

function App() {
  const [greet, setGreet] = useState(null);

  const handleChange = (e) => {
    setGreet(Greeter(e.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div>
          <span>Name</span>
          <input type="text" onChange={handleChange} />
        </div>
        {greet && <h1>{greet}</h1>}
      </header>
    </div>
  );
}

export default App;
