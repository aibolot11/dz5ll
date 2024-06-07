import { legacy_createStore as createStore } from "redux";
import { productReducer } from "./productReducer.js";
import { cardReducer } from "./cardReducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  card: productReducer,
  counter: cardReducer,
});
export const store = createStore(rootReducer);
