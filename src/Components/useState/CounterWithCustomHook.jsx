import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import Swal from "sweetalert2";

const CounterWithCustomHook = () => {
  const { counter, addValue, reset, subtractValue } = useCounter(10);
  const [value, setValue] = useState("");

  const messageAlert = () => {
    Swal.fire({
      title: "¡Error!",
      text: "You must type a number",
      icon: "error",
      confirmButtonText: "Cool",
      confirmButtonColor: "#0D6EFD",
    });
  };

  return (
    <>
      <h1 className="text-center mt-4 mb-4 font-bold text-xl text-stone-800 font-mono">
        COUNTER WITH CUSTOM HOOK: {counter}
      </h1>
      <hr />
      <input
        type="text"
        className="form-control container mt-4 shadow h-10"
        placeholder="Type value to add"
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <div className="flex justify-center">
        <button
          onClick={
            value === "" ? messageAlert : () => addValue(parseInt(value, 10))
          }
          className="btn btn-outline-primary mt-4 ml-4 shadow w-40"
        >
          Add value
        </button>
        <button
          onClick={reset}
          className="btn btn-outline-secondary mt-4 ml-4 shadow w-40"
        >
          Reset
        </button>
        <button
          onClick={
            value === ""
              ? messageAlert
              : () => subtractValue(parseInt(value, 10))
          }
          className="btn btn-outline-danger mt-4 ml-4 shadow w-40"
        >
          Subtract value
        </button>
      </div>
    </>
  );
};

export default CounterWithCustomHook;
