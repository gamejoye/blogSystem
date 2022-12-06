import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";
import selectedTagsReducer from "./selectedTagsReducer";
import userInfoReducer from "./userInfoReducer";

export default combineReducers({
    userInfo: userInfoReducer,
    selectedTags: selectedTagsReducer,
    blogsState: blogsReducer
})