import { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const addValue = () => {
    setCounter({ ...counter, counter1: counter.counter1 + 1 });
  };
  return (
    <>
      <button onClick={addValue} className="btn btn-outline-success ml-4">
        +1
      </button>
      <br />
      <h1 className="ml-4 mt-4">Counter1: {counter.counter1}</h1>
      <h1 className="ml-4 mt-4">Counter1: {counter.counter2}</h1>
      <h1 className="ml-4 mt-4">Counter1: {counter.counter3}</h1>
    </>
  );
};

export default CounterApp;
