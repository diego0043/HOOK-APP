import { useCounter } from "../../hooks/index.js";
import { Small } from "./Small.jsx";

export const Memorize = () => {
  const { counter, addValue } = useCounter(0);
  return (
    <>
      <h1 className="text-center mt-2 mb-2">Memorize</h1>
      <hr />
      <div className="flex justify-center mt-5">
        <button onClick={() => addValue(1)} className="btn btn-primary">+1</button>
      </div>
      <Small counter={counter}/>
    </>
  );
};
