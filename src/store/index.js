import { createStore } from "redux";

// Reducer untuk action pada button dengan state awal bernilai 0
const rootReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);

export default store;
