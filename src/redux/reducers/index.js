import { combineReducers } from "redux";
import navShow from "./nav";
import name from "./name";

export default combineReducers({
    nav: navShow,
    name: name,
})