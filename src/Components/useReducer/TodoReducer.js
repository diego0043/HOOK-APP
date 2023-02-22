export const todoReducer = (initialState = {}, action) => {
  switch (action.type) {
    case "abc":
      return [...initialState, action.payload];
    default:
      return initialState;
  }
};
