import { combineReducers, createStore } from "redux";
import snackbarReducer from "./ducks/snackbar";
import verifyLogin from "./ducks/verifyLogin";

const reducer = combineReducers({
  snackbar: snackbarReducer,
  verifyLogin: verifyLogin
});

const store = createStore(reducer, {});

export default store;
