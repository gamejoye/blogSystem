import { combineReducers } from "redux";
import navShow from "./navShow";
import name from "./name"

export default combineReducers({
    nav:navShow,
    name: name
})