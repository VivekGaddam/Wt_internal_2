import React, { Component } from 'react';
import LifecycleDemo from './LifecycleDemo.js';  // Import the component
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLifecycleDemo: true,
    };
  }

  toggleLifecycleDemo = () => {
    this.setState({ showLifecycleDemo: !this.state.showLifecycleDemo });
  }

  render() {
    return (
      <div className="App">
        <h1>React Lifecycle Methods Example</h1>
        <button onClick={this.toggleLifecycleDemo} style={{ padding: "8px 12px" }}>
          Toggle Lifecycle Demo Component
        </button>
        {this.state.showLifecycleDemo && <LifecycleDemo />}
      </div>
    );
  }
}
export default App;