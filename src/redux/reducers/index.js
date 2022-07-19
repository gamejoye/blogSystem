import { combineReducers } from "redux";
import navShow from "./navShow";
import userName from "./userName"

export default combineReducers({
    nav:navShow,
    username:userName
})