import { useReducer } from "react";
import { CardTodo, FormAddTodo, todoReducer } from "./index.js";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Learn React",
    done: false,
  },
  {
    id: new Date().getTime(),
    desc: "Learn Mongo",
    done: false,
  },
  {
    id: new Date().getTime(),
    desc: "Learn Node",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleAddTodo = (newTodo) => {
    console.log(newTodo);
  };

  return (
    <>
      <h1 className="text-center mt-3 mb-3 font-bold ">TODO APP</h1>
      <hr className="container" />
      <div>
        <FormAddTodo addTodo={handleAddTodo} />
      </div>
      <ul className="text-center mt-4 flex justify-center container">
        {todos.map((item, index) => {
          return <CardTodo key={item.id * index} name={item.desc} />;
        })}
      </ul>
    </>
  );
};
