import { useEffect, useState } from "react";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;
  const changeText = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
 
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <>
      <h1 className="text-center mt-4 mb-4 font-bold text-xl text-stone-800 font-mono">
        SIMPLE FORM
      </h1>
      <hr />
      <input
        type="text"
        className="form-control container mt-4 shadow h-10"
        placeholder="Username"
        aria-describedby="basic-addon1"
        name="username"
        value={username}
        onChange={(e) => changeText(e)}
      />
      <input
        type="email"
        className="form-control container mt-4 shadow h-10"
        placeholder="example@gmail.com"
        aria-describedby="basic-addon1"
        name="email"
        value={email}
        onChange={(e) => changeText(e)}
      />
    </>
  );
};

export default SimpleForm;
