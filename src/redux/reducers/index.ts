import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";
import selectedTagsReducer from "./selectedTagsReducer";
import userInfoReducer from "./userInfoReducer";
import leaveMessagesReducer from "./leaveMessagesReducer";

const reducers = {
    userInfo: userInfoReducer,
    selectedTags: selectedTagsReducer,
    blogsState: blogsReducer,
    leaveMessages: leaveMessagesReducer
}

export const allReducers = combineReducers(reducers);