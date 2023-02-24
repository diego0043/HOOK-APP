export const todoReducer = (initialState = {}, action) => {
  switch (action.type) {
    case "addTodo".trim():
      const newTodo = [...initialState, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    case "deleteTodo".trim():
      const newData = initialState.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newData));
      return newData;
    case "finalyTodo".trim():
      const data = JSON.parse(localStorage.getItem("todos"));
      const finalyTodo = data.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = true;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(finalyTodo));
      return finalyTodo;
    default:
      return initialState;
  }
};
