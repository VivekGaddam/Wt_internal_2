// File: App.js
import React from 'react';
import Greeting from './Greeting';  // Import the Greeting component
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Props Example</h1>
      <Greeting name="Vivek" place="Telangana" />
      <Greeting name="Ankit" place="Mumbai" />
      <Greeting name="John" place="New York" />
    </div>
  );
}

export default App;
