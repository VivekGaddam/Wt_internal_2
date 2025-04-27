import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor: Component is being created');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted (inserted into DOM)');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component updated');
    console.log('Previous State:', prevState.count, 'Current State:', this.state.count);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed from DOM');
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log('Render: Rendering the component');
    return (
      <div style={{ padding: "20px" }}>
        <h2>React Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount} style={{ padding: "8px 12px" }}>
          Increment
        </button>
      </div>
    );
  }
}


export default LifecycleDemo;
