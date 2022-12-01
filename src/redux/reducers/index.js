import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";
import tagReducer from "./tagReducer";
import userInfoReducer from "./userInfoReducer";

export default combineReducers({
    userInfo: userInfoReducer,
    selectedTags: tagReducer,
    blogs: blogsReducer
})