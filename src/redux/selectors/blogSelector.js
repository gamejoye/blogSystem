import { createSelector } from "@reduxjs/toolkit";
import { blogsAdpater } from "../reducers/blogsReducer";
import { selectSelectedTags } from "./tagsSelector";
import { selectName } from "./userInfoSelector";
export const { selectAll: selectAllBlogs } = blogsAdpater.getSelectors(state => state.blogsState);
export const selectBlogByTitle = createSelector(
    [selectAllBlogs, (_state, title) => title],
    (blogs, title) => blogs.filter(blog => blog.title === title)
)
export const selectAllTags = createSelector(
    [selectAllBlogs],
    (blogs) => {
        const tags = [];
        blogs.forEach(blog => blog.tags.forEach(tag => {
            if (!tags.includes(tag)) tags.push(tag);
        }))
        return tags;
    }
)
export const selectFilterBlogs = createSelector(
    [selectSelectedTags, selectName, selectAllBlogs],
    (tags, name, blogs) => {
        if (!name) return [];
        if (tags.length === 0) return blogs;
        return blogs.filter(blog => blog.tags.some(tag => tags.includes(tag)));
    }
)
export const selectTitles = createSelector(
    [selectAllBlogs],
    (blogs) => blogs.map(blog => blog.title)
)
export const selectTitlesByTag = createSelector(
    [selectAllBlogs, (_state, tag) => tag],
    (blogs, tag) => {
        const titles = [];
        blogs.forEach(blog => {
            if (blog.tags.includes(tag)) titles.push(blog.title);
        })
        return titles;
    }
)