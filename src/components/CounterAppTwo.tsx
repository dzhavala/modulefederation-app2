import React, { useState } from "react";
import './CounterAppTwo.css';

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="CounterAppTwo">
      <p>Your click count : {count} </p>
      <button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
