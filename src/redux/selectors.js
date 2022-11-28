export const selectName = state => state.name;
export const selectNav = state => state.nav;
export const selectAllBlogs = state => {
    return state.blogs;
}
export const selectFilterBlogs = state => {
    const tag = state.tag;
    const allBlogs = state.blogs;
    if (!tag) return allBlogs;
    return allBlogs.filter(blog => blog.tags.includes(tag));
}
export const selectBlogByTitle = (state, title) => {
    return state.blogs.filter(blog =>
        blog.title === title
    );
}
export const selectTags = state => {
    const tags = [];
    state.blogs.forEach(blog =>
        blog.tags.forEach(tag => {
            if (!tags.includes(tag)) tags.push(tag);
        })
    );
    return tags;
}
export const selectTitles = state => {
    return state.blogs.map(blog =>
        blog.title
    );
}
export const selectTitlesByTag = (state, tag) => {
    const titles = [];
    state.blogs.forEach(blog => {
        if (blog.tags.includes(tag)) titles.push(blog.title);
    })
    return titles;
}