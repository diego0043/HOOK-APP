import { Hijo } from "./Hijo";
import { useCallback, useState } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback((num) => {
    setValor( ( value ) => value + num)
  }, []);

  return (
    <div>
      <div className="text-center mt-2 mb-2">
        <h1>Padre</h1>
        <p> Total: {valor} </p>
      </div>

      <hr />
      <div className="flex justify-center mt-4">
        {numeros.map((n) => (
          <Hijo key={n} numero={n} incrementar={incrementar} />
        ))}
      </div>

      {/* <Hijo /> */}
    </div>
  );
};
