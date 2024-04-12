import { createStore } from "redux";
import rootReducer from "./reducers"; // Assuming you have reducers in a separate file

const store = createStore(rootReducer);

export default store;
