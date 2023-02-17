import { useMemo, useState } from "react";
import { useCounter } from "../../hooks/index.js";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Iterating...");
  }

  return `${iterationNumber} iteration done`;
};

export const MemoHook = () => {
  const { counter, addValue } = useCounter(0);
  const [show, setShow] = useState(true);
  const memorizeValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
      <h1 className="text-center mt-2 mb-2">Memorize</h1>
      <hr />
      <h4>{memorizeValue}</h4>
      <div className="flex justify-center mt-5">
        <button onClick={() => addValue(1)} className="btn btn-primary mr-4">
          +1
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setShow(!show);
          }}
        >
          Show / Hide {JSON.stringify(show)}
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <small>Counter: {counter}</small>
      </div>
    </>
  );
};
