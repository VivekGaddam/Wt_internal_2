// File: Greeting.js
import React from 'react';

function Greeting(props) {
  return (
    <div style={{ padding: "10px", margin: "10px", border: "1px solid gray", borderRadius: "8px" }}>
      <h2>Hello, {props.name}!</h2>
      <p>Welcome to {props.place}.</p>
    </div>
  );
}

export default Greeting;
