import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1 className="text-center mt-2 mb-2 text-2xl">
        USE CALLBACK HOOK: {counter}
      </h1>
      <hr className="container" />
      <div className="flex justify-center mt-4">
        <ShowIncrement increment={increment} />
      </div>
    </>
  );
};
