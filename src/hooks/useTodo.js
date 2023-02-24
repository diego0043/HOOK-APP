import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../components/useReducer/TodoReducer";

const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const [counter, setCounter] = useState(0);
  const [countPending, setCountPending] = useState(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    countTodos();
    countPendingTodos();
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    const action = { type: "addTodo", payload: newTodo };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = { type: "deleteTodo", payload: id };
    dispatch(action);
  };

  const handleFinalyTodo = (id) => {
    const action = { type: "finalyTodo", payload: id };
    dispatch(action);
  };

  const countTodos = () => {
    setCounter(() => todos.length);
  };

  const countPendingTodos = () => {
    setCountPending(() => todos.filter((todo) => !todo.done).length);
  };

  return {
    todos,
    counter,
    countPending,
    handleAddTodo,
    handleDeleteTodo,
    handleFinalyTodo,
  };
};
