import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useState Hook Example: Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment} style={{ padding: "8px 12px", margin: "5px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ padding: "8px 12px", margin: "5px" }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
