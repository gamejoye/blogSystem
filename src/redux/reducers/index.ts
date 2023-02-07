import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";
import selectedTagsReducer from "./selectedTagsReducer";
import userInfoReducer from "./userInfoReducer";

const reducers = {
    userInfo: userInfoReducer,
    selectedTags: selectedTagsReducer,
    blogsState: blogsReducer
}

export const allReducers = combineReducers(reducers);