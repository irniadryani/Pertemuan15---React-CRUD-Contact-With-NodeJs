import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension'; // Extension untuk debugging kode

// Reducer untuk action pada button dengan state awal bernilai 0
const rootReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer, composeWithDevTools());

export default store;




