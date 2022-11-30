import { combineReducers } from "redux";
import nameReducer from "./nameReducer";
import blogsReducer from "./blogsReducer";
import tagReducer from "./tagReducer";
import userInfoReducer from "./userInfoReducer";

export default combineReducers({
    name: nameReducer,
    //userInfo: userInfoReducer,
    selectedTags: tagReducer,
    blogs: blogsReducer
})