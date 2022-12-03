export const selectAllBlogs = state => {
    return state.blogsState.blogs;
}
export const selectBlogByTitle = (state, title) => {
    return state.blogsState.blogs.filter(blog =>
        blog.title === title
    );
}
export const selectFilterBlogs = state => {
    const tags = state.selectedTags;
    const name = state.userInfo.info.name;
    const allBlogs = state.blogsState.blogs;
    if(!name) return [];
    if (tags.length === 0) return allBlogs;
    return allBlogs.filter(blog => blog.tags.some(tag => tags.includes(tag)));
}