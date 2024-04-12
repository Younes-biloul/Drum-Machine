import { combineReducers } from "redux";

const initialState = ""; // Initial state should be defined separately

const textDisplayer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return action.payload; // Use action.payload to update the state with the new value
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  displayer: textDisplayer,
  // Add other reducers here if needed
});

export default rootReducer;
