import { ADD_BLOG, REMOVE_BLOG, SET_ALL_BLOGS, SET_SHOW_BLOGS } from "../constant";

export const setAllBlogs = data => ({
    type: SET_ALL_BLOGS,
    data
});

export const setShowBlogs = data => ({
    type: SET_SHOW_BLOGS,
    data
});

export const removeBlog = data => ({
    type: REMOVE_BLOG,
    data
});

export const addBlog = data => ({
    type: ADD_BLOG,
    data
});