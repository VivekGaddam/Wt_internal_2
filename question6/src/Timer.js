import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component rendered or count updated!");
  }, [count]); 

  return (
    <div style={{ padding: "20px" }}>
      <h2>useEffect Hook Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: "8px 12px" }}>
        Increment
      </button>
    </div>
  );
}

export default Timer;
