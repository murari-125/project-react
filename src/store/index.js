import { configureStore, combineReducers } from "@reduxjs/toolkit";
import formSlice from "./formSlice";

const rootReducer = combineReducers({
  form: formSlice.reducer,
});

const appReducer = (state, action) => {
  return rootReducer(state, action);
};

let store = configureStore({
  reducer: appReducer,
});

export default store;
