import Message from "./Message";
import { useForm } from "../../hooks/useForm";

const FormWithCustomHook = () => {
  const form = {
    username: "",
    email: "",
    password: "",
  };
  const { formState, changeText, username, email, password, onResetForm } =
    useForm(form);

  return (
    <>
      <h1 className="text-center mt-4 mb-4 font-bold text-xl text-stone-800 font-mono">
        SIMPLE FORM - CUSTOM HOOK
      </h1>
      <hr />
      <input
        type="text"
        className="form-control container mt-4 shadow h-10"
        placeholder="Username"
        aria-describedby="basic-addon1"
        name="username"
        value={username}
        onChange={changeText}
      />
      <input
        type="email"
        className="form-control container mt-4 shadow h-10"
        placeholder="example@gmail.com"
        aria-describedby="basic-addon1"
        name="email"
        value={email}
        onChange={changeText}
      />
      <input
        type="password"
        className="form-control container mt-4 shadow h-10"
        placeholder="password"
        aria-describedby="basic-addon1"
        name="password"
        value={password}
        onChange={changeText}
      />

      <div className="flex justify-center mt-4">
        <button
          onClick={onResetForm}
          className="btn btn-outline-secondary w-20"
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default FormWithCustomHook;
