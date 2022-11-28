import { combineReducers } from "redux";
import { navReducer } from "./navReducer";
import { nameReducer } from "./userInfoReducer";
import { blogsReducer } from "./blogsReducer";
import { tagReducer } from "./tagReducer";

export default combineReducers({
    nav: navReducer,
    name: nameReducer,
    tag: tagReducer,
    blogs: blogsReducer
})