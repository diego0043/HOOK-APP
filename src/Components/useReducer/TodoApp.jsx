import { useTodo } from "../../hooks/useTodo.js";
import { CardTodo, FormAddTodo } from "./index.js";

export const TodoApp = () => {
  const { todos, counter, countPending, handleAddTodo, handleDeleteTodo, handleFinalyTodo } =
    useTodo();

  return (
    <>
      <h1 className="text-center mt-3 mb-3 font-bold ">TODO APP</h1>
      <h2 className="text-center mt-3 mb-3 font-bold ">Task: {counter} - Pending: {countPending}</h2>
      <hr className="container" />
      <div>
        <FormAddTodo addTodo={handleAddTodo} />
      </div>
      <ul className="text-center mt-4 flex justify-center container-fluid row">
        {todos.map((item, index) => {
          return (
            <CardTodo
              key={item.id * index}
              item={item}
              del={handleDeleteTodo}
              finaly={handleFinalyTodo}
            />
          );
        })}
      </ul>
    </>
  );
};
