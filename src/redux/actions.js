import { SET_NAME, SET_NAV_SHOW, SET_ALL_BLOGS, SET_SHOW_BLOGS, REMOVE_BLOG, SET_TAG, ADD_BLOG, FILTER_TITLE } from "./constant"
export const setNav = data => ({
    type: SET_NAV_SHOW,
    data
});

export const setName = data => ({
    type: SET_NAME,
    data
});

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

export const setTag = data => ({
    type: SET_TAG,
    data
});

export const filterBlog = data => ({
    type: FILTER_TITLE,
    data
})

