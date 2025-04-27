import logo from './logo.svg';
import './App.css';
import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null); 

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Hook Example</h2>
      <input
        type="text"
        ref={inputRef} 
        placeholder="Click the button to focus me"
        style={{ padding: "8px", width: "250px" }}
      />
      <br /><br />
      <button onClick={handleFocus} style={{ padding: "8px 12px" }}>
        Focus the Input
      </button>
    </div>
  );
}

export default App;
