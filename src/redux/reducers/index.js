import { combineReducers } from "redux";
import nameReducer from "./userInfoReducer";
import blogsReducer from "./blogsReducer";
import tagReducer from "./tagReducer";

export default combineReducers({
    name: nameReducer,
    selectedTags: tagReducer,
    blogs: blogsReducer
})