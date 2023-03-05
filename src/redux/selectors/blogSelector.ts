import { createSelector } from "@reduxjs/toolkit";
import { blogsAdpater } from "../reducers/blogsReducer";
import { IRootState } from "../store";
import { IBlog } from "../../types";
import { selectSelectedTags } from "./tagsSelector";
import { selectName } from "./userInfoSelector";
export const { selectAll: selectAllBlogs } = blogsAdpater.getSelectors((state: IRootState) => state.blogsState);
export const selectBlogById = createSelector(
    [selectAllBlogs, (_state, id: number) => id],
    (blogs, id) => blogs.find(blog => blog.id === id)
)
export const selectBlogStatus = (state: IRootState) => state.blogsState.status;
export const selectPrevAndNextBlogById = createSelector(
    [selectAllBlogs, (_state, id: number) => id],
    (blogs, id) => selectBlogsOnLeftAndRightById(blogs)(id)
)
export const selectAllTags = createSelector(
    [selectAllBlogs],
    (blogs) => {
        const tags: string[] = [];
        blogs.forEach(blog => blog.tags.forEach(tag => {
            if (!tags.includes(tag)) tags.push(tag);
        }))
        return tags;
    }
)
export const selectFilterTagsBlogs = createSelector(
    [selectSelectedTags, selectName, selectAllBlogs],
    (tags, name, blogs) => {
        if (!name) return [];
        if (tags.length === 0) return blogs;
        return blogs.filter(blog => blog.tags.some(tag => tags.includes(tag)));
    }
)
export const selectFilterSearchTerm = createSelector(
    [selectAllBlogs, (_state, searchTerm: string) => searchTerm],
    (blogs, searchTerm) => blogs.filter(blog => blog.title.toUpperCase().includes(searchTerm.toUpperCase()))
)
export const selectTitles = createSelector(
    [selectAllBlogs],
    (blogs) => blogs.map(blog => blog.title)
)
export const selectBlogsByTag = createSelector(
    [selectAllBlogs, (_state, tag) => tag],
    (blogs, tag) => blogs.filter(blog => blog.tags.includes(tag))
)

const selectBlogsOnLeftAndRightById = (blogs: IBlog[]) => (id: number): [number | null, number | null] => {
    let index = blogs.findIndex(blog => blog.id === id);
    return [blogs[index - 1] ? blogs[index - 1].id : null, blogs[index + 1] ? blogs[index + 1].id : null];
}