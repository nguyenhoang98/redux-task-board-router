import { combineReducers } from "redux";
import Products from "./Product";
import Editting from "./Editting";
var appReducers = combineReducers({
  Products: Products,
  Editting: Editting,
});
export default appReducers;
