import { useRef } from "react";
import { useForm } from "../../hooks/useForm";
export const FormAddTodo = ({ addTodo }) => {
  const initial = { todoItem: "" };
  const { todoItem, formState, changeText, onResetForm } = useForm(initial);
  const inp = useRef();

  const newTodo = (description) => {
    if (description.trim().length >= 1 && addTodo) {
      addTodo({
        id: new Date().getTime() * Math.random(),
        desc: description,
        done: false,
      });

      onResetForm();
      inp.current.focus();
    }
  };

  return (
    <>
      <div className="mt-4 container ">
        <label className="form-label text-md">
          Type something you want to learn:
        </label>
        <input
          ref={inp}
          className="form-control mt-2 shadow"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Learn..."
          name="todoItem"
          value={todoItem}
          onChange={changeText}
          autoComplete="off"
        />
        <div className="flex justify-center mt-4">
          <button
            onClick={() => newTodo(todoItem)}
            className="btn btn-outline-primary w-20 shadow"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};
