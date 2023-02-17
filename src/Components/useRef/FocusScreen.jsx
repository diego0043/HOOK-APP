import { useRef } from "react";
export const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select(); 
  };

  return (  
    <>
      <h1 className="text-center mt-2 mb-2">Focus Screen</h1>
      <hr />
      <div className="flex justify-center mt-4">
        <input
          ref={inputRef}
          type="text"
          className="form-control container"
          placeholder="Ingrese su nombre"
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClick}
          className="btn btn-outline-primary mt-4 w-20"
        >
          Focus
        </button>
      </div>
    </>
  );
};
