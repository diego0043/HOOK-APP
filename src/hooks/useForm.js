import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const changeText = ({target}) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setFormState(initialForm);
    console.log("Formulario reiniciado", formState)
  };

  return {
    ...formState,
    formState,
    changeText,
    onResetForm,
  };
};
