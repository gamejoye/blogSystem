import { combineReducers } from "redux";
import navShow from "./navShow";
import user from "./user"

export default combineReducers({
    nav:navShow,
    user: user
})