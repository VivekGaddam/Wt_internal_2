import React, { Component } from 'react';
import LifecycleDemo from './LifecycleDemo'; // Importing the component
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Lifecycle Methods Example</h1>
        <LifecycleDemo />
      </div>
    );
  }
}

export default App;
