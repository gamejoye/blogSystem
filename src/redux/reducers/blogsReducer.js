import { ADD_BLOG, REMOVE_BLOG, SET_ALL_BLOGS } from "../constant";
const initial = [];
export const blogsReducer = (state=initial, action) => {
    const {type, data} = action;
    switch(type) {
        case SET_ALL_BLOGS:
            return data;
        case REMOVE_BLOG:
            return state.filter(blog => blog.id != data.id);
        case ADD_BLOG:
            return [...state, data];
        default:
            return state;
    }
}