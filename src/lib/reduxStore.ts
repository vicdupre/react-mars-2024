import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

/* const combinedReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(combinedReducer); */

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
