import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incrementer, setIncrementer] = useState(0);
  const [decIncrementer, setDecIncrementer] = useState(0);

  function increment() {
    setCount(count + incrementer);
  }
  function decrement() {
    setCount(count - decIncrementer);
  }

  function changeIncrementerBy() {
    setIncrementer(incrementer + 1);
  }
  function changeDecIncrementerBy() {
    setDecIncrementer(decIncrementer + 1);
  }

  return (
    <>
      <div>
        <h1>Count value is : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div>
        <h1>We are incrementing by : {incrementer}</h1>
        <button onClick={changeIncrementerBy}>Increment</button>
        <h1>We are decrementing by : {decIncrementer}</h1>
        <button onClick={changeDecIncrementerBy}>increment</button>
      </div>
    </>
  );
};

export default Counter;
